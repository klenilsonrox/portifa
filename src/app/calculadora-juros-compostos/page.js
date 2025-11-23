'use client'
import { useState } from 'react';
import { FaChartLine, FaMoneyBillWave, FaPercentage, FaCalendarAlt, FaCalculator } from 'react-icons/fa';

export default function CalculadoraJuros() {
  const [valorInicial, setValorInicial] = useState('');
  const [valorMensal, setValorMensal] = useState('');
  const [taxa, setTaxa] = useState('');
  const [tipoTaxa, setTipoTaxa] = useState('mensal');
  const [periodo, setPeriodo] = useState('');
  const [tipoPeriodo, setTipoPeriodo] = useState('anos');
  const [resultado, setResultado] = useState(null);

  const formatarInputMoeda = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, '');
    const numero = parseFloat(apenasNumeros) / 100;
    
    if (apenasNumeros === '') return '';
    
    return numero.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const formatarInputTaxa = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, '');
    
    if (apenasNumeros === '') return '';
    
    const numero = parseFloat(apenasNumeros);
    
    return numero.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const parseValorBR = (valor) => {
    if (!valor) return 0;
    return parseFloat(valor.replace(/\./g, '').replace(',', '.'));
  };

  const calcularJuros = () => {
    const vInicial = parseValorBR(valorInicial);
    const vMensal = parseValorBR(valorMensal);
    let taxaJuros = parseValorBR(taxa) / 100;
    let meses = parseInt(periodo);

    if (!taxa || !periodo) {
      alert('Por favor, preencha a taxa de juros e o período');
      return;
    }

    if (tipoTaxa === 'anual') {
      taxaJuros = Math.pow(1 + taxaJuros, 1/12) - 1;
    }

    if (tipoPeriodo === 'anos') {
      meses = meses * 12;
    }

    const tabelaMensal = [];
    let saldoAcumulado = vInicial;
    let totalInvestido = vInicial;
    let totalJuros = 0;

    for (let mes = 1; mes <= meses; mes++) {
      const jurosMes = saldoAcumulado * taxaJuros;
      
      saldoAcumulado += jurosMes + vMensal;
      totalInvestido += vMensal;
      totalJuros += jurosMes;

      tabelaMensal.push({
        mes: mes,
        juros: jurosMes,
        totalInvestido: totalInvestido,
        totalJuros: totalJuros,
        totalAcumulado: saldoAcumulado
      });
    }

    const montante = saldoAcumulado;
    const totalAplicado = vInicial + (vMensal * meses);
    const rendimento = montante - totalAplicado;

    setResultado({
      totalAplicado: totalAplicado.toFixed(2),
      rendimento: rendimento.toFixed(2),
      montanteFinal: montante.toFixed(2),
      tabela: tabelaMensal
    });
  };

  const formatarMoeda = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-4 px-3 sm:py-8 sm:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex justify-center items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <FaChartLine className="text-emerald-400 text-3xl sm:text-5xl" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2 px-2">
            Calculadora de Juros Compostos
          </h1>
          <p className="text-gray-400 text-sm sm:text-base px-2">
            Descubra quanto seu dinheiro pode render ao longo do tempo
          </p>
        </div>

        {/* Formulário */}
        <div className="bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 border border-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Valor Inicial */}
            <div className="sm:col-span-2 md:col-span-1">
              <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm sm:text-base font-medium">
                <FaMoneyBillWave className="text-emerald-400 flex-shrink-0" />
                Valor Inicial (opcional)
              </label>
              <input
                type="text"
                value={valorInicial}
                onChange={(e) => setValorInicial(formatarInputMoeda(e.target.value))}
                placeholder="0,00"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition text-sm sm:text-base"
              />
            </div>

            {/* Valor Mensal */}
            <div className="sm:col-span-2 md:col-span-1">
              <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm sm:text-base font-medium">
                <FaMoneyBillWave className="text-emerald-400 flex-shrink-0" />
                Aporte Mensal
              </label>
              <input
                type="text"
                value={valorMensal}
                onChange={(e) => setValorMensal(formatarInputMoeda(e.target.value))}
                placeholder="0,00"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition text-sm sm:text-base"
              />
            </div>

            {/* Taxa de Juros */}
            <div className="sm:col-span-2 md:col-span-1">
              <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm sm:text-base font-medium">
                <FaPercentage className="text-emerald-400 flex-shrink-0" />
                Taxa de Juros
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={taxa}
                  onChange={(e) => setTaxa(formatarInputTaxa(e.target.value))}
                  placeholder="0,00"
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition text-sm sm:text-base"
                />
                <select
                  value={tipoTaxa}
                  onChange={(e) => setTipoTaxa(e.target.value)}
                  className="w-32 bg-gray-900 border border-gray-700 rounded-lg px-2 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition text-sm sm:text-base"
                >
                  <option value="mensal">% ao mês</option>
                  <option value="anual">% ao ano</option>
                </select>
              </div>
            </div>

            {/* Período */}
            <div className="sm:col-span-2 md:col-span-1">
              <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm sm:text-base font-medium">
                <FaCalendarAlt className="text-emerald-400 flex-shrink-0" />
                Período
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={periodo}
                  onChange={(e) => setPeriodo(e.target.value)}
                  placeholder="0"
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition text-sm sm:text-base"
                />
                <select
                  value={tipoPeriodo}
                  onChange={(e) => setTipoPeriodo(e.target.value)}
                  className="w-28 bg-gray-900 border border-gray-700 rounded-lg px-2 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition text-sm sm:text-base"
                >
                  <option value="meses">Meses</option>
                  <option value="anos">Anos</option>
                </select>
              </div>
            </div>
          </div>

          {/* Botão Calcular */}
          <button
            onClick={calcularJuros}
            className="w-full mt-6 sm:mt-8 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-3 sm:py-4 rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
          >
            <FaCalculator className="flex-shrink-0" />
            Calcular Rendimento
          </button>
        </div>

        {/* Resultados */}
        {resultado && (
          <div className="bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-700 animate-fadeIn">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
              Resultados da Simulação
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {/* Total Aplicado */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-blue-700">
                <div className="flex items-center gap-2 text-blue-300 mb-2">
                  <FaMoneyBillWave className="flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">Total Aplicado</span>
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white break-words">
                  {formatarMoeda(parseFloat(resultado.totalAplicado))}
                </p>
              </div>

              {/* Rendimento */}
              <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-emerald-700">
                <div className="flex items-center gap-2 text-emerald-300 mb-2">
                  <FaChartLine className="flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">Rendimento Total</span>
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white break-words">
                  {formatarMoeda(parseFloat(resultado.rendimento))}
                </p>
              </div>

              {/* Montante Final */}
              <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-purple-700 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 text-purple-300 mb-2">
                  <FaCalculator className="flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">Valor Final</span>
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white break-words">
                  {formatarMoeda(parseFloat(resultado.montanteFinal))}
                </p>
              </div>
            </div>

            {/* Tabela Mensal */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <FaCalendarAlt className="text-emerald-400 flex-shrink-0" />
                Evolução Mês a Mês
              </h3>
              
              <div className="bg-gray-900 rounded-lg sm:rounded-xl border border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <div className="max-h-64 sm:max-h-96 overflow-y-auto">
                    <table className="w-full min-w-[600px]">
                      <thead className="bg-gray-950 sticky top-0 z-10">
                        <tr>
                          <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider border-b border-gray-700">
                            Mês
                          </th>
                          <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider border-b border-gray-700">
                            Juros do Mês
                          </th>
                          <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider border-b border-gray-700">
                            Total Investido
                          </th>
                          <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider border-b border-gray-700">
                            Total de Juros
                          </th>
                          <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider border-b border-gray-700">
                            Total Acumulado
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {resultado.tabela.map((linha, index) => (
                          <tr 
                            key={linha.mes} 
                            className="hover:bg-gray-800 transition"
                          >
                            <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-300">
                              {linha.mes}
                            </td>
                            <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 whitespace-nowrap text-xs sm:text-sm text-emerald-400 text-right font-medium">
                              {formatarMoeda(linha.juros)}
                            </td>
                            <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 whitespace-nowrap text-xs sm:text-sm text-blue-400 text-right font-medium">
                              {formatarMoeda(linha.totalInvestido)}
                            </td>
                            <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 whitespace-nowrap text-xs sm:text-sm text-emerald-400 text-right font-medium">
                              {formatarMoeda(linha.totalJuros)}
                            </td>
                            <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 whitespace-nowrap text-xs sm:text-sm text-white text-right font-bold">
                              {formatarMoeda(linha.totalAcumulado)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}