import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, ShoppingCart, Info } from "lucide-react"

export const metadata = {
  title: "Bebê Reborn: Guia Completo das Melhores Bonecas Realistas 2024",
  description:
    "Descubra tudo sobre bebês reborn realistas! Guia completo com as melhores bonecas reborn menina, opções baratas e custo-benefício. Análise detalhada e dicas de compra.",
  keywords:
    "bebê reborn, bebê reborn realista, bebê reborn menina, bebê reborn barato, bebê reborn custo benefício, boneca reborn",
  openGraph: {
    title: "Bebê Reborn: Guia Completo das Melhores Bonecas Realistas 2024",
    description:
      "Descubra tudo sobre bebês reborn realistas! Guia completo com as melhores bonecas reborn menina, opções baratas e custo-benefício.",
    type: "article",
  },
}

const bonecas = [
  {
    i: 1,
    name: "Brastoy Bebê Reborn Bonecas Realista de silicone menina 48 cm",
    link: "https://mercadolivre.com/sec/1EjMP9P",
    imgs: [
      "/images/boneca01.webp",
      "/images/boneca02.webp",
      "/images/boneca03.webp",
      "/images/boneca04.webp",
      "/images/boneca05.webp",
    ],
    price: "R$ 189,90",
    highlight: "Mais Vendida",
  },
  {
    i: 2,
    name: "Brastoy Boneca Bebê Reborn Silicone Menina Pandinha Olhos Castanhos",
    link: "https://mercadolivre.com/sec/2tTBdSr",
    imgs: [
      "/images/boneca06.webp",
      "/images/boneca07.webp",
      "/images/boneca08.webp",
      "/images/boneca09.webp",
      "/images/boneca10.webp",
    ],
    price: "R$ 159,90",
    highlight: "Melhor Custo-Benefício",
  },
  {
    i: 3,
    name: "Brastoy Bonecas Bebe Reborn Menina 100% Silicone 55 Cm",
    link: "https://mercadolivre.com/sec/1Lrs5gz",
    imgs: [
      "/images/boneca11.webp",
      "/images/boneca12.webp",
      "/images/boneca13.webp",
      "/images/boneca14.webp",
      "/images/boneca15.webp",
      "/images/boneca16.webp",
    ],
    price: "R$ 299,90",
    highlight: "Premium",
  },
  {
    i: 4,
    name: "Brastoy Fabrica Boneca Bebê Reborn Silicone Menina Olhos Castanhos 48cm",
    link: "https://mercadolivre.com/sec/14qghxu",
    imgs: [
      "/images/boneca17.webp",
      "/images/boneca18.webp",
      "/images/boneca19.webp",
      "/images/boneca20.webp",
      "/images/boneca21.webp",
      "/images/boneca22.webp",
      "/images/boneca23.webp",
    ],
    price: "R$ 179,90",
    highlight: "Realismo Incrível",
  },
  {
    i: 5,
    name: "Boneca Reborn Princesa Em Tecido Realista- 52 Cm",
    link: "https://mercadolivre.com/sec/2qv7Ku8",
    imgs: ["/images/boneca24.webp", "/images/boneca25.webp", "/images/boneca26.webp", "/images/boneca27.webp"],
    price: "R$ 89,90",
    highlight: "Mais Barata",
  },
  {
    i: 6,
    name: "Bebê Reborn Pintura Realista Molinha Menina Gordinha",
    link: "https://mercadolivre.com/sec/28dxDaC",
    imgs: [
      "/images/boneca28.webp",
      "/images/boneca29.webp",
      "/images/boneca30.webp",
      "/images/boneca31.webp",
      "/images/boneca32.webp",
      "/images/boneca33.webp",
    ],
    price: "R$ 149,90",
    highlight: "Fofa e Realista",
  },
]

