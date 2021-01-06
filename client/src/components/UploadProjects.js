import React from 'react';
import './Account.css';
import '../App.css';
import AccountSidebar from './AccountSidebar';

function UploadProjects(){

    return(
        <div className="account-container">
            <div className="account">
                <div className="sidebar">
                    <AccountSidebar />
                </div>

                <div className="account-setting">
                    <div className="upload-featured">
                        <h1>Featured Project</h1>
                        <div className="input-area">
                            <label for="featuredlink">Link:</label>
                            <input name="featuredlink" type="text" className="form-control" id="featuredlink"/>
                        </div>
                        
                    </div>
                        
                    <div className="upload-projects">
                        <h1>Upload Projects</h1>
                        <div className="input-area">
                            <label for="projectlink">Link:</label>
                            <input name="projectlink" type="text" className="form-control" id="projectlink"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadProjects