import styled from 'styled-components';

export const HomePageContainer = styled.div`
    .header {
        width: 100%;
        padding-top: 10%;
        /* background-color: yellow; */
        
    }
    
    .cover-box {
        width: 100%;
        height: 15%;
        overflow: hidden;
        transition: 0.8s;
        position: fixed;
        top:  ${({pos}) => 
        pos === 'show' ? '0%': '-20%'}; 
        left: 0%;
        z-index: -1;

        img {
            width: 100%;
            height: 144%;
            padding: 0;
            margin: 0;
            position: relative;
            top: -9%;           
        }
    }
    
    .menu {
        font-weight: bold;
        height: 35px;
        width: 35px;
        /* display: flex;
        justify-content: center;
        align-items: center; */
        position: fixed;
        top: 2%;
        right: 6%;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
    }
    
    .pic-box {
        padding: 10%;
        height: auto;
        display: flex;
        justify-content: center;

        img {
            background-color: white;
            border: 4px solid white;
            width: ${({pos}) => 
            pos === 'show' ? '80px': '105px'}; 
            height: auto;
            border-radius: 50%;
            transition: 0.7s;
            position: relative;
            top: ${({pos}) => 
            pos === 'show' ? '100%': '0%'};
            left: ${({pos}) => 
            pos === 'show' ? '-45%': '0%'};
            /* margin-top: 5%; */ 
        }
    }
    
    .overview {
        padding: o;
        /* background-color: green; */
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }
    
    .add {
        /* height: 100%; */
        /* font-weight: bold; */
        font-size: 40px;
        width: 100%;
        position: fixed;
        text-align: center;
        bottom: 8%;
    
    }
    
    h2 {
        margin: 0;
        text-align: center;
    }
    
    .info {
        /* width: 90%; */
        padding: 4px 10% 0 10%;
        text-align: center;
        /* align-self: center; */
    }
    
    .contacts {
        padding: 2% 5% 2% 5%;
        text-align: center;
    }
    
    svg {
    margin: 6px;
    }
    
    /* .icon-box {
    width: 5px;
    height: 5px;
    } */
    
    /* 
    @media (prefers-reduced-motion: no-preference) {
    .App-logo {
        animation: App-logo-spin infinite 20s linear;
    }
    } */
    
    /* .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    }
    
    .App-link {
    color: #61dafb;
    } */
    
    @keyframes App-logo-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    }
`;