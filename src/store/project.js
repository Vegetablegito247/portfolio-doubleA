import { createSlice } from "@reduxjs/toolkit";
import frontEndTutor from '../assets/portfolioImg/frontend-tutor.png';
import blog from '../assets/portfolioImg/hulk1.png';
import pastryAndIcecream from '../assets/portfolioImg/pastryandice.png';
import queekai from '../assets/portfolioImg/queekai.png';
import apronClone from '../assets/portfolioImg/apron-clone.png';
import cookipe from '../assets/portfolioImg/cookipe.png';
import lasop from '../assets/portfolioImg/lasop.png';
import damian from '../assets/portfolioImg/damian.png';
import kezzy from '../assets/portfolioImg/kezzy.png';
import emergent from '../assets/portfolioImg/emergent.png';

const initialState = {
    projects: [
        {
            img: lasop,
            title: 'LASOP',
            info: "Developed a comprehensive website for LASOP, a computer programming institute, aimed at enhancing student engagement and facilitating skill development. Integrated intuitive UI/UX with full-stack capabilities, allowing seamless navigation, user management, and real-time updates. Designed to empower students in mastering cutting-edge technologies and bridging the gap between people and computers.",
            stack: [
                'Typescipt', 'React-scroll', 'Redux-Persist', 'React-redux', 'Next.JS', 'React', 'Tailwind CSS', 'Redux-toolkit', 'Framer-motion', 'ChartJS', 'React-ChartJS-2', 'NodeJS', 'ExpressJS', 'MongoDB'
            ],
            gitHub: 'https://github.com/lasop-nextjs/lasop-client',
            website: 'https://www.lasop.net/'
        },
        {
            img: emergent,
            title: 'Emergent Creatives',
            info: "Developed Emergent Creatives, a digital agency platform that provides tailored digital solutions to small and medium-sized businesses, and nonprofits. Designed to enhance their online presence, the platform enables businesses to boost visibility, connect with broader audiences, and optimize their digital strategies for growth and engagement.",
            stack: [
                'Typescipt', 'Redux-Persist', 'React-redux', 'Next.JS', 'React', 'Tailwind CSS', 'Redux-toolkit', 'NodeJS', 'ExpressJS', 'MongoDB'
            ],
            gitHub: 'https://github.com/Vegetablegito247/emergent',
            website: 'https://www.emergentcreatives.com/'
        },
        {
            img: kezzy,
            title: 'Kezzy Speaks',
            info: "Developed Kezia-Grace, a platform that showcases the public speaking expertise and leadership skills of Kezia Grace. The site emphasizes her passion for inspiring and connecting with diverse audiences through impactful communication, offering a user-friendly experience for event bookings and personal engagement.",
            stack: [
                'Typescipt', 'React', 'Redux-toolkit', 'Redux-Persist', 'React-redux', 'Framer-motion', 'Tailwind CSS', 'Vite.js', 'NodeJS', 'ExpressJS', 'MongoDB'
            ],
            gitHub: 'https://github.com/Kezia-mc/kezia-Frontend',
            website: 'https://www.kezzyspeaks.ca/'
        },
        {
            img: damian,
            title: 'Lens Of Damiano',
            info: "Damian Glory Chiderah, a platform celebrating Damian’s multifaceted journey in science and the arts, combining her expertise in microbiology, kinesiology, web development, and photography. The site highlights Damian’s passion for both academic pursuits and creative expression, offering an immersive experience that reflects her diverse talents.",
            stack: [
                'React', 'Redux-toolkit', 'Redux-Persist', 'React-redux', 'Framer-motion', 'NodeJS', 'ExpressJS', 'MongoDB'
            ],
            gitHub: 'https://github.com/Vegetablegito247/damian-shot',
            website: 'https://www.damianglory.ca/'
        },
        {
            img: cookipe,
            title: 'Cookipé',
            info: "Cookipe is a vibrant recipe-sharing platform featuring a sleek landing page with a dynamic carousel showcasing delicious food images. Users can explore the latest, popular, and vegetarian recipes, all adorned with social interaction icons. The site also offers engaging video reels, culinary blogs, and quick links to various food categories. A user-friendly recipe page, step-by-step recipe sharing form, and an insightful dashboard enhance the user experience.",
            stack: [
                'Typescipt', 'React-scroll', 'Redux-Persist', 'React-redux', 'Redux-toolkit', 'Framer-motion', 'ChartJS', 'React-ChartJS-2', 'NodeJS', 'ExpressJS', 'MongoDB'
            ],
            gitHub: 'https://github.com/Vegetablegito247/cookipe',
            website: 'https://cookipe.vercel.app'
        },
        {
            img: apronClone,
            title: 'Apron',
            info: "Welcome to Apron, your ultimate solution for seamless invoice management. With Apron, small business owners can effortlessly streamline invoice processing, from consolidation to payment and reconciliation. Say goodbye to administrative hassles and hello to smooth, efficient operations. Start your journey with Apron today!",
            stack: [
                'React', 'React-scroll', 'Redux-Persist', 'React-redux', 'Redux-toolkit', 'Framer-motion'
            ],
            gitHub: 'https://github.com/Vegetablegito247/apron',
            website: 'https://apron-alpha.vercel.app'
        },
        {
            img: queekai,
            title: 'Queekk AI',
            info: 'Discover QUEEKK, where real-time communication and lightning-fast responses come together to redefine the way you connect and collaborate.',
            stack: [
                'React', 'React-toastify', 'React-redux', 'Redux-toolkit', 'Node-JS', 'MongoDB', 'API', 'AI-tokens', 'chatbots'
            ],
            gitHub: 'https://github.com/queekk-com/queekk-client',
            website: 'https://queekk.vercel.app'
        },
        {
            img: blog,
            title: 'Hulkify (Blog Template)',
            info: "Unleash the power of fitness knowledge with my Blog Template. Featuring expert articles by renowned authors like John Cena and Dr. Stone, dive into effective muscle building, optimal nutrition, cardio benefits, workout routines, rest importance, and achieving fitness goals. Explore now for a healthier, more informed fitness journey!",
            stack: [
                'React', 'Animation-On-Scroll', 'Spinner-loading', 'React-toastify', 'React-slick', 'React-redux', 'Redux-toolkit', 'Node-JS', 'MongoDB', 'tokens'
            ],
            gitHub: 'https://github.com/christmas-special/blog-template',
            website: 'https://christmasspecial.vercel.app'
        },
        {
            img: pastryAndIcecream,
            title: 'Double A Pastry and Ice-cream',
            info: 'Explore our pastry journey via our meticulously crafted website. Enjoy seamless shopping with React-Redux, Redux Persist, and React-Paystack. Discover more in our sweet blog!',
            stack: [
                'React', 'React-toastify', 'React-redux', 'Redux-toolkit', 'redux-thunk', 'redux-persist', 'skeleton-loader', 'paystack'
            ],
            gitHub: 'https://github.com/Vegetablegito247/react-redux-pastry-and-icecream-site',
            website: 'https://react-redux-pastry-and-icecream-site.vercel.app'
        },
        {
            img: frontEndTutor,
            title: 'FrontEnd-Tutor',
            info: 'FrontEnd-Tutor offers video tutorials, challenges, quizzes for front-end dev, empowering skill enhancement. Built with React, Django, and varied libraries.',
            stack: [
                'React', 'React-toastify', 'Framer-motion', 'paystack', 'Python', 'Django', 'API', 'mySQL'
            ],
            gitHub: '',
            website: 'https://frontend-tutor-3bed6.firebaseapp.com'
        },
    ]
}

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: initialState,
    reducers: {}
})

export default portfolioSlice.reducer;