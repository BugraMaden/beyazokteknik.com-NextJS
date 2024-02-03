import React from 'react'
import logoHakkimizda from '../../../public/images/logoHakkimizda.png'
import Image from 'next/image'
import ArrowRight from '../../../public/images/ArrowRight.png'
import Link from 'next/link'

const About = () => {
  return (
    <div className='bg-[#0D0D2B]'>
      <p className='text-center text-[#ffffff] pt-[5rem] pb-5 hakkimizdaHeader text-4xl'>Hakkımızda</p>
      <div className=' hakkimizda grid grid-cols-2 container mx-auto'>
            <div className='mt-[2rem] ml-0 md:mt-[8rem] md:ml-[13rem]'><Image alt="logo" className='w-[145px] ml-[125px] md:ml-0 md:w-[245px]' src={logoHakkimizda} /></div>
            <div className='pb-10 -ml-[8rem] mt-[14rem] md:mt-[7rem] md:ml-[3rem]'>
              <p className="hidden md:flex text-3xl font-bold mb-7 text-[#ffffff]">TEKNİK SERVİS <br/> BÜNYEMİZ</p>
              <p className="leading-7 text-[12px] md:text-[16px] text-[#E0E0E0]">UZMAN KADROSUYLA HIZLI ÇÖZÜMLER ÜRETMEYİ<br/> AMAÇLAYAN FİRMAMIZ YETKİLİ SERVİS DENEYİMLİ<br/> TEKNİSYENLER İLE ÇALIŞMAKTADIR.<br/>İSTANBUL AVRUPA YAKASINA HİZMET SUNAN<br/> FİRMAMIZIN BİRİNCİL AMACI KALİTELİ VE EKONOMİK<br/> ÇÖZÜMLER ÜRETMEKTİR</p>
              <button className="learnmore text-[#FFFFFF] rounded-full bg-[#006de980] hover:bg-[#006de9e6] h-9 flex flex-row items-center justify-center"><Link href='/hakkimizda'>Daha fazla oku</Link><Image className='ml-2' alt="arrow" width={20} src={ArrowRight}/></button>
            </div>
      </div>
    </div>
  )
}

export default About
