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
                <div id="about"/>
            </section>
            <NavBar />
            <section />
            <section className='about'>
                <h1 className='h1-space-bot hidden-bottom'>About me</h1>
                <p className="hidden-bottom"> 
                    Welcome to my personal website! My name is Ethan, and I am a third year student at the University of British Columbia, <br/>
                    majoring in Business and Computer Science. I have always had a passion for creating and designing, and I love to       <br/>
                    channel that energy into building and coding applications, as well as doing graphic design in Illustrator, Figma,      <br/>
                    and Photoshop. The process of taking an idea from conception to creation is incredibly rewarding for me, and I find    <br/>
                    joy in the meticulous details that go into each project.                                                               <br/><br/>
                    In my free time, I enjoy listening to music, cooking, reading, and playing video games. These hobbies help me unwind   <br/>
                    and recharge, and I find that they often inspire me creatively as well. As a student of both business and computer     <br/>
                    science, I am constantly seeking out new ways to bridge the gap between these two fields. I believe that combining     <br/>
                    business acumen with technical expertise is the key to success in today's world, and I am excited to see where this    <br/>
                    path will take me in the future.
                </p>
            </section>
            <div id="projects" />
            <section>
                <h1 className='h1-space-bot hidden-bottom'>Projects</h1>
                <div className="hidden-bottom">
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
                        text={"Selectively arranges large-scale event seating based on guest preferences through object-oriented programming."}
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