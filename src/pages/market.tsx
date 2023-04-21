<<<<<<< HEAD
<<<<<<< HEAD
import './../css/bootstrap.css'
import './../css/market.css'
import Apple from './../img/Apple.png'
import Mango from './../img/mango.png'
import Carrot from './../img/carrot.png'
import Greenbeans from './../img/greenbeans.png'
import Adam from './../img/Adam.png'
import Madagascar from './../img/Mada.png'
import React from 'react'
import Location from './../img/location.png'

export const Market = () => {
    return (
        <section className='row' id="Market">
            <div className='col-md-3'>
                <div id="carteMada">
                    <img src={Madagascar} alt="" id="Mada"/>
                </div>

                <div id="region" className='pr-5'>
                    <div className='d-flex justify-content align-items-center'>
                        <div>
                        <img src={Location} alt="" className='Location'/>
                        </div>
                        <div>
                            <h6 id='Antsiranana' className='font-weight-bold'>Antsiranana</h6>
                            <p>Diana - Sava</p>
                        </div>                        
                    </div>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                        <img src={Location} alt="" className='Location'/>
                        </div>
                        <div>
                            <h6 id='Mahajanga' className='font-weight-bold'>Mahajanga</h6>
                            <p>Sofia - Betsiboka - Boeny - Melaky</p>
                        </div>                        
                    </div>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                        <img src={Location} alt="" className='Location'/>
                        </div>
                        <div>
                            <h6 id='Toamasina' className='font-weight-bold'>Toamasina</h6>
                            <p>Analanjirofo - Alaotra Mangoro - Antsinanana</p>
                        </div>                        
                    </div>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                        <img src={Location} alt="" className='Location'/>
                        </div>
                        <div>
                            <h6 id='Antananarivo' className='font-weight-bold'>Antananarivo</h6>
                            <p>Itasy - Analamanga - Vakinankaratra - Bongolava</p>
                        </div>                        
                    </div>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                        <img src={Location} alt="" className='Location'/>
                        </div>
                        <div>
                            <h6 id='Fianarantsoa' className='font-weight-bold'>Fianarantsoa</h6>
                            <p>Amoronn'i Mania - Haute Matsiatra - Vatovavy Fitovinany</p>
                        </div>                        
                    </div>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                        <img src={Location} alt="" className='Location'/>
                        </div>
                        <div>
                            <h6 id='Toliara' className='font-weight-bold'>Toliara</h6>
                            <p>Menabe - Androy - Anosy</p>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className="col-md-9">
                <div>
                    <input type="search" name="" id="search" placeholder='Find product...' className='border w-100 pl-3'/>
                </div>

                <div className="d-flex justify-content-around cartes text-center w-100">
                    <div className="card">
                        <div className="image rounded-circle">
                            <img  src={Carrot} alt="Card image"/>
                        </div>
                        <div className="card-body">
                            <p>Carrot</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center boutton">
                            <button type="button" className="btn">See</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image rounded-circle">
                            <img  src={Apple} alt="Card image"/>
                        </div>
                        <div className="card-body">
                            <p>Apple</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center boutton">
                            <button type="button" className="btn">See</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image rounded-circle">
                            <img  src={Mango} alt="Card image"/>
                        </div>
                        <div className="card-body">
                            <p>Mango</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center boutton">
                            <button type="button" className="btn">See</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image rounded-circle">
                            <img  src={Greenbeans} alt="Card image"/>
                        </div>
                        <div className="card-body">
                            <p>Green beans</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center boutton">
                            <button type="button" className="btn">See</button>
                        </div>
                    </div>
                </div>
                
                <div className='border pl-3 pr-3'>
                    
                    <div className="row" id='en-tete'>
                        <div className="col-md-5 pt-2">
                            <h6 className='text-center font-weight-bold'>Name</h6>
                        </div>
                        <div className="col-md-2 pt-2">
                            <h6 className='text-center font-weight-bold'>Product</h6>
                        </div>
                        <div className="col-md-2 pt-2">
                            <h6 className='text-center font-weight-bold'>Region</h6>
                        </div>
                        <div className="col-md-3 pt-2">
                            <h6 className='text-center font-weight-bold'>Cultivated area</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    )
} 

