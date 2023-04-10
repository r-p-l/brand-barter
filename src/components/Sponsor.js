import React,{useState,useEffect} from 'react'

function Sponsor({img,scrollno}) {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll=()=>{
      const scrollY =window.scrollY;
      if(scrollY>scrollno){
        setScrolled(true);
      }else{
        setScrolled(false)
      }
    };
    const handleImg={
      left:scrolled?0:'-800px'
    }  
    const handleText={
      right:scrolled?0:'-700px'
    }
    return (
    <div className='sponsor'>
        <div style={handleImg} className='sponsor-img'>
            <img src={img} alt="sponsor image" />
        </div>
        <div style={handleText} className='sponsor-info'>
            <p>Google is extensively known for sponsoring events regarding technology. It has been a big supporter of IIT Techfests and Developers Meet around India. If you are a non-profit organization, it also has Google Grant Programme.</p>
        </div>
        
        </div>
  )
}

export default Sponsor