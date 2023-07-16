
import { Header } from '@/components/Header'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Nunito, Roboto_Flex as Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const roboto = Roboto({subsets: ['latin'], variable: '--font-roboto'})
const nunito = Nunito({subsets: ['latin'], weight: '400', variable: '--font-nunito'})


export const metadata = {
  title: 'Valorant Blog',
  description: 'Blog de Valorant apenas para testar alguns conceitos',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* <GoogleOAuthProvider clientId="701632069603-vb1thpo5ppsvvohfnarvej3qrg4jkvvg.apps.googleusercontent.com"></GoogleOAuthProvider> */}
        <body
          className={` ${roboto.variable} ${nunito.variable} bg-gray-900 text-gray-100`}
        >
          <Header />
          {children}
        </body>
    </html>
  )
}
