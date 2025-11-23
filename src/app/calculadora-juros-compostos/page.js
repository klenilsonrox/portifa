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
    // Remove tudo que não é número
    const apenasNumeros = valor.replace(/\D/g, '');
    
    // Converte para número e divide por 100 (centavos)
    const numero = parseFloat(apenasNumeros) / 100;
    
    // Formata no padrão brasileiro
    if (apenasNumeros === '') return '';
    
    return numero.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const formatarInputTaxa = (valor) => {
    // Remove tudo que não é número
    const apenasNumeros = valor.replace(/\D/g, '');
    
    if (apenasNumeros === '') return '';
    
    // Converte para número diretamente (sem divisão por 100)
    const numero = parseFloat(apenasNumeros);
    
    // Formata no padrão brasileiro
    return numero.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const parseValorBR = (valor) => {
    if (!valor) return 0;
    // Remove pontos de milhar e substitui vírgula por ponto
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

    // Converter taxa anual para mensal
    if (tipoTaxa === 'anual') {
      taxaJuros = Math.pow(1 + taxaJuros, 1/12) - 1;
    }

    // Converter anos para meses
    if (tipoPeriodo === 'anos') {
      meses = meses * 12;
    }

    // Calcular mês a mês para a tabela
    const tabelaMensal = [];
    let saldoAcumulado = vInicial;
    let totalInvestido = vInicial;
    let totalJuros = 0;

    for (let mes = 1; mes <= meses; mes++) {
      // Calcular juros do mês sobre o saldo
      const jurosMes = saldoAcumulado * taxaJuros;
      
      // Adicionar aporte mensal
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaChartLine className="text-emerald-400 text-5xl" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Calculadora de Juros Compostos
          </h1>
          <p className="text-gray-400">
            Descubra quanto seu dinheiro pode render ao longo do tempo
          </p>
        </div>

        {/* Formulário */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 mb-6 border border-gray-700">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Valor Inicial */}
            <div>
              <label className="flex items-center gap-2 text-gray-300 mb-2 font-medium">
                <FaMoneyBillWave className="text-emerald-400" />
                Valor Inicial (opcional)
              </label>
              <input
                type="text"
                value={valorInicial}
                onChange={(e) => setValorInicial(formatarInputMoeda(e.target.value))}
                placeholder="0,00"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>

            {/* Valor Mensal */}
            <div>
              <label className="flex items-center gap-2 text-gray-300 mb-2 font-medium">
                <FaMoneyBillWave className="text-emerald-400" />
                Aporte Mensal
              </label>
              <input
                type="text"
                value={valorMensal}
                onChange={(e) => setValorMensal(formatarInputMoeda(e.target.value))}
                placeholder="0,00"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>

            {/* Taxa de Juros */}
            <div>
              <label className="flex items-center gap-2 text-gray-300 mb-2 font-medium">
                <FaPercentage className="text-emerald-400" />
                Taxa de Juros
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={taxa}
                  onChange={(e) => setTaxa(formatarInputTaxa(e.target.value))}
                  placeholder="0,00"
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
                <select
                  value={tipoTaxa}
                  onChange={(e) => setTipoTaxa(e.target.value)}
                  className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                >
                  <option value="mensal">% ao mês</option>
                  <option value="anual">% ao ano</option>
                </select>
              </div>
            </div>

            {/* Período */}
            <div>
              <label className="flex items-center gap-2 text-gray-300 mb-2 font-medium">
                <FaCalendarAlt className="text-emerald-400" />
                Período
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={periodo}
                  onChange={(e) => setPeriodo(e.target.value)}
                  placeholder="0"
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
                <select
                  value={tipoPeriodo}
                  onChange={(e) => setTipoPeriodo(e.target.value)}
                  className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
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
            className="w-full mt-8 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
          >
            <FaCalculator />
            Calcular Rendimento
          </button>
        </div>

        {/* Resultados */}
        {resultado && (
          <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700 animate-fadeIn">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Resultados da Simulação
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Total Aplicado */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6 border border-blue-700">
                <div className="flex items-center gap-2 text-blue-300 mb-2">
                  <FaMoneyBillWave />
                  <span className="text-sm font-medium">Total Aplicado</span>
                </div>
                <p className="text-3xl font-bold text-white">
                  {formatarMoeda(resultado.totalAplicado)}
                </p>
              </div>

              {/* Rendimento */}
              <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-xl p-6 border border-emerald-700">
                <div className="flex items-center gap-2 text-emerald-300 mb-2">
                  <FaChartLine />
                  <span className="text-sm font-medium">Rendimento Total</span>
                </div>
                <p className="text-3xl font-bold text-white">
                  {formatarMoeda(resultado.rendimento)}
                </p>
              </div>

              {/* Montante Final */}
              <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl p-6 border border-purple-700">
                <div className="flex items-center gap-2 text-purple-300 mb-2">
                  <FaCalculator />
                  <span className="text-sm font-medium">Valor Final</span>
                </div>
                <p className="text-3xl font-bold text-white">
                  {formatarMoeda(resultado.montanteFinal)}
                </p>
              </div>
            </div>

            {/* Tabela Mensal */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaCalendarAlt className="text-emerald-400" />
                Evolução Mês a Mês
              </h3>
              
              <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <div className="max-h-96 overflow-y-auto">
                    <table className="w-full">
                      <thead className="bg-gray-950 sticky top-0 z-10">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider border-b border-gray-700">
                            Mês
                          </th>
                          <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider border-b border-gray-700">
                            Juros do Mês
                          </th>
                          <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider border-b border-gray-700">
                            Total Investido
                          </th>
                          <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider border-b border-gray-700">
                            Total de Juros
                          </th>
                          <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider border-b border-gray-700">
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
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              {linha.mes}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-400 text-right font-medium">
                              {formatarMoeda(linha.juros)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-400 text-right font-medium">
                              {formatarMoeda(linha.totalInvestido)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-400 text-right font-medium">
                              {formatarMoeda(linha.totalJuros)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white text-right font-bold">
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