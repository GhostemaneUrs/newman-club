import Image from 'next/image'
import logo from '@/icon/logo.svg'
import { FiPhoneCall } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { TfiFacebook } from 'react-icons/tfi'
import { BiMessageDetail } from 'react-icons/bi'
export const Footer = () => {
  return (
    <footer className='bg-[#245086] w-full m-auto flex flex-col items-center h-[300px] justify-between'>
      <div className='flex items-center justify-center gap-[171px] w-full py-[46px] px-4 2xl:pl-[178px] 2xl:pr-[140px]'>
        <div className='flex flex-col text-center w-full max-w-[536px] items-center'>
          <Image
            src={logo}
            alt='logo'
            width={0}
            height={0}
            className='w-full max-w-[171px]'
          />
          <p className='text-center text-[26px] text-white'>
            Follow us on our social networks and don&apos;t miss our latest news
            and events.
          </p>
        </div>
        <div className='flex flex-col justify-center text-center gap-2 first-letter:w-full max-w-[536px] items-center'>
          <div className='flex justify-center items-center gap-2 w-full'>
            <div className='bg-white rounded-full p-2'>
              <FiPhoneCall className='text-[#245086] text-[11px]' />
            </div>
            <span className='text-white text-lg'>+57 (322) 374 6739</span>
          </div>
          <div className='flex items-center gap-2 w-full'>
            <div className='bg-white rounded-full p-2'>
              <BiMessageDetail className='text-[#245086] text-[11px]' />
            </div>
            <span className='text-white text-lg'>servicio@lurdes.co</span>
          </div>
          <div className='flex gap-[17px]'>
            <div className='bg-white rounded-full p-2'>
              <FiInstagram className='text-[#245086] text-[20px]' />
            </div>
            <div className='bg-white rounded-full p-2'>
              <TfiFacebook className='text-[#245086] text-[20px]' />
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center w-full max-w-[500px]'>
          <span className='text-[25px] font-poppins font-bold text-white'>
            SUBSCRIBE TO OUR NEWSLETTER!
          </span>
          <form className='w-full flex flex-col justify-center items-center'>
            <input
              type='email'
              placeholder='Your Email'
              className='w-full border solid border-[#707070] rounded-[28px] placeholder:text-center  px-[14px] h-[40px] mb-2 placeholder:text-[#666666] outline-none'
            />
            <button className='text-white bg-[#EF7A53] uppercase py-[8px] w-full max-w-[210px] font-bold rounded-3xl'>
              Sent
            </button>
          </form>
        </div>
      </div>
      <div className='bg-[#FF7E54] flex flex-col justify-center items-center w-full py-[30px]'>
        <span className='text-center text-white text-base'>
          Terms & Conditions | Privacy Policy
        </span>
        <span className='text-center text-white text-base'>
          © Copyright 2020 - 2021 Ingenuity & Solutions LLC All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
