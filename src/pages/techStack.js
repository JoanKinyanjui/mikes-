import styles from "../styles/index.module.css";
import stylez from '../styles/about.module.css';
import stylezz from '../styles/tech.module.css'
import Link from "next/link";
import { useContext ,useState} from 'react';
import { AppStateContext } from '../AppState';
import { SwipeableDrawer, Button } from '@mui/material';
import Drawer from "@/components/drawer";
import mixpanel from 'mixpanel-browser';

//MIXPANEL

mixpanel.init('db720c3a75ceff7b57e65207ad7b18e7', {debug: true, track_pageview: true, persistence: 'localStorage'});

// Set this to a unique identifier for the user performing the event.
mixpanel.identify('USER_ID')

// 

function TechStack() {

  const { darkMode, toggleDarkMode } = useContext(AppStateContext);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  
  return (
    <div>
         <div className="md:grid hidden">
  {/* Desktop */}
  <div className={darkMode ? stylez.MainDesktopDivDarkMode : stylez.MainDesktopDiv}>
    <div className={`${stylez.AbsoluteImage}`}>
        <img src='images/header-gradient.png' /> 
    </div>
  <div className={`${styles.MainDesktopContentDiv}`}>
   {/* nav */}
   <div className={`${styles.MainDesktopNavbar}`}>
   <Link href='/' >
   <div className={`${styles.LoupaDiv}`}>
    <p className={`${styles.Loupa}`}>Loupa</p>
    <img  className={`${styles.LoupaImage}`} src='/images/realvjy.png'/>
   </div>
   </Link>
   <div className={`${styles.MainDesktopNavbarMenu}`}>
   <Link href='/nft' > <p>nft</p>  </Link>
    <Link href='/about' ><p>about</p></Link>
    <Link href='/techStack' > <p>tech stack</p> </Link>
   </div>

   <div className={`${styles.MainDesktopNavbarSocials}`}>
   <Link href='https://twitter.com/michaelloupa'>
      <div> <img src='/images/twitter (2).png' /> 
      </div>
    </Link>
    {/* <div> <img src='/images/insta (1).png' /> </div> */}
    <div onClick={toggleDarkMode}> <img src='/images/moon.png' /> </div>

   </div>
   </div>
 

 
  {/* About */}
  <div className="grid place-content-center items-center w-full justify-center">
    <p className={`${stylez.AboutPtag} mx-auto pt-[55px] pb-[12px]`}>App Stack</p>
    <p className={`${stylez.AboutParagraph} pb-[12px] w-1/2 mx-auto`}> Sharing my on-the-go app stack from working, managing, entertaining and more</p>
    <div className="mx-auto py-4">
        <img src ='/images/Decorative Bar.png'/>
    </div>
   </div>


{/* App and GAMES */}

<div className={`${darkMode ? stylezz.AppAndGamesDarkMode : stylezz.AppAndGames} grid w-full my-12`}>
<p className={`${stylez.CurrentH1tag} mx-auto text-center text-lg`}>APP AND GAMES</p>
    {/* <img src='/images/appStack.png' className="mx-auto"/> */}
    <img src={darkMode ? '/images/Appsdark.png' : '/images/Appslight.png'} alt="Image"  className="mx-auto"/>
</div>

   {/* Reach Out */}
   <div className={`${darkMode ? styles.OverallReachOutDivDarkMode : styles.OverallReachOutDiv} flex w-full py-4`}>
    <div className={`${styles.ReachOutMore} w-1/2 h-full grid place-content-center items-center pl-4`}>
      <p className={`${styles.ReachOutPtag} my-4`}>Reach Out</p>
      <p>Want to create something awesome? Or, you have any queries?</p>
      <p>Drop a message through email or twitter.</p>
      <div className="flex w-1/2 justify-between  pt-6 ml-0">
      <Link href="https://twitter.com/michaelloupa" > <img src='/images/radix.png' /> </Link>
      <a href="mailto:michaelloupa@gmail.com"> <img src='/images/material-symbols_mail-outline-rounded.png' /> </a>
      </div>
    </div>

    <div className={`${styles.ReachOutImg} w-1/2 flex relative h-full`}>
    <img  src='/images/message3d.png' className={`${styles.emailReachOut}`}/>
      <img  src='/images/email3d.png' className={`${styles.messageReachOut}`}/>
    </div>
   </div>

   {/* footer */}
   <div className="grid place-content-center items-center pb-[69px]">
    <p className={`${styles.MichaelLoupa} mx-auto pb-[32px] pt-[72px]`}>Michael Loupa</p>
  <div className="flex items-center mx-auto">
  <div className={`${styles.LineGray}`}></div>
    <p className={`${styles.Scaling}`} >Scale in thinking, priority in decision making.</p>
    <div className={`${styles.LineGray}`}></div>
  </div>
   </div>
  </div>
  </div>
 </div>

 <div className="grid md:hidden">
  {/* mobiledesign */}
  <div className={darkMode ? styles.MainDesktopDivDarkModeM : styles.MainDesktopDivM}>
  <div className={`${styles.MainDesktopContentDivM} `}>
{/* nav */}
<div className={`${styles.MainDesktopNavbar}`}>
   <Link href='/' >
   <div className={`${styles.LoupaDiv}`}>
    <p className={`${styles.Loupa}`}>Loupa</p>
    <img  className={`${styles.LoupaImage}`} src='/images/realvjy.png'/>
   </div>
   </Link>
   <Button onClick={toggleDrawer(true)}>
        <img src='/images/hamburger.png'/>
      </Button>


   </div>

   <SwipeableDrawer
        anchor="top"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div className="grid w-full">
         <div className="w-full0 flex place-content-end">
         <Button onClick={toggleDrawer(false)} className="" >
            <img src='/images/close.png' className=""/>
          </Button>
         </div>
          <Drawer />
        </div>
      </SwipeableDrawer>

 {/* About */}
 <div className="grid place-content-center items-center w-full justify-center">
    <p className={`${stylez.AboutPtagM} mx-auto pt-[30px] pb-[12px]`}>App Stack</p>
    <p className={`${stylez.AboutParagraphM} pb-[0px] w-10/12 mx-auto`}> Sharing my on-the-go app stack from working, managing, entertaining and more</p>
    <div className="mx-auto py-4">
        <img src ='/images/Decorative Bar.png'/>
    </div>
   </div>


{/* App and GAMES */}

<div className={`${darkMode ? stylezz.AppAndGamesDarkMode : stylezz.AppAndGames} py-12 my-4`}>
<p className={`${stylez.CurrentH1tag} mx-auto text-center`}>APP AND GAMES</p>
<img src={darkMode ? '/images/Appsdark.png' : '/images/Appslight.png'} alt="Image"  className="mx-auto"/>
</div>



      {/* Reach Out */}
      <div className={`${styles.OverallReachOutDivM} flex w-full `}>
    <div className={`${styles.ReachOutMore} w-3/4 h-full grid place-content-center items-center pl-4`}>
      <p className={`${styles.ReachOutPtagM} my-4`}>Reach Out</p>
      <p  className="text-sm md:text-lg" >Want to create something awesome? Or, you have any queries?</p>
      <p  className="text-sm md:text-lg" >Drop a message through email or twitter.</p>
      <div className="flex w-1/2 justify-between  pt-6 ml-0 pb-2 ">
      <Link href="https://twitter.com/michaelloupa" > <img src='/images/radix.png' /> </Link>
      <a href="mailto:michaelloupa@gmail.com"> <img src='/images/material-symbols_mail-outline-rounded.png' /> </a>
      </div>
    </div>

    <div className={`${styles.ReachOutImg} w-1/4 flex relative h-full`}>
    {/* <img  src='/images/message3d.png' className={`${styles.emailReachOut}`}/> */}
      <img  src='/images/email3d.png' className={`${styles.messageReachOutM}`}/>
    </div>
   </div>

     {/* footer */}
     <div className="grid place-content-center items-center pb-[69px]">
    <p className={`${styles.MichaelLoupaM} mx-auto pb-[32px] pt-[72px]`}>Michael Loupa</p>
  <div className="flex items-center mx-auto">
  <div className={`${styles.LineGrayM}`}></div>
    <p className={`${styles.ScalingM} text-center`} >Scale in thinking, priority in decision making.</p>
    <div className={`${styles.LineGrayM}`}></div>
  </div>
   </div>

  </div>
  </div>
 </div>
    </div>
  )
}

export default TechStack