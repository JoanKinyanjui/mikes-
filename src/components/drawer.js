import React from 'react';
import styles from '../styles/drawer.module.css';
import styless from '../styles/index.module.css';
import Link from 'next/link';

function Drawer() {
  return (
    <div>
  <div className='w-10/12 mx-auto '>
   <img src='/images/mikeProfile.png' className='mx-auto'/>
   <div className='place-content-center  flex w-full'><p className={`${styles.MichaelLoupaWord}`}>Michael Loupa</p></div>
   <div className='place-content-center  flex w-full'> <p className={`${styles.DesignandDevelopment} `}>Design and Development</p></div>
  </div>

  <div className='grid place-content-center w-10/12 mx-auto py-4 '>
<Link href='/'>
<div className={`${styles.HomeDiv} w-full  py-[35px] flex place-content-center`}> <p>Home</p></div>
</Link>
   <div className={`${styles.BorderBox}`}></div>
   <Link href='/about'>
   <div className={`${styles.HomeDiv}  py-[35px] flex place-content-center`}><p>About</p></div>
   </Link>
   <div className={`${styles.BorderBox}`}></div>
   <Link href='/nft'>
   <div className={`${styles.HomeDiv}  py-[35px] flex place-content-center`}><p>Nft</p></div>
   </Link>
   <div className={`${styles.BorderBox}`}></div>
   <Link href='/techStack'>
   <div className={`${styles.HomeDiv}  py-[35px] flex place-content-center`}><p>TechStack</p></div>
   </Link>
   <div className={`${styles.BorderBox}`}></div>

  </div>

   {/* Reach Out */}
   <div className={`${styless.OverallReachOutDivM} flex w-10/12 max-auto shadow-lg py-2`}>
    <div className={`${styless.ReachOutMore} w-3/4 h-full grid place-content-center items-center pl-4`}>
      <p className={`${styless.ReachOutPtagM} my-4`}>Reach Out</p>
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
  </div>
  )
}

export default Drawer