import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {

    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: Array<NegociacoesDoDia>) => {
                return dados.map(dadosDeHoje => {
                    return new Negociacao(new Date(), dadosDeHoje.vezes, dadosDeHoje.montante)
                })
            })
    }
}