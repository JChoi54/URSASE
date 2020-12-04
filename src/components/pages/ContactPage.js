import React from 'react';
import '../../App.css';
import Contact from '../Contact';
import Footer from '../Footer';

function ContactPage (){
    return(
        <div>
            <Contact />
            <Footer toparrow="hide" />
        </div>
    )
}

export default ContactPage