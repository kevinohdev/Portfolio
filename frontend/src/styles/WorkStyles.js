import styled from "styled-components";

const WorkStyles = styled.div`
  .container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1280px;
    padding: 100px 1rem 0;
  
    h1 {
      margin: 0 auto;
      font-size: 2rem;
      color: rgba(0, 0, 0, 0.77);
      font-weight: 800;

      background-image: linear-gradient(to left, #fbffb1, #ffe700);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;

      background-size: 100%;
      background-position: -200%;
    }
  }

  .work {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 4rem 0;
  }

  .image {
    display: flex;
    justify-content: flex-end;
    flex: 4;
  }

  .details {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* text-align: start; */
    color: white;
    margin-top: 1rem;
    p {
      font-size: 2rem;
    }
  }

  .links {
    a {
      font-size: 1rem;
      padding: 1rem;
      text-decoration: none;
      color: rgb(0, 0, 0);
    }

    a:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  .tech {
    display: flex;
    justify-content: space-between;
    min-height: min-content;
    flex-wrap: wrap;
  }

  .title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255);

    h2 {
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 700;
      padding: 2rem;

      @media (max-width: 600px) {
        font-size: 1.2rem;
      }
    }  
  }

  .title, .details {
    font-size: 1rem;
  }

  .padding-border {
      padding: 0.5rem;
      margin: 0.5rem;
      border: 3px solid;
      border-radius: 9px;
      white-space: nowrap;
  }

  .margin-r {
    margin-right: 2rem;
  }
`;

export default WorkStyles