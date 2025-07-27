import styled from "styled-components";

const Container = styled.div`
    text-align: center;
    em {
        font-style: italic;
    }
    img {
        padding: 20px;
        width: 100%
    }
    padding: ${props => props.noPadding ? '0px' : '50px'};
    ${props => props.noTopPadding && "padding-top: 0px;"}
    ${props => props.noTextAlign && 'text-align: initial;'}
`;

export default Container