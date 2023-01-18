import styled from "styled-components";

export const Slider = styled.div`
  display: flex;
  .parallax {
    overflow: hidden;
    letter-spacing: -2px;
    line-height: 0.8;
    margin: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
  }
  .parallax .scroller {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 64px;
    display: flex;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .scroller span {
    display: flex;
    margin-right: 30px;
  }
`;
