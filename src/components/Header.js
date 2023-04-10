import React,{useState,useEffect} from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll=()=>{
    const scrollY =window.scrollY;
    if(scrollY>100){
      setScrolled(true);
    }else{
      setScrolled(false)
    }
  };
  const headerOverlay={
    top:scrolled?0:'-100px'
  }  

  return (
    <div>
        <div style={headerOverlay} className="sticky-header header">
        <h1>Brand Barter</h1>
        {/* <div className='header-logo-container'>
        <img className='brand-logo' src="images/l.png" alt="logo" />
        </div> */}
        <div className='header-nav'>
            <a>About</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#team">Team</a>
            <a href="#footer">Contact</a>
        </div>
        <MenuIcon onClick={()=>setMenu(!menu)} className="header-menu" />

        </div>
    <div className='header'>

        <h1>Brand Barter</h1>
        <div className='header-nav'>
            <a>About</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#team">Team</a>
            <a href="#footer">Contact</a>
        </div>
        <MenuIcon onClick={()=>setMenu(!menu)} className="header-menu" />
        </div>
        <div style={{right:menu?0:'-380px'}} className='header-side-nav'>
        <CloseIcon id="header-menu-close" onClick={()=>setMenu(!menu)} className="header-menu" />
            <a>About</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#team">Team</a>
            <a href="#footer">Contact</a>
        </div>
    </div>
  )
}

export default Header