import styled from "styled-components";

const Container = styled.div`
    em {
        font-style: italic;
    }
    img {
        padding: 20px;
        width: 100%
    }
    
    padding: ${props => props.noPadding ? '0px' : '50px'};
    ${(props) => props.noTopPadding && "padding-top: 0px;"}

`;

export default Container