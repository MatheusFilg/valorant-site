'use client'
import { AlertTriangle, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { mapPool } from '../page'

interface MapsPageProps {
  params: {
    slug: string
  }
}

export default function MapsPage(props: MapsPageProps) {
  const mapsFiltered = mapPool.filter((item) => item.name === props.params.slug)

  return (
    <div className="flex flex-col px-36 pt-32">
      <a
        href="/maps"
        className="relative -left-2 -top-14 flex max-w-[64px] flex-row justify-start gap-0.5 align-middle text-red-900 hover:text-red-600"
      >
        <ArrowLeft size={20} />
        <p className="relative bottom-0.5 font-sans leading-relaxed hover:underline">
          Voltar
        </p>
      </a>

      <div className="grid grid-cols-[1.5fr_minmax(0px,_0.5fr)]">
        <div className="relative -top-10 ml-14 flex flex-col items-center align-middle">
          <Image
            src={mapsFiltered[0].minimap}
            alt=""
            width={480}
            height={480}
            className="h-[432px] w-[432px] rounded-lg"
          />
          <h1 className="relative font-alt text-5xl text-red-700 underline">
            {mapsFiltered[0].name}
          </h1>
        </div>

        {/* Descrição */}
        <div className="flex flex-col gap-4">
          <div className="flex max-h-[352px] items-center overflow-hidden rounded-xl bg-gray-700 p-4">
            <h1 className="text-justify font-alt text-lg">
              {mapsFiltered[0].description}
            </h1>
          </div>
          {mapsFiltered[0].isActive ? (
            ''
          ) : (
            <div className=" flex flex-row items-center gap-2 rounded-xl bg-gray-700 p-3">
              <AlertTriangle />
              <h1 className="font-alt text-xs">
                Este mapa está fora da rotação e irá passar por mudanças!
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
