import React from 'react';
import '../../App.css';
import Profile from '../Profile';
import Footer from '../Footer';

function ProfilePage(){
    return(
        <div>
            <Profile />
            <Footer toparrow="hide" />
        </div>
    )
}

export default ProfilePage