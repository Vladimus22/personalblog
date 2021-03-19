import React from 'react';
import './Wrapper.css';
import avatar_2 from './img/avatar_2.svg';

function Wrapper() {
    const user = {
        firstName: 'Vladyslav',
        secondName: 'Filenko'
    }
    return(
        <div className="wrapper">
            <div className="wrapper-profile">
                <img className="avatar" src= {avatar_2} alt ='avatar'></img>
                <div className="user-name">{user.firstName} {user.secondName}</div>
                <div className="user-status">七転び八起き</div>
                <div className="wrapper-buttons">
                    <button className="user-buttons" id="user-buttons-projects">
                        <div className="count">0</div>
                        <div className="count-title">Projects</div>
                    </button>
                    <button className="user-buttons" id="user-buttons-articles">
                        <div className="count">1</div>
                        <div className="count-title">Articles</div>
                    </button>
                    <button className="user-buttons" id="user-buttons-drawing">
                        <div className="count">0</div>
                        <div className="count-title">Drawing</div>
                    </button>
                </div>
            </div>
            <div className="wrapper-articles">
                <article>
                    <h1 id="jp">
                        こんにちは！
                    </h1>
                    <h4>18 March, 2021</h4>
                    <p>どういたしまして。</p>
                    
                </article>
            </div>
        </div>
    );
}

export default Wrapper;