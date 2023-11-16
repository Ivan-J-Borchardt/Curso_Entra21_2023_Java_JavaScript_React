# npm - Node Package Manager


Verificando se o npm está instalado
==============================================
retorna a versão no npm instalado, se instalado...

>npm -v 


Configurar o Projeto para ser um Projeto Node
===============================================
Cria o arquivo package.json, o sistema perguntará qual valor de cada variavel. 

>npm init   

O parametro "-y" inicializa as variáveis do package.json com valores default. 

>npm init -y 


Instalando o pacote Express:
=============================================== 
>npm install express@4.16.3 --save-exact

//(versão = @4.16.3)


Baixar todas as dependencias do projeto
===============================================
Para compartilhar o projeto, apagar a pasta nome_modules do projeto,
dessa forma, ao instalar o projeto em outro SO, basta baixar as 
dependencias novamente para manter a compatibilidade de SO

>npm install 

Opcionalmente pode-se abreviar o parâmetro install: 

>npm i

Instalando o nodemon
===============================================

>npm install nodemon -g 

//o -g significa que a instalação será global e não apenas 
//no projeto 

retorna o caminho do npm 
>npm  config get prefix 

