"use client"
import { useState } from "react"
import { RxCross1 } from "react-icons/rx";


const FormStep3 = ({ onSubmit ,closeTheModal, onPrev }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [checked,setChecked] = useState(false);
  
    const handleSubmit = () => {
      onSubmit({ name, phone });
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
                <p className='text-[#003470] text-center font-["Rubik"] text-[32px]'>İletişim</p>
              </div>
              <form className='flex flex-col mt-4'>
              <p className='text-[#003470] text-[12px] ml-1 mt-[10px]'>Adınız</p>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='text-[#000] font-["Rubik"] border-2 w-[260px] h-[35px]'/>
              <div className='pb-[34px]'>
              <p className='text-[#003470] text-[12px] ml-1 mt-5' >Telefon Numaranız</p>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className='text-[#000] border-2 w-[260px] h-[35px]'/>
              </div>
              <div className='flex flex-row'>
                <input required onChange={() => setChecked(!checked)} type='checkbox'/><label className='ml-2 text-[#000]'>İstanbul Avrupa'da İkamet Ediyorum</label>
              </div>
              <div className="flex justify-center">
                <button onClick={handlePrev} className='prevbtn text-[#ffffff] w-[100px] h-[35px] bg-[#003470]'>Önceki</button>
                <button className='nextbtn w-[100px] text-[#ffffff] h-[35px] ml-5 bg-[#15bd15]' disabled={!checked || !name || !phone} onClick={handleSubmit}>Gönder</button>
              </div>
              </form>
          </div>
      </div>
    );
  };
  export default FormStep3;