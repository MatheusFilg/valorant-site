import About from './components/About'
import Contact from './components/Contact'
import { RecommendationList } from './components/RecommendationList'

export default function Home() {
  return (
    <div className="grid grid-cols-[1.25fr_minmax(0px,_0.75fr)] gap-8 px-24 py-28">
      <div className="flex flex-col items-center justify-center">
        <About />
        <Contact />
      </div>

      <RecommendationList />
    </div>
  )
}
