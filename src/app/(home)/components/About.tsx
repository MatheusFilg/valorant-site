/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div className="flex flex-col justify-center gap-2 rounded-md px-8 text-justify">
      <h1 className="flex justify-center rounded-md border-2 border-gray-600 bg-red-500 p-1 align-middle font-sans text-2xl text-gray-600">
        Sobre
      </h1>
      <div className="rounded-md border-2 border-red-600 bg-gray-800 p-6 text-justify font-alt text-lg text-gray-300">
        Este é um projeto apenas para treino de algumas libs e frameworks por
        minha parte, escolhi valorant como "tema" pois foi onde tive uma maior
        criatividade do que poderia ser feito e como poderia ficar um site sobre
        isso.
        <br />
        Claramente o projeto não está finalizado e tem algumas ideias que ainda
        podem ser implementadas ou não, como dito antes, é apenas um teste.
        <br />
        <br />
        Qualquer feedback ou sugestão do que pode ser feito é bem-vindo.
      </div>
    </div>
  )
}
