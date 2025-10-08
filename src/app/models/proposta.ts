import { Carro } from "./carro";

export class Proposta {
    id_proposta!: number;
    valor_proposta!: number;
    nome_cliente!: string;
    telefone_cliente!: string;
    email_cliente!: string;
    anuncio_veiculo_id!: number;
    anuncioveiculo!: Carro;
}
