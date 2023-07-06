import styles from "../styles/index.module.css";
import stylez from '../styles/nft.module.css';
import nft from '../components/nft'
import Link from "next/link";
import { useContext ,useState} from 'react';
import { AppStateContext } from '../AppState';
import { SwipeableDrawer, Button } from '@mui/material';
import Drawer from "@/components/drawer";


function Nft() {
 
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
 

 {/* NFTs */}
 <div className="grid w-3/4 mx-auto py-4">
<img  src='/images/profile2.png' className={`${stylez.nftProfile} mx-auto`}/>
<p className={`${stylez.welcomeTo} py-1 mx-auto`} >welcome to</p>
<p className={`${stylez.MichaelSpatial} py-1 mx-auto`}>michael loupa’s spatial</p>
<p className={` ${darkMode ? stylez.MydigitalArtsDarkMode : stylez.MydigitalArts} w-1/2 text-center mx-auto py-2`}>My digital arts are also available to collect from various NFT platforms. Experience my digital arts in virtual experiences on my spatial.</p>
<div className={`${stylez.The3Buttons} flex justify-between mx-auto py-4`} >
<Link href='https://opensea.io/Savannah_Arts'> <img  src="/images/opensea.png" className="w-[75px]" /></Link>
 <Link href="https://www.spatial.io/@michael_loupa_53390"> <img  src="/images/spatial.png" className="w-[75px]"/></Link>
 <Link href="https://www.spatial.io/s/SUNSET-SAVANNAH-COLLECTION-6474bc23beec827ded58d953?share=8936219542412280757"><img  src="/images/galleries.png" className="w-[75px]"/></Link>
</div>
 </div>


 <div className="w-10/12 mx-auto py-4">
  <img src="/images/sunsetSavannah.png" className="mx-auto my-12 w-full h-[440px]" />
  <p className={`${darkMode ? stylez.TopicDarkMode : stylez.Topic}`}>Sunset Savannah</p>
  <p className={`${stylez.CollectionNft} text-slate-400`}>A collection of generative AI NFTs on the ethereum blockchain. Telling african stories through generative AI. Collaboration with Savannah Arts.</p>
  <div className="flex py-4">
  <Link href="https://www.spatial.io/@michael_loupa_53390"> <img src='/images/spatialbutton.png' className="pr-6" /> </Link>
  <Link href="https://twitter.com/michaelloupa">  <img src='/images/twitterbutton.png' /> </Link>
  </div>
</div>



{/* nfts */}
<div className={`${stylez.NftDiv} py-24`}>

{nft.map((item)=>(
  <div  key={item.id} className={`${stylez.NftCard}  grid place-content-center`}>
  <div className={`${stylez.nftImageDiv}`}>
  <img src={item.status} className={`${stylez.AuctionTagImage}`}/>
  <img src={item.image}/>
  </div>
  <div className={`${stylez.nftCaptionsDiv} flex items-center`}>
    <p className="pr-2">single</p>
    <img  src='/images/star.png' className="w-[10px]  h-[12px]" />
    <p className="px-2">rarible</p>
  </div>
  <p className={`${darkMode ? stylez.TopicDarkMode : stylez.Topic} py-2`}>{item.tagLine}</p>
  <div className="flex items-center" >
  <img src='/images/eth.png'className="w-[13px] h-[15px] mx-1"/>
  <p className="text-slate-400"> {item.price}E</p>
  </div>
  </div>
))}
</div>


   {/* Reach Out */}
   <div className={`${darkMode ? styles.OverallReachOutDivDarkMode : styles.OverallReachOutDiv} flex w-full `}>
    <div className={`${styles.ReachOutMore} w-1/2 h-full grid place-content-center items-center pl-4`}>
      <p className={`${styles.ReachOutPtag} my-4`}>Reach Out</p>
      <p>Want to create something awesome? Or, you have any queries?</p>
      <p>Drop a message through email or twitter.</p>
      <div className="flex w-1/2 justify-between  pt-6 ml-0 pb-2">
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


 {/* NFTs */}
 <div className="grid w-full  mx-auto py-4">
<img  src='/images/profile2.png' className={`${stylez.nftProfile} mx-auto`}/>
<p className={`${stylez.welcomeToM} py-1 mx-auto`} >welcome to</p>
<p className={`${stylez.MichaelSpatialM} py-1 mx-auto`}>michael loupa’s spatial</p>
<p className={` ${stylez.MydigitalArtsM} w-full text-center mx-auto py-1`}>My digital arts are also available to collect from various NFT platforms. Experience my digital arts in virtual experiences on my spatial.</p>
<div className={`${stylez.The3ButtonsM} flex justify-between mx-auto py-4`} >
 <Link href='https://opensea.io/Savannah_Arts'> <img  src="/images/opensea.png" className="w-[75px]" /></Link>
 <Link href="https://www.spatial.io/@michael_loupa_53390"> <img  src="/images/spatial.png" className="w-[75px]"/></Link>
 <Link href="https://www.spatial.io/s/SUNSET-SAVANNAH-COLLECTION-6474bc23beec827ded58d953?share=8936219542412280757"><img  src="/images/galleries.png" className="w-[75px]"/></Link>
</div>
 </div>


 <div className="w-full mx-auto py-12">
  <img src="/images/sunsetSavannah.png" className="mx-auto my-4 w-full h-[280px]" />
  <p className={`${ darkMode ? stylez.TopicDarkModeM : stylez.Topic}`}>Sunset Savannah</p>
  <p className={`${stylez.CollectionNft} text-slate-400`}>A collection of generative AI NFTs on the ethereum blockchain. Telling african stories through generative AI. Collaboration with Savannah Arts.</p>
  <div className="flex py-4">
  <Link href="https://www.spatial.io/@michael_loupa_53390"> <img src='/images/spatialbutton.png' className="pr-6" /> </Link>
  <Link href="https://twitter.com/michaelloupa">  <img src='/images/twitterbutton.png' /> </Link>
  </div>
</div>



{/* nfts */}
<div className={`${stylez.NftDiv} py-8`}>

{nft.map((item)=>(
  <div key={item.id} className={`${stylez.NftCardM}  grid place-content-center`}>
  <div className={`${stylez.nftImageDiv}`}>
  <img src={item.status} className={`${stylez.AuctionTagImage}`}/>
  <img src={item.image}/>
  </div>
  <div className={`${stylez.nftCaptionsDiv} flex items-center`}>
    <p className="pr-2">single</p>
    <img  src='/images/star.png' className="w-[10px]  h-[12px]" />
    <p className="px-2">rarible</p>
  </div>
  <p className={`${ darkMode ? stylez.TopicDarkModeM : stylez.TopicM} py-2`}>{item.tagLine}</p>
  <div className="flex items-center" >
  <img src='/images/eth.png'className="w-[13px] h-[15px] mx-1"/>
  <p className="text-slate-400"> {item.price}E</p>
  </div>
  </div>
))}
</div>

      {/* Reach Out */}
      <div className={`${styles.OverallReachOutDivM} flex w-full `}>
    <div className={`${styles.ReachOutMore} w-3/4 h-full grid place-content-center items-center pl-4`}>
      <p className={`${styles.ReachOutPtagM} my-4`}>Reach Out</p>
      <p  className="text-sm md:text-lg" >Want to create something awesome? Or, you have any queries?</p>
      <p  className="text-sm md:text-lg" >Drop a message through email or twitter.</p>
      <div className="flex w-1/2 justify-between  pt-6 ml-0 ">
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

export default Nft