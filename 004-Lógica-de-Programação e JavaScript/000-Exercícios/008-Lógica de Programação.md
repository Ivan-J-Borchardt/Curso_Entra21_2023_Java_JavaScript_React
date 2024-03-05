# Lógica de Programação 
## Lista de Exercícios 8 
### Objetivos
- Reforçar a compreenção da aplicabilidade e funcionamento das funções
- Reforçar na prática a aplicabilidade e funcionamento das estruturas de dados. 
- Reforçar a fixação dos conteúdos anteriores. 
- Promover a construção de um ferramental lógico e algorítmico para posterior aplicação em soluções de maior complexidade.
- Desenvolver o racíocinio lógico e a habilidade analítica.
- Fixar o conhecimento sobre manipulação de arrays usando métodos da classe Arry
#### Palavras Chave  
- Estruturas de dados, arrays, funções, métodos de Array
---
### Instruções Adicionais 
- Resolva os exercícios propostos usando HTML e JavaScript.
- Utilise Bootstrap para estilizar as telas. 
---
### Exercícios 
1.  Para cada elemento de frutas, criar um option no datalist idFrutas;
    O elemento/fruta deve constar na propriedade innerText e sua respectiva posição deve ser posta no id do Option, conforme exemplo abaixo (veja html). 

~~~javaScript
    var frutas = ["tomate", "morango", "limão", "Abacaxi", "Pêra", "Uva"]
~~~

~~~html
    <!-- Lista de dados (seleção de item) -->
    <label for="idFrutas">Frutas:</label><br>
    <input list="idFrutas">
    <datalist id="idFrutas">
        <option value="0">tomate</option>
        <option value="1">morango</option>
    </datalist>
~~~

2. Refatore o exercício L7E2 usando os métodos filter(), map() e reduce(), no lugar das estruturas de repetição tradicionais, para processar os vetores idades[] e nomes[] a fim de mostrar a listagem contendo apenas os dados das pessoas menores de idade.

3. Refatore o exercício L7E3 usando os métodos filter(), map() e reduce(), no lugar das estruturas de repetição tradicionais, para processar os vetores nomes[], sexos[] e salários[] a fim de mostrar uma listagem contendo apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.

4. Refatore o exercício L7E3, armazenando os dados dos funcionarios em um array de JSObjects, seguindo a estrutura mostrada no exemplo abaixo. 

~~~javaScript
    var funcionarios = [] 
    var funcionario = {
        nome: "Joao", 
        sexo: "M", 
        salario: 3500
    }
    funcionarios.push(funcionario)
~~~

Use os métodos filter(), map() e reduce(), no lugar das estruturas de repetição tradicionais, para processar o vetor funcionarios[] a fim de mostrar uma listagem contendo apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.

5. Refatore o exercício L7E5, corrigindo o método de ordenação dos botões "idOrdemCresSort" e "idOrdemDecresSort" de forma que a sequencia numérica do vetor num[] seja ordenada corretamente em ordem crescente e decrescente respectivamente. 