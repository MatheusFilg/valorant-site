import { Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="relative left-14 top-12 grid grid-cols-3 grid-rows-1 gap-x-16 ">
      <div className=" flex h-14 w-14 items-center justify-center rounded-full border-2 border-red-600 bg-gray-700 align-middle hover:bg-gray-800">
        <a
          className="flex flex-row gap-2"
          href="https://www.linkedin.com/in/matheus-filgueiras-419700248/"
          target="_blankspace"
          rel="noreferrer"
        >
          <Linkedin size={28} />
        </a>
      </div>

      <div className=" flex h-14 w-14 items-center justify-center rounded-full border-2 border-red-600 bg-gray-700 align-middle hover:bg-gray-800">
        <a
          className="flex flex-row gap-2"
          href="https://github.com/MatheusFilg/"
          target="_blankspace"
          rel="noreferrer"
        >
          <Github size={28} />
        </a>
      </div>
    </div>
  )
}
