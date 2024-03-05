# JavaScript
## Projeto 4 - Casa de Cambio
### Objetivos
- Desenvolver o racíocinio lógico e a habilidade analítica.
- Desenvolver a compreensão dos conceitos de processamento Assíncrono. 
- Desenvolver a compreensão dos conceitos de consumo de API. 
- Reforçar a compreensão dos conceitos de manipulação de eventos. 

#### Palavras Chave  
- JavaScript, Eventos, JavaScript Object, JSON, Consumo de API, Processamento Assíncrono

---
### Instruções Adicionais 
1.	O projeto deverá ser versionado com Git e consolidado no repositório remoto Github.  
- Crie um repositório chamado CasaDeCambio-[seu_nome]
- Não esqueça de commitar periodicamente. Crie Commits que façam sentido e comente os commits adequadamente.

2. O projeto deverá ser estilizado usando Bootstrap (capriche no visual)



--- 
### Projeto 

A casa de câmbio XPTO vem recebendo uma grande quantidade diária de solicitações de cotação de moedas vindas de seus clientes. Atualmente as solicitações de cotação chegam por E-mail, whatsapp e telefone.  
  
Para atender a crescente demanda a diretoria da empresa decidiu criar uma página onde deverá ser possível que o cliente/usuário faça cotações em tempo real, sem a necessidade de contatar as agências da casa de câmbio.   

Típicamente uma solicitação de cotação é composta pela moeda de origem, moeda de destino e o valor a converter. Essa mesma característica deverá servir de base para a criação da página de cotação de moedas.   

1. A casa de câmbio negocia todas as moedas disponíbilizadas pelo Banco Central do Brasil, atualmente essa lista inclui as seguintes: 

- Dólar australiano
- Dólar canadense
- Franco suíço
- Coroa dinamarquesa
- Euro
- Libra Esterlina
- Iene
- Coroa norueguesa
- Coroa sueca
- Dólar dos Estados Unidos

**OBS.:** Caso o Banco Central atualize a disponibilidade de moedas, a página de conversão deverá refletir a nova lista automaticamente. 

2. A casa de câmbio sempre usa a última cotação do Banco Central do Brasil. 

3. O Banco Central do Brasil fornece uma API pública que pode ser consultada livremente para buscar as currencies mais atuais. A API e sua documentação pode ser acessada pelo link abaixo. 

~~~
    https://dadosabertos.bcb.gov.br/dataset/dolar-americano-usd-todos-os-boletins-diarios/resource/ae69aa94-4194-45a6-8bae-12904af7e176
~~~ 

4. Deseja-se permitir que o usuário escolha entre fazer a cotação pelo valor de compra ou pelo valor de venda.   
A saber: 
- "Valor de compra" é o valor que o usuário receberá caso queira vender uma moeda estrangeira à casa de câmbio. 
- "Valor de venda" é o valor que o usuário pagará caso queira comprar alguma moeda estrangeira.  

5. A casa de câmbio não faz conversões diretas entre moedas estrangeiras, por exemplo, se o cliente desejar conver Dolares Americanos em Euros, o cálculo deverá considerar uma conversão de Dolar para Real, pelo preço de compra (pois a casa de câmbio estará comprando Dolares) e depois uma conversão de Real para Euro pelo preço de venda (pois a a casa de câmbio estará vendendo Euros). 

~~~
Conversão de USD --> EUR: 
1. USD --> REAL (Preço de compra)
2. REAL --> EUR (Preço de venda)
~~~