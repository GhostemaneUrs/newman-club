export const CardBlog = () => {
  const cardBlog = [
    {
      id: 1,
      image:
        'https://firebasestorage.googleapis.com/v0/b/portfolio-ghostemane.appspot.com/o/event-1.jpg?alt=media&token=ff6ae9e9-b17b-4893-8725-a0afbbc7ec37',
      name: 'Jane doe',
      title: 'Blog 1',
      event: {
        day: '12',
        month: 'Aug',
        year: '2016'
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      button: 'See more'
    },
    {
      id: 2,
      image:
        'https://firebasestorage.googleapis.com/v0/b/portfolio-ghostemane.appspot.com/o/event-2.jpg?alt=media&token=682af565-e501-4e79-a1f6-eafc9021f7e1',
      name: 'Jane doe',
      title: 'Blog 2',
      event: {
        day: '12',
        month: 'Aug',
        year: '2016'
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      button: 'See more'
    },
    {
      id: 3,
      image:
        'https://firebasestorage.googleapis.com/v0/b/portfolio-ghostemane.appspot.com/o/event-3.jpg?alt=media&token=81c02c60-51d4-4c36-9964-07c1683cad73',
      name: 'Jane doe',
      title: 'Blog 3',
      event: {
        day: '12',
        month: 'Aug',
        year: '2016'
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      button: 'See more'
    },
    {
      id: 4,
      image:
        'https://firebasestorage.googleapis.com/v0/b/portfolio-ghostemane.appspot.com/o/event-4.png?alt=media&token=a7e815ba-6e04-4b2b-95d2-2c7c4ca9ed06',
      name: 'Jane doe',
      event: {
        day: '12',
        month: 'Aug',
        year: '2016'
      },
      title: 'Blog 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      button: 'See more'
    }
  ]
  return (
    <div className='flex flex-nowrap overflow-x-auto gap-4 justify-center items-center m-auto relative z-10'>
      {cardBlog.map(card => {
        return (
          <div
            key={card.id}
            style={{
              backgroundImage: `url(${card.image})`
            }}
            className='w-[398px] h-[528px] bg-cover bg-center rounded-[20px] object-cover cursor-pointer relative group'
          >
            <div className='bg-shadow-card rounded-[20px] w-full h-full flex justify-center items-end'>
              <div className='absolute top-0 left-0'>
                <div className='bg-[#FF7E54] rounded-b-[12px] relative left-5 px-5 py-[26px]'>
                  <div className='flex flex-col items-center justify-center'>
                    <span className='font-poppins text-[#F7F7F7] text-[48px] leading-8 font-bold'>
                      {card.event.day}
                    </span>
                    <span className='font-poppins text-[#F7F7F7] text-[27px] leading-10'>
                      {card.event.month}
                    </span>
                    <span className='font-poppins text-[#F7F7F7] text-[27px] leading-6'>
                      {card.event.year}
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col px-[34px] w-full'>
                <span className='text-[#F5F5F5] text-sm font-poppins'>
                  {card?.name}
                </span>
                <span className='text-[#F5F5F5] text-[35px] font-poppins font-bold'>
                  {card?.title}
                </span>
                <div className='opacity-0 transition duration-500 ease-in-out group-hover:opacity-100 m-auto w-full flex flex-col justify-center items-center gap-5 mb-[41px]'>
                  <p className='text-[#F1F5F8] text-base font-poppins font-light text-justify'>
                    {card?.description}
                  </p>
                  <button className='bg-[#5AD3DF] text-[#003473] uppercase font-bold text-base text-center py-[8px] rounded-3xl w-full max-w-[210px]'>
                    See more
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
