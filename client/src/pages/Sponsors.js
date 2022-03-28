import React from 'react'
import image from '../images/milanfinal.png'
function Sponsors() {
   
  return (
    
    <div className="relative container mt-4 d-flex flex-wrap ">
            <div className="profile-card">
                <div className="profile-content">
                    <div className="profile-image">
                      <img src={image} alt="first user"></img> 
                    </div>
                    <div className="cdetail">
                        Title Sponsor
                    </div> 
                </div>
            </div>
            <div className="profile-card">
                <div className="profile-content">
                    <div className="profile-image">
                      <img src={image} alt="first user"></img> 
                    </div>
                    <div className="cdetail">
                        Title Sponsor
                    </div> 
                </div>
            </div>
            <div className="profile-card">
                <div className="profile-content">
                    <div className="profile-image">
                      <img src={image} alt="first user"></img> 
                    </div>
                    <div className="cdetail">
                        Title Sponsor
                    </div> 
                </div>
            </div>
   
    </div>
  )
}

export default Sponsors
