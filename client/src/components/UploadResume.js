import React from 'react';
import './Account.css';
import '../App.css';
import AccountSidebar from './AccountSidebar';

function UploadResume(){


    const addResume = () => document.getElementById("resume-file").click();

    const resumeText = () => {
        if (document.getElementById("resume-file").value) {
            // eslint-disable-next-line
            document.getElementById("custom-resume-text").innerHTML = document.getElementById("resume-file").value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            document.getElementById("custom-resume-text").innerHTML = "No file chosen."
        }
    }

    return(
        <div className="account-container">
            <div className="account">
                <div className="sidebar">
                    <AccountSidebar />
                </div>

                <div className="account-setting">
                    <div className="upload-resume">
                        <h1>Upload Your Resume</h1>
                        <input type="file" id="resume-file" onChange={resumeText} hidden="hidden"/>
                        <button type="button" className="upload-button" onClick={addResume}>CHOOSE A FILE</button>
                        <span id="custom-resume-text">No file chosen.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadResume