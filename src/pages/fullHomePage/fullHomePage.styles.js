import styled from 'styled-components';

export const FullHomeBox = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
`;

export const Overview = styled.div`
    padding-left: 8px;
    margin-top: 44%;
    // background-color: green;
    flex-direction: column;
    // text-align: center;

    h3 {
        margin: 0;
        padding: 0;
    }

    .username {
        font-size: 15px;
    }

    .info {
        margin-top: 5px;
    }
`;

export const Menu = styled.div`
    font-weight: bold;
    padding: 3%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    

    span {
        padding: 0% 7% 0% 3%;
        
    }
    
    .about {
        border-bottom: ${({picked}) => 
            picked === 0 ? 'solid': null};
    }

    .reviews {
        border-bottom: ${({picked}) => 
            picked === 1 ? 'solid': null};
    }

    .blogs {
        border-bottom: ${({picked}) => 
            picked === 2 ? 'solid': null};
    }
`;
