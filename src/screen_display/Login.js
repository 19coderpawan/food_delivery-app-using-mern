
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox,
    MDBTextArea
}from 'mdb-react-ui-kit';


const Login = () => {
  // now we are going to use the state hooks.
  const[credentials,setcredentials]=useState({email:"",password:""});
  // with the help of useNavigate you can navigate between pages without using Link.
  let navigate=useNavigate();

  const handleSubmit= async(event)=>{
   /*  in this method we are going to use the FetchApi() mthod to hit the backend endpoint.*/
   event.preventDefault();
   const response= await fetch("http://localhost:9001/api/userlogin",{
       "method":'POST',
       headers:{
           'Content-Type':'application/json'
       },
       /*once you have setuped you state hooks now its time to send the data in the body form  where the backend can
        store the requested data in the database*/
       body:JSON.stringify(
           {
               email:credentials.email,
               password:credentials.password
           }
       )});
       const json=await response.json();
       console.log(json);
       if(!json.success){
           alert("enter valid credentials");
       }
       else{
          
           setTimeout(()=>{
               alert("Thank you login");
               setcredentials({email:"",password:""});
            //    so before navigating to the home page i am going to save the jwt in the localstorage.
                localStorage.setItem("authtoke",json.authtoken);
                console.log(localStorage.getItem("authtoke"));
               navigate('/');
           })
           
           
       }
   }
  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value});
  }
  return (
    <>
     <Navbar></Navbar>   
            <MDBContainer fluid style={{ fontWeight: 'bold' }}>
                <form onSubmit={handleSubmit}>
                    <MDBCard className='m-5' style={{ borderRadius: '55px' }}>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol md='10' lg='6' className='  d-flex flex-column align-items-center'>

                                    <p classNAme="text-center h1  mb-5 mx-1 mx-md-4 mt-4" style={{ fontWeight: 'bolder', fontSize: '30px', color: 'red' }}>LogIn</p>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="envelope me-3" size='lg' />
                                        <MDBInput label='Your Email' id='form2' type='email' 
                                        name='email' value={credentials.email}  onChange={onChange}/>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg' />
                                        <MDBInput label='Password' id='form3' type='password' 
                                        name='password' value={credentials.password} onChange={onChange}/>
                                    </div>

                                   
                                   
                                    <div className='mb-4'>
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                                    </div>

                                    <button className=' register-btn' type='submit' size='lg'>login</button>

                                </MDBCol>

                                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                                </MDBCol>

                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </form>
            </MDBContainer>
      <Footer></Footer>
    </>
  )
}

export default Login
