"use client"
import React from 'react'
import Image from 'next/image';
import logo from '../../../public/images/footerlogo.png';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import Button from './Button';
import {SiHomeassistant} from 'react-icons/si'
import {MdMiscellaneousServices} from 'react-icons/md';
import {AiOutlinePaperClip} from 'react-icons/ai'
import {MdContactMail} from 'react-icons/md';

const Navbar = () => {
  const[menuShow,setMenuShow]=useState(false);
  const[dropList,setDropList]=useState(false);
  
  function showDropList(){
    setDropList(!dropList);
  }

  function updateMenu(){
      setMenuShow(!menuShow);
  }

  return (
      <div>
         <nav className='bg-[#0D0D2B]'>
          <div className='container flex flex-row md:mx-auto bg-[#0D0D2B]'>
              <div className='flex flex-row'>
                  <Image className='ml-4 md:ml-20 mt-4 md:mt-8 md:w-[55px] md:h-[69px] w-[50px] h-[62px]' src={logo} alt="logo of the website"/>
                  <p className="text-[#FFFFFF] mt-8 md:mt-12 text-[11px] md:text-xs lg:text-sm	font-['Inter']">BEYAZ OK <br /> TEKNİK SERVİS</p>
              </div>
      
                <div className='md:hidden mt-3 burgerMenu'>
                  <button onClick={updateMenu}>
                    <GiHamburgerMenu color='white' size={28}/>
                  </button>
                </div>
              <div className={`${menuShow ? "container mx-auto bottom-[7vh] grid grid-cols-4 fixed":"hidden md:hidden"}`}>
                
                <div className={` ${dropList ? "droplist col-start-3 ":"hidden md:hidden"}`} >
                      <Link className='block text-center text-[#ffffff] mt-3 text-sm' href='/buzdolabi-tamiri'>Buzdolabı</Link>
                      <Link className='block text-center text-[#ffffff] mt-3 text-sm' href='/camasir-makinesi-tamiri'>Çamaşır Makinesi</Link>
                      <Link className='block text-center text-[#ffffff] mt-3 text-sm' href='/bulasik-makinesi-tamiri'>Bulaşık<br/> Makinesi</Link>
                      <Link className='block text-center text-[#ffffff] mt-3 mb-3 text-sm'  href='/camasir-kurutucu-tamiri'>Çamaşır Kurutucu</Link>
                </div>
              
              </div>
                <div className={`menuContainer ${menuShow ? 'container mx-auto grid grid-cols-4':'hidden md:hidden'}`}>
                  <div className='mobileNavItems flex flex-col justify-center items-center'>
                      <Link href="/" className="flex flex-col justify-center items-center text-[#ffffff] font-[300] text-sm"><SiHomeassistant size={18} color='white'/>Anasayfa</Link>
                  </div>
                  <div className='mobileNavItems flex flex-col justify-center items-center'>
                      <Link href="/hakkimizda" className=" font-[300] text-[#ffffff] flex flex-col justify-center items-center text-sm"><AiOutlinePaperClip size={18} color='white'/>Hakkımızda</Link>
                  </div>
            
               
                <div className='mobileNavItems flex flex-col justify-center items-center' onClick={showDropList} >
                  <button className=" text-[#ffffff] flex flex-col justify-center items-center dropbtn font-[300] text-sm">
                  <MdMiscellaneousServices size={18} color='white'/>
                        Hizmetlerimiz
                  </button>
                </div>

                  <div className='mobileNavItems flex flex-col justify-center items-center'>
                    <MdContactMail size={18} color='white'/>
                    <Button imgClass={"hidden"} propClassName={"font-['sans-serif'] text-[#ffffff] font-[300] h-[22px] text-sm"} propText={"Bilgi Servisi"}/>
                  </div>
                </div>
            
              <div className=' hidden md:flex flex-row ml-auto mr-[50px]'>
                  <Link href="/" className="mt-12 lnk mr-[30px] md:mr-[40px] font-[300] text-[#FFFFFF] md:text-base lg:text-lg">Anasayfa</Link>
                  <Link href="/hakkimizda" className="lnk mt-12 mr-[30px] md:mr-[40px] font-[300] text-[#FFFFFF] md:text-base lg:text-lg">Hakkımızda</Link>
                  
                  <div className='mt-12 dropdown mr-[40px]'>
                  <button className="dropbtn lnk font-[300] text-[#FFFFFF] md:text-base lg:text-lg">
                    Hizmetlerimiz
                  </button>
                  <div className='dropdown-content'>
                      <Link  href='/buzdolabi-tamiri'>Buzdolabı</Link>
                      <Link  href='/camasir-makinesi-tamiri'> Çamaşır Makinesi</Link>
                      <Link  href='/bulasik-makinesi-tamiri'> Bulaşık Makinesi</Link>
                      <Link  href='/camasir-kurutucu-tamiri'> Çamaşır Kurutucu</Link>
                    </div>
                  </div>
                 <Button propText={"Servis Çağır"} imgClass={"hidden"} propClassName={"mt-11 mr-[50px] text-[#FFFFFF] rounded-full md:text-xs whitespace-nowrap lg:text-base bg-[#3671E9] px-10 md:px-5  h-9"}/>
              </div>
            </div>
          </nav>
        </div>
          
  )
}

export default Navbar
