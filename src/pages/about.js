import styles from "../styles/index.module.css";
import stylez from '../styles/about.module.css';
import Link from "next/link";
import { useContext,useState } from 'react';
import { AppStateContext } from '../AppState';
import { SwipeableDrawer, Button } from '@mui/material';
import Drawer from "@/components/drawer";


function About() {

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
    <div onClick={toggleDarkMode}> <img src='/images/moon.png' /> </div>

   </div>
   </div>
 

   {/* About */}
   <div className="grid place-content-center items-center w-full justify-center">
    <p className={`${stylez.AboutPtag} mx-auto pt-[55px] pb-[12px]`}>About</p>
    <div className="mx-auto py-4">
        <img src ='/images/Decorative Bar.png'/>
    </div>
  <div className="w-full flex place-content-center ">
  <img  src='/images/about1.png' className={`${stylez.AboutImage} `}/>
  </div>
   </div>


{/* Mission */}
<div className={`${stylez.ContentAboutDiv} grid place-content-center pt-[40px]`}>
    <p className={`${ darkMode ? stylez.IndividualParagraphDarkMode : stylez.IndividualParagraph}`} >
    As a seasoned UI/UX designer with over 4 years of experience, I specialize in crafting intuitive 
    and visually captivating user experiences. With a strong command of industry-leading tools such as 
    Figma, Adobe Creative Suite, Sketch, and Blender 3D, I excel in developing brand identities, creating 
    process flows, and designing user-centric interfaces.
</p>
<p className={`${stylez.CurrentH1tag}`}> CURRENT</p>
<p className={`${ darkMode ? stylez.IndividualParagraphDarkMode : stylez.IndividualParagraph}`} > 
Working as an independent contractor with top brands in product design and development. 
I also spend time at my home studio building design resources, Learning 3d, Experimenting in AI, Exploring web3/NFT and Metaverse.
</p>

<p className={`${stylez.CurrentH1tag}`}>Serious enquiry </p>
<p className={`${ darkMode ? stylez.IndividualParagraphDarkMode : stylez.IndividualParagraph}`} > 
You can find me on everywhere with handle @michaelloupa. 

For partnerships, collaborations, sponsorships, commissions, events, you can reach out to me at michaelloupa@gmail.com or <strong>tweet</strong>.
</p>

<p className={`${stylez.CurrentH1tag}`}>RESOURCES</p>
<p className={`${ darkMode ? stylez.IndividualParagraphDarkMode : stylez.IndividualParagraph}`}>
<p className={`${darkMode ? stylez.subTopicDarkMode : stylez.subTopic} py-4`}> UX patterns for defi applications. </p>
    Blockchain has seen various innovations in its technical space. But bloockchain adoption faces challenges due to lack of universal standard design systems.
    <p className={`${ darkMode ? stylez.DateDarkMode : stylez.Date} py-4`} >May 7, 2022 • Michael Kazungu.</p>
</p>
<p className={`${ darkMode ? stylez.IndividualParagraphDarkMode : stylez.IndividualParagraph}`}>
    <p className={`${darkMode ? stylez.subTopicDarkMode : stylez.subTopic} py-4`} > Giving  blockchain its unique visual identity. </p>
    In this article, I explain various ux patterns applied in defi applications, their key features, and drawbacks to mobile first approach.
    <p className={`${ darkMode ? stylez.DateDarkMode : stylez.Date} py-4`}> May 7, 2022 • Michael Kazungu.</p>
</p>


</div>

{/* Design Letter */}
{/* <div className={`${stylez.DesignLetter} flex w-full `}>
<div className="w-1/2 text-start px-4 grid place-content-center  ">
    <p className={`${stylez.DesignLetterPtag} py-4 `}>Design Letter</p>
    <p>Join the designletter and get exclusive updates & digital art inspiration directly to your inbox.</p>
    <div className="py-4">
        <button className={`${stylez.Subscribe}`}>Subscribe</button>
    </div>
</div>
<div className="w-1/2 h-full">
    <img  src='/images/about2.png' className="mx-auto w-[213px] h-[227px]"/>
</div>
</div> */}

   {/* Reach Out */}
   <div className={`${darkMode ? styles.OverallReachOutDivDarkMode : styles.OverallReachOutDiv} flex w-full `}>
    <div className={`${styles.ReachOutMore} w-1/2 h-full grid place-content-center items-center pl-4`}>
      <p className={`${styles.ReachOutPtag} my-4`}>Reach Out</p>
      <p>Want to create something awesome? Or, you have any queries?</p>
      <p>Drop a message through email or twitter.</p>
      <div className="flex w-1/2 left-0 justify-center gap-4  pt-6 ml-0 p-2">
      <Link href="https://twitter.com/michaelloupa" > <img src='/images/radix.png' /> </Link>
      <a href="mailto:michaelloupa@gmail.com"> <img src='/images/material-symbols_mail-outline-rounded.png' /> </a>
      </div>
    </div>

    <div className={`${styles.ReachOutImg} w-1/2 flex relative h-full`}>
    <img  src='/images/message3d.png' className={`${styles.emailReachOut}`}/>
    
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
        <p className={`${stylez.AboutPtagM} mx-auto pt-[30px] pb-[12px]`}>About</p>
        <p className={`${stylez.AboutParagraphM} pb-[12px] w-10/12 mx-auto`}>It&lsquo;s not that difficult to find my contact information by searching Michael Loupa. Know a little more about me here.</p>
        <div className="mx-auto py-4">
          <img src="/images/Decorative Bar.png" />
        </div>
        <div className="w-full flex place-content-center ">
          <img src="/images/about1.png" className={`${stylez.AboutImage} `} />
        </div>
      </div>

      {/* Mission */}
      <div className={`${stylez.ContentAboutDivM} grid place-content-center pt-[40px]`}>
        <p className={`${darkMode ? stylez.IndividualParagraphDarkMode : stylez.IndividualParagraph}`}>My mission as a web3 designer is to work towards giving blockchain its visual identity.
          At a point where this space needs the trust of users, increased accessibility and wider adoption, I employ a user-first approach in designing blockchain platforms that are not only interactive but also have a low-entry level of its use aimed at accelerating blockchain adoption.</p>
        <p className={`${stylez.CurrentH1tag}`}>CURRENT</p>
        <p className={`${darkMode ? stylez.IndividualParagraphDarkMode : stylez.IndividualParagraph}`}>Working as an independent contractor to help brands with visuals and design system. And most of the time, spending time at my studio building design tools and resources, learning 3D, experimenting in Figma, exploring web3/NFT, and the Metaverse.</p>
        <p className={`${stylez.CurrentH1tag}`}>Serious enquiry and awards</p>
        <p className={`${darkMode ? stylez.IndividualParagraphDarkMode : stylez.IndividualParagraph}`}>You can find me everywhere with the handle @michaelloupa.
          For partnerships, collaborations, sponsorships, commissions, events, you can reach out to me at michaelloupa@gmail.com or <strong>tweet</strong>.</p>
        <p className={`${stylez.CurrentH1tag}`}>RESOURCES</p>
        <div className={`${darkMode ? stylez.IndividualParagraphDarkMode : stylez.IndividualParagraph}`}>
          <p className={`${darkMode ? stylez.subTopicDarkMode : stylez.subTopic} py-4`}>UX patterns for DeFi applications.</p>
          Blockchain has seen various innovations in its technical space. But blockchain adoption faces challenges due to the lack of a universal standard design system.
          <p className={`${darkMode ? stylez.DateDarkMode : stylez.Date} py-4`}>May 7, 2022 • Michael Kazungu.</p>
        </div>
        <div className={`${darkMode ? stylez.IndividualParagraphDarkMode : stylez.IndividualParagraph}`}>
          <p className={`${darkMode ? stylez.subTopicDarkMode : stylez.subTopic} py-4`}>Giving blockchain its unique visual identity.</p>
          In this article, I explain various UX patterns applied in DeFi applications, their key features, and drawbacks to the mobile-first approach.
          <p className={`${darkMode ? stylez.DateDarkMode : stylez.Date} py-4`}>May 7, 2022 • Michael Kazungu.</p>
        </div>
      </div>

      {/* Design Letter */}
      <div className={`${stylez.DesignLetterM} flex w-full `}>
        <div className="w-3/4 text-start px-4 grid place-content-center  ">
          <p className={`${stylez.DesignLetterPtagM} py-4 `}>Design Letter</p>
          <p>Join the Design Letter and get exclusive updates & digital art inspiration directly to your inbox.</p>
          <div className="py-4">
            <button className={`${stylez.SubscribeM}`}>Subscribe</button>
          </div>
        </div>
        <div className="w-1/4 h-full flex place-content-center items-center">
          <img src="/images/about2.png" className="mx-auto w-[120px] h-[100px]" />
        </div>
      </div>

      {/* Reach Out */}
      <div className={`${styles.OverallReachOutDivM} flex w-full `}>
        <div className={`${styles.ReachOutMore} w-3/4 h-full grid place-content-center items-center pl-4`}>
          <p className={`${styles.ReachOutPtagM} my-4`}>Reach Out</p>
          <p className="text-sm md:text-lg">Want to create something awesome? Or, do you have any queries?</p>
          <p className="text-sm md:text-lg">Drop a message through email or Twitter.</p>
          <div className="flex w-1/2 justify-between  pt-6 ml-0 pb-2">
          <Link href="https://twitter.com/michaelloupa" > <img src='/images/radix.png' /> </Link>
          <a href="mailto:michaelloupa@gmail.com"> <img src='/images/material-symbols_mail-outline-rounded.png' /> </a>
          </div>
        </div>
        <div className={`${styles.ReachOutImg} w-1/4 flex relative h-full`}>
          {/* <img  src='/images/message3d.png' className={`${styles.emailReachOut}`}/> */}
          <img src="/images/email3d.png" className={`${styles.messageReachOutM}`} />
        </div>
      </div>

      {/* footer */}
      <div className="grid place-content-center items-center pb-[69px]">
        <p className={`${styles.MichaelLoupaM} mx-auto pb-[32px] pt-[72px]`}>Michael Loupa</p>
        <div className="flex items-center mx-auto">
          <div className={`${styles.LineGrayM}`}></div>
          <p className={`${styles.ScalingM} text-center`}>Scale in thinking, priority in decision making.</p>
          <div className={`${styles.LineGrayM}`}></div>
        </div>
      </div>
    </div>
  </div>
</div>

 
    </div>
    
   
  )
}

export default About