import { RecommendationCard } from './RecommendationCard'

const recommendations = [
  {
    id: 1,
    title: 'Valorant Mundi',
    category: 'Canal',
    description:
      'Canal do youtube que publica highlights das principais partidas competitivas do mundo.',
    image: 'https://i.imgur.com/SWDmyZQ.png?1',
    link: 'https://www.youtube.com/c/ValorantMundi',
  },
  {
    id: 2,
    title: 'ValoPlant',
    category: 'Ferramenta',
    description: 'Ferramenta utilizada para criar estratégias de Valorant.',
    image: 'https://i.imgur.com/KK5s220.png?1',
    link: 'https://valoplant.gg',
  },
  {
    id: 3,
    title: 'RIB',
    category: 'Site',
    description:
      'Site de notícias e resultados de partidas de todo o competitivo de Valorant.',
    image: 'https://i.imgur.com/frCbyEP.png?1',
    link: 'https://www.rib.gg',
  },
  {
    id: 4,
    title: 'ValorantZone',
    category: 'Site',
    description:
      'Site de notícias brasileiro sobre todo o competitivo de Valorant.',
    image: 'https://i.imgur.com/FCzjtEu.png',
    link: 'https://valorantzone.gg',
  },
]

export function RecommendationList() {
  return (
    <div className="flex flex-col justify-center gap-2 px-8 py-4">
      {/* Title */}
      <div>
        <h1 className="flex justify-center rounded-md border-2 border-red-600 bg-gray-800 p-1 align-middle font-sans text-2xl text-gray-300 ">
          Recomendações
        </h1>
      </div>
      {/* Body */}
      <div className="flex max-h-[560px] flex-col gap-10 overflow-auto rounded-md border-2 border-gray-600 bg-red-500 p-6 text-justify font-sans text-gray-400">
        {recommendations.map((recommendation) => (
          <RecommendationCard
            key={recommendation.id}
            recommendation={recommendation}
          />
        ))}
      </div>
    </div>
  )
}
