import React, {useState} from 'react'

const Sidebar = () => {
    const [style, setStyle] = useState("navbar-nav  sidebar sidebar-dark accordion");
    const changeStyle = () => {
        if (style == "navbar-nav  sidebar sidebar-dark accordion") {
            setStyle("navbar-nav  sidebar sidebar-dark accordion toggled")
        } else {
            setStyle("navbar-nav  sidebar sidebar-dark accordion")
        }
    };
    const changeStyle1 = () => {
        if (style == "navbar-nav  sidebar sidebar-dark accordion") {
            setStyle("navbar-nav  sidebar sidebar-dark accordion toggled1")
        } else {
            setStyle("navbar-nav  sidebar sidebar-dark accordion")
        }
    }
  return (
    <div>
          <ul className={style} id="accordionSidebar">
                        {/* <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                            <div className="sidebar-brand-icon ">
                                {/* <i className="fas fa-laugh-wink"></i> */}
                                <img style={{ width: '50px', height: '50px', color: 'white' }} src="img/wiseowl.png" alt="" />
                            </div>
                            <div className="sidebar-brand-text">Master Admin </div>
                        </a>
                        {/* 
                        <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />

                        {/* <!-- Nav Item - Dashboard --> */}
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="index.html">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span></a>
                        </li> */}

                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseOne"
                                aria-expanded="true" aria-controls="collapseOne">
                                <i class="fa-solid fa-house"></i>
                                <span>Dashboard</span>
                            </a>
                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Customers</h6>
                                    <a className="collapse-item" href="buttons.html">Visitos/Months</a>
                                    <a className="collapse-item" href="cards.html">Action</a>
                                    <a className="collapse-item" href="cards.html">Reviews</a>
                                </div>
                            </div>
                        </li>


                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider" />
                        {/* 
                                <!-- Heading --> */}
                        <div className="sidebar-heading">
                            Interface
                        </div>

                        {/* <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed"  data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <i class="fa-regular fa-user"></i>
                                <span>Store Admin</span>
                            </a>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Custom Components:</h6>
                                    <a className="collapse-item">signup</a>
                                    <a  className="collapse-item">Cards</a>
                                </div>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <i className="fas fa-fw fa-wrench"></i>
                                <span>Campaigns</span>
                            </a>
                            <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Online Review for Customers</h6>
                                    <a className="collapse-item" href="utilities-color.html">Bring Back Customers</a>
                                    <a className="collapse-item" href="utilities-border.html">Visitors Conversion</a>
                                    <a className="collapse-item" href="utilities-animation.html">Reminder Messages</a>
                                    <a className="collapse-item" href="utilities-other.html">Other</a>
                                </div>
                            </div>
                        </li>
                        {/* 
                                <!-- Divider --> */}
                        <hr classNameName="sidebar-divider" />

                        {/* <!-- Heading --> */}
                        <div className="sidebar-heading">
                            Addons
                        </div>

                        {/* <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-folder"></i>
                                <span>Insights</span>
                            </a>
                            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Login Screens:</h6>
                                    <a className="collapse-item" href="login.html">Login</a>
                                    <a className="collapse-item" href="register.html">Register</a>
                                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                                    <div className="collapse-divider"></div>
                                    <h6 className="collapse-header">Other Pages:</h6>
                                    <a className="collapse-item" href="404.html">404 Page</a>
                                    <a className="collapse-item" href="blank.html">Blank Page</a>
                                </div>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Charts --> */}
                        <li class="nav-item">
                            <a class="nav-link" href="charts.html">
                                <i class="fas fa-fw fa-chart-area"></i>
                                <span>Charts</span></a>
                        </li>

                        {/* <!-- Nav Item - Tables --> */}
                        <li className="nav-item">
                            <a className="nav-link" href="tables.html">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Leaderboard</span></a>
                        </li>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider d-none d-md-block" />

                        {/* <!-- Sidebar Toggler (Sidebar) --> */}
                        <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div>

                        {/* <!-- Sidebar Message --> */}
                        {/* <div className="sidebar-card d-none d-lg-flex">
                            <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
                            <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                            <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
                        </div> */}

                    </ul>
    </div>
  )
}

export default Sidebar