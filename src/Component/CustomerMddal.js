import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './CustomerModal.css';

const CustomerMddal = (props) => {
    console.log('data', props.data);
    return (
        <div className='customer-modal-parent'>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Customer Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Series</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">S Person Name</th>
                            </tr>
                        </thead>
                        <tbody>

                          
                                {props?.data?.map((val) => (
                                    <tr >
                                        <td>{val?.id}</td>
                                        <td>{val?.name}</td>
                                        <td>{val?.email}</td>
                                        <td>{val?.phone_number}</td>
                                        <td>{val?.salesperson_name}</td>
                                    </tr>
                                ))}
                            

                        </tbody>
                    </table>



                </Modal.Body>

            </Modal>
        </div>
    )
}

export default CustomerMddal