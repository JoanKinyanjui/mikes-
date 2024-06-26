import styles from "../styles/index.module.css";
import projects from '../components/projects';
import Link from "next/link";
import { useContext,useState} from 'react';
import { AppStateContext } from '../AppState';
import { SwipeableDrawer, Button } from '@mui/material';
import Drawer from "@/components/drawer";
import mixpanel from 'mixpanel-browser';

//MIXPANEL

mixpanel.init('db720c3a75ceff7b57e65207ad7b18e7', {debug: true, track_pageview: true, persistence: 'localStorage'});

// Set this to a unique identifier for the user performing the event.
mixpanel.identify('USER_ID')

export default function Home() {
  const { darkMode, toggleDarkMode } = useContext(AppStateContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };


  return (
 <div>
  <div className="md:grid hidden">
    {/* Desktop */}
 <div className={darkMode ? styles.MainDesktopDivDarkMode : styles.MainDesktopDiv}>
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
   {/* First hero */}
   <div className="pt-[35px]">
    <div className="grid place-content-center items-center px-6">
      <div>
        <img src='/images/mikeProfile.png' className="mx-auto" />
      </div>
      <div className="px-4 mx-auto w-full text-center">
        <p className="mx-auto text-[20px] text-[#0E0E0E]">Michael Kazungu</p>
        <p className="italic text-neutral-600 mx-auto text-[16px]">michaelloupa</p>
      </div>
    </div>
    <div className="px-6 pt-[36px]">
      <p className={`${styles.AboutFirstHero}`}>As a seasoned UI/UX designer with over 
      4 years of experience, I specialize in crafting intuitive and visually captivating 
      user experiences. With a strong command of industry-leading tools such as Figma, 
      Adobe Creative Suite, Sketch, and Blender 3D, I excel in developing brand 
      identities, creating process flows, and designing user-centric interfaces.</p>
    </div>
   </div>

   {/* Featured Projects */}
   <div className='pt-[76px] px-6 mb-[171px] '>
    <p className={`${styles.FeaturedPtag} py-4 `}>Featured Projects</p>
    <div className="pt-[26px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{projects.map((item) => (
 <Link href={item.link} key={item.id}>
  <div key={item.id} className={`${darkMode ? styles.FaeturedProjectsDivDarkMode : styles.FaeturedProjectsDiv} grid items-center place-content-center`}>
                  <img src={item.image} className={`${styles.ImageProjectDiv}`} />
                  <div className={`${styles.AllContentOfProjects}`}>
                    <p className={`${styles.SwyptName}`}>{item.name}</p>
                    <p className={`${styles.SwyptPtag} py-1`}>{item.tagLine}</p> {/* Corrected property name */}
                </div>
              </div></Link>
            ))}
</div>
   </div>


   {/* Reach Out */}
   <div className={`${darkMode ? styles.OverallReachOutDivDarkMode : styles.OverallReachOutDiv} flex w-full `}>
    <div className={`${styles.ReachOutMore} w-1/2 h-full grid place-content-center items-center pl-2`}>
      <p className={`${styles.ReachOutPtag} my-4`}>Reach Out</p>
      <p>Want to create something awesome? Or, you have any queries?</p>
      <p>Drop a message through email or twitter.</p>
      <div className="flex w-1/2 justify-between  pt-6 ml-0 pb-2">
      <Link href="https://twitter.com/michaelloupa" > <img src='/images/radix.png' /> </Link>
        <a href="mailto:michaelloupa@gmail.com"> <img src='/images/material-symbols_mail-outline-rounded.png' /> </a>
      </div>
    </div>

    <div className={`${styles.ReachOutImg} w-1/2 flex relative h-full `}>
    <img  src='/images/email3d.png' className={`${styles.messageReachOut}`}/>
    <img  src='/images/message3d.png' className={`${styles.emailReachOut} w-full h-full`}/>
 
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

   {/* First hero */}
   <div className="pt-[30px]">
    <div className="grid place-content-center items-center ">
      <div>
        <img src='/images/mikeProfile.png'  className="mx-auto"/>
      </div>
  <div className="px-4 mx-auto w-full text-center">
        <p className="mx-auto text-[18px] text-[#0E0E0E]">Michael Loupa</p>
        <p className="italic text-neutral-600 mx-auto text-[15px]">michaelloupa.me</p>
      </div>
    </div>
    <div className=" pt-[30px]">
      <p className={`${styles.AboutFirstHeroM}`}>My mission as a web3 designer is to work towards giving blockchain its visual identity. 
At a point where this space needs the trust of users, increased accessibility and wider 
adoption, I employ a user-first approach in designing blockchain platforms that are not 
only interactive but also have a low-entry level of its use aimed at accelerating blockchain 
adoption.</p>
    </div>
   </div>

    {/* Featured Projects */}
    <div className='pt-[25px] mb-[50px] '>
    <p className={`${styles.FeaturedPtag} mx-auto flex place-content-center py-4 `}>Featured Projects</p>
    <div className="pt-[16px] flex flex-wrap justify-center gap-6">
{projects.map((item) => (
   <Link href={item.link} key={item.id}>
                <div key={item.id} className={` ${ darkMode ? styles.FaeturedProjectsDivDarkModeM :  styles.FaeturedProjectsDivM}  grid items-center place-content-center`}>
                  <img src={item.image} className={`${styles.ImageProjectDivM}`} />
                  <div className={`${styles.AllContentOfProjects}`}>
                    <p className={`${styles.SwyptNameM}`}>{item.name}</p>
                    <p className={`${styles.SwyptPtag} py-1`}>{item.tagLine}</p> {/* Corrected property name */}
                </div>
              </div>
              </Link>
            ))}
</div>
   </div>


      {/* Reach Out */}
      <div className={`${styles.OverallReachOutDivM} flex w-full `}>
    <div className={`${styles.ReachOutMore} w-3/4 h-full grid place-content-center items-center pl-4`}>
      <p className={`${styles.ReachOutPtagM} my-4`}>Reach Out</p>
      <p  className="text-sm md:text-lg" >Want to create something awesome? Or, you have any queries?</p>
      <p  className="text-sm md:text-lg" >Drop a message through email or twitter.</p>
      <div className="flex w-1/2 justify-between  pt-6 ml-0 pb-2">
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
