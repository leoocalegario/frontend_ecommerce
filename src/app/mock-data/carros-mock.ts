import { Carro } from '../models/carro';
import { Marca } from '../models/marca';

export const CARROS_MOCK: Carro[] = [
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
    acessorios: []
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
    acessorios: []
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
    acessorios: []
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
    acessorios: []
  }
];

// Função para obter todos os carros mock
export function getCarrosMock(): Carro[] {
  return CARROS_MOCK;
}

// Função para obter um carro específico por ID
export function getCarroById(id: number): Carro | undefined {
  return CARROS_MOCK.find(carro => carro.id_anuncio === id);
}

// Função para buscar carros por modelo
export function searchCarrosByModelo(searchTerm: string): Carro[] {
  return CARROS_MOCK.filter(carro => 
    carro.modelo.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
