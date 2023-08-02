# Markdown 

É uma linguagem de marcação assim como o HTML. Foi desenvolvida por John Gruber e Aaron Swartz em 2004. 

                     

## A Linguagem 
---


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

### Texto Com Ênfase

*Enfatizado - itálico*   
_Enfatizado - itálico_  
<em>Enfatizado - itálico</em>

**Fortemente enfatizado - negrito**   
__Fortemente enfatizado - negrito__   
<strong>Fortemente enfatizado - negrito</strong>

~~Enfatizado - taxado~~ 


combinar configurações **_negrito e itálico_**



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

A [T-Systems](www.t-systems.com.br "Site da T-Systems") é uma empresa de software  

[T-Systems](www.t-systems.com.br "Site da T-Systems") 

[texto do Link](http://example.com/ "Propriedade title, opcional")

<a href="http://example.com/" title ="Propriedade title, opcional" >Texto do link</a>

### Imagem 

![Calculadora Windows](/assets/calculadora.png "Foto da Calculadora Win...")

![Texto da propriedade Alt](/pasta/da/img.jpg "Propriedade title")

<p><img alt="Texto da propriedade alt" title="Propriedade title" src="/pasta/da/img.jpg " /></p>

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


### Linhas divisórias

---
***


### Tabelas 

Cod | Nome  | Nota | Dica 
--- |:-----:|-----:|----
1   |João   |10    | XPTO
2   |Augusto|7,3   | sdf


### Emojis (funciona no git)

:smile:


