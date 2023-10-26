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
                <Whatsapp onClick={
                    () => window.open('https://wa.me/2348032404351')
                } />
                <Facebook onClick={
                    () => window.open('https://www.facebook.com/placeofgod?mibextid=ZbWKwL')
                } />
                <Linkedin onClick={
                    () => window.open('https://www.linkedin.com/in/eniola-fashola-0543a218b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
                } />
                <Instagram onClick={
                    () => window.open('https://instagram.com/placeofgod?igshid=OGQ5ZDc2ODk2ZA==')
                } />
                <Medium onClick={
                    () => window.open('https://medium.com/@placeofgod')
                } />
                <Quora onClick={
                    () => window.open('https://www.quora.com/profile/Eniola-Fashola-Place-Of-God?ch=10&oid=607954217&share=3521d74b&srid=C5hDC&target_type=user')
                } />
                <Reddit onClick={
                    () => window.open('https://www.reddit.com/u/Few_Pin7058?utm_medium=android_app&utm_source=share')
                } />
                <Tumblr onClick={
                    () => window.open('')
                } />
                <Threads onClick={
                    () => window.open('https://www.threads.net/@placeofgod')
                } />
                <X onClick={
                    () => window.open('https://x.com/place_of_god?t=jXvb5up48BuIudUEzTticA&s=09')
                } />
            </Contacts>
            <div>

            </div>
        </>
    )
}

export default MiniHomePage;