import React ,{useState,useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import MyCart from '../screen_display/MyCart';
import { CartState } from './ContextReducer';
const Navbar = () => {
  const navigation=useNavigate();
 
  let data=CartState();
  const [lengthstate, setLength] = useState(data.length); // Initialize length with initial data
  useEffect(() => {
    setLength(data.length); // Update length whenever context data changes
  }, [data]);
 

  const changeOccur=()=>{
    localStorage.removeItem('authtoke');
    navigation('/login');
  }

const [viewCart,setCartView]=useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-sm ">
        <div className="container-fluid">
          <Link className="navbar-brand "  to="/">
            Happy Food
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active fs-5 " aria-current="page"  to="/">
                  Home
                </Link>
              </li>
              {
                localStorage.getItem('authtoke')
                ?
                <li className="nav-item">
                <Link className="nav-link  fs-5 text-success b-2" aria-current="page"  to="/">
                  myOrders
                </Link>
              </li>
              :""
              }
            </ul>
            {
              !localStorage.getItem('authtoke')
              ?<div className='d-flex p-2'><Link className="btn bg-white text-success mx-1"  to="/login">
              Login
            </Link>
         
            <Link className="btn bg-white text-success  mx-1"  to="/Signup">
              SignUp
            </Link>
            </div>
            :<div className='d-flex ' >
              <Link className="btn bg-white text-success mx-1"  to="/"  onClick={changeOccur}>
            Logout
              </Link>
       
             <Link className="btn bg-white text-success mx-1"  to="/" onClick={()=>setCartView(true)}>
            MyCart {" "}<Badge bg="danger">{lengthstate}</Badge>
             </Link>  
             {viewCart?<Modal onClose={()=>setCartView(false)}><MyCart></MyCart></Modal>:null}
          </div>
            }
          </div>
          
           
                
              
        </div>
      </nav>
    </>
  );
};

export default Navbar;
