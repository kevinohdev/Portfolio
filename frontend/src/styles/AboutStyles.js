import styled from "styled-components";

const AboutStyles = styled.div`

.container {
  height: 100vh;
  padding: 8rem 1rem 0rem;
  background-color: rgb(235, 235, 235);
  }
  
  p {
    max-width: 900px;
    margin: auto;
    font-size: 1.5rem;
    line-height: 2rem;
    color: black;

    @media (max-width: 600px) {
      width: 90vw;
      font-size: 1rem;
    }
  };
`;

export default AboutStyles;