/* eslint-disable @next/next/no-img-element */

import Image from 'next/image'
import Link from 'next/link'

export interface Recommendation {
  id: number
  title: string
  category: string
  description: string
  image: string
  link: string
}

export interface RecommendationState {
  recommendation: Recommendation
}

export function RecommendationCard({ recommendation }: RecommendationState) {
  return (
    <Link
      href={recommendation.link}
      target="_blankspace"
      className="flex flex-row items-center justify-center gap-4 rounded-md border-2 border-gray-900 bg-gray-700 p-2 align-middle hover:bg-gray-400"
    >
      <div>
        <Image
          alt=""
          src={recommendation.image}
          width={96}
          height={48}
          className="h-16 w-16 rounded-md"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h1 className="font-sans text-2xl text-gray-100">
          {recommendation.title}
        </h1>
        <div className="">
          <span className="font-alt text-xl text-gray-300">
            {recommendation.category}
          </span>
        </div>
        <p className="font-alt text-sm text-gray-300">
          {recommendation.description}
        </p>
      </div>
    </Link>
  )
}
