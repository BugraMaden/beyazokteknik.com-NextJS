import React from 'react'
import {MdLocationOn} from 'react-icons/md'
import Image from 'next/image'
import mainImage from '../../public/images/beyazesyaa.png'
import About from './components/about'
import Services from './components/services'
import Faults from './components/Faults'
import Button from './components/Button'
import Head from './head'

const page = () => {
  return (

  <div>
    <Head metadescription={"İstanbul avrupa beyaz eşya teknik servisi. buzdolabı arızası, çamaşır makinesi arızası , bulaşık makinesi arızası için hızlı ve güvenilir bir şekilde tamir ediyoruz."} hdtitle={"Beyaz Eşya Teknik Servis"} metakeywords={"İstanbul beyaz eşya teknik servis, çamaşır makinesi tamiri,buzdolabı tamiri,bulaşık makinesi tamiri"}/>
    <div className='bg-[#0D0D2B] bigEx'>
      <div className=' container mx-auto bg-[#0D0D2B] pb-10'>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 -gap-4 md:pt-10 md:ml-0 md:!-ml-[90px]'>
          <div className=' md:ml-9 flex flex-col justify-center items-center md:flex'>
            <div className=" location -ml-[90px] flex items-center justify-center">
              <MdLocationOn className='mb-1' size={18}/>
              <p>İSTANBUL AVRUPA</p>
            </div>
            <div className='pt-6 w-[300px]'>
              <h1 className='myanimate text-[#FFFFFF] text-[32px] md:text-[42px] whitespace-nowrap '>Beyaz Eşya <br /> Uzman Teknik Servis</h1>
            </div>
            <div className='mainPageText text-[12px] md:text-[14px] md:ml-12 pt-7 text-[#FFFFFF]'>
                <span>BEYAZ EŞYANIZ MI ARIZALANDI ? </span> <br/><br/>
                SERVİS FORMUNU DOLDURUN ARIZANIZ HAKKINDA <br/> TELEFON ÜZERİNDEN ÜCRETSİZ BİLGİ ALIN...
                  <Button parentClass={"pt-7"} propText="ARIZA HAKKINDA ÜCRETSİZ BİLGİ AL" imgClass="ml-2 pl-1" propClassName="myanimate2 arizakaydi w-[300px] h-[38px] md:h-[38px] md:w-[320px] flex flex-row items-center justify-center rounded-full text-[#FFFFFF] " />
            </div>
          </div>
          <div className='sm:ml-0 flex justify-center items-center md:flex md:ml-9 pt-14'>
            <Image alt="camasir makinesi" className='w-[250px] md:ml-9 md:w-[450px]' src={mainImage}/>
          </div>
        </div>
      </div>
    </div>
          <div>
            <About/>
          </div>
          <div>
            <Services/>
          </div>
          <div>
            <Faults/>
          </div> 
  </div>

  )
}

export default page
