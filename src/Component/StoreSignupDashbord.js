import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../Component/StoreSignupDashboard.css';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { useSelector } from 'react-redux';
import CustomerMddal from './CustomerMddal';

const StoreSignupDashbord = () => {
    const tokenselector = useSelector(state => state.token.token)
    const [showModal, setShowModal] = useState(false);
    const[modalData, setModalData]=useState();
    let limit = 3;
    const [itemPagination, setItemPagination] = useState([])
    const [pageCount, setPageCount] = useState();
    const [allData, setAllData] = useState([])
    const [editField, setEditField] = useState(false);
    const [storeData, setStoreData] = useState();
    const [editstoreData, setEditStoreData] = useState();
    const [numberOfPages, setNumberOfPages] = useState(1)
    const [saveEdit, setSaveEdit] = useState({});
    const [editRow, setEditRow] = useState(null); // Track the row being edited

    const getStoreData = useSelector(state => state?.masterLogin?.masterLogin)
    console.log('getstoredata', getStoreData?.tokens?.access);
    const fetchData = ((currentPage) => {
        const accessToken = getStoreData?.tokens?.access
        axios({
            'url': `http://127.0.0.1:8000/master-admin/store-owners?_page=${currentPage}$_limit=${limit}/`,
            data: {
            },
            method: "get",
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((result) => {
            console.log('result', result.data);
            setAllData(result.data)
            setStoreData(result.data.slice(0, 5))
            setNumberOfPages(Math.ceil(result.data.length / 5))
        }).catch((error) => {
            console.log(error);
        })
    })
    useEffect(() => {
        fetchData()
    }, [])

    const handlePageClick = async (data1) => {
        console.log('click');
        console.log('pagecount3', data1.selected);
        const data = allData.slice(data1.selected * 5, (data1.selected + 1) * 5)
        setStoreData(data)
    };
    const handleEditBtn = (rowIndex, value) => {
        console.log('rowindex', rowIndex);
        setEditRow(rowIndex)
        setSaveEdit(value)
    }
    const handleInputField = (e) => {
        setSaveEdit({
            ...saveEdit, [e.target.name]: e.target.value
        })
        console.log('saveEdit', saveEdit);
    }
    const handleSaveBtn = (e, rowIndex) => {
        e.preventDefault();
        const accessToken = getStoreData?.tokens?.access
        axios({
            url: 'http://127.0.0.1:8000/master-admin/store-owners/',
            data: {
                "id": saveEdit?.id,
                "email": saveEdit?.email,
                "password": saveEdit?.password,
                "confirm_password": saveEdit?.confirm_password,
                "store_name": saveEdit?.store_name,
                "address": saveEdit?.address,
                "phone_number": saveEdit?.phone_number
            },
            method: "put",
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((result) => {
            fetchData()
            console.log(result);
            const updatedStoreData = [...storeData];
            updatedStoreData[rowIndex] = saveEdit;
            setStoreData(updatedStoreData);
            setEditField(null)
            setEditRow(null)

        })
    }
    console.log('edit', saveEdit);

    // delete request for store owner
    const handleDeleteBtn = (id) => {
        const accessToken = getStoreData?.tokens?.access;
        axios({
            url: `http://127.0.0.1:8000/master-admin/store-owners/`,
            data: {
                "id": saveEdit.id
            },
            method: 'delete',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then((res) => {
                fetchData(0); // Fetch data for the first page after deletion
                console.log('result', res.data);
            })
            .catch((error) => {
                console.error('Error deleting record:', error);
            });
    };

    const handleAllCustomer = (e, val) => {
        const accessToken = getStoreData?.tokens?.access;

        axios({
            url:'http://127.0.0.1:8000/master-admin/customers-by-store-owner/',
            data:{
                "email":val
            },
            method:'post',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((result)=>{
            setShowModal(true)
            setModalData(result.data)
            console.log('result', result.data);
        })
       
    }

    const handleClose=()=>{
        setShowModal(false)
    }
    return (
        <>
            {showModal && <CustomerMddal data={modalData} show={showModal} handleClose={handleClose}/>}
            <div>
                <Header />
                <div className='main-table-for-store'>
                    <Sidebar />
                    <table className="table m-5 p-4">
                        <thead>
                            <div className='parent-store'>
                                <div className='main-storedashbaord'>
                                    <p style={{ padding: '17px 10px', marginBottom: '0px', color: '#000' }}>
                                        Active Stores</p>
                                </div>
                                <div className='box2'>
                                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                        className="fas fa-download fa-sm text-white-50"></i>Export Report</a>
                                </div>


                            </div>

                            <tr id='tabel-customer-admin'>
                                <th scope="col">Serial No.</th>
                                <th scope="col">Store Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {storeData?.map((val, rowIndex) => (
                                <tr id='data-all-storeparent'>

                                    <th scope="row" >
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                            <p style={{ marginBottom: "0px" }}>{val?.id}</p>
                                        </div>
                                    </th>
                                    <td key={val.id}>
                                        {editRow === rowIndex ? (<input type='text' id='edit_storeInput' name='store_name' value={saveEdit?.store_name} onChange={(e) => handleInputField(e)} />) : val?.store_name}
                                        <img className="" style={{ height: '2rem', width: '2rem' }} data-toggle="modal" data-target="#exampleModal"
                                            src="img/undraw_profile.svg" />&nbsp;
                                    </td>
                                    <td>{editRow === rowIndex ? (<input type='text' id='edit_storeInput' name='email' value={saveEdit?.email} onChange={(e) => handleInputField(e)} />) : <p className='email-storeadmin' onClick={(e) => handleAllCustomer(e, val.email)}>{val?.email}</p>}</td>
                                    <td>{editRow === rowIndex ? (<input type='text' id='edit_storeInput' name='address' value={saveEdit?.address} onChange={(e) => handleInputField(e)} />) : val?.address}</td>
                                    <td>{editRow === rowIndex ? (<input type='text' id='edit_storeInput' name='phone_number' value={saveEdit?.phone_number} onChange={(e) => handleInputField(e)} />) : val?.phone_number}</td>
                                    <td>Completed</td>
                                    <td>{editRow === rowIndex ? (<button className='submit-store' onClick={(e) => handleSaveBtn(e, rowIndex)}><i class="fa-solid fa-check"></i></button>) :
                                        <button className='edit-store' onClick={() => handleEditBtn(rowIndex, val)}><i className="fa-solid fa-pencil" ></i></button>

                                    }
                                        <button className='delete-store' onClick={() => handleDeleteBtn(rowIndex, val)}><i className="fa-solid fa-trash"></i></button>
                                    </td>

                                </tr>
                            ))}



                        </tbody>
                        <ReactPaginate
                            previousLabel={<i className="fas fa-angle-left"></i>}
                            nextLabel={<i className="fas fa-angle-right"></i>}
                            breakLabel={'...'}
                            pageCount={numberOfPages}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination justify-content-center'}
                            pageClassName={'page-item'}
                            pageLinkClassName={'page-link'}
                            previousClassName={'page-item'}
                            previousLinkClassName={'page-link'}
                            nextClassName={'page-item'}
                            nextLinkClassName={'page-link'}
                            breakClassName={'page-item'}
                            breakLinkClassName={'page-link'}
                            activeClassName={'active'}
                        />
                    </table>

                </div>

            </div>
        </>
    )
}

export default StoreSignupDashbord




