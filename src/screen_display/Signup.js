import React, { useState } from 'react'
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
}
    from 'mdb-react-ui-kit';
import Navbar from '../components/Navbar';

const Signup = () => {
    // now we are going to use the state hooks.
    const[credentials,setcredentials]=useState({name:"",email:"",password:"",location:""});

   const handleSubmit= async(event)=>{
    /*  in this method we are going to use the FetchApi() mthod to hit the backend endpoint.*/
    event.preventDefault();
    const response= await fetch("http://localhost:9001/api/createuser",{
        "method":'POST',
        headers:{
            'Content-Type':'application/json'
        },
        /*once you have setuped you state hooks now its time to send the data in the body form  where the backend can
         store the requested data in the database*/
        body:JSON.stringify(
            {
                name:credentials.name,
                email:credentials.email,
                password:credentials.password,
                location:credentials.location
            }
        )});
        const json=await response.json();
        console.log(json);
        if(!json.success){
            alert("enter valid credentials");
        }
        else{
           
            setTimeout(()=>{
                alert("Thank you ! for sign up");
                setcredentials({name:"",password:"",location:"",email:""});
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

                                    <p classNAme="text-center h1  mb-5 mx-1 mx-md-4 mt-4" style={{ fontWeight: 'bolder', fontSize: '30px', color: 'red' }}>SignUp</p>

                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg' />
                                        <MDBInput label='Your Name' id='form1' type='text' className='w-100' 
                                        name='name' value={credentials.name} onChange={onChange} />
                                    </div>

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

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="key me-3" size='lg' />
                                        <MDBInput label='Repeat your password' id='form4' type='password' />
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        {/* <MDBIcon fas icon="key me-3" size='lg' /> */}
                                        <MDBTextArea  placeholder='enter your Address......' id='form4' 
                                         style={{width:'249px',fontWeight:'bold',marginLeft:'34px'}} type='Address' 
                                         name='location' value={credentials.location} onChange={onChange}/>
                                    </div>
                                    <div className='mb-4'>
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                                    </div>

                                    <button className=' register-btn' type='submit' size='lg'>Register</button>

                                </MDBCol>

                                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                                </MDBCol>

                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </form>
            </MDBContainer>
        </>
    )
}

export default Signup
