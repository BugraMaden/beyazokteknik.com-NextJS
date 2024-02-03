"use client"
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';

const FormStep1 = ({ onNext , closeTheModal}) => {
    const [applianceType, setApplianceType] = useState('');
    const [brand, setBrand] = useState('');
    const [model,setModel]=useState('');
    
    
    const handleNext = () => {
      onNext({ applianceType, brand , model });
    };

  
    return (
      <div>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-end'>
               <button className=' text-[#000]' onClick={()=> {closeTheModal(false)}}><RxCross1 className='m-3' size={20} /></button>
          </div>
            <div>
              <p className='text-[#003470] text-center font-["Rubik"] text-[32px]'>Cihaz Bilgileri</p>
            </div>
            <div className='flex flex-col mt-4'>
              <div className='flex flex-col justify-center'>
                <p className='text-[#003470] text-[12px] ml-1'>Cihaz</p>
                <select value={applianceType} onChange={(e) => setApplianceType(e.target.value)} required className='w-[260px] border-2 h-[35px] text-[#000]'>
                  
                  <option disabled defaultValue="">Seçiniz</option>
                  <option value="Buzdolabı Arızası">Buzdolabı</option>
                  <option value="Çamaşır Makinesi Arızası">Çamaşır Makinesi</option>
                  <option value="Bulaşık Makinesi Arızası">Bulaşık Makinesi</option>
                  <option value="Çamaşır Kurutucu Arızası">Çamaşır Kurutucusu</option>
                 </select>
                <p className='text-[#003470] text-[12px] mt-4'>Cihazın Markası</p>
                <input
                  value={brand} onChange={(e) => setBrand(e.target.value)}
                  placeholder='Cihaz Markası Giriniz' className='text-[#000] border-2 h-[35px]'/>
                <p className='text-[#003470] text-[12px] mt-4'>Cihaz Model No:</p>
                <input value={model} onChange={(e) => setModel(e.target.value)} placeholder='Cihazınızın Model Bilgisini Giriniz' className='text-[#000] border-2 h-[35px]'/>
                <div className='flex justify-center'>
                    <button disabled={!applianceType || !brand} onClick={handleNext} className='nextbtn text-[#ffffff] w-[100px] h-[35px] bg-[#003470]'>Sonraki</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  };
  export default FormStep1