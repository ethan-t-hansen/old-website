import NavBar from './NavBar';
import email_proj from '../assets/email_proj.jpg';
import pomo_proj from '../assets/pomo_proj.png';
import seating_proj from '../assets/seating_proj.PNG';
import tictactoe_proj from '../assets/tictactoe_proj.png';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import ProjectCard from './ProjectCard';

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
            <section id="home">
                <h1 className="hidden-bottom">Hello! I'm Ethan</h1>
                <p className="hidden-bottom">Welcome to my website.</p>
                <div className="socials hidden-bottom-2">
                    <SocialIcon url="https://linkedin.com/in/ethanth" bgColor="#121212" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://github.com/ethan-t-hansen" bgColor="#121212" style={{ height: 35, width: 35 }} />
                </div>
            </section>
            <NavBar />
            <section />
            <div id="projects"/>
            <section>
                <h1 className='h1-space-bot'>Projects</h1>
                {/* <div class="hr"/> */}
                <div>
                    <ProjectCard
                        image={tictactoe_proj}
                        title={"Tic-Tac-Toe Web Application"}
                        text={"Basic object-oriented web application that represents a game of Tic-Tac-Toe"}
                        buttontext={"View on GitHub"}
                        link={"https://github.com/ethan-t-hansen/tic-tac-toe"}
                    />
                    <ProjectCard
                        image={seating_proj}
                        title={"Event Seating Arranger"}
                        text={"Randomly arranges large-scale event seating based on guest preferences through object-oriented programming."}
                        buttontext={"View on GitHub"}
                        link={"https://github.com/ethan-t-hansen/seating-arranger"}
                    />
                    <ProjectCard
                        image={pomo_proj}
                        title={"Pomodoro Study Timer"}
                        text={"Uses JFrame graphical interface to monitor study sessions, maximizing productivity and student focus."}
                        buttontext={"View on GitHub"}
                        link={"https://github.com/ethan-t-hansen/pomo-timer"}
                    />
                </div>

            </section>
        </body>
    );
}

export default Body1;