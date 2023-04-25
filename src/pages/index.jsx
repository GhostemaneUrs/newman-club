import Image from 'next/image'
import cruz from '@/icon/cruz.svg'
import rectangle from '@/icon/scroll.svg'
import { Fragment, useState } from 'react'
import favorite from '@/icon/favorite.svg'
import account from '@/icon/account.svg'
import slime from '@/icon/slime.svg'
import group from '@/icon/group-account.svg'
import galleryFour from '@/image/galeria-4.png'
import galleryThree from '@/image/galeria-3.png'
import { CardEvents } from '@/components/CardEvent'

const Home = () => {
  const [isJoinUs, setIsJoinUs] = useState(false)
  const crewDetails = [
    {
      id: 1,
      number: '165',
      image: slime,
      title: 'Happy freshman members'
    },
    {
      id: 2,
      number: '13',
      image: account,
      title: 'Wise Senior members'
    },
    {
      id: 3,
      number: '173',
      image: group,
      title: 'The whole crew'
    }
  ]
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
      <section className='mb-[111px] flex flex-col items-center px-4'>
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
        <div className='flex flex-col items-center justify-center max-h-max overflow-x-auto w-full relative cards-section'>
          <CardEvents />
        </div>
        <div className='flex flex-col items-center justify-center '>
          <button className='text-white bg-[#EF7A53] uppercase py-[11px] w-full max-w-[210px] font-bold rounded-3xl mb-6'>
            More events
          </button>
          <span className='font-poppins text-black font-light text-2xl'>
            Let&apos;s have fun, join us in our events. Find out more here
          </span>
        </div>
      </section>
      <section className='bg-[#F5F5F5] w-full h-full pt-[104px] px-4 flex flex-col justify-center items-center'>
        <div className='bg-white shadow-lg rounded-[46px] w-full flex max-w-[1640px] m-auto py-[78px] px-[43px] justify-between items-start relative h-[711px] gap-[77px] mb-[139px]'>
          <div className='flex flex-col justify-center items-center w-full'>
            <div className='w-full max-w-[741px] mb-[26px]'>
              <p className='text-[107px] text-[#154E85]'>
                The <span className='text-[#FF7E54]'>crew.</span>
              </p>
              <p className='text-[#666666] text-base font-poppins font-light'>
                The Catholic community at Trinity participates in the
                sacramental life of the church and serves actively as a partner
                in community building and interreligious dialogue to promote
                understanding and tolerance on campus. <br /> <br /> Roman
                Catholic Campus Ministry is sponsored by the Archdiocese of
                Hartford Campus Ministry Office and Trinity College’s Office of
                Spiritual and Religious Life. It brings a vitally important
                dimension to life at Trinity College.
              </p>
            </div>
            <button className='text-white bg-[#EF7A53] uppercase py-[11px] w-full max-w-[183px] font-bold rounded-3xl mb-6'>
              Learn more
            </button>
          </div>
          <div className='group cursor-pointer w-full h-full'>
            <Image
              width={0}
              height={0}
              alt='crew'
              src={galleryThree}
              className='w-full max-w-[718px] h-full max-h-[592px] object-cover rounded-[38px] group-hover:hidden'
            />
            <Image
              width={0}
              height={0}
              alt='crew'
              src={galleryFour}
              className='w-full max-w-[718px] h-full max-h-[592px] object-cover rounded-[38px] hidden group-hover:block'
            />
          </div>
          <div className='bg-white rounded-3xl py-[28px] px-[43px] absolute shadow-2xl -bottom-[70px] left-[25%] w-full max-w-[812px]'>
            <div className='flex items-center justify-center'>
              {crewDetails.map(crew => {
                return (
                  <div
                    key={crew.id}
                    className='flex w-full items-center justify-center'
                  >
                    <div
                      className={`flex flex-col items-center justify-center w-full  ${
                        crew.id === 3 ? '-mt-5' : crew.id === 2 ? 'mt-1' : ''
                      }`}
                    >
                      <Image
                        width={0}
                        height={0}
                        alt='crew-icon'
                        src={crew.image}
                        className={`w-full ${
                          crew.id === 3
                            ? 'max-w-[69px]'
                            : crew.id === 2
                            ? 'max-w-[54px]'
                            : 'max-w-[42px]'
                        }  h-full max-h-max object-cover`}
                      />
                      <span className='text-[63px] text-[#FF7E54] font-bold'>
                        {crew.number}
                      </span>
                      <div className='w-[188px] text-center'>
                        <span className='text-xl text-[#235286]'>
                          {crew.title}
                        </span>
                      </div>
                    </div>
                    {crew.id !== 3 && (
                      <div className='border solid border-[#235286] w-[0px] h-[127px]' />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className='border solid border-[#FF7E54] w-0 h-[84px]' />
      </section>
    </Fragment>
  )
}

export default Home
