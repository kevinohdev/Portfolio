import styled from "styled-components";

const SkillsStyles = styled.div`
  max-width: 900px;
  height: 100vh;
  margin: auto;
  padding-top: 100px;

  h2 {
    text-align: center;
    padding-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 800;

    background-image: linear-gradient(to left, #fbffb1, #ffe700);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-size: 100%;
    background-position: -200%;
  }
  
  img {
    max-width: 100%;
    display: block;
    width: 80%;
    margin: auto;
  }

  .skills-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-top: 5rem;
  }

  .skill-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    text-align: center;
    color: white;
    font-weight: 700;
    max-width: 10vw;
  }
  `;

export default SkillsStyles;