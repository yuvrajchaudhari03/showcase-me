import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yuvraj Chaudhari',
  description: `Yuvraj Chaudhari's Portfoliio`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'bg-body-color mx-2 px-6 mb-6 sm:px-6 md:px-10'}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
