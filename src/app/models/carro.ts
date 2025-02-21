import { Acessorio } from "./acessorio";
import { Marca } from "./marca";

export class Carro {
    idAnuncio!: number;
    modelo!: string;
    ano!: number;
    cor!: string;
    valorcarro!: number;
    combustivel!: string;
    imagem!: string;
    km!: number;
    placacarro!: string;
    veiculosmarca!: Marca;
    acessorios: Acessorio[] =[];


}
