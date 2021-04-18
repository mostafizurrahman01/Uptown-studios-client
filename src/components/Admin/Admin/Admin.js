import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faList, faPlus, faUserPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';


const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://quiet-chamber-19934.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/overview" className="text-white link">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>OverView</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white link">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>

                {isAdmin ? (<div>
                    <li>
                        <Link to="/book" className="text-white link">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Book</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-white link">
                            <FontAwesomeIcon icon={faUsers} /> <span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/service" className="text-white link">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/order" className="text-white link">
                            <FontAwesomeIcon icon={faList} /> <span>Book List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/service" className="text-white link">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addRecentWedding" className="text-white link">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Recent Wedding</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/makeAdmin" className="text-white link">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manage" className="text-white link">
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage infos</span>
                        </Link>
                    </li>

                </div>)
                    : (
                        <div>
                            <li>
                                <Link to="/book" className="text-white link">
                                    <FontAwesomeIcon icon={faCalendar} /> <span>Book</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/books" className="text-white link">
                                    <FontAwesomeIcon icon={faUsers} /> <span>Book By date</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/review" className="text-white link">
                                    <FontAwesomeIcon icon={faUsers} /> <span>Review</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/serviceList" className="text-white link">
                                    <FontAwesomeIcon icon={faFileAlt} /> <span>Service List</span>
                                </Link>
                            </li>
                        </div>
                    )
                }
            </ul>
            <div>
                <Link to="/" className="text-white link" onClick={() => setLoggedInUser({})}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>

            
        </div>
    );
};

export default Admin;