import NavBar from './NavBar';
import email_proj from '../assets/email_proj.jpg';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Body1() {

    window.addEventListener('load', function (event) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                }
            });
        });
        const hiddenElements = document.querySelectorAll('.hidden-right, .hidden-left, .hidden-bottom, .hidden-bottom-2');
        hiddenElements.forEach((el) => observer.observe(el));
    });

    return (
        <body>  
            <section>
                <h1 className="hidden-bottom">
                    Hello! I'm Ethan
                </h1>
                <p className="hidden-bottom">
                    Welcome to my website.
                </p>
                <div className="socials hidden-bottom-2">
                    <SocialIcon url="https://linkedin.com/in/ethanth" bgColor="#121212" style={{ height: 35, width: 35}}/>
                    <SocialIcon url="https://github.com/ethan-t-hansen" bgColor="#121212" style={{ height: 35, width: 35}}/>
                </div>
            </section>
            <NavBar/>
            <section/>
            <section>
                <h1>
                    About Me
                </h1>
                <p>
                    Using ReactJS and CSS
                </p>
            </section>
            <section>
                <h1>Projects</h1>
                <div class="hr"/>
                <div> 
                    <div class="card">
                        <img src={email_proj} class="card-img"/>
                        <div class="card-details">
                            <p class="card-text-title">Cold Outreach Program</p>
                            <p class="card-text-body">
                                Streamlines cold emailing processes with personalized messages and automated parsing through contact spreadsheets.
                            </p>
                        </div>
                        <button class="card-button">Learn More</button>
                    </div>
                    <div class="card">
                        <img src={email_proj} class="card-img"/>
                        <div class="card-details">
                            <p class="card-text-title">Cold Outreach Program</p>
                            <p class="card-text-body">
                                Streamlines cold emailing processes with personalized messages and automated parsing through contact spreadsheets.
                            </p>
                        </div>
                        <button class="card-button">Learn More</button>
                    </div>
                    <div class="card">
                        <img src={email_proj} class="card-img"/>
                        <div class="card-details">
                            <p class="card-text-title">Cold Outreach Program</p>
                            <p class="card-text-body">
                                Streamlines cold emailing processes with personalized messages and automated parsing through contact spreadsheets.
                            </p>
                        </div>
                        <button class="card-button">Learn More</button>
                    </div>
                </div>
                
            </section>
            <section>

            </section>
        </body>
    );
}

export default Body1;