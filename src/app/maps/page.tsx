/* eslint-disable @next/next/no-img-element */
import { prisma } from '@/lib/prisma';
import { MapsImage } from './components/MapsImage';

export default async function Maps() {
  const mapData = await prisma.map.findMany()

  return (
    <div className="z-0 mx-44 flex min-h-[140px] flex-col gap-8 px-28 py-28">
      <h1 className="flex items-center justify-center align-middle font-alt text-5xl leading-relaxed text-gray-100 underline">
        Selecione um Mapa!
      </h1>
      <div className='grid grid-cols-3 gap-x-10 gap-y-28'>
      {mapData.map((maps) => {
          return <MapsImage key={maps.id} map={maps} />
        })}
      </div>
    </div>
  )
}
