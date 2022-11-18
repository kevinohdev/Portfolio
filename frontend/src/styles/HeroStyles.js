import styled from "styled-components";

const HeroStyles = styled.div`

  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    max-width: 1200px;
    margin-left: 1rem;
    line-height: 6vw;
    text-transform: uppercase;
    padding-top: 10rem;
    color: white;
  }

  h1 {
    font-size: 5.5vw;
    font-weight: 900;
  }

  
  h2 {
    font-size: 4vw;
    font-weight: 900;
    color: rgba(10,10,10, 0.4);
  }

  h3 {
    font-size: 4vw;
    font-weight: 900;
    padding-top: 2rem;
    color: rgba(255,255,255, 0.9)
    
  }

  p {
    text-transform: none;
    line-height: 2rem;
    margin: 4rem auto;
  }

  span {
    background-image: linear-gradient(to right, #efbfc6, #c22828, #8a0f0f, #3c0303);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

    background-size: 400%;
    background-position: -100%;

    animation: animatedText 2.8s infinite;
  }

  @keyframes animatedText{
    from {
      background-position: 0%;
    }

    to {
      background-position: 100%;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 8vw;
      line-height: 10vw;
    }

    h2, h3 {
      font-size: 6vw;
      line-height: 8vw;
    }
    
  }
`;

export default HeroStyles;