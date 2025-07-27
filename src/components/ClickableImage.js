import styled from "styled-components";

const ClickableImage = styled.img`
  width: 200px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export default ClickableImage