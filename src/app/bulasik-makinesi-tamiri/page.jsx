import React from 'react'
import Image from 'next/image'
import bulasikmakinesipage from '../../../public/images/bulasikmakinesipage.png'
import Button from '../components/Button'
import Head from '../head'

const Page = () => {
  return (
    <div>
    <Head metadescription={"bulaşık makinesi arızası tamir servisi"} hdtitle={"Bulaşık Makinesi Tamiri"} metakeywords={"bulaşık makinesi tamiri,bulaşık makinesi temiz yıkamıyor"}/>
    <div className='bg-gradient-to-t from-[#2B076EF5] to-[#0D0D2B]'>
      <div className='container mx-auto flex flex-col'>
        <div className='grid md:grid-cols-2 grid-cols-1 pb-[150px] pt-[100px]'>
            <div className='flex flex-row justify-center items-center md:mb-0 mb-5' ><Image className='boxshdw w-[260px] md:w-[390px]' alt="bulasik_makinesi" width={390} src={bulasikmakinesipage}/></div>
            <div className='mt-[15px] hizmetlerText'>
            <p className='text-[#FFFFFF] font-["Rubik"] mb-10 tracking-wide whitespace-nowrap text-[20px] md:text-[32px] leading-9'>Bulaşık Makineniz mi Bozuldu ?</p>
             <h1 className='mt-10 inline leading-7 text-[#E0E0E0]'>Bulaşık makinesi tamiri</h1> <p className='inline leading-7 text-[#E0E0E0]'>için buradayız!</p><br/><h2 className='inline leading-7 text-[#E0E0E0]'>bulaşık makinesi su akıtıyor</h2><p className='inline leading-7 text-[#E0E0E0]'> ya da</p> <h2 className='inline leading-7 text-[#E0E0E0]'>temiz yıkamıyor</h2><p className='inline leading-7 text-[#E0E0E0]'> olabilir <br/>hiç problem değil.Her türlü beyaz eşya sorunu için bizlerle<br/> iletişim kurabilirsiniz.Endişelenmeyin, sizlere en kaliteli hizmeti<br/> ve ekonomik fiyatları sunacağız! </p>
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
