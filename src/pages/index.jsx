import Image from 'next/image'
import cruz from '@/icon/cruz.svg'
import rectangle from '@/icon/scroll.svg'
import { Fragment, useState } from 'react'
import favorite from '@/icon/favorite.svg'
import group from '@/icon/group-account.svg'
import { CardEvents } from '@/components/CardEvent'

const Home = () => {
  const [isJoinUs, setIsJoinUs] = useState(false)
  return (
    <Fragment>
      <section className='bg-black w-full h-[960px] relative mb-[72px]'>
        <div className='absolute bottom-0 w-full'>
          <Image
            width={0}
            height={0}
            src={rectangle}
            alt='rectangle-orange'
            className='w-full max-w-[48px] h-full max-h-[86px] relative bottom-5 left-[48.5%] 2xl:left-[48.8%]'
          />
          <div className='border solid border-[#FF7E54] w-0 h-[84px] relative left-[50%]' />
        </div>
        <div className='absolute bottom-0 w-full'>
          <div className='relative bottom-[110px] w-full flex items-center justify-end right-4 2xl:right-[140px] z-10'>
            <div
              className={`bg-white flex items-center gap-6 rounded-full w-full max-w-[281px] cursor-pointer  ${
                !isJoinUs && 'group'
              }`}
              onClick={() => {
                setIsJoinUs(!isJoinUs)
              }}
            >
              <div
                className={` ${
                  isJoinUs ? 'bg-[#FF7E54] mr-4' : 'bg-[#5AD3DF]'
                } rounded-full w-full max-w-[81px] h-[81px] flex items-center justify-center transition-all duration-300 ease-in text-center `}
              >
                <Image
                  width={0}
                  height={0}
                  src={favorite}
                  alt='favorite-icon'
                  className='w-full max-w-[52px] h-full max-h-[47px] group-hover:hidden transition-all duration-300 ease-in'
                />
                <Image
                  width={0}
                  height={0}
                  src={group}
                  alt='group-icon'
                  className='w-full max-w-[52px] h-full max-h-[47px] hidden group-hover:block transition-all duration-300 ease-in'
                />
              </div>
              <div className='w-full'>
                <span className='text-[#707070] text-[34px] uppercase font-bold'>
                  {isJoinUs ? 'YAY!' : 'Join us'}
                </span>
              </div>
            </div>
          </div>
        </div>
        <video
          loop
          muted
          autoPlay
          playsInline
          className='w-full h-full object-cover'
          src='/videos/header-desktop.mp4'
        />
      </section>
      <section className='flex flex-col items-center justify-center max-h-max mb-[111px] overflow-x-auto w-full px-4 relative cards-section'>
        <Image
          width={0}
          height={0}
          src={cruz}
          alt='rectangle-orange'
          className='w-full max-w-[55px] h-full max-h-[30px]'
        />
        <div className='mb-[47px]'>
          <h1 className='text-[60px] font-bold text-[#245086]'>Events</h1>
        </div>
        <div className='flex flex-nowrap overflow-x-auto gap-4 justify-center items-center pb-[100px] max-w-[1640px] m-auto relative z-10 mb-[51px]'>
          <CardEvents />
        </div>
        <button className='text-white bg-[#EF7A53] uppercase py-[11px] w-full max-w-[210px] font-bold rounded-3xl mb-6'>
          More events
        </button>
        <span className='font-poppins text-black font-light text-2xl'>
          Let&apos;s have fun, join us in our events. Find out more here
        </span>
      </section>
    </Fragment>
  )
}

export default Home
