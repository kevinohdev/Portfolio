import styled from "styled-components";

const NavbarStyles = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 5;


.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0rem 1rem; */

  a {
    text-decoration: none;
  }
}

.navbar.active {
  background: rgba(25, 110, 209, 1.0);
  background: -webkit-linear-gradient(left, rgba(25, 110, 209, 1.0), rgba(148, 68, 250, 1.0));
  background: -moz-linear-gradient(left, rgba(25, 110, 209, 1.0), rgba(148, 68, 250, 1.0));
  background: linear-gradient(to right, rgba(25, 110, 209, 1.0), rgba(148, 68, 250, 1.0));
}

  h1 {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 3vw;
    color: rgba(255,255,255, 0.95);
    padding-left: 1rem;

    @media (max-width: 600px) {
      font-size: 5vw;
    }
  }

.links {
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 1rem;
    cursor: pointer;
    list-style-type: none;
    flex-direction: column;

    a {
      color: var(--white);
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 600;
      transition: all 0.3s ease-in-out;
    };
    
    a:hover {
      color: var(--yellow);
    }
  };

  @media screen and (max-width: 900px) {
    display: none;
  }
}

.navbar-menu {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 1rem;

  svg {
    font-size: 3rem;
    color: white;
  }

  div {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 5;

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    
    background: rgba(25, 109, 209, 1.0);
    background: -webkit-radial-gradient(top left, rgba(25, 109, 209, 1.0), rgba(148, 68, 250, 1.0));
    background: -moz-radial-gradient(top left, rgba(25, 109, 209, 1.0), rgba(148, 68, 250, 1.0));
    background: radial-gradient(to bottom right, rgba(25, 109, 209, 1.0), rgba(148, 68, 250, 1.0));

    svg {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      position: relative;
    }

    box-shadow: 0 0 20px rgba(168, 168, 168, 0.15);

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;

      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

      li {
        margin: 1rem;
      }
    }
    @media screen and (min-width: 900px){
        display: none;
      }
  }
  @media screen and (min-width: 900px){
        display: none;
      }
}
`;

export default NavbarStyles;