=======
import './../css/bootstrap.css'
import './../css/market.css'
import Apple from './../img/Apple.png'
import Mango from './../img/mango.png'
import Carrot from './../img/carrot.png'
import Greenbeans from './../img/greenbeans.png'
import Adam from './../img/Adam.png'
import Madagascar from './../img/Mada.png'
import React from 'react'
import Location from './../img/location.png'

export const Market = () => {
    return (
        <section className='row' id="Market">
            <div className='col-md-3'>
                <div id="carteMada">
                    <img src={Madagascar} alt="" id="Mada"/>
                </div>

                <div id="region" className='pr-5'>
                    <div className='d-flex justify-content align-items-center'>
                        <div>
                        <img src={Location} alt="" className='Location'/>
                        </div>
                        <div>
                            <h6 id='Antsiranana' className='font-weight-bold'>Antsiranana</h6>
                            <p>Diana - Sava</p>
                        </div>                        
                    </div>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                        <img src={Location} alt="" className='Location'/>
                        </div>
                        <div>
                            <h6 id='Mahajanga' className='font-weight-bold'>Mahajanga</h6>
                            <p>Sofia - Betsiboka - Boeny - Melaky</p>
                        </div>                        
                    </div>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                        <img src={Location} alt="" className='Location'/>
                        </div>
                        <div>
                            <h6 id='Toamasina' className='font-weight-bold'>Toamasina</h6>
                            <p>Analanjirofo - Alaotra Mangoro - Antsinanana</p>
                        </div>                        
                    </div>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                        <img src={Location} alt="" className='Location'/>
                        </div>
                        <div>
                            <h6 id='Antananarivo' className='font-weight-bold'>Antananarivo</h6>
                            <p>Itasy - Analamanga - Vakinankaratra - Bongolava</p>
                        </div>                        
                    </div>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                        <img src={Location} alt="" className='Location'/>
                        </div>
                        <div>
                            <h6 id='Fianarantsoa' className='font-weight-bold'>Fianarantsoa</h6>
                            <p>Amoronn'i Mania - Haute Matsiatra - Vatovavy Fitovinany</p>
                        </div>                        
                    </div>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                        <img src={Location} alt="" className='Location'/>
                        </div>
                        <div>
                            <h6 id='Toliara' className='font-weight-bold'>Toliara</h6>
                            <p>Menabe - Androy - Anosy</p>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className="col-md-9">
                <div>
                    <input type="search" name="" id="search" placeholder='Find product...' className='border w-100 pl-3'/>
                </div>

                <div className="d-flex justify-content-around cartes text-center w-100">
                    <div className="card">
                        <div className="image rounded-circle">
                            <img  src={Carrot} alt="Card image"/>
                        </div>
                        <div className="card-body">
                            <p>Carrot</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center boutton">
                            <button type="button" className="btn">See</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image rounded-circle">
                            <img  src={Apple} alt="Card image"/>
                        </div>
                        <div className="card-body">
                            <p>Apple</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center boutton">
                            <button type="button" className="btn">See</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image rounded-circle">
                            <img  src={Mango} alt="Card image"/>
                        </div>
                        <div className="card-body">
                            <p>Mango</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center boutton">
                            <button type="button" className="btn">See</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image rounded-circle">
                            <img  src={Greenbeans} alt="Card image"/>
                        </div>
                        <div className="card-body">
                            <p>Green beans</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center boutton">
                            <button type="button" className="btn">See</button>
                        </div>
                    </div>
                </div>
                
                <div className='border pl-3 pr-3'>
                    
                    <div className="row" id='en-tete'>
                        <div className="col-md-5 pt-2">
                            <h6 className='text-center font-weight-bold'>Name</h6>
                        </div>
                        <div className="col-md-2 pt-2">
                            <h6 className='text-center font-weight-bold'>Product</h6>
                        </div>
                        <div className="col-md-2 pt-2">
                            <h6 className='text-center font-weight-bold'>Region</h6>
                        </div>
                        <div className="col-md-3 pt-2">
                            <h6 className='text-center font-weight-bold'>Cultivated area</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    )
} 

>>>>>>> d3124d65f8c66ceabfe96f3963571411dc4649a9
=======
import './../css/bootstrap.css'
import './../css/market.css'
import Apple from './../img/Apple.png'
import Mango from './../img/mango.png'
import Carrot from './../img/carrot.png'
import Greenbeans from './../img/greenbeans.png'
import Adam from './../img/Adam.png'
import Madagascar from './../img/Mada.png'
import React from 'react'
import Location from './../img/location.png'

