import { useState } from "react";
import img from '../../image/me2.jpg';
import { FullHomeBox, Overview, Menu, MainBox } from "./fullHomePage.styles";

const FullHomePage = () => {
    const [ clicked, setClicked ] = useState(0);

    const aboutView = <>
        <p>
            I am Eniola Fashola, a dedicated Computer Science 
            undergraduate with a strong foundation in digital skills. 
            My expertise ranges from effortlessly setting up e-commerce 
            stores and websites using pre-made tools to crafting custom 
            applications from scratch for various platforms.
        </p>
        <img src={img} alt='me' />
        <p>
            With a keen eye for the potential of the digital realm for 
            visionary entrepreneurs and a deep understanding of the challenges 
            faced by many in the business world, I am committed to providing 
            daily invaluable tips to guide you through the complex landscape 
            of being a successful digital business owner.
        </p>
        <p>
            My passion extends beyond the technical aspects, although 
            they are crucial. I also have a profound interest in applying 
            technology to solve real-world problems. In addition to my 
            technical skills, I am continually learning and honing my 
            abilities in building digital businesses from the ground up, 
            from selecting the optimal niche to navigating the production 
            phase and efficiently marketing brand to generate profits. 
            After all, the primary objective of any business is to thrive and prosper.
        </p>
        <p>
            Beyond my professional pursuits, my hobbies include immersing 
            myself in uplifting gospel music, delving into insightful books, 
            and dedicating time to personal growth and development. I also 
            find great satisfaction in assisting businesses in their journey 
            to success.
        </p>
        <p>
            This sums up a brief introduction about me. Feel free to reach 
            out to me for any personal inquiries or professional guidance to 
            enhance your digital business.
        </p>
    </>


const [ mainView, setMainView ] = useState(aboutView)

    const menuTexts = ['About',
    'Reviews', 
    'Blogs'];

    const checkClick = (key) => {
        setClicked(key)

        if(key === 0) {
            setMainView(aboutView)
        } else {
            setMainView(null)
        }
    }

    return (
        <FullHomeBox>
            <Overview>
                <h3>Eniola Fashola</h3>
                <span className="username">@placeofgod</span>
                <div className="info">Digital business consultant, computer scientist and project manager.</div>
            </Overview>
            <Menu picked={clicked}>
                {menuTexts.map((menu, key) => {
                    return <span 
                        key={key}
                        className={menu.toLocaleLowerCase()}
                        onClick = {() => {checkClick(key)}}
                    >
                        {menu}
                    </span>
                })}
            </Menu>
            <MainBox>
                {mainView}
            </MainBox>
        </FullHomeBox>
    )
}

export default FullHomePage;