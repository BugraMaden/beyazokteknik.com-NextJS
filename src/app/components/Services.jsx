import Image from 'next/image'
import React from 'react'
import buzdolabitamiri from '../../../public/images/buzdolabitamiri.png'
import camasirmakinesitamiri from '../../../public/images/camasirmakinesitamiri.png'
import bulasikmakinesitamiri from '../../../public/images/bulasikmakinesitamiri.png'
import camasirkurutucutamiri from '../../../public/images/camasirkurutucutamiri.png'
import lgtamiri from '../../../public/images/lgtamiri.png'
import boschtamiri from '../../../public/images/boschtamiri.png'
import bekotamiri from '../../../public/images/bekotamiri.png'
import vesteltamiri from '../../../public/images/vesteltamiri.png'
import samsungtamiri from '../../../public/images/samsungtamiri.png'
import arceliktamiri from '../../../public/images/arceliktamiri.png'
import Link from 'next/link'
import Button from './Button'

const Services = () => {
  return (
          <div>
            <div className='hizmetlerimiz pt-[7rem]'>
                  <div className='container mx-auto'>
                    <p className='text-center hizmetlerimizHeader text-[#ffffff] text-4xl'>Hizmetlerimiz</p>
                    <p className="text-center mt-4 hizmetlerimizHeader pb-11 text-slate-300">Firmamızda Tamiri Görülen Ürünler</p>
                  
                  <div className='hizmetlerimizicerik h-[500px] md:h-[390px] mx-auto'>
                      <div className='tamirler grid md:grid-cols-4 grid-cols-2 gap-y-4 md:gap-y-0 pt-9'>
                            <div className=''>
                              <Link href='/buzdolabiTamiri'><Image className='tamirResimler w-[70px] md:w-[93px]' alt="buzdolabi tamiri" src={buzdolabitamiri}/></Link>
                              <h2 className='mt-4 text-[12px] md:text-[16px] text-[#3671E9] font-semibold'>Buzdolabı Tamiri</h2>
                            </div>
                            <div className=''>
                            <Link href='/camasirMakinesiTamiri'><Image className="tamirResimler w-[99px] md:w-[133px]" alt="camasir makinesi tamiri" src={camasirmakinesitamiri}/></Link>
                              <h2 className='mt-4 text-[12px] md:text-[16px] text-[#3671E9] font-semibold'>Çamaşır Makinesi Tamiri</h2>
                            </div>
                            <div className=''>
                            <Link href='/bulasikMakinesiTamiri'><Image className="tamirResimler w-[100px] md:w-[150px]" alt="bulasik makinesi tamiri" src={bulasikmakinesitamiri}/></Link>
                              <h2 className='mt-4 text-[12px] md:text-[16px] text-[#3671E9] font-semibold'>Bulaşık Makinesi Tamiri</h2>
                            </div>
                            <div className=''>
                            <Link href='/camasirKurutucuTamiri'><Image className="tamirResimler w-[90px] md:w-[137px]" alt="camasir kurutucu tamiri" src={camasirkurutucutamiri}/></Link>
                              <h2 className='mt-4 text-[12px] md:text-[16px] text-[#3671E9] font-semibold'>Çamaşır Kurutucusu Tamiri</h2>
                            </div>
                      </div>
                  </div>
                  <Button propText="ARIZA KAYDI OLUŞTUR" propId="hizmetlerimizAriza" imgClass="hidden" propClassName="block mx-auto font-['Rubik'] arizakaydi flex flex-row items-center justify-center text-[#FFFFFF]" />

                  <div className='pb-[150px]'>
                  <p className='text-center hizmetlerimizHeader pt-[150px] pb-10 text-2xl md:text-4xl'>BİRÇOK MARKA HAKKINDA <br/> DENEYİMLİYİZ</p>
                      <div className='container mx-auto brands grid md:grid-cols-3 grid-cols-2 gap-y-4 gap-x-0'>
                            <div className='w-[150px] h-[75px] lg:w-[300px] lg:h-[150px] mx-auto flex flex-row items-center justify-center'><Image alt="bosch beyaz eşya tamiri" className='w-[80px] lg:w-[134px]' src={boschtamiri}/></div>
                            <div className='w-[150px] h-[75px] lg:w-[300px] lg:h-[150px] mx-auto flex flex-row items-center justify-center'><Image alt="lg beyaz eşya tamiri" className='w-[110px] lg:w-[208px]' src={lgtamiri}/></div>
                            <div className='w-[150px] h-[75px] lg:w-[300px] lg:h-[150px] mx-auto flex flex-row items-center justify-center'><Image alt="beko beyaz eşya tamiri" className='w-[80px] lg:w-[150px]' src={bekotamiri}/></div>
                            <div className='w-[150px] h-[75px] lg:w-[300px] lg:h-[150px] mx-auto flex flex-row items-center justify-center'><Image alt="vestel beyaz eşya tamiri" className='w-[120px] lg:w-[227px]' src={vesteltamiri}/></div>
                            <div className='w-[150px] h-[75px] lg:w-[300px] lg:h-[150px] mx-auto flex flex-row items-center justify-center'><Image alt="arcelik beyaz eşya tamiri" className='w-[130px] lg:w-[227px]' src={arceliktamiri}/></div>
                            <div className='w-[150px] h-[75px] lg:w-[300px] lg:h-[150px] mx-auto flex flex-row items-center justify-center'><Image alt="samsung beyaz eşya tamiri" className='w-[130px] lg:w-[200px]' src={samsungtamiri}/></div>
                      </div>
                  </div>
                  </div>
            </div>
        </div>
  )
}

export default Services
