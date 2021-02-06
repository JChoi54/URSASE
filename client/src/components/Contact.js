import React, {useState} from 'react';
import './Contact.css';
import '../App.css';
import Map from './Map';

function Contact() {
    const [state, setState] = useState({
        name: "",
        email: "",
        message: "",
        errorName: false,
        errorEmail: false,
        errorMessage: false,
        response: ""
    });

    const onSubmit = (e) => {
        e.preventDefault()

        fetch('/api/contactus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: state.name,
                email: state.email,
                message: state.message
            })
        }).then(async res => {
            let json = await res.json()

            setState(state => ({
                ...state,
                errorName: json.errorName,
                errorEmail: json.errorEmail,
                errorMessage: json.errorMessage,
                response: json.response
            }))
        })
    }

    const handleInput = (e) => {
        switch (e.target.name) {
            case "name":
                setState(state => ({
                    ...state,
                    name: e.target.value
                }))
                break;
            case "email":
                setState(state => ({
                    ...state,
                    email: e.target.value
                }))
                break;
            case "message":
                setState(state => ({
                    ...state,
                    message: e.target.value
                }))
                break;
            default:
                break;
        }
    }

    return (
        <div className="contact-container">
            <div className="contact-form">
                <h1> Contact Us </h1>
                <form id="contact-form" method="post" action="#" onSubmit={onSubmit}>
                    <div className="input-area">
                        <label htmlFor="name"/>
                        <input name="name" type="text"
                               className={state.errorName ? "form-control is-invalid" : "form-control"} id="name"
                               placeholder="Name"
                               value={state.name}
                               onChange={handleInput}
                               required/>
                    </div>

                    <div className="input-area">
                        <label htmlFor="email"/>
                        <input name="email" type="email"
                               className={state.errorEmail ? "form-control is-invalid" : "form-control"} id="email"
                               placeholder="Email"
                               value={state.email}
                               onChange={handleInput}
                               required/>
                    </div>

                    <div className="input-area input-message">
                        <label htmlFor="message"/>
                        <textarea name="message"
                                  className={state.errorMessage ? "form-control is-invalid" : "form-control"}
                                  id="message" placeholder="Your Message"
                                  value={state.message}
                                  onChange={handleInput}
                                  required/>
                    </div>

                    <div className="send">
                        <input type="submit" name="submit" className="submit" value="Submit"/>
                    </div>

                    <div>
                        <p>{state.response}</p>
                    </div>
                </form>
            </div>

            <div className="contact-map">
                <Map/>
            </div>
        </div>
    )
}

export default Contact