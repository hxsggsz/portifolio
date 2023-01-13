import styled from "styled-components";

const LanguageStyles = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  section {
    padding: 30px;
    min-width: 30%;
    min-height: 30%;
    background: #441151;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .language {
      height: 100%;
      width: 100%;
      border: 1px solid red;
    }
    .bandeiras {
      display: flex;
      gap: 10px;
      margin-top: 20px;
    }
    @media (max-width: 760px) {
      width: 95%;
    }
  }
`;

export default LanguageStyles;
