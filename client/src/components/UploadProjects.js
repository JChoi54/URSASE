import React from 'react';
import './Account.css';
import '../App.css';
import AccountSidebar from './AccountSidebar';

function UploadProjects(){

    const addProject = () => document.getElementById("project-file").click();
    const addFeatured = () => document.getElementById("featured-file").click();

    const projectText = () => {
        if (document.getElementById("project-file").value) {
            // eslint-disable-next-line
            document.getElementById("custom-project-text").innerHTML = document.getElementById("project-file").value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            document.getElementById("custom-project-text").innerHTML = "No file chosen."
        }
    }

    const featuredText = () => {
        if (document.getElementById("featured-file").value) {
            // eslint-disable-next-line
            document.getElementById("custom-featured-text").innerHTML = document.getElementById("featured-file").value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            document.getElementById("custom-featured-text").innerHTML = "No file chosen."
        }
    }

    return(
        <div className="account-container">
            <div className="account">
                <div className="sidebar">
                    <AccountSidebar />
                </div>

                <div className="account-setting">
                    <div className="upload-featured">
                        <h1>Featured Project</h1>
                        <input type="file" id="featured-file" onChange={featuredText} hidden = "hidden"/>
                        <button type="button" className="upload-button" onClick={addFeatured}>CHOOSE A FILE</button>
                        <span id="custom-featured-text">No file chosen.</span>
                    </div>
                        
                    <div className="upload-projects">
                        <h1>Upload Projects</h1>
                        <input type="file" id="project-file" onChange={projectText} hidden = "hidden"/>
                        <button type="button" className="upload-button" onClick={addProject}>CHOOSE A FILE</button>
                        <span id="custom-project-text">No file chosen.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadProjects