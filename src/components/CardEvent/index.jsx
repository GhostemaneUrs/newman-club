import { useState } from 'react'

export const CardEvents = () => {
  const [cardsEvents, setCardsEvents] = useState([
    {
      id: 1,
      title: 'Event 1',
      active: false,
      image:
        'https://firebasestorage.googleapis.com/v0/b/portfolio-ghostemane.appspot.com/o/event-1.jpg?alt=media&token=ff6ae9e9-b17b-4893-8725-a0afbbc7ec37',
      description:
        'Uno de los artistas más esperados en Colombia por primera vez en concierto, Louis Tomlinson, ex integrante de One Direction, llegará por primera vez a Bogotá para presentar su primer trabajo como solista. Louis Tomlinson, se presentará en el Movistar Arena en Bogotá el viernes 3 de junio de 2022 presentando su álbum como solista "Walls" y sus grandes éxitos que lo han consolidado como uno de los grandes artistas del momento.',
      event: {
        day: '12',
        month: 'June',
        date: 'Friday, 3 June 2023',
        time: '20:00',
        place: 'Movistar Arena'
      }
    },
    {
      id: 2,
      title: 'Event 2',
      active: false,
      image:
        'https://firebasestorage.googleapis.com/v0/b/portfolio-ghostemane.appspot.com/o/event-2.jpg?alt=media&token=682af565-e501-4e79-a1f6-eafc9021f7e1',
      description:
        'Uno de los artistas más esperados en Colombia por primera vez en concierto, Louis Tomlinson, ex integrante de One Direction, llegará por primera vez a Bogotá para presentar su primer trabajo como solista. Louis Tomlinson, se presentará en el Movistar Arena en Bogotá el viernes 3 de junio de 2022 presentando su álbum como solista "Walls" y sus grandes éxitos que lo han consolidado como uno de los grandes artistas del momento.',
      event: {
        day: '13',
        month: 'June',
        date: 'Tuesday, 13 June 2023',
        time: '20:00',
        place: 'Movistar Arena'
      }
    },
    {
      id: 3,
      title: 'Event 3',
      active: false,
      image:
        'https://firebasestorage.googleapis.com/v0/b/portfolio-ghostemane.appspot.com/o/event-3.jpg?alt=media&token=81c02c60-51d4-4c36-9964-07c1683cad73',
      description:
        'Uno de los artistas más esperados en Colombia por primera vez en concierto, Louis Tomlinson, ex integrante de One Direction, llegará por primera vez a Bogotá para presentar su primer trabajo como solista. Louis Tomlinson, se presentará en el Movistar Arena en Bogotá el viernes 3 de junio de 2022 presentando su álbum como solista "Walls" y sus grandes éxitos que lo han consolidado como uno de los grandes artistas del momento.',
      event: {
        day: '16',
        month: 'June',
        date: 'Friday, 16 June 2023',
        time: '20:00',
        place: 'Movistar Arena'
      }
    },
    {
      id: 4,
      title: 'Event 4',
      active: false,
      image:
        'https://firebasestorage.googleapis.com/v0/b/portfolio-ghostemane.appspot.com/o/event-4.png?alt=media&token=a7e815ba-6e04-4b2b-95d2-2c7c4ca9ed06',
      description:
        'Uno de los artistas más esperados en Colombia por primera vez en concierto, Louis Tomlinson, ex integrante de One Direction, llegará por primera vez a Bogotá para presentar su primer trabajo como solista. Louis Tomlinson, se presentará en el Movistar Arena en Bogotá el viernes 3 de junio de 2022 presentando su álbum como solista "Walls" y sus grandes éxitos que lo han consolidado como uno de los grandes artistas del momento.',
      event: {
        day: '24',
        month: 'June',
        date: 'Saturday, 24 June 2023',
        time: '20:00',
        place: 'Movistar Arena'
      }
    }
  ])

  const handleCardClick = id => {
    setCardsEvents(
      cardsEvents.map(card =>
        card.id === id ? { ...card, active: true } : { ...card, active: false }
      )
    )
  }
  return (
    <div className='flex flex-wrap gap-4 lg:gap-2 xl:gap-4 justify-center items-center h-full m-auto relative z-10 w-full'>
      {cardsEvents.map(card => {
        return (
          <div
            key={card.id}
            style={{
              backgroundImage: `url(${card.image})`
            }}
            className={`w-[354px] h-[183px] md:w-[350px] md:h-[300px] lg:w-[240px] lg:h-[350px] xl:w-[300px] xl:h-[450px] 2xl:w-[348px] 2xl:h-[551px] bg-cover bg-center rounded-[20px] object-cover cursor-pointer group relative`}
            onClick={() => {
              handleCardClick(card.id)
            }}
          >
            <div className='bg-shadow-card w-full h-full flex flex-col items-center justify-center rounded-[20px] relative'>
              <div className='flex flex-col gap-4'>
                <div>
                  <span className='text-[45px] font-bold text-[#F1F5F8] font-poppins'>
                    {card.title}
                  </span>
                </div>
                <div className='flex xl:hidden flex-col items-center justify-center'>
                  <span className='text-[80px] text-[#FF7E54] leading-[40px] font-bold font-poppins'>
                    {card.event.day}
                  </span>
                  <span className='text-[34px] text-[#FF7E54] font-bold uppercase font-poppins'>
                    {card.event.month}
                  </span>
                </div>
              </div>
              <div className='absolute bottom-0 left-0 w-full hidden xl:block'>
                <div className='relative left-0 -bottom-[140px] 2xl:-bottom-[96px] flex flex-col items-center justify-center gap-5'>
                  <div className='border-2 solid border-[#FF7E54] w-0 h-[84px] hidden group-hover:block transition-all duration-300 ease-in mb-5' />
                  <div className='hidden group-hover:flex flex-col items-center justify-center'>
                    <span className='text-[192px] text-[#FF7E54] leading-[100px] font-bold font-poppins'>
                      {card.event.day}
                    </span>
                    <span className='text-[69px] text-[#FF7E54] font-bold uppercase font-poppins'>
                      {card.event.month}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
