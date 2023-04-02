import React from 'react';
import { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';
import "./Login.css"

function Login() {
    const [logOrSign, toggleLogOrSign] = useState(false) //false -> login screen, true -> signin screen
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    function callLogin(){
        window.alert("Login");
    }
    function callSignup(){
        window.alert("Signup")
    }
    return (
        <MDBContainer className="my-5">

            <MDBCard>
                <MDBRow className='g-0'>

                    <MDBCol md='6'>
                        <MDBCardImage src='https://www.straight.com/files/v3/styles/gs_large/public/images/19/11/vancouverbudget2019_191126_2.jpg?itok=H3XUIsLV' className='rounded-start w-100' />
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column'>

                            <div className='d-flex flex-row mt-2'>
                                <span className="h1 fw-bold mb-0">USA Law Enforcement</span>
                            </div>

                            {
                                logOrSign ?
                                    <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                                    :
                                    <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Log into your account</h5>
                            }
                            <MDBInput value={username} onChange={(e)=>setUsername(e.target.value)} wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
                            <MDBInput value={password} onChange={(e)=>setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />
                            {
                                logOrSign ?
                                    <>
                                        <MDBBtn onClick={callSignup} className="mb-4 px-5" color='dark' size='lg'>Signup</MDBBtn>
                                        <p className=" pb-lg-2" style={{ color: '#393f81' }}> <a href="javascript:void(0);" onClick={()=>toggleLogOrSign(!logOrSign)} style={{ color: '#393f81' }}>Login Instead?</a></p></>
                                    :
                                    <>
                                        <MDBBtn onClick={callLogin} className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
                                        <p className=" pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="javascript:void(0);" onClick={()=>toggleLogOrSign(!logOrSign)} style={{ color: '#393f81' }}>Register here</a></p></>

                            }
                            <div className='flex-row justify-content-start' >
                                <p className="small text-muted me-1">© USA Government</p>
                            </div>

                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
}

export default Login;