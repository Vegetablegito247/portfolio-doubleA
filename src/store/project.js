import { createSlice } from "@reduxjs/toolkit";
import frontEndTutor from '../assets/portfolioImg/frontend-tutor.png';
import blog from '../assets/portfolioImg/hulk1.png';
import pastryAndIcecream from '../assets/portfolioImg/pastryandice.png';
import queekai from '../assets/portfolioImg/queekai.png';
import apronClone from '../assets/portfolioImg/apron-clone.png';

const initialState = {
    projects: [
        {
            id: '01',
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
            id: '02',
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
            id: '03',
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
            id: '04',
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
            id: '05',
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