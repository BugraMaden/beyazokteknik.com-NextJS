import React from 'react'
import hakkimizdaImg from '../../../public/images/hakkimizdaimg.png'
import Image from 'next/image'
import hakkimizdaimg_ from '../../../public/images/hakkimizdaimg_.png'
const page = () => {
  return (
    <div className='bg-[#0D0D2B] pb-[100px]'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 pt-[50px]'>
          <div className='flex flex-col justify-center items-center'>
              <p className='pr-7 pl-7 -ml-11 pb-2 pt-2 border-y-2 text-[#ffffff] mb-5 font-["Rubik"] text-semibold tracking-widest'>FİRMAMIZ HAKKINDA</p>
              <p className='uppercase text-[#ffffff] leading-6 text-[14px] italic'>beyaz eşya teknik servisi olarak hizmet veren<br/> firmamız, yılların tecrübesi ve uzman kadrosu ile<br/> sektörde öncü bir konumda yer almaktadır.<br/>
              Amacımız, müşterilerimize en kaliteli hizmeti sunmak <br/> ve beyaz eşya sorunlarına hızlı ve etkili çözümler<br/> üretmektir. Bu doğrultuda, alanında uzman ve <br/>deneyimli teknisyenlerimiz ile birlikte,müşteri<br/> memnuniyetini en ön planda tutarak çalışmalarımızı<br/> sürdürmekteyiz.</p>
            
          </div>
          <div className='flex pb-[70px] flex-col items-center justify-center'>
          <Image alt="hakkimizda image" src={hakkimizdaImg}/>
          </div>

          <div className='flex flex-col items-center justify-center'><Image alt='hakkimizda img' src={hakkimizdaimg_}/></div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-[#ffffff] mb-5 font-["Rubik"]  text-semibold tracking-widest border-y-2 pr-7 pl-7 pb-2 pt-2'>FİRMAMIZIN AVANTAJLARI</p>
                <p className='uppercase italic text-[14px] leading-6 text-[#ffffff]'>
                Bizimle iletişime geçtiğinizde, öncelikle ücretsiz<br/> olarak telefon üzerinden arıza tespiti<br/> yapıyoruz.İsteğiniz doğrultusunda tamirini<br/> gerçekleştirmek için sizlere uzman teknisyenler<br/> gönderiyoruz. Beyaz eşyanız arızalandığında,<br/> sitemizde yer alan formu doldurarak<br/> arızanız hakkında ücretsiz bilgi alabilirsiz.
                 </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