function ProductCard({ boneca, featured = false }) {
  return (
    <Card
      className={`overflow-hidden transition-all duration-300 hover:shadow-xl ${featured ? "ring-2 ring-pink-500" : ""}`}
    >
      <div className="relative">
        <Image
          src={boneca.imgs[0] || "/placeholder.svg"}
          alt={boneca.name}
          width={400}
          height={400}
          className="w-full h-64 object-cover"
        />
        <Badge className="absolute top-2 left-2 bg-pink-500 hover:bg-pink-600">{boneca.highlight}</Badge>
        <div className="absolute top-2 right-2 bg-white/90 rounded-full p-2">
          <Heart className="w-4 h-4 text-pink-500" />
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{boneca.name}</h3>
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">(4.8)</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-pink-600">{boneca.price}</span>
          <span className="text-sm text-green-600 font-medium">Frete Grátis</span>
        </div>
        <Link href={boneca.link} target="_blank" rel="noopener noreferrer">
          <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Ver no Mercado Livre
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export default function BebeRebornGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-pink-600">Bebê Reborn Blog</h1>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-pink-600 border-pink-600">
                <Info className="w-3 h-3 mr-1" />
                Links Afiliados
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Bebê Reborn: O Guia Definitivo 2024</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Descubra tudo sobre bebês reborn realistas! As melhores bonecas reborn menina, opções baratas e com melhor
            custo-benefício do mercado.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-white text-pink-600 text-lg px-4 py-2">Bebê Reborn Realista</Badge>
            <Badge className="bg-white text-pink-600 text-lg px-4 py-2">Custo-Benefício</Badge>
            <Badge className="bg-white text-pink-600 text-lg px-4 py-2">Qualidade Premium</Badge>
          </div>
        </div>
      </section>

      {/* Affiliate Disclaimer */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mx-4 mt-8 rounded-r-lg">
        <div className="flex">
          <Info className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
          <div>
            <p className="text-sm text-yellow-800">
              <strong>Aviso:</strong> Este blog contém links de afiliados. Ao comprar através dos nossos links, você nos
              ajuda a manter o blog funcionando sem custo adicional para você. Obrigado pelo apoio! ❤️
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <article className="prose prose-lg max-w-none mb-16">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">O que são Bebês Reborn?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Os <strong>bebês reborn</strong> são bonecas hiper-realistas que reproduzem com impressionante fidelidade
              as características de um bebê real. Essas obras de arte são criadas por artistas especializados que
              utilizam técnicas avançadas de pintura, escultura e montagem para criar bonecas que parecem respirar.
            </p>
            <p className="text-gray-700 leading-relaxed">
              O termo "reborn" significa "renascido" em inglês, fazendo referência ao processo de transformação de uma
              boneca comum em uma obra de arte realista. Cada <strong>bebê reborn realista</strong> é único e pode levar
              semanas para ser finalizado.
            </p>
          </section>

          {/* Featured Product */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa Recomendação Principal</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <ProductCard boneca={bonecas[0]} featured={true} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Por que escolher esta boneca?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" />
                    <span>Silicone de alta qualidade para máximo realismo</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" />
                    <span>48cm de altura - tamanho perfeito para abraçar</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" />
                    <span>Detalhes incríveis: veias, rugas e expressão natural</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" />
                    <span>Excelente custo-benefício para iniciantes</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Types Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Tipos de Bebê Reborn</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-pink-600 mb-4">Bebê Reborn de Silicone</h3>
                <p className="text-gray-700 mb-4">
                  Os <strong>bebês reborn de silicone</strong> são considerados o padrão ouro do realismo. O silicone
                  permite uma textura de pele incrivelmente realista e durabilidade superior.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Textura de pele ultra-realista</li>
                  <li>• Maior durabilidade</li>
                  <li>• Fácil limpeza</li>
                  <li>• Investimento de longo prazo</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-purple-600 mb-4">Bebê Reborn de Tecido</h3>
                <p className="text-gray-700 mb-4">
                  Uma opção mais acessível que ainda oferece grande realismo. Perfeita para quem busca um{" "}
                  <strong>bebê reborn barato</strong> sem abrir mão da qualidade.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Preço mais acessível</li>
                  <li>• Leve e macio</li>
                  <li>• Ideal para crianças</li>
                  <li>• Ótimo custo-benefício</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <ProductCard boneca={bonecas[2]} />
              <ProductCard boneca={bonecas[4]} />
            </div>
          </section>

          {/* Gender Focus */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Bebê Reborn Menina: Charme e Delicadeza</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              As <strong>bonecas bebê reborn menina</strong> são especialmente populares devido aos detalhes delicados e
              ao charme natural que transmitem. Com características femininas suaves, cabelos sedosos e expressões
              angelicais, essas bonecas conquistam corações.
            </p>

            <div className="bg-pink-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-pink-700 mb-4">Características Especiais das Meninas:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li>• Cabelos longos e sedosos</li>
                  <li>• Cílios delicados e naturais</li>
                  <li>• Expressões doces e angelicais</li>
                  <li>• Detalhes femininos refinados</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>• Roupinhas e acessórios encantadores</li>
                  <li>• Cores suaves e delicadas</li>
                  <li>• Perfeitas para colecionadores</li>
                  <li>• Ideais para terapia e companhia</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <ProductCard boneca={bonecas[1]} />
              <ProductCard boneca={bonecas[3]} />
              <ProductCard boneca={bonecas[5]} />
            </div>
          </section>

          {/* Budget Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Bebê Reborn Barato: Qualidade Acessível</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Encontrar um <strong>bebê reborn barato</strong> que mantenha a qualidade pode parecer desafiador, mas
              existem excelentes opções no mercado. O segredo está em conhecer as marcas confiáveis e entender o que
              procurar em uma <strong>boneca reborn barata</strong>.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-green-700 mb-4">Dicas para Economizar:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">O que observar:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Avaliações de outros compradores</li>
                    <li>• Qualidade dos materiais</li>
                    <li>• Garantia do vendedor</li>
                    <li>• Fotos reais do produto</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Melhores épocas:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Black Friday e Cyber Monday</li>
                    <li>• Promoções de fim de ano</li>
                    <li>• Liquidações de estoque</li>
                    <li>• Cupons de desconto</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-center mb-6">Nossa Seleção Custo-Benefício</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ProductCard boneca={bonecas[4]} />
                <div className="flex flex-col justify-center">
                  <h4 className="text-lg font-bold mb-4">Por que esta é nossa escolha econômica?</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ Preço imbatível para a qualidade oferecida</li>
                    <li>✅ Material resistente e durável</li>
                    <li>✅ Detalhes realistas impressionantes</li>
                    <li>✅ Perfeita para iniciantes no hobby</li>
                    <li>✅ Excelentes avaliações dos compradores</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Care Guide */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Como Cuidar do seu Bebê Reborn</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Cuidados Diários</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                      1
                    </span>
                    <span>Limpe delicadamente com pano úmido</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                      2
                    </span>
                    <span>Evite exposição direta ao sol</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                      3
                    </span>
                    <span>Mantenha em local seco e arejado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                      4
                    </span>
                    <span>Troque as roupinhas regularmente</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-4">Armazenamento</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                      1
                    </span>
                    <span>Use berço ou caixa apropriada</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                      2
                    </span>
                    <span>Proteja de poeira com tecido</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                      3
                    </span>
                    <span>Evite locais com umidade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                      4
                    </span>
                    <span>Posicione com cuidado</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Perguntas Frequentes</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Qual a diferença entre bebê reborn e boneca comum?
                </h3>
                <p className="text-gray-700">
                  Os bebês reborn são criados com técnicas artísticas avançadas para reproduzir fielmente um bebê real,
                  incluindo detalhes como veias, rugas, cabelos implantados e peso realista. Bonecas comuns são
                  produzidas em massa sem esses detalhes específicos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Bebê reborn é seguro para crianças?</h3>
                <p className="text-gray-700">
                  Sim, desde que sejam de marcas confiáveis e adequados para a idade da criança. Verifique sempre as
                  especificações do produto e supervisione crianças pequenas durante o uso.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Como escolher o melhor bebê reborn custo-benefício?
                </h3>
                <p className="text-gray-700">
                  Considere o material (silicone vs tecido), tamanho, detalhes de acabamento, avaliações de outros
                  compradores e garantia oferecida. Nossa seleção já considera esses fatores para oferecer as melhores
                  opções.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Pronto para Escolher seu Bebê Reborn?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Explore nossa seleção cuidadosa das melhores bonecas reborn do mercado. Cada compra através dos nossos
              links ajuda a manter este blog funcionando!
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-bold mb-2">✨ Qualidade Garantida</h3>
                <p className="text-sm">Produtos selecionados e testados</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-bold mb-2">💝 Melhor Preço</h3>
                <p className="text-sm">Sempre o melhor custo-benefício</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-bold mb-2">🚚 Entrega Rápida</h3>
                <p className="text-sm">Frete grátis para todo Brasil</p>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Bebê Reborn Blog</h3>
              <p className="text-gray-300">
                Seu guia completo para o mundo dos bebês reborn. Análises, dicas e as melhores ofertas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Guia de Compras</li>
                <li>Cuidados e Manutenção</li>
                <li>Avaliações de Produtos</li>
                <li>Dicas de Economia</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <p className="text-gray-300">
                Este blog é mantido através de links de afiliados. Obrigado por nos apoiar! ❤️
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bebê Reborn Blog. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
