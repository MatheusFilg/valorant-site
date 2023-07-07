/* eslint-disable @next/next/no-img-element */
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { User } from 'lucide-react'
import { useState } from 'react'

export default function SignIn() {
  const [name, setName] = useState()
  const [picture, setPicture] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login: any = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          },
        )
        const {
          data: { name, picture },
        } = res
        setName(name)
        setPicture(picture)
        setIsLoggedIn(true)
      } catch (err) {
        console.log(err)
      }
    },
  })

  const logout = () => {
    googleLogout()
    setIsLoggedIn(false)
  }

  return (
    <div>
      {isLoggedIn ? (
        <div className="flex flex-row gap-4">
          <div className="flex flex-col items-end">
            <p className="font-sans text-base leading-relaxed">{name}</p>
            <button onClick={logout} className="font-alt text-sm text-red-700">
              Sair
            </button>
          </div>

          <img
            src={picture}
            alt="profile image"
            className="h-10 w-10 rounded-full"
          />
        </div>
      ) : (
        <button onClick={login} className="flex items-center gap-3">
          <p className="font-sans text-lg leading-snug underline">
            Login com Google
          </p>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
            <User className="h-6 w-6 text-gray-100" />
          </div>
        </button>
      )}
    </div>
  )
}
