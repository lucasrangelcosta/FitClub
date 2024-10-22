import React, { useRef } from 'react'
import './Join.css';
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n6u10dg', 'service_n6u10dg', form.current, {
            publicKey: 'bRiL_DkEpw2oVbH9c',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='Join' id='join-us'>
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>PRONTO </span>
                    <span> PARA ELEVAR</span>
                </div>
                <div>
                    <span>SEU FÍSICO</span>
                    <span className='stroke-text'> CONOSCO?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email"
                        name='user_email'
                        placeholder='Digite seu email' />
                    <button className='btn btn-j'>Junte-se a nós</button>
                </form>
            </div>
        </div>
    )
}

export default Join