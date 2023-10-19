import styled from 'styled-components';

export const Overview = styled.div`
    padding: 0;
    margin: 0;
    // background-color: green;
    flex-direction: column;
    text-align: center;

    h2 {
        margin: 0;
        // text-align: center;
    }

    .info {
        /* width: 90%; */
        padding: ${({pos}) => 
            pos === 'show' ? '0': '4px 10% 0 10%'};
        // text-align: center;
        /* align-self: center; */
    }
`;

export const Contacts = styled.div`
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
`;

