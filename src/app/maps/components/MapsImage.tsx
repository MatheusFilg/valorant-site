/* eslint-disable @next/next/no-img-element */
import { AlertTriangle, ArrowRight } from 'lucide-react'

interface mapData {
  id: string
  name: string
  image: string
  minimap: string
  isActive: boolean
  description: string
}

interface MapsImageProps {
  map: mapData
}

export function MapsImage({map}: MapsImageProps) {
  return (
    // Image
    <div key={map.id} className='relative group'>
      <div className="relative h-full w-full object-cover">
        <img
          src={map.image}
          alt=""
          key={map.id}
          className={`min-h-[256px] w-80 overflow-hidden rounded bg-cover object-cover ${
            map.isActive === true ? '' : 'grayscale'
          }`}
        />
      </div>

      {/* Cardimage */}
      <div className="absolute bottom-1 h-20 w-36  translate-y-1 justify-center rounded bg-gradient-to-l from-red-900  to-red-700 px-4 py-2 text-gray-700 opacity-0 group-hover:opacity-100">
        {map.isActive === true ? (
          ''
        ) : (
          <AlertTriangle className="flex -translate-y-1 translate-x-24" />
        )}
        <div
          className={
            map.isActive === true
              ? 'relative right-1 top-3'
              : 'relative -top-3 right-1'
          }
        >
          <h1 className="flex items-center justify-center align-middle font-sans text-xl">
            {map.name}
          </h1>
          <a
            href={`maps/${map.name}`}
            className="mb-2 ml-4 flex flex-row items-center justify-center gap-[2px] align-middle font-alt text-base"
          >
            <p
              className="mb-0.5 font-alt underline
            "
            >
              Saiba mais
            </p>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}
