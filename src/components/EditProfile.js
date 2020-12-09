import React from 'react';
import './Account.css';
import '../App.css';
import AccountSidebar from './AccountSidebar';

function EditProfile(){

    const addPropic = () => document.getElementById("profile-pic").click();
    const addCoverpic= () => document.getElementById("cover-pic").click();

    const propicText = () => {
        if (document.getElementById("profile-pic").value) {
            // eslint-disable-next-line
            document.getElementById("custom-propic-text").innerHTML = document.getElementById("profile-pic").value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            document.getElementById("custom-propic-text").innerHTML = "No file chosen."
        }
    }

    const coverpicText = () => {
        if (document.getElementById("cover-pic").value) {
            // eslint-disable-next-line
            document.getElementById("custom-coverpic-text").innerHTML = document.getElementById("cover-pic").value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            document.getElementById("custom-coverpic-text").innerHTML = "No file chosen."
        }
    }

    return(
        <div className="account-container">
            <div className="account">
                <div className="sidebar">
                    <AccountSidebar />
                </div>

                <div className="account-setting">
                    <div className="edit-profile">
                    <form id="contact-form" method="post" action="#">
                            <h1>Edit Profile</h1>
                            <div className="input-area">
                                <label for="fullname">Full Name</label>
                                <input name="fullname" type="text" className="form-control" id="fullname" required />
                            </div>

                            <div className="upload-propic">
                                <label for="profile-pic">Profile Photo</label>
                                <div>
                                    <input type="file" id="profile-pic" onChange={propicText} hidden="hidden"/>
                                    <button type="button" className="upload-button" onClick={addPropic}>UPLOAD PHOTO</button>
                                    <span id="custom-propic-text">No file chosen.</span>
                                </div>
                            </div>

                            <div className="upload-coverpic">
                                <label for="cover-pic">Cover Photo</label>
                                <div>
                                    <input type="file" id="cover-pic" onChange={coverpicText} hidden="hidden"/>
                                    <button type="button" className="upload-button" onClick={addCoverpic}>UPLOAD PHOTO</button>
                                    <span id="custom-coverpic-text">No file chosen.</span>
                                </div>
                            </div>

                            <div className="input-area">
                                <label for="user-email">Email</label>
                                <input name="user-email" type="email" className="form-control" id="user-email" required />
                            </div>

                            <div className="input-area">
                                <label for="graduation-year">Graduation Year</label>
                                <input name="graduation-year" type="text" className="form-control" id="graduation-year" required />
                            </div>

                            <div className="input-area">
                                <label for="major">Major(s)</label>
                                <input name="major" type="text" className="form-control" id="major" required />
                            </div>

                            <div className="input-area">
                                <label for="minor1">Minor(s)</label>
                                <input name="minor" type="text" className="form-control" id="minor" />
                            </div>

                            <div className="input-area">
                                <label for="mainstudy">Main Study</label>
                                <input name="mainstudy" type="text" className="form-control" id="mainstudy" required/>
                            </div>

                            <div className="input-area input-message">
                                <label for="bio">Biography</label>
                                <textarea name="bio" className="form-control" id="bio" required></textarea>
                            </div>

                            <div>
                                <input type="submit" name="submit" className="account-submit" value="Save" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile