import styles from "../styles/index.module.css";
import projects from '../components/projects';
import Link from "next/link";
import { useContext } from 'react';
import { AppStateContext } from '../AppState';

export default function Home() {
  const { darkMode, toggleDarkMode } = useContext(AppStateContext);


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
    <Link href='/' > <p>work</p></Link>
    <Link href='/' > <p>blog</p></Link>
    <Link href='/techStack' > <p>tech stack</p> </Link>
    <div className="flex"><p className="pr-2">more</p> <img src='/images/down.png'/></div>
   </div>

   <div className={`${styles.MainDesktopNavbarSocials}`}>
    <div> <img src='/images/twitter (2).png' /> </div>
    <div> <img src='/images/insta (1).png' /> </div>
    <div onClick={toggleDarkMode}> <img src='/images/moon.png' /> </div>

   </div>
   </div>
   {/* First hero */}
   <div className="pt-[35px]">
    <div className="flex place-content-start items-center px-6">
      <div>
        <img src='/images/mikeProfile.png' />
      </div>
      <div className="px-4">
        <p>Michael Loupa</p>
        <p className="italic text-neutral-600">michaelloupa.me</p>
      </div>
    </div>
    <div className="px-6 pt-[36px]">
      <p className={`${styles.AboutFirstHero}`}>My mission as a web3 designer is to work towards giving blockchain its visual identity. 
At a point where this space needs the trust of users, increased accessibility and wider 
adoption, I employ a user-first approach in designing blockchain platforms that are not 
only interactive but also have a low-entry level of its use aimed at accelerating blockchain 
adoption.</p>
    </div>
   </div>

   {/* Featured Projects */}
   <div className='pt-[76px] px-6 mb-[171px] '>
    <p className={`${styles.FeaturedPtag} py-4 `}>Featured Projects</p>
    <div className="pt-[26px] flex flex-wrap justify-center gap-6">
{projects.map((item) => (
  <div key={item.id} className={`${darkMode ? styles.FaeturedProjectsDivDarkMode : styles.FaeturedProjectsDiv} grid items-center place-content-center`}>
                  <img src={item.image} className={`${styles.ImageProjectDiv}`} />
                  <div className={`${styles.AllContentOfProjects}`}>
                    <p className={`${styles.SwyptName}`}>{item.name}</p>
                    <p className={`${styles.SwyptPtag} py-1`}>{item.tagLine}</p> {/* Corrected property name */}
                </div>
              </div>
            ))}
</div>
   </div>


   {/* Reach Out */}
   <div className={`${darkMode ? styles.OverallReachOutDivDarkMode : styles.OverallReachOutDiv} flex w-full `}>
    <div className={`${styles.ReachOutMore} w-1/2 h-full grid place-content-center items-center pl-2`}>
      <p className={`${styles.ReachOutPtag} my-4`}>Reach Out</p>
      <p>Want to create something awesome? Or, you have any queries?</p>
      <p>Drop a message through email or twitter.</p>
      <div className="flex w-1/2 justify-between  pt-6 ml-0">
        <img src='/images/radix.png' />
        <img src='/images/material-symbols_mail-outline-rounded.png' />
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
   {/* <div className={`${styles.MainDesktopNavbarMenu}`}>
    <Link href='/nft' > <p>nft</p>  </Link>
    <Link href='/about' ><p>about</p></Link>
    <Link href='/' > <p>work</p></Link>
    <Link href='/' > <p>blog</p></Link>
    <Link href='/techStack' > <p>tech stack</p> </Link>
    <div className="flex"><p className="pr-2">more</p> <img src='/images/down.png'/></div>
   </div> */}

   <div className={`${styles.MainDesktopNavbarSocials}`}>
    <div> <img src='/images/twitter (2).png' /> </div>
    <div> <img src='/images/insta (1).png' /> </div>
    <div onClick={toggleDarkMode}> <img src='/images/moon.png' /> </div>

   </div>
   </div>

   {/* First hero */}
   <div className="pt-[30px]">
    <div className="flex place-content-start items-center ">
      <div>
        <img src='/images/mikeProfile.png' />
      </div>
      <div className="">
        <p>Michael Loupa</p>
        <p className="italic text-neutral-600">michaelloupa.me</p>
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
    <p className={`${styles.FeaturedPtag} py-4 `}>Featured Projects</p>
    <div className="pt-[16px] flex flex-wrap justify-center gap-6">
{projects.map((item) => (
                <div key={item.id} className={` ${ darkMode ? styles.FaeturedProjectsDivDarkModeM :  styles.FaeturedProjectsDivM}  grid items-center place-content-center`}>
                  <img src={item.image} className={`${styles.ImageProjectDivM}`} />
                  <div className={`${styles.AllContentOfProjects}`}>
                    <p className={`${styles.SwyptNameM}`}>{item.name}</p>
                    <p className={`${styles.SwyptPtag} py-1`}>{item.tagLine}</p> {/* Corrected property name */}
                </div>
              </div>
            ))}
</div>
   </div>


      {/* Reach Out */}
      <div className={`${styles.OverallReachOutDivM} flex w-full `}>
    <div className={`${styles.ReachOutMore} w-3/4 h-full grid place-content-center items-center pl-4`}>
      <p className={`${styles.ReachOutPtagM} my-4`}>Reach Out</p>
      <p  className="text-sm md:text-lg" >Want to create something awesome? Or, you have any queries?</p>
      <p  className="text-sm md:text-lg" >Drop a message through email or twitter.</p>
      <div className="flex w-1/2 justify-between  pt-6 ml-0 ">
        <img src='/images/radix.png' />
        <img src='/images/material-symbols_mail-outline-rounded.png' />
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
