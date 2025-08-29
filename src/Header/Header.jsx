import React , { useEffect, useState } from 'react';
import FullLogo_Trasparent from '../Asset/logo/FullLogo_Transparent.png';
import Sidebars from '../Sidebar/Sidebars';
const Header = (props) => {
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
   window.scrollY >= 20 ? setNavBg(true) : setNavBg(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    }
  }, [])

  return (
    <div className={`App-header container ${navBg ? 'nav-bg-dark' : ''}`}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <a href="#">
            <img src={FullLogo_Trasparent} alt="Logo" loading='eager'/>
          </a>
          <Sidebars {...props} />
        </div>
      </div>
    </div>
  );
};

export default Header;
