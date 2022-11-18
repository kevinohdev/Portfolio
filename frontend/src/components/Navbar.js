import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import NavbarStyles from '../styles/NavbarStyles';



const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    (window.scrollY >= 60) ? setNavbar(true) : setNavbar(false);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', changeNavbar);
  }, [])

  return (
    <NavbarStyles>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
          <a href='#home'>
            <h1>Kevin Oh</h1>
          </a>
        <ul className="links">
          {['about', 'work', 'skills', 'contact'].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className='navbar-menu'>
          {!toggle && <HiMenuAlt4 onClick={() => setToggle(true)}></HiMenuAlt4>}
          {toggle && (
            <div>
              <HiX onClick={() => setToggle(false)}></HiX>
              <ul className="links">
              {['about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item} onClick={() => setToggle(false)}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </NavbarStyles>

  );
};

export default Navbar