import React from 'react';
import '../../App.css';
import Members from '../Members'; 
import Footer from '../Footer';


function MembersPage (){
    return(
        <div>
            <Members />
            <Footer id="#members-top" />
        </div>
    )
}

export default MembersPage