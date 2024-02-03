import React from 'react'
import Image from 'next/image'
import camasirkurutucupage from '../../../public/images/dry.png'
import Button from '../components/Button'
import Head from '../head'

const Page = () => {
  return (
  <div>
    <Head metadescription={"çamaşır kurutucusu arızası tamir servisi"} hdtitle={"Çamaşır Kurutucusu Tamiri"} metakeywords={"Çamaşır kurutucusu tamiri,çamaşır kurutucusu çamaşırları kurutmuyor"}/>
    <div className='bg-gradient-to-t from-[#2B076EF5] to-[#0D0D2B]'>
      <div className='container mx-auto flex flex-col '>
        <div className='grid md:grid-cols-2 grid-cols-1 pb-[150px] pt-[100px]'>
            <div className='flex flex-row justify-center items-center md:mb-0 mb-5'><Image className='boxshdw w-[260px] md:w-[390px]' alt="camasir_kurutucu" src={camasirkurutucupage}/></div>
            <div className='mt-[15px] hizmetlerText'>
            <p className='text-[#FFFFFF] font-["Rubik"] mb-5 md:mb-10 tracking-wide md:whitespace-nowrap text-[20px] md:text-[32px] leading-9'>Kurutucunuzda Bir Arıza Mı Var ?</p>
            <h1 className='inline text-[#E0E0E0] leading-7 mt-10'> Çamaşır kurutucu arızası</h1> <p className='inline leading-7 text-[#E0E0E0]'> meydana geldiğinde özellikle<br/> kış aylarında çamaşırlarınızı kurutmak oldukça zahmetli olabilir.<br/> Öte yandan çamaşır serme ve toplama işleri sizlere oldukça vakit kaybettirir.</p> <br/><h2 className='leading-7 text-[#E0E0E0] inline'>Çamaşır kurutucusu çamaşırları kurutmuyor</h2> <p className='leading-7 text-[#E0E0E0] inline'> mu ?<br/> Enerjinizi boşa harcamadan bizlerle irtibat kurabilir arızanız hakkında<br/> ücretsiz bilgi alarak tamir talebi oluşturabilirsiniz</p>
            <div className='hizmetlerBtn'>
            <Button propText="ÜCRETSİZ ARIZA TESPİTİ" imgClass="ml-2 pl-1" propClassName="arizakaydi w-[300px] mt-10 h-[38px] md:h-[38px] md:w-[320px] flex flex-row items-center justify-center rounded-full text-[#FFFFFF] " />
            </div>
            </div>    
        </div>
      </div>
    </div>
  </div>
  )
}

export default Page
