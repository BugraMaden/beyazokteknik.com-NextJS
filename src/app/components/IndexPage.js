"use client"
import { useState } from 'react';
import axios from 'axios';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import Image from 'next/image';
import loadingIcon from '../../../public/images/checklist.gif';
import submittedSuccesfully from '../../../public/images/message.png'

const IndexPage = ({ closeModal }) => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleFormStep1Next = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };
  

  const handleFormStep2Next = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const handleFormStep2Prev = () => {
    setFormData((prevData) => {
      const { issue, ...restData } = prevData;
      return restData;
    });
  };
  const handleFormStep1Prev = () => {
    setFormData((prevData) => {
      const { applianceType, ...restData } = prevData;
      return restData;
    });
  };

  const handleFormSubmit = async (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setLoading(true);

    try {
      await axios.post('/api/send-email', {
        applianceType: formData.applianceType,
        model: formData.model,
        brand: formData.brand,
        issue: formData.issue,
        name: data.name,
        phone: data.phone,
      });
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return <div className='text-center text-[#000] '>
            <div className='flex justify-end'>
                <button className='m-3 text-[#000] text-[16px] font-bold' onClick={()=> {closeModal(false)}}>KAPAT</button>
            </div>
            <div className='mt-5 flex flex-col items-center justify-center'>
           <Image width={100} src={submittedSuccesfully}/><p className=' font-extrabold tracking-wide text-lg'>Form gönderildi!</p><p className='mt-10 text-lg'>En kısa sürede arızanız hakkında bilgilendirileceksiniz</p></div></div>;
  }
  
  return (
    <div>
      {!formData.applianceType && (
        <FormStep1 closeTheModal={closeModal} onNext={handleFormStep1Next} />
      )}
      {formData.applianceType && !formData.issue && (
        <FormStep2
          closeTheModal={closeModal}
          onNext={handleFormStep2Next}
          onPrev={handleFormStep1Prev}
        />
      )}
      {formData.issue && !loading && (
        <FormStep3
          closeTheModal={closeModal}
          onSubmit={handleFormSubmit}
          onPrev={handleFormStep2Prev}
        />
      )}
     {loading && <div className='flex flex-col justify-center mt-[100px] items-center'>
        <Image width={140} src={loadingIcon} alt='Loading Icon' />
        <p className='text-[#000]'>Gönderiliyor...</p>
        </div>}
    </div>
  );
};

export default IndexPage;
