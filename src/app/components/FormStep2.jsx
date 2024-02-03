"use client"
import { useState } from "react"
import { RxCross1 } from "react-icons/rx";


const FormStep2 = ({ onNext , closeTheModal, onPrev}) => {
    const [issue, setIssue] = useState('');
  
    const handleNext = () => {
      onNext({ issue });
    };
    const handlePrev = () => {
        onPrev();
      };
    return (
      <div>
        <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-end'>
               <button className=' text-[#000]' onClick={()=> {closeTheModal(false)}}><RxCross1 className='m-3' size={20} /></button>
          </div>
            <div>
              <p className='text-[#003470] text-center font-["Rubik"] text-[32px]'>Arıza Tanımı</p>
            </div>
            <div className='flex flex-col mt-4'>
            <p className='text-[#003470] text-[12px] ml-1'>Lütfen Aşağıdaki Kutucuğa Arızanızın Tanımını Yapınız</p>
            <textarea value={issue} onChange={(e) => setIssue(e.target.value)}  placeholder='Şikayetiniz' className='text-[#000] h-[153px] mt-5 border-2'></textarea>
            </div>
            <div className="flex justify-center">
                <button onClick={handlePrev} className='prevbtn text-[#ffffff] w-[100px] h-[35px] bg-[#003470]'>Önceki</button>
                <button disabled={!issue} onClick={handleNext} className='nextbtn text-[#ffffff] ml-5 w-[100px] h-[35px] bg-[#003470]'>Sonraki</button>
            </div>
          </div>
      </div>
    );
  };
export default FormStep2;  