import Image from 'next/image'
import logo from '@/icon/newman.svg'
import cruz from '@/icon/cruz.svg'
import slime from '@/icon/slime.svg'
import rectangle from '@/icon/scroll.svg'
import account from '@/icon/account.svg'
import { Fragment, useState } from 'react'
import house from '@/image/house.png'
import happy from '@/image/happy.png'
import newman from '@/image/newman.png'
import favorite from '@/icon/favorite.svg'
import group from '@/icon/group-account.svg'
import galleryOne from '@/image/galeria-1.png'
import galleryTwo from '@/image/galeria-2.png'
import galleryFour from '@/image/galeria-4.png'
import galleryThree from '@/image/galeria-3.png'
import comunication from '@/image/comunication.png'
import { CardEvents } from '@/components/CardEvent'
import { CardBlog } from '@/components/CardBlog'

const Home = () => {
  const [isJoinUs, setIsJoinUs] = useState(false)
  const memories = [
    {
      id: 1,
      image: galleryOne
    },
    {
      id: 2,
      image: galleryTwo
    },
    {
      id: 3,
      image: galleryThree
    },
    {
      id: 4,
      image: galleryFour
    },
    {
      id: 5,
      image: galleryOne
    },
    {
      id: 6,
      image: house
    }
  ]

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
      {/* Home section */}
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
      {/* Events section */}
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
          <button className='text-white bg-[#EF7A53] uppercase py-[8px] w-full max-w-[210px] font-bold rounded-3xl mb-6'>
            More events
          </button>
          <span className='font-poppins text-black font-light text-2xl'>
            Let&apos;s have fun, join us in our events. Find out more here
          </span>
        </div>
      </section>
      {/* Crew section */}
      <section className='bg-[#F5F5F5] w-full h-full pt-[104px] flex flex-col justify-center items-center px-4'>
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
            <button className='text-white bg-[#EF7A53] uppercase py-[8px] w-full max-w-[210px] font-bold rounded-3xl'>
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
        <div className='border solid border-[#FF7E54] w-0 h-[89px]' />
      </section>
      {/* Gallery section */}
      <section className='flex  w-full justify-center overflow-hidden bg-[#F5F5F5] rounded-b-[10%] relative mb-12'>
        <div className='border solid border-[#FF7E54] w-0 h-[20px] absolute z-10' />
        <Image
          width={55}
          height={30}
          src={cruz}
          alt='rectangle-orange'
          className='w-full max-w-[55px] h-full max-h-[30px] absolute top-10 z-10'
        />
        <div className='flex flex-col h-full w-[120%] shrink-0 items-center justify-center rounded-t-[30%] bg-gradient-to-b from-blue-900 to-teal-400 relative pb-[126px] pt-[80px] overflow-x-auto cards-section'>
          <div className='mb-[60px]'>
            <h3 className='text-[#FF7E54] text-[60px] leading-[60px]'>
              What&apos;s <span className='text-white'>new</span>
            </h3>
            <span className='text-[#F5F5F5] text-base'>
              Find out about the latest news about our club.
            </span>
          </div>
          <div className='flex flex-col items-center justify-center max-h-max overflow-x-auto w-full relative cards-section mb-[27px]'>
            <CardBlog />
          </div>
          <button className='text-white bg-[#EF7A53] uppercase py-[8px] w-full max-w-[210px] font-bold rounded-3xl'>
            Find out more
          </button>
        </div>
        <div className='border solid border-[#FF7E54] w-0 h-[40px] absolute z-10 bottom-0' />
      </section>
      {/* Memories section */}
      <section className='flex flex-col justify-center items-center px-4 relative max-w-[1670px] m-auto mb-[182px]'>
        <div className='border solid border-[#FF7E54] w-0 h-[80px] absolute z-10 -top-[68px]' />
        <Image
          width={55}
          height={30}
          src={cruz}
          alt='rectangle-orange'
          className='w-full max-w-[55px] h-full max-h-[30px] absolute top-[49px]  z-10'
        />
        <div className='pt-[100px]'>
          <h3 className='text-[#245086] text-[60px] font-bold'>Memories</h3>
        </div>
        <div className='grid grid-cols-3 gap-4 mb-[35px] w-full'>
          {memories.map(memory => {
            return (
              <Image
                alt='memory'
                width={536}
                height={246}
                key={memory.id}
                src={memory.image}
                className='w-full  rounded-lg max-h-[242px] object-cover'
              />
            )
          })}
        </div>
        <button className='text-white bg-[#5AD3DF] uppercase py-[8px] w-full max-w-[210px] font-bold rounded-3xl'>
          More memories
        </button>
      </section>
      {/* Newman section */}
      <section className='bg-gradient-to-r from-[#000000] to-[#2AC5B6] h-[601px] relative mb-[144px]'>
        <div className='flex gap-4 w-full justify-between items-end h-full'>
          <div className='absolute top-0 left-0 w-full '>
            <Image
              alt='happy'
              width={0}
              height={0}
              src={happy}
              className='w-full max-w-[1106px] object-cover relative right-[100px] -top-[136px] 2xl:right-0'
            />
          </div>
          <div className='flex flex-col w-full z-10 max-w-[674px] justify-end 2xl:pl-[420px] pb-[44px]'>
            <span className='text-[#FAFAFA] text-[80px] leading-[80px] font-bold'>
              Newman
            </span>
            <span className='text-[#FAFAFA] text-[80px] leading-[60px] ml-16 font-bold'>
              Soundtrack
            </span>
          </div>
          <div className=' flex justify-center items-end w-full  pb-[44px]'>
            <Image alt='newman' width={374} height={0} src={newman} />
          </div>
        </div>
      </section>
      {/* Contact section */}
      <section className='w-full h-full pt-[104px] flex flex-col justify-center items-center px-4'>
        <div className='bg-[#F5F5F5] shadow-lg rounded-[46px] w-full flex max-w-[1640px] m-auto py-[100px] px-[43px] justify-between items-start relative h-[711px] gap-[77px] mb-[139px]'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='w-full max-w-[741px] mb-[26px]'>
              <p className='text-[107px] text-[#154E85]'>
                Join <span className='text-[#FF7E54]'>us.</span>
              </p>
              <p className='text-[#285C58] text-xl font-poppins font-light'>
                In the sea of life, there is nothing to fear if you have God as
                your captain. Join our crew!
              </p>
            </div>
            <form className='w-full'>
              <input
                type='text'
                placeholder='Full Name'
                className='w-full border solid border-[#707070] rounded-[28px] placeholder:text-center  px-[14px] h-[55px] mb-2 placeholder:text-[#666666] outline-none'
              />
              <input
                type='email'
                placeholder='Email Address'
                className='w-full border solid border-[#707070] rounded-[28px] placeholder:text-center px-[14px] h-[55px] mb-2 placeholder:text-[#666666] outline-none '
              />
              <input
                type='text'
                placeholder='Cell Phone Number'
                className='w-full border solid border-[#707070] rounded-[28px] placeholder:text-center px-[14px] h-[55px] mb-2 placeholder:text-[#666666] outline-none'
              />
              <textarea
                rows={5}
                placeholder='Message'
                className='w-full border solid border-[#707070] rounded-[28px] placeholder:text-center py-4 px-[14px]  mb-2 resize-none placeholder:text-[#666666] outline-none'
              />
            </form>
            <button className='text-white bg-[#EF7A53] uppercase py-[8px] w-full max-w-[210px] font-bold rounded-3xl'>
              Sent
            </button>
          </div>
          <div className='w-full h-full relative'>
            <Image
              width={0}
              height={0}
              alt='comunication'
              src={comunication}
              className='w-full max-w-[718px] h-full max-h-[592px] object-cover rounded-[38px]'
            />
            <div className='absolute top-0 right-0'>
              <div className='bg-[#FF7E54] rounded-b-[12px] relative right-10 px-3 h-[158px] flex justify-center items-center '>
                <Image
                  width={0}
                  height={0}
                  alt='logo'
                  src={logo}
                  className='w-full max-w-[96px] h-full max-h-[43px] object-cover rounded-[38px]'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home
