import React from 'react'
import './../css/bootstrap.css'
import './../css/home.css'
import './../css/signupDealer.css'
import './../css/login.css'
import './../css/signupFarmer.css'
import FarmerPic from './../img/farmer_or.png'
import Vegetables from './../img/vegetables.png'
import Fruits from './../img/fruits.png'
import Dairy from './../img/dairy.png'
import Cereals from './../img/cereals.png'
import Sec from './../img/sec.png'
// import { Login } from './login'
// import { DealerRegister } from './dealerRegister'
// import { FarmerRegister } from './farmerRegister'
import { useState } from 'react'

export const Home = () => {

    const [modalChoose, setModalChoose] = useState(false);
    const toggleModalChoose = () => {
        setModalChoose(!modalChoose)
    }

    const [modalLogin, setModalLogin] = useState(false);
    const toggleModalLogin = () => {
        setModalLogin(!modalLogin)
    }

    const [modalRegisterFarmer, setModalFarmer] = useState(false);
    const toggleModalRegisterFarmer = () => {
        setModalFarmer(!modalRegisterFarmer)
    }

    const [modalRegisterDealer, setModalDealer] = useState(false);
    const toggleModalRegisterDealer = () => {
        setModalDealer(!modalRegisterDealer)
    }

    return (
        <div>
            {/* {modalLogin && (
                <Login/>
            )}
            {modalRegisterFarmer && (
                <FarmerRegister />
            )} 
            <DealerRegister/> */}

            {/* choix */}

            {modalChoose && (
                <div id="choix">
                    <div className="close-btn" onClick={toggleModalChoose}>&times;</div>
                    <h5 className='text-light text-center pb-3'>Who are you?</h5>
                    <div className='d-flex justify-content-center mt-3'>
                        <button type="button" className='btn text-light w-100' id='farmer' onClick={toggleModalRegisterFarmer}>Farmer</button>
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <button type="button" className='btn text-light w-100' id='dealer' onClick={toggleModalRegisterDealer}>Dealer</button>
                    </div>
                </div>
            )}

            
            

            {/* Login */}
            {modalLogin && (
                <form action="">
                    <div id="formLogin" className='text-light'>
                        <div className="close-btn" onClick={toggleModalLogin}>&times;</div>
                        
                        <div className='mt-3 mb-3 rounded '>
                            <input type="text" name="" id="" placeholder='Email' className='pl-3 text-light'/>
                        </div>
            
                        <div className='mt-3 mb-3'>
                            <input type="password" name="" id="" placeholder='Password' className='pl-3 text-light'/>
                        </div>
            
                        <div className='d-flex justify-content-center mt-3'>
                            <button type="submit" className='btn text-light w-100'>Login</button>
                        </div>
            
                        <div className="mt-3">
                            {/* <div>
                                <label className='d-block'>
                                    <input type="checkbox" name="" id=""/>
                                    Remember me
                                </label>
                               
                            </div> */}
            
                            <div>
                                <p className='text-right'>Forgot password?</p>
                            </div>
                            
                        </div>
                    </div>
                </form>
            )}
            
            
            {/* FarmerRegister */}

            {modalRegisterFarmer && (
                <form>
                    <div id="formRegister" className='text-light'>
                        <div className="close-btn" onClick={toggleModalRegisterFarmer}>&times;</div>
                        <h5 className='text-light text-center pb-3'>Farmer Registration Form</h5>
                        <div className='row d-flex justify-content-center align-items-end  pt-2 pb-2'>
                            <div className='col-md-6 '>
                                <p>Farmer Name</p>
                                <input type="text" name="" id="" className='text-light'/>
                            </div>
                            <div className='col-md-6 '>
                                {/* <div>
                                    <input type="radio" name="" id="Male" />
                                    <input type="radio" name="" id="" />Female
                                </div> */}
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center align-items-end  pt-2 pb-2'>
                            <div className='col-md-6 '>
                                <p>Farmer Location</p>
                                <div className='ml-5'>
                                    <p>Address</p>
                                    <input type="text" name="" id="" className='text-light'/>
                                </div>
                                <div className='ml-5'>
                                    <p>Province</p>
                                    <input type="text" name="" id="" className='text-light'/>
                                </div>
                                <div className='ml-5'>
                                    <p>Region</p>
                                    <input type="text" name="" id="" className='text-light'/>
                                </div>
                                <div className='ml-5'>
                                    <p>Town</p>
                                    <input type="text" name="" id="" className='text-light'/>
                                </div>
                            </div>
                            <div className='col-md-6 '>
                                {/* <div className='ml-5'>
                                    <p>Farmer products</p>
                                    <input type="checkbox" name="" id="" />
                                    <input type="checkbox" name="" id="" />
                                    <input type="checkbox" name="" id="" />
                                </div> */}
                                <div className='ml-5'>
                                    <p>Cultivated area</p>
                                    <input type="text" name="" id="" className='text-light'/>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center align-items-end  pt-2 pb-2'>
                            <div className='col-md-6 '>
                                <p>Email</p>
                                <input type="text" name="" id="" className='text-light'/>
                            </div>
                            <div className='col-md-6 '>
                                <p>Phone number</p>
                                <input type="text" name="" id="" className='text-light'/>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center align-items-end  pt-2 pb-2'>
                            <div className='col-md-6 '>
                                <p>Username</p>
                                <input type="text" name="" id="" className='text-light'/>
                            </div>
                            <div className='col-md-6 '>
                                <p>Password</p>
                                <input type="password" name="" id="" className='text-light'/>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <button type="submit" className='btn text-light'>Sign up</button>
                        </div>
                    </div>
                </form>
            )} 
            

            {/* DealerRegister  */}
            {modalRegisterDealer && (
                <form>
                    <div id="formRegisterDealer" className='text-light'>
                        <div className="close-btn" onClick={toggleModalRegisterDealer}>&times;</div>
                        <h5 className='text-light text-center pb-3'>Dealer Registration Form</h5>
                        <div className='row d-flex justify-content-center align-items-end  pt-2 pb-2'>
                            <div className='col-md-6 '>
                                <p>Dealer Name</p>
                                <input type="text" name="" id="" className='text-light'/>
                            </div>
                            <div className='col-md-6 '>
                                {/* <div>
                                    <input type="radio" name="" id="" />
                                    <input type="radio" name="" id="" />
                                </div> */}
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center align-items-end  pt-2 pb-2'>
                            <div className='col-md-6 '>
                                <p>Company</p>
                                <div className='ml-5'>
                                    <p>Name</p>
                                    <input type="text" name="" id="" className='text-light'/>
                                </div>
                                <div className='ml-5'>
                                    <p>Address</p>
                                    <input type="text" name="" id="" className='text-light'/>
                                </div>
                            </div>
                            <div className='col-md-6 '>
                                
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center align-items-end  pt-2 pb-2'>
                            <div className='col-md-6 '>
                                <p>Email</p>
                                <input type="text" name="" id="" className='text-light'/>
                            </div>
                            <div className='col-md-6 '>
                                <p>Phone number</p>
                                <input type="text" name="" id="" className='text-light'/>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center align-items-end  pt-2 pb-2'>
                            <div className='col-md-6 '>
                                <p>Username</p>
                                <input type="text" name="" id="" className='text-light'/>
                            </div>
                            <div className='col-md-6 '>
                                <p>Password</p>
                                <input type="password" name="" id="" className='text-light'/>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <button type="submit" className='btn text-light'>Sign up</button>
                        </div>
                    </div>
                </form>
            )}
            

            <div id='home'> 
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className='text-center text-light bg p-5'>
                            <h1 className='font-weight-bold'>Welcome to our website!</h1>
                            <p><span>BIO</span> is the website where you’ll deal the crops...<br/> 
                            It’s about the deal between the <span>Malagasy farmers </span> 
                            and the <span>Malagasy food retailer</span>.</p>
                            <div className='d-flex justify-content-around'>
                                <button className="btn text-light" id='login' onClick={toggleModalLogin}>Login</button>
                                <button id='signup' onClick={toggleModalChoose}>Sign up</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={FarmerPic} alt="" id="Farmerpic"/>
                    </div>
                </div>
                <div className="mt-4 d-flex justify-content-around product w-100 row">
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <div className='vert'>
                                <h5 className='text-light text-center'>Fresh vegetables</h5>
                                <img src={Vegetables} alt="" id='vegetables'/>   
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <div className='vertClair'>
                                <h5 className='text-center'>Fresh fruits</h5>
                                <img src={Fruits} alt="" id="fruits" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <div className='vert'>
                                <h5 className='text-light text-center'>Legumes</h5>
                                <img src={Sec} alt="" id="sec" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <div className='vertClair'>
                                <h5 className='text-center'>Cereals</h5>
                                <img src={Cereals} alt="" id="cereal" />
                            </div>
                        </div>                       
                </div>
                
            </div>
        </div>
        
        
    );
}