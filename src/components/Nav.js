import { React } from "react";
import logo from "../assets/logo.svg";

function Nav() {
    return (
        // <div className='container'>
        //     <div className='row'>
        //         <div className='col'>

        //         </div>
        //     </div>
        // </div>

        <nav className='navbar navbar-expand-lg'>
            <div className='container'>
                <a className='navbar-brand'>
                    <img className='logo' src={logo} alt='dwello logo' />
                </a>
                <button
                    class='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div
                    className='collapse navbar-collapse justify-content-end'
                    id='navbarNav'
                >
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link active' aria-current='page'>
                                Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link'>Service</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link'>Agents</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link'>Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
