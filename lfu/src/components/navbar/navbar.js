import './navbar.css';
import { NavLink } from 'react-router-dom'



function Navbar() {

    return (
        <>
            <Navbar1 />
            <Navbar2 />
        </>

    )
}


function Navbar1() {
    return (
        <>
            <nav className="navbar1">

                <div className="navbar1-lang">
                    <i className="fas fa-globe-asia navbar1-lang-icon" ></i>
                    <p className="navbar1-lang-text">English <i className="fas fa-sort-down navbar1-lang-text-icon"></i></p>
                </div>
                <div className="navbar1-list">
                    <ul className="navbar1-list-container">

                        <li className="navbar1-list-container-item"><NavLink className="navbar1-list-container-item" to={'/alumni'}>Alumni</NavLink></li>
                        <li className="navbar1-list-container-item"> Moodle</li>
                        <li className="navbar1-list-container-item"> UMS</li>
                        <li className="navbar1-list-container-item"> Manpoer</li>
                        <li className="navbar1-list-container-item"> Media</li>
                    </ul>
                </div>

                <div className="navbar1-media-link">
                    <ul className="navbar1-media-link-list">
                        <li className="navbar1-media-link-list-item"><i className="fab fa-facebook"></i></li>
                        <li className="navbar1-media-link-list-item"><i className="fab fa-instagram"></i></li>
                        <li className="navbar1-media-link-list-item"><i className="fab fa-snapchat"></i></li>
                        <li className="navbar1-media-link-list-item"><i className="fab fa-youtube"></i></li>
                        <li className="navbar1-media-link-list-item"><i className="fab fa-twitter"></i></li>
                        <li className="navbar1-media-link-list-item"><i className="fab fa-linkedin"></i></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}



function Navbar2() {
    return (
        <>

            <nav className="navbar2">
                <div className="navbar2-logo">
                    <img src="/images/logolfu.png" alt="" className="navbar2-logo-self" />
                </div>

                <div className="navbar2-list">
                    <ul className="navbar2-list-container">
                        <li className="navbar2-list-container-item"><NavLink className="navbar2-list-container-item" to={'/'}>Home</NavLink></li>
                        <li className="navbar2-list-container-item">Academics </li>
                        <li className="navbar2-list-container-item">Admissions  </li>
                        <li className="navbar2-list-container-item">University Life</li>
                        <li className="navbar2-list-container-item">Colleges</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}



export default Navbar;





