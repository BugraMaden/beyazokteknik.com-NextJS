import React from 'react'
import Image from 'next/image'
import camasirmakinesipage from '../../../public/images/camasirmakinesipage.png'
import Button from '../components/Button'
import Head from '../head'

const Page = () => {
  return (
    <div>
    <Head metadescription={"çamaşır makinesi arızası tamir servisi"} hdtitle={"Çamaşır Makinesi Tamiri"} metakeywords={"çamaşır makinesi tamiri,çamaşır makinesi su almıyor"}/>
    <div className='bg-gradient-to-t from-[#2B076EF5] to-[#0D0D2B]'> 
      <div className='container mx-auto myct flex flex-col'>
        <div className='grid md:grid-cols-2 grid-cols-1 pb-[150px] pt-[100px]'>
            <div className='flex flex-row justify-center items-center md:mb-0 mb-5' ><Image className="boxshdw w-[260px] md:w-[390px]" alt="camasir makinesi" width={420} src={camasirmakinesipage}/></div>
            <div className='mt-[15px] hizmetlerText'>
            <p className='text-[#FFFFFF] mb-5 font-["Rubik"] tracking-wide whitespace-nowrap text-[20px] md:text-[32px] leading-9'>Çamaşır Makinenizde Bir Sorun Mu Var ?</p>
            <p className='mt-6 inline leading-7 text-[#E0E0E0]'>Çamaşır makineleri her evin vazgeçilmez beyaz eşyalarından biridir.<br/> Ancak küçük bir arıza bile, sizi zor durumda bırakabilir. <br/> Endişelenmeyin,</p><h1 className='leading-7 inline text-[#E0E0E0]'>çamaşır makinesi tamiri</h1><p className='leading-7 inline text-[#E0E0E0]'> için uzman ekibimiz sizinle!</p><br/> <h2 className='leading-7 inline text-[#E0E0E0]'>Çamaşır makinesi su almıyor</h2><p className='inline text-[#E0E0E0]'> olabilir.Ya da bambaşa bir sorun...<br/>Hiç mühim değil,tamiri konusunda uzman ekibimiz, hızlı ve uygun<br/>fiyatlı bir hizmet sunmaktadır. Sorununuzu en kısa<br/> sürede tespit etmek ve tamirini gerçekleştirmek için buradayız.</p>
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
