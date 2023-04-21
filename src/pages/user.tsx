import React from 'react'
import './../css/bootstrap.css'
import './../css/user.css'
import Adam from './../img/Adam.png'
import Farmeruser from './../img/FarmerUser.png'

export const User = () => {
    return (
        <section className="row">
            <div className="col-md-3">
                <div className='card pt-4 pb-3'> 
                    <div className="image d-flex justify-content-center">
                        <img  src={Adam} alt="Card image"/>
                    </div>
                    <div className="card-body">
                        <p className='text-center font-weight-bold'>Rakoto</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center text-light">
                        <h6 className='pl-5 pr-5 pt-2 pb-2 rounded text-light' id='rate'>Contact</h6>
                    </div>
                </div>

                <div>
                    <img src={Farmeruser} alt="" id='FarmerUser'/>
                </div>
            </div>
            <div className="col-md-9">
                <div className='border rounded pl-3 pr-3 pt-2'>
                    <div>
                        <h5 className='userDetails pb-2'>User bio :</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Sed consectetur vitae itaque delectus, corrupti dolorem eos vel qui possimus voluptates illo deser
                            unt distinctio illum temporibus quia provident! Laboriosam, neque ex!
                        </p>
                    </div>

                    <div>
                        <h5 className='userDetails pb-2'>User info :</h5>
                        <div className="row pt-2">
                            <div className="col-md-4">
                                <p className='font-weight-bold'>First Name</p>
                            </div>
                            <div className="col-md-8">
                                <p>Razanamahery</p>
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-4">
                                <p className='font-weight-bold'>Last Name</p>
                            </div>
                            <div className="col-md-8">
                                <p>Toto</p>
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-4">
                                <p className='font-weight-bold'>Address</p>
                            </div>
                            <div className="col-md-8">
                                <p>Lazaina</p>
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-4">
                                <p className='font-weight-bold'>Phone number</p>
                            </div>
                            <div className="col-md-8">
                                <p>032 05 645 41</p>
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-4">
                                <p className='font-weight-bold'>Email</p>
                            </div>
                            <div className="col-md-8">
                                <p>Toto@gmail.com</p>
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-4">
                                <p className='font-weight-bold'>Products</p>
                            </div>
                            <div className="col-md-8">
                                <p>Apple - Tomato - Beans - Rice</p>
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-4">
                                <p className='font-weight-bold'>Terre</p>
                            </div>
                            <div className="col-md-8">
                                <p>10 ha</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}