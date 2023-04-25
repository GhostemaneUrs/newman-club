import Image from 'next/image'
import logo from '@/icon/logo.svg'
import { FiInstagram } from 'react-icons/fi'
import { TfiFacebook } from 'react-icons/tfi'
export const Header = () => {
  const menu = [
    {
      id: 1,
      name: 'Home'
    },
    {
      id: 2,
      name: 'The Crew'
    },
    {
      id: 3,
      name: 'Events'
    },
    {
      id: 4,
      name: 'Whats New'
    },
    {
      id: 5,
      name: 'Virtual Office'
    },
    {
      id: 6,
      name: 'Contact'
    }
  ]
  return (
    <header className='bg-[#003473] w-full m-auto flex items-center py-4 px-4 2xl:pl-[178px] 2xl:pr-[140px] fixed z-20'>
      <div className='w-ful max-w-max'>
        <Image
          src={logo}
          alt='logo'
          width={0}
          height={0}
          className='w-full max-w-[195px] h-auto'
        />
      </div>
      <ul className='flex gap-11 w-full items-center justify-end'>
        {menu.map(item => {
          return (
            <li
              key={item.id}
              className={`text-white uppercase text-lg font-bold cursor-pointer ${
                item?.id === 5 && 'max-w-[99px] text-center'
              }`}
            >
              {item.name}
            </li>
          )
        })}
        <li className='bg-[#5AD3DF] py-[11px] rounded-3xl text-[#003473] uppercase font-bold w-full max-w-[210px] text-center cursor-pointer'>
          Maria Reina Parish
        </li>
        <div className='flex gap-4'>
          <li className='bg-[#FF7E54] rounded-full p-[13px] cursor-pointer'>
            <FiInstagram className='text-[#003473]' />
          </li>
          <li className='bg-[#FF7E54] rounded-full p-[13px] cursor-pointer'>
            <TfiFacebook className='text-[#003473]' />
          </li>
        </div>
      </ul>
    </header>
  )
}
