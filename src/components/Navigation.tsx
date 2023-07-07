import Link from 'next/link'

export default function Navigation() {
  return (
    <div className="flex items-center justify-center gap-6 font-sans text-lg">
      <Link
        href="/agents"
        className="hover:text-gray-300 focus:border-b-2 focus:border-b-red-600"
      >
        Agentes
      </Link>

      <Link
        href="/maps"
        className="hover:text-gray-300 focus:border-b-2 focus:border-b-red-600"
      >
        Mapas
      </Link>
      {/* <Link
        href="/patchnote"
        className="hover:text-gray-300 focus:border-b-2 focus:border-b-red-600"
      >
        Patch Notes
      </Link> */}
    </div>
  )
}
