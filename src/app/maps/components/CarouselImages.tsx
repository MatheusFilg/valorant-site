/* eslint-disable @next/next/no-img-element */
import { AlertTriangle, ArrowRight } from 'lucide-react'

export interface mapPoolProps  {
  id: number
  name: string
  image: string
  minimap: string
  isActive: boolean
  description: string
}


interface CarouselProps {
  maps: mapPoolProps
}

export function CarouselImage({ maps }: CarouselProps) {
  return (
    // Image
    <div key={maps.id} className='relative left-[73px]'>
      <div className="relative h-full w-full object-cover ">
        <img
          src={maps.image}
          alt=""
          key={maps.id}
          className={`min-h-[470px] max-w-[825px] overflow-hidden rounded-sm bg-cover object-cover ${
            maps.isActive === true ? '' : 'grayscale'
          }`}
        />
      </div>

      {/* Cardimage */}
      <div className="absolute -bottom-2 grid h-24 w-44 translate-x-1 translate-y-1 justify-center rounded-lg bg-gradient-to-l from-red-900  to-red-700 px-4 py-2 text-gray-700 opacity-100 delay-200 ease-in-out group-hover:opacity-100">
        {maps.isActive === true ? (
          ''
        ) : (
          <AlertTriangle className="flex -translate-y-1 translate-x-28" />
        )}
        <div
          className={
            maps.isActive === true
              ? 'relative right-1 top-3'
              : 'relative -top-3 right-1'
          }
        >
          <h1 className="flex items-center justify-center align-middle font-sans text-xl">
            {maps.name}
          </h1>
          <a
            href={`maps/${maps.name}`}
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
