import Link from "next/link";

export default function Plans() {
  const planos = [
    {
      nome: "Aprendiz",
      preco: "Grátis",
      descricao: "Plano Atual",
      beneficios: ["Simulado", "Nenhum risco", "01 robô", "Delay de 15 min.", "Whiteboxes"],
      destaque: false,
    },
    {
      nome: "Iniciante",
      preco: "R$109,00/mês",
      descricao: "Upgrade",
      beneficios: ["Simulado e real", "Risco baixo", "03 robôs", "R$10.000/trade"],
      destaque: false,
    },
    {
      nome: "Entusiasta",
      preco: "R$349,00/mês",
      descricao: "Upgrade",
      beneficios: ["Simulado e real", "Risco intermediário", "09 robôs", "R$100.000/trade"],
      destaque: true,
    },
    {
      nome: "Estrategista",
      preco: "R$1.249,00/mês",
      descricao: "Upgrade",
      beneficios: ["Simulado e real", "Risco alto", "30 robôs", "R$300.000/trade"],
      destaque: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background-primary py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-center mb-8">
          ESCOLHA O PLANO IDEAL PARA O SEU PERFIL
        </h1>
        <div className="flex justify-center space-x-4 mb-8">
          <button className="px-4 py-2 bg-green-500 text-white rounded">Anual</button>
          <button className="px-4 py-2 text-gray-500 rounded">Mensal</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {planos.map((plano, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 border shadow ${
                plano.destaque ? " border-green-500" : "border-gray-200"
              }`}
            >
              <h2 className="text-xl font-bold mb-2 text-center text-gray-500">{plano.nome}</h2>
              <p className="text-2xl font-semibold text-center text-green-600">{plano.preco}</p>
            

              <Link href={`/painel/plans/checkout/${index}`}>
              <button
                className={`mt-4 w-full py-2 rounded ${
                  plano.destaque
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-500  hover:bg-green-500 hover:text-white"
                }`}
              >
                {plano.descricao}
              </button>
              </Link>

              <ul className="mt-6 space-y-2">
                {plano.beneficios.map((beneficio, i) => (
                  <li key={i} className="text-sm text-gray-500">
                    {beneficio}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
