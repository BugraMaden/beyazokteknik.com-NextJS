import React from 'react'
import {CgFacebook} from 'react-icons/cg';
import { CgInstagram } from 'react-icons/cg'
import { GrYoutube } from 'react-icons/gr'
import { GrTwitter } from 'react-icons/gr'
import { GrLinkedin } from 'react-icons/gr'
import Image from 'next/image';
import footerLogo from '../../public/images/footerlogo.png'
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='bg-[#0D0D2B]'>
            <div className='container mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-3 pt-[30px]'>
                  <div className=' flex flex-row justify-center  order-4 '>
                    <Image alt="logo of the footer" className='w-[100px] md:w-[150px]' src={footerLogo}/>
                    <p className="text-[#FFFFFF] mt-8 md:mt-12 text-[12px] md:text-sm font-['Inter']">BEYAZ OK <br /> TEKNİK SERVİS</p>
                  </div>
                  <div className='my-10 md:my-0 flex justify-center items-center'>
                    <div className='flex flex-col'>
                      <p className='text-[#FFFFFF] font-semibold mb-3'>Site Bağlantıları</p>
                      <Link href="/" className="mb-2 font-[300] text-[#FFFFFF] text-lg">Anasayfa</Link>
                      <Link href="/hakkimizda" className="mb-2 font-[300] text-[#FFFFFF] text-lg">Hakkımızda</Link>
                      <Link href="/hizmetlerimiz" className="mb-2 font-[300] text-[#FFFFFF] text-lg">Hizmetlerimiz</Link>
                      <Link href="/servisCagir" className="mb-2 font-[300] text-semibold text-[#FFFFFF] text-lg">Servis Çağır</Link>
                    </div>
                  </div>

                  <div className='mb-5 md:mb-0 flex justify-center -order-1 md:order-4 items-center'>
                    <div className='text-[#ffffff]'>
                      <p className='text-semibold text-center mb-3 font-["Rubik"]'>ÇOK YAKINDA</p>
                        <div className='flex flex-row'>
                          <CgFacebook className='mr-3 cursor-pointer' size={25}/>
                          <CgInstagram className='mr-3 cursor-pointer' size={25}/>
                          <GrYoutube className='mr-3 cursor-pointer' size={25}/>
                          <GrTwitter className='mr-3 cursor-pointer' size={25}/>
                          <GrLinkedin className='mr-3 cursor-pointer' size={25}/>
                        </div>
                    </div>
                  </div>
              </div>
              <p className='text-center text-sm text-[#FFFFFF] pt-[45px]'>©2023 BEYAZ OK. All Rights Reserved<br/>CREATED BY RazorSharp</p>
            </div>
          </div>
  )
}

export default Footer
