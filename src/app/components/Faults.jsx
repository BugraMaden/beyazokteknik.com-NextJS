import React from 'react'
import camasirmakinesi from '../../../public/images/redcamasir.png'
import blackbuzdolabi from '../../../public/images/blackbuzdolabi.png'
import whitebulasik from '../../../public/images/whitebulasik.png'
import Image from 'next/image'

const Faults = () => {
  
  return (
    <div>
      <div className='arizaTurleriBackground pb-[150px]'>
            <div className='container mx-auto'>
              <p className='text-center mt-[5rem] pt-[100px] text-[#FFFFFF] pb-5 arizacesitleriHeader text-2xl md:text-4xl'>Kullanıcıların Bildirdiği En Yaygın<br/> Arıza Çeşitleri</p>
            
            <div className='grid md:grid-cols-2 grid-cols-1 mt-[70px] faultGrid'>
                <div className='arizaTurleri mx-auto mt-[80px] md:mt-0'>
                  <div className='pl-[40px] md:pl-0'>
                  <h2 className='text-[20px] md:text-[24px]  font-bold tracing-wide mb-[20px] text-[#ffffff]'>Çamaşır Makinesi Arızası</h2>
                  <h3>Çamaşır makinesi<strong className='str'> su almıyor</strong></h3>
                    <h3>Çamaşır makinesinin <strong className='str'> kazanı dönmüyor</strong></h3>
                    <h3>Çamaşır makinesi <strong className='str'> su akıtıyor</strong></h3>
                    <h3>Çamaşır makinesi <strong className='str'>deterjan almıyor</strong></h3>
                    <h3>Çamaşır makinesi <strong className='str'>temiz yıkamıyor</strong></h3>
                    <h3>Çamaşır makinesi <strong className='str'>çamaşırları yırtıyor</strong></h3>
                    <h3>Çamaşır makinesi <strong className='str'>çalışmıyor</strong></h3>
                    <h3>Çamaşır makinesi <strong className='str'>açılmıyor</strong></h3>
                    <h3>Çamaşır makinesinin <strong className='str'>kapağı açılmıyor</strong></h3>
                    <h3>Çamaşır makinesinin <strong className='str'>kapağı kapanmıyor</strong></h3>
                    <h3>Çamaşır makinesine <strong className='str'>güç gelmiyor</strong></h3>
                    <h3>Çamaşır makinesinde <strong className='str'>program seçilmiyor</strong></h3>
                    <h3>Çamaşır makinesi <strong className='str'>gürültülü çalışıyor</strong></h3>
                    <h3>Çamaşır makinesinden <strong className='str'>uçak sesi geliyor</strong></h3>
                    <h3>Çamaşır makinesi <strong className='str'>yürüyor</strong></h3>
                    <h3>Çamaşır makinesi <strong className='str'>koku yapıyor</strong></h3>
                    <h3>Çamaşır makinesinden <strong className='str'>yanık kokusu geliyor</strong></h3>
                  
                  </div>
                </div>
                <div className='mt-4 md:mt-11 mx-auto md:ml-[130px]'><Image alt="camasir makinesi" className='w-[200px] md:w-[290px]' src={camasirmakinesi}/></div>
                <div className='arizaTurleri mt-[100px] mx-auto md:mt-[150px]'><Image alt="buzdolabi" className='w-[150px] md:w-[188px]' src={blackbuzdolabi}/></div>
                <div className='pl-[25px] md:pl-0 md:ml-[100px] mx-auto buzdolabiAriza'>
                  <h2 className='text-[24px] mx-auto md:pl-0 mt-[100px] md:mt-[230px] font-bold tracing-wide mb-[20px] text-[#ffffff]'>Buzdolabı Arızası</h2>
                  <h3 className=' text-[#E0E0E0]'>Buzdolabı <strong className='str'>soğutmuyor</strong></h3>
                   <h3> Buzdolabı <strong className='str'>karlanma yapıyor</strong>.</h3>
                   <h3> Buzdolabının <strong className='str'>kapağı kapanmıyor</strong>.</h3>
                   <h3> Buzdolabının <strong className='str'> kapı fitilleri yapışmıyor</strong>.</h3>
                   <h3> Buzdolabının <strong className='str'>alt bölümü soğutmuyor</strong>.</h3>
                   <h3> Buzdolabı <strong className='str'>çalışmıyor</strong>.</h3>
                   <h3> Buzdolabı <strong className='str'>sesli çalışıyor</strong>.</h3>
                   <h3> Buzdolabındaki <strong className='str'>yiyecekler bozuluyor</strong>.</h3>
                   <h3> Buzdolabının <strong className='str'>rafı kırıldı</strong>.</h3>
                   <h3> Buzdolabının <strong className='str'>kapı contasında sorun var</strong>.</h3>
                   </div>
                <div className='arizaTurleri pl-4 md:ml-14'>
                  <div>
                    <h2 className='text-[24px] mt-[70px] md:mt-[230px] font-bold tracing-wide mb-[20px] text-[#ffffff]'>Bulaşık Makinesi Arızası</h2>
                    <h3 className=' text-[#E0E0E0]'>Bulaşık Makinesi <strong className='str'>temiz yıkamıyor</strong></h3>
                        <h3>Bulaşık Makinesi <strong className='str'>su akıtıyor</strong>.</h3>
                        <h3>Bulaşık Makinesi <strong className='str'>buhulu çıkarıyor</strong>.</h3>
                        <h3>Bulaşık Makinesi <strong className='str'>kurutmuyor</strong>.</h3>
                        <h3>Bulaşık Makinesi <strong className='str'>ısıtmıyor</strong>.</h3>
                        <h3>Bulaşık Makinesi <strong className='str'>ayran lekesi bırakıyor</strong>.</h3>
                        <h3>Bulaşık Makinesi <strong className='str'>su boşaltmıyor</strong>.</h3>
                        <h3>Bulaşık Makinesi <strong className='str'>içinde su kalıyor</strong>.</h3>
                        <h3>Bulaşık Makinesi <strong className='str'>çalışmıyor</strong>.</h3>
                        <h3>Bulaşık Makinesi <strong className='str'>program seçilmiyor</strong>.</h3>
                        <h3>Bulaşık Makinesi <strong className='str'>başlatılmıyor</strong>.</h3>
                        <h3>Bulaşık Makinesi <strong className='str'>bardakları çiziyor</strong>.</h3>
                        <h3>Bulaşık Makinesi <strong className='str'>sepeti paslandı</strong>.</h3>
                        <h3>Bulaşık Makinesinin <strong className='str'>kapağı düşüyor</strong>.</h3>
                        <h3>Bulaşık Makinesinin <strong className='str'>kapağı kapanmıyor</strong>.</h3>
                        <h3>Bulaşık Makinesi <strong className='str'>hata veriyor</strong>.</h3>
                        <h3>Bulaşık Makinesi <strong className='str'>su almıyor</strong>.</h3>
                        <h3>Bulaşık Makinesi <strong className='str'>sesli çalışıyor</strong>.</h3>    
                      
                  </div>
                </div>
                <div className='mx-auto md:ml-[100px] mt-[100px] md:mt-[270px]'><Image alt="bulasikmakinesi" className='w-[225px] md:w-[310px]' src={whitebulasik}/></div>
            </div>
            </div>
          </div>
    </div>
  )
}

export default Faults
