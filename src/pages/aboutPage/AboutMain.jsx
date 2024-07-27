import React from 'react';
import './aboutMain.css';
import html from '../../assets/abtIcon/html.png';
import css from '../../assets/abtIcon/css-3.png';
import javaScript from '../../assets/abtIcon/java-script.png';
import bootstrap from '../../assets/abtIcon/bootstrap.png';
import react from '../../assets/abtIcon/physics.png';
import typeScript from '../../assets/abtIcon/typescript.png';
import next from '../../assets/abtIcon/nextjs.svg';
import sass from '../../assets/abtIcon/sass.png';
import scss from '../../assets/abtIcon/file.png';
import python from '../../assets/abtIcon/python.png';
import django from '../../assets/abtIcon/django.png';
import node from '../../assets/abtIcon/node-js.png';
import mongoDB from '../../assets/abtIcon/database.png';
import mySQL from '../../assets/abtIcon/mysql.png';

function AboutMain() {
    const stack = [
        {
            id: 1,
            img: html,
            title: 'HTML'
        },
        {
            id: 2,
            img: css,
            title: 'CSS'
        },
        {
            id: 3,
            img: javaScript,
            title: 'JavaScript'
        },
        {
            id: 4,
            img: bootstrap,
            title: 'BootStrap'
        },
        {
            id: 5,
            img: sass,
            title: 'Sass'
        },
        {
            id: 6,
            img: scss,
            title: 'SCSS'
        },
        {
            id: 7,
            img: react,
            title: 'React'
        },
        {
            id: 8,
            img: typeScript,
            title: 'Typescript'
        },
        {
            id: 9,
            img: next,
            title: 'NextJS'
        },
        {
            id: 10,
            img: node,
            title: 'Node-Js'
        },
        {
            id: 11,
            img: python,
            title: 'Python'
        },
        {
            id: 12,
            img: django,
            title: 'Django'
        },
        {
            id: 13,
            img: mongoDB,
            title: 'MongoDB'
        },
        {
            id: 14,
            img: mySQL,
            title: 'MySQL'
        }
    ]

    return (
        <div className='abt-main'>
            <div className="abt-main-title">
                <h3>Welcome To My Portfolio</h3>
            </div>
            <div className="abt-abt-me">
                <p>
                    Hello, I'm <b>Al-min Ajadi</b>, a versatile Software developer known for creating user-friendly interfaces. Proficient in HTML, CSS, JavaScript, and React, I specialize in delivering seamless web applications. My journey in the tech world began with a computer science diploma from LOMKET Computer Institutes, and I furthered my studies in full-stack development at LASOP. Currently, I'm pursuing computer science at the University of Regina, Canada.
                </p>
                <p>
                    While my initial plan was in medicine, exposure to programming classes shifted my perspective. From React to backend technologies, my journey has been filled with exciting possibilities, from mobile development to designing fintech apps and games.
                </p>
                <p>
                    Studying full-stack at LASOP was interactive and enjoyable, fostering my passion for learning and problem-solving. Adaptable to evolving scopes, my commitment to continuous learning and innovation positions me to make cutting-edge contributions in dynamic environments.
                </p>
                <p>
                    Thank you for visiting my portfolio. I hope you enjoy exploring my projects, witnessing the dedication and attention to detail in each. For any questions or potential collaboration, please don't hesitate to reach out. I look forward to connecting with you.
                </p>
            </div>
            <div className="abt-stacks">
                <div className="abt-stack-head">
                    <h3>Stacks</h3>
                </div>
                <div className="abt-stack-detail">
                    {
                        stack.map((stack) => (
                            <div key={stack.id} className="stack-list">
                                <img src={stack.img} alt="" />
                                <span>{stack.title}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="abt-regards">
                <div className="abt-thanks">
                    <span>Best regards,</span>
                </div>
                <div className="abt-name">
                    <span>Al-min Ajadi <b>( Double A ) .</b></span>
                </div>
            </div>
        </div>
    )
}

export default AboutMain