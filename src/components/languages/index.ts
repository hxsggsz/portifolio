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
    background: rgba(169, 169, 169, 0.2);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    .language {
      top: 3%;
      position: absolute;
      display: flex;
      justify-content: center;
    }
    .bandeiras {
      display: flex;
      gap: 25px;
      margin-top: 20px;
    }
    @media (max-width: 480px) {
      width: 95%;
    }
  }
`;

export default LanguageStyles;
