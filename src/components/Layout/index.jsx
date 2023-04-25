import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
export const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1-auto w-full'>{children}</main>
      <Footer />
    </div>
  )
}
