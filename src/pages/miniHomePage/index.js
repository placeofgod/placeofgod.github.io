import { icons } from "../../assets/iconAssets/icons";

import { LinkPreview } from '@dhaiwat10/react-link-preview';

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
                {/* <LinkPreview url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' width='400px' /> */}
            </div>
        </>
    )
}

export default MiniHomePage;