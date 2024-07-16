import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

const LoginSignup = () => {
const [form,setForm]=useState("login")

  return (
    <>
    <div className="container">
<div className="w-100 vh-100 pt-5    ">
    <div className=" rounded-4 bg-light text-center  pt-5 pb-1 ">

        <div className="d-flex w-100 mb-4 justify-content-center align-items-center">
<button onClick={()=>setForm("login")}  style={{width:"200px"}} className={form=="login"?(" bg-primary  btn btn-outline-primary text-dark fs-5 fw-bold rounded-start-5 mx-3 px-4 py-2"):(" btn btn-outline-primary text-dark fs-5 fw-bold rounded-start-5 mx-3 px-4 py-2")}>Log in</button>
<button onClick={()=>setForm("signup")} style={{width:"200px"}}  className={form=="signup"?(" bg-primary  btn btn-outline-primary text-dark fs-5 fw-bold rounded-end-5  mx-3 px-4 py-2"):(" btn btn-outline-primary text-dark fs-5 fw-bold rounded-end-5   mx-3 px-4 py-2")}>Sign Up</button>
        </div>

<div className="w-100 ">
<MDBContainer fluid className="p-3 my-5 h-custom">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
  </MDBCol>

{form=="login"?(<LoginForm/>):(
    <SignupForm/>
)}

</MDBRow>

<div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

  <div className="text-white mb-3 mb-md-0">
    Copyright © 2020. All rights reserved.
  </div>

  <div>

    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
      <MDBIcon fab icon='facebook-f' size="md"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
      <MDBIcon fab icon='twitter' size="md"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
      <MDBIcon fab icon='google' size="md"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
      <MDBIcon fab icon='linkedin-in' size="md"/>
    </MDBBtn>

  </div>

</div>

</MDBContainer>




</div>

    </div>
     </div>

    </div>
    
    
    </>
  )
}

export default LoginSignup