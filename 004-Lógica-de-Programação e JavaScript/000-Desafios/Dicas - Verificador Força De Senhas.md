# Dicas - Verificador de Força de Senha
1. Releia e compreenda o projeto e seus requisitos (as regras definidas na especificação)

2. Uma senha é basicamente uma String, assim sendo, revise a aula sobre Strings, lá você encontrará os recursos necessários para a resolução de cada requisito proposto no desafio. Para a resolução desse desafio existem muitas soluções possíveis, porém, tudo o que você precisará já está detalhado nos exemplos da aula sobre Strings (e demais aulas... :) ...). 

3. Apesar de não estar escrito em lugar algum, se você observar o protótipo do projeto, perceberá que a senha é testada a cada caractere digitado. Isso significa que você não pode esperar pelo click em um botão ao invés disso precisará "escutar" algum evento relacionado ao teclado (onkeydown ou onkeyup, por exemplo). 
- Antes de mais nada, crie um protótipo com um campo de digitação e capture o conteúdo digitado a cada tecla pressionada... (para testar, jogue o conteúdo no console.log...)

- A cada tecla digitada você precisará capturar o conteúdo do campo senha, testar esse conteúdo e dar o feedback para o usuário (veja mais detalhes nas próximas dicas).   

4. Um dos requisitos para avaliar a força de senha é o tamanho da senha (quantidade de caracteres). Descubra como "ler/capturar" a quantidade de caracteres de uma String (**Dica Extra:** a resposta está lá na aula sobre Strings...)
- Uma vez encontrada a maneira de descobrir a quantidade de caracteres de uma String, crie um pequeno exemplo, um programinha teste, para entender melhor esse mecanismo, por exemplo:

~~~JavaScript 
    var senha = "Teste123" 
    var tamanhoSenha = ???? //esse resurso, é claro, vc terá que decobrir revisando a aula ;) 
    console.log(tamanhoSenha)
    //depois que esse teste funcionar é só substituir essa String "Teste123" pelo que foi digitado na tela...
~~~

5. Ok, agora que você descobriu como pegar o tamanho da senha, hora de testar o tamanho da senha de acordo com as regras/requisitos do projeto. 
- De acordo com a descrição do problema, o tamanho da senha é a base para um sistema de pontos que define sua força (veja abaixo). Dessa forma já dá para "calcular" os pontos da senha relativos ao seu tamanho... 
~~~
O verificador de força de senha se baseia nas seguintes regras: 
- Se a senha tiver mais de 1 caractere - 1 ponto;
- Se a senha tiver mais de 6 caracteres - 2 pontos;
- Se a senha tiver 10 ou mais caracteres - 3 pontos;
- Se a senha tiver 12 ou mais caracteres - 4 pontos;
- Se a senha tiver 14 ou mais caracteres - 5 pontos;
~~~

6. Agora ainda temos outros 4 requisitos. É possível resolver cada um deles com mais ou menos a mesma lógica, então foque em resolver apenas 1 deles (descobrir se há pelo menos um número compondo a senha). Aqui valem as mesmas dicas já citadas, volte nos exemplos da aula sobre Strings (ou mesmo aulas anteriores) e procure por um jeito de descobrir se há um número compondo a String. 

~~~
- Se a senha contiver pelo menos um número - +1 ponto;
- Se a senha contiver pelo menos uma letra maiúscula - +1 ponto;
- Se a senha contiver pelo menos um caractere minusculo - +1 ponto;
- Se a senha contiver pelo menos um caractere especial (não alfanumérico) - +2 pontos;
~~~

7. Depois de ter calculado a pontuação da senha, é hora de dar o feedback na tela. Antes de se preocupar com todos os adereços piscando, mudando de cor, etc... preocupe-se apenas em dar uma mensagem de saída para o usuário de acordo com as regras do problema:

~~~
- A senha será considerada "Forte" se somar 9 ou mais pontos;  
- A senha será considerada "Moderada" se somar mais de 5 e menos de 9 pontos;
- A senha será considerada "Fraca" se somar 5 ou menos pontos.
~~~ 

8. Agora sim é hora de implementar a parte visual. 
- A barrinha abaixo da senha pode ser feita com uma div, cuja largura (CSS width) será proporcional à pontuação da senha, ou seja, se a senha tiver uma pontuação igual a 5 a div terá uma largura de 50%, se a senha tiver uma pontuação de 10 a div terá uma largura de 100%. 
- A cor da barrinha e do texto de feedback pode ser alterada adicionando e removendo classes CSS com as devidas cores setadas nas propriedades background-color da div e color do texto.

9. Ainda é preciso criar um botão para alterar entre o modo de digitação oculta e não oculta. Há exemplos disso na correção das listas de exercícios. 
