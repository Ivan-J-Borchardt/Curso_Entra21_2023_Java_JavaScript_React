export class ItemPedido{
    private cod: number
    private descricao: string
    private valor: number
    private qtd: number

    constructor(cod:number, descricao: string, valor: number, qtd: number){
        this.cod = cod
        this.descricao = descricao
        this.valor = valor
        this.qtd = qtd
    }

    //Métodos de Acesso 
    public getCod():number{
        return this.cod
    }

    public getDescricao():string{
        return this.descricao
    }

    public getValor():number{
        return this.valor
    }

    public getQtd():number{
        return this.qtd
    }

    public setCod(cod: number):void{
        this.cod = cod
    }

    public setDescricao(descricao:string):void{
        this.descricao = descricao
    }

    public setValor(valor:number):void{
        this.valor = valor
    }

    public setQtd(qtd:number):void{
        this.qtd = qtd
    }


}