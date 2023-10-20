# Dicas - Cifra de César 
1. Não dá para cifrar a String inteira de uma única vez. É preciso cifrar caractere por caractere. 
2. Uma String é essencialmente um array de caracteres, isso significa que você pode acessar cada caractere como se fosse um elemento dentro de um array.
    ```javascript
      let str = "Olá Mundo"
      str.lenght //retorna o tamanho da String 
      str[1] //retorna o caractere indexado por 1, nesse caso "l"
    ```
**Dica Extra:** Use uma estrutura de repetição para acessar cada posição(caractere) dentro do Array(String). 

3. O conteúdo inteiro do elemento Textarea é uma única String, não importa se você digitar 20 ou 20000 caracteres. 

4. Para cada caractere existe um valor ASCII (um valor numérico) correspondente. O processo de cifragem e decifragem se dá com o valor ASCII do caractere e não com o caractere em sí. 
Outra característica importante a saber, os valores ASCII correspondentes ao alfabeto estão organizados em sequencia na tabela ASCII, por exemplo, o valor ASCII 65 equivale ao caractere "A", o valor 66 ao "B", o valor 67 ao "C" e assim por diante. O mesmo acontece com os caracteres minusculos (Dê uma procurada no google por tabela ASCII e dê uma olhada para tentar entender como ela é organizada...). 

Assim sendo, para cifrar um caractere: 
- converter o caractere para valor ASCII

    ```javascript 
        let valorASCII = str.charCodeAt(index)
    ```

- Adicionar a cifra 

- converter o valor resultante devolta para caractere 

    ```javascript 
        String.fromCharCode(valorASCII)
    ```
- concatenar o caractere resultante em uma nova String

- No passo a passo acima ainda irá acontecer um pequeno problema caso o valor cifrado ultrapasse o limite do alfabeto. Por exemplo, você precisa cifrar o caractere "y" e a cifra é 4, caso você simplesmente some a cifra ao valor ASCII de "y" o resultado será um valor ASCII fora do intervalo do alfabeto. Você precisa criar alguma lógica para que isso não aconteça. Nesse caso especifico o caractere cifrado deverá resultar em "c".

