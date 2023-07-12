'use client'
import { Carousel } from '@material-tailwind/react';
/* eslint-disable @next/next/no-img-element */
import { CarouselImage } from './components/CarouselImages';

export interface mapPoolProps  {
  id: number
  name: string
  image: string
  minimap: string
  isActive: boolean
  description: string
}

export const mapPool = [
  {
    id: 1,
    name: 'Ascent',
    image: 'https://i.imgur.com/GMHvyUN.png',
    minimap: 'https://i.imgur.com/DLCVzft.png',
    isActive: true,
    description:
      'Com várias opções de posicionamento e conflito, um território aberto divide duas áreas em Ascent. Cada uma pode ser fortificada por portas explosivas irreversíveis que, quando derrubadas, forçam as equipes a destruí-las ou a acharem outra maneira de prosseguir. Não deixe que o inimigo tome o seu território.',
  },
  {
    id: 2,
    name: 'Bind',
    image: 'https://i.imgur.com/gLrKIqu.png',
    minimap: 'https://i.imgur.com/wit4PnB.png',
    isActive: true,
    description:
      'Dois pontos. Nenhuma área no meio. Você precisa escolher: direita ou esquerda? E aí, qual vai ser? Ambos os lados oferecem caminhos diretos para os atacantes, e dois teleportadores de sentido único facilitam o flanqueamento.',
  },
  {
    id: 3,
    name: 'Breeze',
    image: 'https://i.imgur.com/KrzB6O6.png',
    minimap: 'https://i.imgur.com/bpQOM0A.png',
    isActive: false,
    description:
      'Conheça as ruínas históricas ou visite as grutas deste paraíso tropical. Mas é bom se cobrir, pois temos espaços muito abertos e embates de longa distância. Cuide dos seus flancos e você poderá curtir a brisa do Breeze.',
  },
  {
    id: 4,
    name: 'Fracture',
    image: 'https://i.imgur.com/uyg153t.png',
    minimap: 'https://i.imgur.com/5vfYJFs.png',
    isActive: true,
    description:
      'Um local de pesquisas altamente confidencial partido ao meio por um experimento com Radianita malsucedido. Com opções tão divididas quanto o próprio mapa para os defensores, a escolha é sua: encare os atacantes na própria base deles ou prepare o terreno para um ataque iminente.',
  },
  {
    id: 5,
    name: 'Haven',
    image: 'https://i.imgur.com/L2kuEY6.png?1',
    minimap: 'https://i.imgur.com/ew1T3zq.png',
    isActive: true,
    description:
      'Sob um mosteiro abandonado, é possível ouvir agentes se enfrentando pelo controle de três pontos distintos. Neste mapa, há mais áreas para controlar. Em compensação, os defensores também conseguem aproveitar o território extra para coordenar investidas mais agressivas.',
  },
  {
    id: 6,
    name: 'Icebox',
    image: 'https://i.imgur.com/6qQKYqL.png',
    minimap: 'https://i.imgur.com/BbKb7fg.png',
    isActive: false,
    description:
      'Seu próximo campo de batalha será uma área de escavação secreta da Kingdom retomada pela força do Ártico. Você precisará ter cuidado com os terrenos horizontais dos dois pontos principais, que são protegidos por neve e metal. Aproveite para usar as tirolesas, e seus inimigos nunca verão seu ataque iminente.',
  },
  {
    id: 7,
    name: 'Lotus',
    image: 'https://i.imgur.com/wh2lI2M.png',
    minimap: 'https://i.imgur.com/g99qId5.png',
    isActive: true,
    description:
      'Uma estrutura misteriosa com um conduíte astral irradia poder ancestral. Grandes portas de pedra oferecem várias oportunidades de movimentação e revelam caminhos para três locais enigmáticos.',
  },
  {
    id: 8,
    name: 'Pearl',
    image: 'https://i.imgur.com/c1omgNA.png',
    minimap: 'https://i.imgur.com/uCouIYT.png',
    isActive: true,
    description:
      'Atacantes avançam em direção aos Defensores neste vibrante mapa subaquático com dois pontos principais. Pearl é um mapa sem mecânicas focado no ambiente.',
  },
  {
    id: 9,
    name: 'Split',
    image: 'https://i.imgur.com/ZAHs9Ph.png',
    minimap: 'https://i.imgur.com/HUWpxYo.png',
    isActive: true,
    description:
      'Se quiser avançar, é preciso subir. Separados por uma área central elevada, dois pontos fornecem movimentação rápida com duas cordas ascendentes. Cada ponto tem uma torre imponente que é vital para o controle da área. E não se esqueça: mantenha os olhos abertos e focados nas áreas elevadas antes que tudo vá pelos ares.',
  },
]

export default function Maps() {
  return (
    <div className="z-0 mx-44 flex min-h-[140px] flex-col gap-8 px-28 py-28">
      <h1 className="flex items-center justify-center align-middle font-alt text-5xl leading-relaxed text-gray-100 underline">
        Selecione um Mapa!
      </h1>
      <Carousel loop={true} className='group z-10 overflow-hidden rounded-xl'>
        {mapPool.map((maps) => {
          return <CarouselImage key={maps.id} maps={maps} />
        })}
     </Carousel>
    </div>
  )
}