export const Market = () => {
    return (
        <section className='row' id="Market">
            <div className='col-md-3'>
                <div id="carteMada">
                    <img src={Madagascar} alt="" id="Mada"/>
                </div>

                <div id="region" className='pr-5'>
                    <div className='d-flex justify-content align-items-center'>
                        <div>
                        <img src={Location} alt="" className='Location'/>
                        </div>
                        <div>
                            <h6 id='Antsiranana' className='font-weight-bold'>Antsiranana</h6>
                            <p>Diana - Sava</p>
                        </div>                        
                    </div>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                        <img src={Location} alt="" className='Location'/>
                        </div>
                        <div>
                            <h6 id='Mahajanga' className='font-weight-bold'>Mahajanga</h6>
                            <p>Sofia - Betsiboka - Boeny - Melaky</p>
                        </div>                        
                    </div>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                        <img src={Location} alt="" className='Location'/>
                        </div>
                        <div>
                            <h6 id='Toamasina' className='font-weight-bold'>Toamasina</h6>
                            <p>Analanjirofo - Alaotra Mangoro - Antsinanana</p>
                        </div>                        
                    </div>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                        <img src={Location} alt="" className='Location'/>
                        </div>
                        <div>
                            <h6 id='Antananarivo' className='font-weight-bold'>Antananarivo</h6>
                            <p>Itasy - Analamanga - Vakinankaratra - Bongolava</p>
                        </div>                        
                    </div>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                        <img src={Location} alt="" className='Location'/>
                        </div>
                        <div>
                            <h6 id='Fianarantsoa' className='font-weight-bold'>Fianarantsoa</h6>
                            <p>Amoronn'i Mania - Haute Matsiatra - Vatovavy Fitovinany</p>
                        </div>                        
                    </div>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                        <img src={Location} alt="" className='Location'/>
                        </div>
                        <div>
                            <h6 id='Toliara' className='font-weight-bold'>Toliara</h6>
                            <p>Menabe - Androy - Anosy</p>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className="col-md-9">
                <div>
                    <input type="search" name="" id="search" placeholder='Find product...' className='border w-100 pl-3'/>
                </div>

                <div className="d-flex justify-content-around cartes text-center w-100">
                    <div className="card">
                        <div className="image rounded-circle">
                            <img  src={Carrot} alt="Card image"/>
                        </div>
                        <div className="card-body">
                            <p>Carrot</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center boutton">
                            <button type="button" className="btn">See</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image rounded-circle">
                            <img  src={Apple} alt="Card image"/>
                        </div>
                        <div className="card-body">
                            <p>Apple</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center boutton">
                            <button type="button" className="btn">See</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image rounded-circle">
                            <img  src={Mango} alt="Card image"/>
                        </div>
                        <div className="card-body">
                            <p>Mango</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center boutton">
                            <button type="button" className="btn">See</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image rounded-circle">
                            <img  src={Greenbeans} alt="Card image"/>
                        </div>
                        <div className="card-body">
                            <p>Green beans</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center boutton">
                            <button type="button" className="btn">See</button>
                        </div>
                    </div>
                </div>
                
                <div className='border pl-3 pr-3'>
                    
                    <div className="row" id='en-tete'>
                        <div className="col-md-5 pt-2">
                            <h6 className='text-center font-weight-bold'>Name</h6>
                        </div>
                        <div className="col-md-2 pt-2">
                            <h6 className='text-center font-weight-bold'>Product</h6>
                        </div>
                        <div className="col-md-2 pt-2">
                            <h6 className='text-center font-weight-bold'>Region</h6>
                        </div>
                        <div className="col-md-3 pt-2">
                            <h6 className='text-center font-weight-bold'>Cultivated area</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pt-2 pb-2">
                            
                                <img src={Adam} alt="" className='userPic'/>
                                <p>Rakoto Yves</p>
                            
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Tomato,Peach</p>
                        </div>
                        <div className="col-md-2 pt-2">
                            <p className='text-center'>Analamanga</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-center'>2ha</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    )
} 

>>>>>>> 9c0eb3c84cc1723aeb4b7f574eb7440a412bf58f
// export default Card;