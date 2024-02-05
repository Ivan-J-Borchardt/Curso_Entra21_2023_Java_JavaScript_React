"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor(cod, cliente, itensPedido) {
        this.cod = cod;
        this.cliente = cliente;
        this.itensPedido = itensPedido;
    }
    //Métodos de Acesso 
    getCod() {
        return this.cod;
    }
    getCliente() {
        return this.cliente;
    }
    getItensPedido() {
        return this.itensPedido;
    }
    setCod(cod) {
        this.cod = cod;
    }
    setCliente(cliente) {
        this.cliente = cliente;
    }
    setItensPedido(itensPedido) {
        this.itensPedido = itensPedido;
    }
    //Worker
    addItemPedido(itemPedido) {
        this.itensPedido.push(itemPedido);
    }
    calculaValorTotal() {
        let valorTotal = 0;
        this.itensPedido.forEach(element => {
            let valParcial = element.getValor() * element.getQtd();
            valorTotal += valParcial;
        });
        return valorTotal;
    }
}
exports.Pedido = Pedido;
