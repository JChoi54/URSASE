import React from 'react';
import './Contact.css';
import '../App.css';
import WrappedMap from './Map';

function Contact(){
    return(
        <div className="contact-container">

            <div className="contact-form">
                <h1> Contact Us </h1>
                <form id="contact-form" method="post" action="contactform.php">
                    <div class="input-area">
                        <label for="name"></label>
                        <input name="name" type="text" class="form-control" id="name" placeholder="Name" required />
                    </div>

                    <div class="input-area">
                        <label for="email"></label>
                        <input name="email" type="email" class="form-control" id="email" placeholder="Email" required />
                    </div>

                    <div class="input-area input-message">
                        <label for="message"></label>
                        <textarea name="message" class="form-control" id="message" placeholder="Your Message" required></textarea>
                    </div>

                    <div class="send">
                        <input type="submit" name="submit" class="submit" value="Submit" />
                    </div>

                </form>
            </div>
            
            <div className="contact-map">
                <WrappedMap 
                    googleMapURL= {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDOdf5Cl8TLDR8iLxF9BNIBAvmVI7ceqXI`}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </div>
        </div>
    )
}

export default Contact