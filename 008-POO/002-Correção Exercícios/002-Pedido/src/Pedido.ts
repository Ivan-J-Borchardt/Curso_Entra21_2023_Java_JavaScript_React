import { Cliente } from "./Cliente"
import { ItemPedido } from "./ItemPedido"

export class Pedido{
    private cod: number
    private cliente: Cliente
    private itensPedido: ItemPedido[]

    constructor(cod: number, cliente: Cliente, itensPedido: ItemPedido[]){
        this.cod = cod
        this.cliente = cliente
        this.itensPedido = itensPedido
    }

    //Métodos de Acesso 
    public getCod():number{
        return this.cod
    }

    public getCliente():Cliente{
        return this.cliente
    }

    public getItensPedido():ItemPedido[]{
        return this.itensPedido
    }

    public setCod(cod:number):void{
        this.cod = cod
    }

    public setCliente(cliente: Cliente):void{
        this.cliente = cliente
    }

    public setItensPedido(itensPedido: ItemPedido[]):void{
        this.itensPedido = itensPedido
    }

    //Worker
    public addItemPedido(itemPedido: ItemPedido):void{
        this.itensPedido.push(itemPedido)
    }

    public calculaValorTotal():number{
        let valorTotal: number = 0

        this.itensPedido.forEach(element => {
            let valParcial = element.getValor() * element.getQtd()
            valorTotal += valParcial
        });

        return valorTotal
    }

 
}