import { Marca } from '../models/marca';
import { Acessorio } from '../models/acessorio';
import { Proposta } from '../models/proposta';

// Marcas mockadas (id alinhado com os veículos existentes)
export const MARCAS_MOCK: Marca[] = [
  new Marca(1, 'Lamborghini'),
  new Marca(2, 'BMW'),
  new Marca(3, 'Porsche'),
  new Marca(4, 'Ford')
];

// Acessórios genéricos para reutilização rápida
export const ACESSORIOS_CATALOGO_MOCK: Acessorio[] = [
  new Acessorio('Sistema de Som Premium', 101),
  new Acessorio('Rodas de Liga Leve 20"', 102),
  new Acessorio('Freios Carbono-Cerâmica', 103),
  new Acessorio('Pacote M Performance', 104),
  new Acessorio('Sistema de Navegação GPS', 105),
  new Acessorio('Assentos Esportivos Elétricos', 106),
  new Acessorio('Chassi Dinâmico (suspensão ativa)', 107),
  new Acessorio('Aerofólio Traseiro Ajustável', 108),
  new Acessorio('Volante Esportivo com Paddle Shift', 109),
  new Acessorio('Suspensão Fox Racing', 110),
  new Acessorio('Barra de Proteção Dianteira', 111),
  new Acessorio('Som Bang & Olufsen', 112)
];

// Propostas mockadas ligadas pelos ids dos anúncios (1..4)
export const PROPOSTAS_MOCK: Proposta[] = [
  {
    id_proposta: 1,
    anuncio_veiculo_id: 1, // Huracán SVJ
    valor_proposta: 2400000,
    nome_cliente: 'João Silva',
    telefone_cliente: '(11) 99999-1111',
    email_cliente: 'joao.silva@example.com',
    anuncioveiculo: undefined as any
  },
  {
    id_proposta: 2,
    anuncio_veiculo_id: 2, // BMW M3
    valor_proposta: 830000,
    nome_cliente: 'Maria Oliveira',
    telefone_cliente: '(21) 98888-2222',
    email_cliente: 'maria.oliveira@example.com',
    anuncioveiculo: undefined as any
  },
  {
    id_proposta: 3,
    anuncio_veiculo_id: 3, // GT3 RS
    valor_proposta: 1750000,
    nome_cliente: 'Carlos Pereira',
    telefone_cliente: '(31) 97777-3333',
    email_cliente: 'carlos.pereira@example.com',
    anuncioveiculo: undefined as any
  },
  {
    id_proposta: 4,
    anuncio_veiculo_id: 4, // F-150 Raptor
    valor_proposta: 440000,
    nome_cliente: 'Ana Souza',
    telefone_cliente: '(41) 96666-4444',
    email_cliente: 'ana.souza@example.com',
    anuncioveiculo: undefined as any
  }
];

// Utilidades
export function getMarcasMock(): Marca[] {
  return MARCAS_MOCK;
}

export function getAcessoriosCatalogo(): Acessorio[] {
  return ACESSORIOS_CATALOGO_MOCK;
}

export function listPropostasByAnuncioId(anuncioId: number): Proposta[] {
  return PROPOSTAS_MOCK.filter(p => p.anuncio_veiculo_id === anuncioId);
}

export function addPropostaMock(proposta: Omit<Proposta, 'id_proposta'>): Proposta {
  const nextId = Math.max(...PROPOSTAS_MOCK.map(p => p.id_proposta)) + 1;
  const nova: Proposta = { id_proposta: nextId, ...proposta } as Proposta;
  PROPOSTAS_MOCK.push(nova);
  return nova;
}


