export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-background-primary text-white py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Coluna 1: Detalhes do produto */}
        <div className="bg-background-secondary p-6 rounded-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">1 - Detalhes do produto</h2>
          <div className="mb-4">
            <label className="block text-sm mb-1">Produto</label>
            <input
              type="text"
              value="Assinatura Max Gain Bot"
              readOnly
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Selecione de acordo com o seu perfil</label>
            <select className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm">
              <option>Iniciante</option>
              <option>Entusiasta</option>
              <option>Estrategista</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Como deseja assinar?</label>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:flex-1 px-4 py-2 bg-green-500 text-white rounded">
                Anual
              </button>
              <button className="w-full sm:flex-1 px-4 py-2 bg-gray-700 text-white rounded">
                Mensal
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">
              Possui cupom de desconto ou vale presente?
            </label>
            <div className="flex flex-col sm:flex-row">
              <input
                type="text"
                placeholder="Insira seu cupom"
                className="flex-1 w-full md:w-44 bg-gray-700 border border-gray-600 rounded-t sm:rounded-l sm:rounded-r-none px-3 py-2 text-sm"
              />
              <button className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white rounded-t-none sm:rounded-r sm:rounded-l-none">
                Aplicar
              </button>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold">
              Valor: <span className="text-green-500">12x R$ 109,00</span>
            </p>
          </div>
          <div>
            <label className="inline-flex items-start">
              <input
                type="checkbox"
                className="h-4 w-4 text-green-500 bg-gray-700 border-gray-600 rounded"
              />
              <span className="ml-2 text-sm">
                Estou ciente e de acordo que meu plano será renovado ao fim do
                período vigente de acordo com os{' '}
                <a href="#" className="text-green-500 underline">
                  Termos de uso
                </a>
              </span>
            </label>
          </div>
        </div>

        {/* Coluna 2: Escolha a forma de pagamento */}
        <div className="bg-background-secondary p-6 rounded-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">2 - Escolha a forma de pagamento</h2>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-6">
            <button className="w-full sm:flex-1 px-4 py-2 bg-green-500 text-white rounded">
              Cartão de crédito
            </button>
            <button className="w-full sm:flex-1 px-4 py-2 bg-gray-700 text-white rounded">
              PIX
            </button>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-400">Cartões cadastrados</p>
            <div className="border border-gray-600 rounded py-4 px-3 text-center">
              Cadastre um cartão
            </div>
            <a href="#" className="text-green-500 text-sm mt-2 block">
              Cadastrar novo cartão
            </a>
          </div>
          <div>
            <label className="block text-sm mb-1">Selecione o parcelamento</label>
            <select className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm">
              <option>1x de R$ 1.308,00</option>
              <option>12x de R$ 109,00</option>
            </select>
          </div>
        </div>

        {/* Coluna 3: Resumo do pedido */}
        <div className="bg-background-secondary p-6 rounded-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">3 - Resumo do pedido</h2>
          <div className="border border-dashed border-gray-600 rounded-lg p-4">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-16 bg-green-500 rounded-lg"></div>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>AMBIENTE:</strong> SmarttBot
              </li>
              <li>
                <strong>PRODUTO:</strong> Assinatura SmarttBot
              </li>
              <li>
                <strong>NÍVEL:</strong> Iniciante
              </li>
              <li>
                <strong>ASSINATURA:</strong> Anual
              </li>
              <li>
                <strong>VALOR:</strong> R$ 1.308,00
              </li>
              <li>
                <strong>DESCONTOS:</strong> R$ 0,00
              </li>
              <li>
                <strong>CPF:</strong> 046.897.063-01
              </li>
              <li>
                <strong>INVESTIMENTO:</strong> 1x de R$ 1.308,00
              </li>
            </ul>
          </div>
          <button className="w-full mt-6 py-2 bg-green-500 text-white rounded">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
