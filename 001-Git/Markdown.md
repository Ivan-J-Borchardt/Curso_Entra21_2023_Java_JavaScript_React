# Markdown 

&nbsp;&nbsp;&nbsp;&nbsp;É uma linguagem de marcação assim como o HTML. Foi desenvolvida por John Gruber e Aaron Swartz em 2004. 

   https://www.markdownguide.org/
                     
---
### Comentários

[Comment]: <> (isto é um comentário)

```markdown
   [Comment]: <> (isto é um comentário)
```

### Cabeçalhos/Títulos 

Cabeçalho              <h1>Cabeçalho</h1>
=== 
 
Sub-Cabeçalho          <h2>Sub-Cabeçalho</h2> 
---
 
# Cabeçalho - h1          <h1>Cabeçalho h1</h1>
## Cabeçalho - h2         <h2>Cabeçalho h2</h2>
### Cabeçalho - h3        <h3>Cabeçalho h3</h3>
#### Cabeçalho - h4       <h4>Cabeçalho h4</h4>
##### Cabeçalho - h5      <h5>Cabeçalho h5</h5>
###### Cabeçalho - h6     <h6>Cabeçalho h6</h6>  

### Parágrafos 



Parágrafos são separados por uma linha em branco.    
<p>Parágrafos são separados por uma linha em branco. </p>

Dois espaços no fim de uma linha produzem  
uma quebra de linha.

<p>Dois espaços no fim de uma linha produzem <br>uma quebra de linha.</p>

### Cores

testtwes <font color="red">This text is red!</font> sdafasdfa


### Notas de Rodapé 

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.


### Texto Com Ênfase

*Enfatizado - itálico*  

==Texto Grifado==  
<mark>Texto Grifado</mark>

_Enfatizado - itálico_  
<em>Enfatizado - itálico</em>

**Fortemente enfatizado - negrito**   
__Fortemente enfatizado - negrito__   
<strong>Fortemente enfatizado - negrito</strong>

~~Enfatizado - taxado~~ 


combinar configurações **_negrito e itálico_**


### Texto Subscrito 

H~2~O  
H<sub>2</sub>O

### Texto Sobreescrito 

x^2^  
X<sup>2</sup>


### Listas Não Ordenadas

- item 1 
- item 2
   - sub item 
   - sub item 2
      - sub sub item...
   - sub item 3

- item 3

<ul>
    <li>item 1</li>
    <li>item 2</li>
</ul>

### Listas Ordenadas

1. item a
2. item b 
3. item c

<ol>
    <li>item a</li>
    <li>item b</li>
</ol>

1. item a
1. item b 
   1. sub-item
   1. sub-item 
1. item c

### Listas de tarefas 
                                                               
- [X] Criar especificação funcional  
- [ ] Criar testes automatizados  
- [ ] Criar Back



### Links

A [Google](https://www.google.de/ "Site da T-Systems") é uma empresa de software  

[T-Systems](https://www.t-systems.com/br/pt "Site da T-Systems") 

[texto do Link](http://example.com/ "Propriedade title, opcional")

<a href="http://example.com/" title ="Propriedade title, opcional" >Texto do link</a>

### Imagem 

![EMOJI](https://github.com/Ivan-J-Borchardt/imagens/blob/master/Emoji%20Desespero.png "ASDASDAS")

![Calculadora Windows](/assets/calculadora.png "Foto da Calculadora Win...")

![Texto da propriedade Alt](/pasta/da/img.jpg "Propriedade title")

<p><img alt="Texto da propriedade alt" title="Propriedade title" src="/pasta/da/img.jpg " /></p>

### Vídeo

<video src="assets/VideoKai.mp4" controls title="Title"></video>

[![Image alt text](https://img.youtube.com/vi/YOUTUBE-ID/0.jpg)](https://www.youtube.com/watch?v=YOUTUBE-ID)

[![BREAKFAST at The GIRAFFE MANOR!! ELEPHANTS and MORE!!](https://img.youtube.com/vi/Pa5yeliQSXw/0.jpg)](https://www.youtube.com/watch?v=Pa5yeliQSXw)


### Citações 

> Esse texto será envolto pelo elemento HTML blockquote. 

<blockquote>
  <p>Esse texto será envolto pelo elemento HTML blockquote.</p>
</blockquote>


### Código: 

isso é um comando javaScript `console.log('exemplo')`

<p><code>codigo</code></p>

### Trechos de Código 


```
   if var > 0 then 
        display "Valor positivo"
   else
        display "Valor Negativo"
   and-if 
```
~~~
   if var > 0 then 
        display "Valor positivo"
   else
        display "Valor Negativo"
   and-if 
~~~

### Syntax Highlighting 

```json
   {
      "Nome": "nome",
      "idade": "idade"
   }
```

```html
   <html>
      <body>
            <h1> Teste </h1>
      </body> 
   </html>

```

```javascript 
   funtion incrementa(num){
      return num + 1;
   }

```

### Linhas divisórias

---
***



### Tabelas 

Cod | Nome  | Nota | Dica 
--- |:-----:|-----:|----
1   |João   |10    | XPTO
2   |Augusto|7,3   | sdf


### Emojis (funciona no git)

#### VSCode

- Apenas dar copiar e colar emojis da Emojoipedia;

   https://emojipedia.org/
 
  🧐

#### GitHub

- Apenas usar os comandos demonstrados nesta pagina:

   https://gist.github.com/rxaviers/7360908

   :blush:  
   :smirk:  


### Markdown to PDF 

- Instale a extenção "Markdown PDF"

![Markdown PDF](<assets/Markdow To PDF.png>)



- Abra o Arquivo MD, clique com o botão direito do mouse e escolha o formato de saída
![Alt text](<assets/Markdown to PDF.gif>)