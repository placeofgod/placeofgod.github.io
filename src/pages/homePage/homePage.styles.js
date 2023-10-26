import styled from 'styled-components';

export const HomePageContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 900px;
    align-self: center;
    // background-color: blue;
    position: absolute;

    .menu {
        font-weight: bold;
        height: 35px;
        width: 35px;
        text-align: center;
        position: fixed;
        top: 2%;
        right: ${window.screen.width <= 1000 ? '5%' : '10%'};
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
    }

    .header {
        width: 100%;
        padding-top: 10%;
        /* background-color: yellow; */
        
    }
    
    .cover-box {
        width: 100%;
        height: ${window.screen.width <= 1000 ? '17%' : '25%'};
        // max-width: 900px;
        overflow: hidden;
        transition: 0.8s;
        position: absolute;
        top: ${({pos}) => 
            pos === 'show' ? '0%': '-30%'}; 
        left: 0%;
        z-index: -1;

        img {
            width: 100%;
            height: 140%;
            padding: 0;
            margin: 0;
            position: relative;
            top: -9%;           
        }
    }
    
    
    
    .pic-box {
        padding-top: 10%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            background-color: white;
            border: 4px solid white;
            margin-bottom: 4%;
            width: ${({pos}) => 
            pos === 'show' ? '80px': '105px'}; 
            height: auto;
            border-radius: 50%;
            transition: 0.7s;
            position: relative;
            top: ${({pos}) => 
                pos === 'show' ? '100%': '0%'};
            left: ${({pos}) => 
                pos === 'show' ? '-35%': '0%'};
            /* margin-top: 5%; */ 
        }
    }
    
    .add {
        /* height: 100%; */
        font-size: 30px;
        width: 100%;
        max-width: 900px;
        position: fixed;
        text-align: center;
        bottom: 8%;
    
    }
`;