import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { agents } from '../page'

interface AgentSchema {
  params: {
    slug: string
  }
}

export default function AgentPage(props: AgentSchema) {
  const agentsFiltered = agents.filter(
    (item) => item.name === props.params.slug,
  )

  return (
    <div className="flex flex-col px-36 pt-32">
      <a
        href="/agents"
        className="relative -left-2 -top-14 flex max-w-[64px] flex-row justify-start gap-0.5 align-middle text-red-900 hover:text-red-600"
      >
        <ArrowLeft size={20} />
        <p className="relative bottom-0.5 font-sans leading-relaxed hover:underline">
          Voltar
        </p>
      </a>

      <div className="flex flex-row justify-between">
        {/* Imagem */}
        <div className="flex flex-col items-center justify-center gap-4 pt-12 ">
          <Image
            src={agentsFiltered[0].avatar}
            alt=""
            width={320}
            height={320}
            className="h-80 w-56"
          />
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-alt text-3xl text-red-800">
              {props.params.slug}
            </h1>

            <div className="flex flex-row gap-1">
              <Image
                src={agentsFiltered[0].classIcon}
                alt=""
                width={320}
                height={320}
                className="h-4 w-4"
              />

              <h1 className="font-sans text-sm text-gray-300">
                {agentsFiltered[0].class}
              </h1>
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="flex flex-col gap-3">
          <h1 className="flex justify-center font-alt text-4xl text-gray-300">
            Demonstração
          </h1>
          <video
            controls
            autoPlay
            preload="auto"
            className="max-h-[430px] max-w-[800px] rounded-lg"
          >
            <source src={agentsFiltered[0].video} type="video/mp4" />
          </video>
          <p className="font-alt text-xs text-gray-500">
            *As habilidades estão na ordem de: Q-E-C-X
          </p>
        </div>
      </div>
    </div>
  )
}
