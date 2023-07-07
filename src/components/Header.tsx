import Image from 'next/image'
import Link from 'next/link'
import logo from '../app/icon.png'
import Navigation from './Navigation'
import SignIn from './SignIn'

export function Header() {
  return (
    <div className="fixed z-20 flex h-16 w-full items-center justify-between bg-gray-600 px-16 shadow-sm">
      <div className="flex flex-row items-center justify-center gap-8 align-middle">
        {/* Logo */}
        <Link href="/">
          <Image
            alt=""
            src={logo}
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg"
          />
        </Link>

        {/* Navegação */}
        <Navigation />
      </div>

      {/* SignIn */}
      <SignIn />
    </div>
  )
}
