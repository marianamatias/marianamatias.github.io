import styled from "styled-components";

const ProgressBar = styled.div`
  width: ${(props) => props.width};
  border-radius: 0 50px 50px 0;
  height: 7px;
    // background: linear-gradient(to right, #f80081, #ff3b00);
  background: #ff3b00;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
  zindex: 99;
`;

export default ProgressBar;
