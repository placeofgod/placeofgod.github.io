import { icons } from "../../assets/iconAssets/icons";

import { Overview, Contacts } from "./miniHomePage.styles";

const MiniHomePage = () => {
    const { 
        Whatsapp, 
        Facebook, 
        Linkedin, 
        Instagram, 
        Medium, 
        Quora, 
        Reddit, 
        Tumblr, 
        Threads, 
        X 
    } = icons;

    return (
        <>
            <Overview>
                <h2>@placeofgod</h2>
                <div className="info">Digital business consultant, computer scientist and project manager.</div>
            </Overview>
            <Contacts>
                <Whatsapp />
                <Facebook />
                <Linkedin />
                <Instagram />
                <Medium />
                <Quora />
                <Reddit />
                <Tumblr />
                <Threads />
                <X />
            </Contacts>
            <div>

            </div>
        </>
    )
}

export default MiniHomePage;