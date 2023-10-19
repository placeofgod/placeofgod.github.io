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
        top: ${({pos}) => 
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
        text-align: center;
        position: fixed;
        top: 2%;
        right: 6%;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
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
        /* font-weight: bold; */
        font-size: 40px;
        width: 100%;
        position: fixed;
        text-align: center;
        bottom: 8%;
    
    }
`;