import React from 'react'
import Image from 'next/image'
import buzdolabitamiripage from '../../../public/images/buzdolabitamiripage.png'
import Button from '../components/Button'
import Head from '../head'

const Page = () => {
  return (
    <div>
    <Head metadescription={"buzdolabı arızası tamir servisi"} hdtitle={"Buzdolabı Arızası"} metakeywords={"buzdolabı arızası,buzdolabı soğutmuyor"}/>
    <div className='bg-gradient-to-t from-[#2B076EF5] to-[#0D0D2B]'>
      <div className='container mx-auto flex flex-col'>
        <div className='grid md:grid-cols-2 grid-cols-1 pb-[150px] pt-[100px]'>
            <div className='flex flex-row mt-6 justify-center items-center md:mb-0 mb-5' ><Image className='boxshdw w-[260px] md:w-[390px]' alt="buzdolabi_" width={390} src={buzdolabitamiripage}/></div>
            <div className='mt-[15px] hizmetlerText'>
            <p className='text-[#FFFFFF] mb-5 font-["Rubik"] tracking-wide whitespace-nowrap text-[20px] md:text-[32px] leading-9'>Buzdolabınız mı arızalandı ?</p>
            <p className='mt-6 inline leading-7 text-[#E0E0E0]'>Sıcak yaz günlerinde beklenmeyen</p> <h1 className='inline text-[#E0E0E0]'>buzdolabı arızası</h1><br/> <p className='inline text-[#E0E0E0]'> sizi can sıkıcı bir durumda bırakabilir.</p> <h2 className='text-[#E0E0E0] inline'>Buzdolabı soğutmuyor </h2><p className='inline leading-7 text-[#E0E0E0]'>mu ?<br/> endişelenmeyin, biz buradayız! <br/> Buzdolabı tamiri konusunda uzman ekibimiz, hızlı ve <br/> güvenilir bir hizmet sunmaktadır. Sorununuzu en kısa <br/> sürede çözüme kavuşturmak için tüm deneyimimizi <br/> kullanıyoruz.Sitemizde yer alan iletişim formunu <br/> doldurarak ücretsiz bir şekilde arızanız hakkında bilgi <br/> sahibi olabilir, arzu ederseniz de tamir talebi <br/> oluşturabilirsiniz.</p>
            <div className='hizmetlerBtn'>
              <Button propText="ÜCRETSİZ ARIZA TESPİTİ" imgClass="ml-2 pl-1" propClassName="arizakaydi w-[300px] mt-5 h-[38px] md:h-[38px] md:w-[320px] flex flex-row items-center justify-center rounded-full text-[#FFFFFF] " />
            </div>
            </div>    
        </div>
      </div>
    </div>
    </div>
  )
}

export default Page
