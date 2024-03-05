# JavaScript
## Projeto 3 - Cifra de César
### Objetivos
- Desenvolver o racíocinio lógico e a habilidade analítica.
- Desenvolver a compreensão dos conceitos de manipulação de eventos. 
- Reforçar a compreensão dos conceitos de estruturas de seleção. 
- Reforçar a compreensão dos conceitos de estruturas de repetição. 
- Reforçar a compreensão dos conceitos de vetores. 
- Reforçar a compreensão dos conceitos de manipulação de Strings.

#### Palavras Chave  
- JavaScript, Eventos, Estruturas de Seleção, Estruturas de Repetição, Vetores, Strings

---
### Instruções Adicionais 
1.	O projeto deverá ser versionado com Git e consolidado no repositório remoto Github.  
- Crie um repositório chamado CifraDeCesar-[seu nome]
- Não esqueça de commitar periodicamente. Crie Commits que façam sentido e comente os commits adequadamente.



--- 
### Projeto 

Em criptografia, a **Cifra de César**, também conhecida como **cifra de troca, código de César** ou **troca de César**, é uma das mais simples e conhecidas técnicas de criptografia. É um tipo de cifra de substituição na qual cada letra do texto é substituída por outra, que se apresenta no alfabeto abaixo dela um número fixo de vezes. Por exemplo, com uma troca de três posições, "A" seria substituído por "D", "B" se tornaria "E", e assim por diante. O nome do método é em homenagem a Júlio César, que o usou para se comunicar com os seus generais.  
   
O processo de criptografia de uma cifra de César é frequentemente incorporado como parte de esquemas mais complexos, como a cifra de Vigenère, e continua tendo aplicações modernas, como no sistema ROT13. Como todas as cifras de substituição monoalfabéticas, a cifra de César é facilmente decifrada e na prática não oferece essencialmente nenhuma segurança na comunicação.  
   
A transformação pode ser representada alinhando-se dois alfabetos; o alfabeto cifrado e o alfabeto normal rotacionado à direita ou esquerda por um número de posições. Por exemplo, aqui está uma cifra de César usando uma rotação à esquerda de três posições (o parâmetro de troca, três neste caso, é usado como chave).

**Exemplos:** 3
Normal:  ABCDEFGHIJKLMNOPQRSTUVWXYZ
Cifrado: DEFGHIJKLMNOPQRSTUVWXYZABC



texto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        for (let index = 0; index < texto.length; index++) {
            const element = texto[index];
        }

Normal:  a ligeira raposa marrom saltou sobre o cachorro cansado
Cifrado: d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgr

### O Programa

- Desenvolva um programa que permita a entrada de um texto em um <textarea>. 
- Abaixo do textarea deve haver 2 radio buttons para permitir que o usuário escolha entre texto cifrado e decifrado.
- Ao lado dos radio buttons deve haver um campo input que permita ao usuário que informe a cifra. 
- A cifra tem apenas 1 digito e pode ser numérica ou alfabética. Caso o usuário informe um caractere alfabético, a cifra será a posição do respectivo caractere dentro do alfabeto, por exemplo, "a" = 1, "b" = 2, "c" = 3 e assim por diante. 