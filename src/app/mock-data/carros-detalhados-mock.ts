import { Carro } from '../models/carro';
import { Marca } from '../models/marca';
import { Acessorio } from '../models/acessorio';

// Mock de acessórios para os carros
const acessoriosLamborghini: Acessorio[] = [
  new Acessorio("Sistema de Som Premium", 1),
  new Acessorio("Rodas de Liga Leve", 2),
  new Acessorio("Freios Carbono-Cerâmica", 3)
];

const acessoriosBMW: Acessorio[] = [
  new Acessorio("Pacote M Performance", 4),
  new Acessorio("Sistema de Navegação", 5),
  new Acessorio("Assentos Esportivos", 6)
];

const acessoriosPorsche: Acessorio[] = [
  new Acessorio("Chassi Dinâmico", 7),
  new Acessorio("Aerofólio Traseiro", 8),
  new Acessorio("Volante Esportivo", 9)
];

const acessoriosFord: Acessorio[] = [
  new Acessorio("Suspensão Fox Racing", 10),
  new Acessorio("Barra de Proteção", 11),
  new Acessorio("Sistema de Som B&O", 12)
];

export const CARROS_DETALHADOS_MOCK: Carro[] = [
  {
    id_anuncio: 1,
    modelo: "Huracán SVJ",
    ano: 2023,
    cor: "Verde Lizard",
    valorcarro: 2500000,
    combustivel: "Gasolina",
    imagem: "https://directimports.com.br/wp-content/uploads/2023/03/6-2.webp",
    km: 1200,
    placacarro: "ABC-1234",
    user_id: 1,
    veiculosmarca: new Marca(1, "Lamborghini"),
    acessorios: acessoriosLamborghini
  },
  {
    id_anuncio: 2,
    modelo: "M3 Competition",
    ano: 2024,
    cor: "Azul Marina",
    valorcarro: 850000,
    combustivel: "Gasolina",
    imagem: "https://s3.ecompletocarros.dev/images/lojas/285/veiculos/209029/veiculoInfoVeiculoImagesMobile/vehicle_image_1735255661_d41d8cd98f00b204e9800998ecf8427e.jpeg",
    km: 500,
    placacarro: "DEF-5678",
    user_id: 1,
    veiculosmarca: new Marca(2, "BMW"),
    acessorios: acessoriosBMW
  },
  {
    id_anuncio: 3,
    modelo: "911 GT3 RS",
    ano: 2023,
    cor: "Verde Lizard",
    valorcarro: 1800000,
    combustivel: "Gasolina",
    imagem: "https://www.techart.de/fileadmin/_processed_/8/1/csm_18T013_001_091_GT3RS_LizzardGreen_I_09-18_b3a1b8bb61.jpg",
    km: 800,
    placacarro: "GHI-9012",
    user_id: 1,
    veiculosmarca: new Marca(3, "Porsche"),
    acessorios: acessoriosPorsche
  },
  {
    id_anuncio: 4,
    modelo: "F-150 Raptor",
    ano: 2024,
    cor: "Branco",
    valorcarro: 450000,
    combustivel: "Gasolina",
    imagem: "https://www.autoo.com.br/fotos/2018/11/1280_960/ford_f-150_2018_4_29112018_11334_1280_960.jpg",
    km: 2000,
    placacarro: "JKL-3456",
    user_id: 1,
    veiculosmarca: new Marca(4, "Ford"),
    acessorios: acessoriosFord
  }
];

// Informações detalhadas dos veículos
export const DETALHES_VEICULOS = {
  lamborghini: {
    motor: "V10 5.2L",
    potencia: "770 cv",
    torque: "720 Nm",
    aceleracao: "2.8s (0-100 km/h)",
    velocidadeMaxima: "325 km/h",
    transmissao: "Automática de 7 velocidades",
    tracao: "Integral",
    consumo: "13.7 L/100km",
    descricao: "A Lamborghini Huracán SVJ representa o ápice da tecnologia automotiva italiana, combinando design agressivo com performance extrema. Equipada com motor V10 aspirado de 770 cv, oferece uma experiência de condução única com seu sistema de tração integral e aerodinâmica ativa."
  },
  bmw: {
    motor: "S58 3.0L Twin-Turbo",
    potencia: "510 cv",
    torque: "650 Nm",
    aceleracao: "3.9s (0-100 km/h)",
    velocidadeMaxima: "290 km/h",
    transmissao: "Automática de 8 velocidades",
    tracao: "Traseira",
    consumo: "10.8 L/100km",
    descricao: "O BMW M3 Competition 2024 redefine o conceito de sedan esportivo, oferecendo performance excepcional com conforto diário. Seu motor S58 twin-turbo de 510 cv proporciona aceleração impressionante, enquanto a tecnologia M xDrive garante máxima aderência em qualquer situação."
  },
  porsche: {
    motor: "Boxer 4.0L",
    potencia: "525 cv",
    torque: "465 Nm",
    aceleracao: "3.2s (0-100 km/h)",
    velocidadeMaxima: "296 km/h",
    transmissao: "PDK de 7 velocidades",
    tracao: "Traseira",
    consumo: "13.1 L/100km",
    descricao: "O Porsche 911 GT3 RS é a personificação da engenharia alemã de precisão. Com motor boxer aspirado de 4.0L e 525 cv, oferece uma experiência de condução pura e emocionante. Seu design aerodinâmico e suspensão de competição garantem performance excepcional em pista."
  },
  ford: {
    motor: "EcoBoost 3.5L V6",
    potencia: "450 cv",
    torque: "691 Nm",
    aceleracao: "5.1s (0-100 km/h)",
    velocidadeMaxima: "180 km/h",
    transmissao: "Automática de 10 velocidades",
    tracao: "4x4",
    consumo: "15.2 L/100km",
    descricao: "A Ford F-150 Raptor é a picape mais capaz do mundo, projetada para dominar qualquer terreno. Com motor EcoBoost V6 de 450 cv e suspensão Fox Racing, oferece conforto excepcional tanto na cidade quanto em trilhas extremas. Sua tecnologia Terrain Management System adapta automaticamente o comportamento do veículo às condições."
  }
};

// Funções utilitárias
export function getCarrosDetalhados(): Carro[] {
  return CARROS_DETALHADOS_MOCK;
}

export function getCarroDetalhadoById(id: number): Carro | undefined {
  return CARROS_DETALHADOS_MOCK.find(carro => carro.id_anuncio === id);
}

export function getDetalhesVeiculo(modelo: string): any {
  const modeloLower = modelo.toLowerCase();
  if (modeloLower.includes('huracán') || modeloLower.includes('lamborghini')) {
    return DETALHES_VEICULOS.lamborghini;
  } else if (modeloLower.includes('m3') || modeloLower.includes('bmw')) {
    return DETALHES_VEICULOS.bmw;
  } else if (modeloLower.includes('gt3') || modeloLower.includes('porsche')) {
    return DETALHES_VEICULOS.porsche;
  } else if (modeloLower.includes('raptor') || modeloLower.includes('ford')) {
    return DETALHES_VEICULOS.ford;
  }
  return null;
}

export function searchCarrosDetalhados(searchTerm: string): Carro[] {
  return CARROS_DETALHADOS_MOCK.filter(carro => 
    carro.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    carro.veiculosmarca.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
    carro.cor.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
