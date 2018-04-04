import React from 'react';
import logo from '../images/Datamorphix_Logo.png';
import './../styles/title.css';


export const Title = () => {
    return (
        <div className="Title">
            <header className="Title-header">
                <img src={logo} className="Title-logo" alt="logo"/>
                <a className="Title-button" href="http://www.datamorphix.ai" role="button">
                    <button className="btn btn-info">Learn more</button>
                </a>
                <h1 className="Title-title">Datamorphix Smart Assistant</h1>
                <p className="Title-description">Welcome to the Datamorphix Smart Assistant. Your assistant Tina is here
                    to help. &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
            </header>
        </div>
    );
};