import { useState } from "react";
import { FullHomeBox, Overview, Menu } from "./fullHomePage.styles";

const FullHomePage = () => {
    const [ clicked, setClicked ] = useState(0);

    const menuTexts = ['About','Reviews', 'Blogs'];

    const checkClick = (key) => {
        console.log('yeeaaa ' + key)
        setClicked(key)
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
        </FullHomeBox>
    )
}

export default FullHomePage;