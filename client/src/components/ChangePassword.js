import React from 'react';
import './Account.css';
import '../App.css';
import AccountSidebar from './AccountSidebar';

function ChangePassword(){
    return(
        <div className="account-container">
            <div className="account">
                <div className="sidebar">
                    <AccountSidebar />
                </div>

                <div className="account-setting">
                    <div className="change-password">
                        <form id="contact-form" method="post" action="#">
                            <h1>Change Password</h1>
                            <div className="input-area">
                                <label for="oldpassword">Old Password</label>
                                <input name="oldpassword" type="password" className="form-control" id="oldpassword" required />
                            </div>

                            <div className="input-area">
                                <label for="newpassword">New Password</label>
                                <input name="newpassword" type="password" className="form-control" id="newpassword" required />
                            </div>

                            <div className="input-area input-message">
                                <label for="confirmpassword">Confirm Password</label>
                                <input name="confirmpassword" type="password" className="form-control" id="confirmpassword"  required></input>
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

export default ChangePassword