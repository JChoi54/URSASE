import React, {useEffect, useState} from 'react';
import './Profile.css';
import '../App.css';
import ProfileInfo from './ProfileInfo';
import ProfileResume from './ProfileResume';
import ProfileProjects from './ProfileProjects';
import {Link, useLocation} from 'react-router-dom';
import queryString from 'query-string';

function Profile() {
    const [info, setInfo] = useState(true);
    const [resume, setResume] = useState(false);
    const [projects, setProjects] = useState(false);

    const handleInfo = () => {
        setInfo(true);
        setResume(false);
        setProjects(false);
    }

    const handleResume = () => {
        setInfo(false);
        setResume(true);
        setProjects(false);
    }

    const handleProjects = () => {
        setInfo(false);
        setResume(false);
        setProjects(true);
    }

    const location = useLocation()

    const [state, setState] = useState({
        loading: true,
        coverImage: "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
        user: [],
        isMe: false
    });

    useEffect(() => {
        let user = []
        let query = queryString.parse(location.search);

        if (query.id) {
            fetch("/api/profile?id=" + query.id).then(async res => {
                let json = await res.json()
                user = json.user

                setState(state => ({
                    ...state,
                    loading: false,
                    coverImage: user.coverImage === null ? state.coverImage : user.coverImage,
                    user: user,
                    isMe: json.isMe
                }))
            })
        } else {
            fetch("/api/profile").then(async res => {
                let json = await res.json()
                user = json.user

                setState(state => ({
                    ...state,
                    loading: false,
                    coverImage: user.coverImage === null ? state.coverImage : user.coverImage,
                    user: user,
                    isMe: json.isMe
                }))
            })
        }
    }, [location])

    return state.loading ? null : (
        <div className="profile-container">
            <div className="profile-cover" style={{backgroundImage: "url(" + (state.coverImage) + ")"}}>
                {state.isMe ? <div className="edit-profile-button">
                    <Link to="/editprofile">
                        <i className="fas fa-cog"/>
                        Settings
                    </Link>
                </div> : null}
            </div>

            <div className="profile-pic">
                <div className="profile-pic-top">
                    <div className="profile-pic-img">
                        <img src={state.user.profilePicture === null ? "images/default.jpg" : state.user.profilePicture} alt=""/>
                    </div>
                    <div>
                        <h1 className="fullname">{state.user.firstName} {state.user.lastName}</h1>
                        <h2 className="grad-year">Undergraduate Student • {state.user.graduationYear}</h2>
                    </div>
                </div>
                <div className="profile-pic-middle"/>
                <div className="profile-pic-bottom">
                    <ul>
                        <li className={info ? 'user-info active' : 'user-info'} onClick={handleInfo}>Personal Info</li>
                        <li className={resume ? 'user-resume active' : 'user-resume'} onClick={handleResume}>Resume</li>
                        <li className={projects ? 'user-projects active' : 'user-projects'}
                            onClick={handleProjects}>Projects
                        </li>
                    </ul>
                </div>
            </div>
            <div className="profile-content">
                <ProfileInfo info={info} biography={state.user.biography} linkedIn={state.user.linkedInURL}
                             facebook={state.user.facebookURL} instagram={state.user.instagramURL}
                             link={state.user.websiteURL} isMe={state.isMe}/>
                <ProfileResume resume={resume} linkedIn={state.user.linkedInURL} facebook={state.user.facebookURL}
                               instagram={state.user.instagramURL} link={state.user.websiteURL} isMe={state.isMe}/>
                <ProfileProjects projects={projects} linkedIn={state.user.linkedInURL} facebook={state.user.facebookURL}
                                 instagram={state.user.instagramURL} link={state.user.websiteURL} isMe={state.isMe}/>
            </div>
        </div>
    )
}

export default Profile