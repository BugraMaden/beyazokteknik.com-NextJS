"use client"
import React from 'react'
import { useState } from 'react'
import ArrowRight from '../../../public/images/ArrowRight.png'
import Image from 'next/image'
import IndexPage from './IndexPage'

const Button = ({propClassName,propText,imgClass,propId,parentClass}) => {
    const [form,setForm]=useState(false);
    
  return (
    <div className={parentClass}>
        <button onClick={()=>{setForm(true)}} id={propId} className={propClassName}>{propText} <Image alt="buton" className={imgClass} width={28} src={ArrowRight}/> </button>
        {form &&<div className='modalBackground flex flex-col justify-center items-center'><div className='modalContainer'><IndexPage closeModal={setForm}/></div></div> }
    </div>
  )
}

export default Button
