import styled from "styled-components";

const ContactStyles = styled.div`
  min-height: 100vh;
  max-width: 80vw;
  margin: 0 auto;
  padding-top: 3rem;
  text-align: center;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
 
    color: rgba(05, 05, 05, 0.8);

    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
      padding-top: .75rem;
    }
  }

  .socials {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    align-items: flex-start;
    
    margin: auto;
    width: 40vw;
    height: 50vh;
    padding: 2rem;
    
    h1 {
      font-size: 2.5rem;
      font-weight: 800;

      background-image: linear-gradient(to left, #fbffb1, #ffe700);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;

      background-size: 100%;
      background-position: -200%;
    }

    @media screen and (max-width: 700px) {
    width: 80vw;
    margin: 2rem;
  }
  }

  .socials a {
    display: flex;
    font-size: 2rem;
    padding: 2rem;
    color: rgb(255,255,255);
  }

  .contact-links > * {
    display: flex;
    padding: 1rem;
    text-decoration: none;
    font-weight: 700;
  }

  .contact-links a > * {
    align-self: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    margin: auto;
    width: 40vw;
    height: 50vh;
    padding: 2rem;
    border: 1px solid white;
    border-radius: 1em;

  @media screen and (max-width: 700px) {
    width: 80vw;
    margin: 2rem;
  }
}

  textarea {
  flex: 1;
}

  textarea, input {
  font-size: 1.5rem;
  padding: 1rem;
}

  button {
  height: 4vh;
  background: white;
  border-radius: 6px;
  border: 1px solid white;
  text-transform: uppercase;
  font-size: 1rem;
  color: black;
  font-weight: 800;
}

`;

export default ContactStyles;

