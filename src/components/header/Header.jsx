import "./header.css"
import logo from "../../assets/images/flame.png"
import { Link, useParams, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons' 


function NavBar() {
    const logOutIcon = <FontAwesomeIcon icon={faArrowRightFromBracket} />
    const logInIcon = <FontAwesomeIcon icon={faArrowRightToBracket} />
    const params = useParams()
    const history = useLocation()
    const pathname = history.pathname
    console.log(pathname)
    const userEmail = sessionStorage.getItem('email')

    function logOut() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('UserName');
        sessionStorage.removeItem('email');
        window.location = "/";
    }
    return (
        <div>
            {pathname === "/signin" || pathname === "/newsauce" || pathname === "/signup"? <></>
            : <div className="logInLogOutButtons">
                {!sessionStorage.getItem('token')?
                <Link to={"/signin"}>
                    <div className="logout">
                        <button>Log in <span>{logInIcon}</span></button>
                    </div>
                </Link>
                : <div className="logout">
                    <button onClick={logOut}>Log&nbsp;out <span>{logOutIcon}</span></button>
                </div>}
            </div>}
            {sessionStorage.getItem('token')? <div className="userNameDisplay"> <p>Logged in: {userEmail}</p> </div> :<></>}
            <div className="header">
                <div className="logo"> <img src={logo} height="100"  alt="A flame, the logo of Piiquante" /></div>
                <Link to="/" className="title">
                    <h1>HOT TAKES</h1> 
                    <p>THE WEB'S BEST HOT SAUCE REVIEWS</p>
                </Link>
                <div className="logo"> <img src={logo} height="100" alt="A flame, the logo of Piiquante" /></div>
            </div>
        </div>

    )
}
export default NavBar