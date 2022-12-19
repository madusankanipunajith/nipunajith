import React from 'react'
import { notFound } from '../assets'

export default function NotFound() {
  return (
    <div className='bg-primary flex flex-col items-center content-center pt-2 px-1'>
        <img src={notFound} alt='not found'></img>
        <h1 className="text-dimWhite md:text-[48px] text-[18px]">What are you searching for ?</h1>
    </div>
  )
}
