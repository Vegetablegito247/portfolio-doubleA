import React from 'react';
import './aboutMain.css';
import html from '../../assets/abtIcon/html.png';
import css from '../../assets/abtIcon/css-3.png';
import javaScript from '../../assets/abtIcon/java-script.png';
import bootstrap from '../../assets/abtIcon/bootstrap.png';
import react from '../../assets/abtIcon/physics.png';
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
            img: node,
            title: 'Node-Js'
        },
        {
            id: 9,
            img: python,
            title: 'Python'
        },
        {
            id: 10,
            img: django,
            title: 'Django'
        },
        {
            id: 11,
            img: mongoDB,
            title: 'MongoDB'
        },
        {
            id: 12,
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam distinctio, aut temporibus dolorem placeat obcaecati corrupti esse doloremque nisi, laboriosam repudiandae magni nostrum sint aliquid tempore maxime soluta, velit iste veritatis quibusdam delectus vel animi beatae incidunt! Aperiam placeat animi, assumenda incidunt provident hic laborum quia culpa unde natus officia.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam distinctio, aut temporibus dolorem placeat obcaecati corrupti esse doloremque nisi, laboriosam repudiandae magni nostrum sint aliquid tempore maxime soluta, velit iste veritatis quibusdam delectus vel animi beatae incidunt! Aperiam placeat animi, assumenda incidunt provident hic laborum quia culpa unde natus officia.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam distinctio, aut temporibus dolorem placeat obcaecati corrupti esse doloremque nisi, laboriosam repudiandae magni nostrum sint aliquid tempore maxime soluta, velit iste veritatis quibusdam delectus vel animi beatae incidunt! Aperiam placeat animi, assumenda incidunt provident hic laborum quia culpa unde natus officia.
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
                    <span>Al-min Ajadi <b>( Double A ).</b></span>
                </div>
            </div>
        </div>
    )
}

export default AboutMain