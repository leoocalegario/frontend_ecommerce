import { Acessorio } from "./acessorio";
import { Marca } from "./marca";

export class Carro {
    id_anuncio!: number;
    modelo!: string;
    ano!: number;
    cor!: string;
    valorcarro!: number;
    combustivel!: string;
    imagem!: string;
    km!: number;
    placacarro!: string;
    user_id!: number;
    veiculosmarca!: Marca;
    acessorios: Acessorio[] =[];


}
