FN00. Protótipo da tela principal 
=====================================================================================================
1. Criar a tela de uma urna eletrônica. Esta tela deverá conter um campo para digitação do número eleitoral 
do candidato e um campo para apresentar o nome do candidato, a tela também deverá exibir a foto do candidato.
Caso o  eleitor não se recorde do número de seu candidato ele poderá  selecionar o número do candidato de uma lista.
A urna deverá contar com os botões "Confirmar", "Cancelar", "Branco"


FN01. Carga inicial de candidatos e configuracoes da urna eletronica
=======================================================================================================
1. Criar um projeto NODE com express para mapear algumas rotas para nosso sistema 
de eleiçoes. 


2. Criar um arquivo config.csv no backende/servidor com o seguinte formato: 
(tipoEleicao,numeroCandidato,nomeCandidato,urlFoto)

exemplo de conteúdo para o arquivo csv: 
    a,10,felisberto,img/foto.jpg
    a,11,alberto,img/foto2.jpg
    a,12,alberto,img/foto2.jpg


3. No backend criar um endpoint/rota ([get]/cargainicial) para fornecer os dados do arquivo config.csv.
   Esses dados devem ser fornecidos no corpo da resposta/response no formato array.  


4. No Frontend(urna eletrônica) implementar uma função para fazer a requisição dos dados de "configuração"/carga
 inicial. 
   Chamar a função ao carregar a urna eletrônica (ao ligar a urna eletrônica) ---> isso vai retornar um array.
   Usar os dados recebidos para carregar/configurar a urna eletrônica:
     - se na posição [0,0] do array config contiver "a", então ocultar o campo RG da tela; 
     - quando o usuario digitar um numero de candidato, ler as posições 1, 2, 3 e carregar nos campos que serão exibidas na tela


FN02. Registro de Votos 
=======================================================================================================
1. Criar um novo endpoint/rota ([POST]/voto) para registrar/salvar os votos. 
   Este endpoind deve receber os dados do formulário no corpo da requisição. 
   Cada novo voto deverá ser gravado em um arquivo chamado votacao.csv com o seguinte formato: 
   (RG,numeroCandidato,timestampVoto)
   
   Exemplo de conteúdo para o arquivo csv: 

       4072676,12,202109022123219999
       4072676,11,202109022123219999

       OBS. Em caso de votação anônima, deixar o RG vazio: 

       ,11,202109022123219999
       ,11,202109022123219999

   Caso o voto seja registrado/gravado com sucesso, responder com o seguinte json: 
          {
           "Status" : "200"
           mensagem : "Voto Registrado Com sucesso"
          }

   Caso ocorra algum erro ao registrar o voto, responder com o seguinte json: 
          {
           "Status" : "500"
           mensagem : "Erro ao registrar voto, contate o administrador do sistema"
          }


2. No Frontend, implemente uma função que faça requisições para o novo endpoind /voto. 
   
   A cada novo voto chamar a função passando os dados da votação. 
   Exibir na tela a mensagem retornada pela chamada do Endpoint. 
      Caso o Status seja 200, exibir a mensagem por 2 seguntos.
      Caso a mensagem seja 500, exibir a mensagem por tempo indeterminado e deixar a mensagem em destaque 
      (em vermelho, por exemplo)
      Desabilitar os botes e campos da tela durante o tempo em que a mensagem estiver sendo exibida.


FN03. Apuração dos votos
=======================================================================================================
1. Criar um novo endpoint/rota ([get]/apuracao) para retornar a apuração dos votos. 
   Ler o arquivo votacao.csv e contabilizar a quantidade de votos de cada candidato, votos brancos e votos nulos
   Ao final da apuração retornar no response um array com o seguinte formato: 
       
       [[numeroDoCanditato,qtdVotos,nomeCandidato,urlFotoCandidato]]  

       onde: numeroCandidato pode assumir o número do candidato, ou os termos ("Brancos" ou "Nulos")

       Obs. O array deve estar ordenado em ordem decrescente pela quantidade de votos
      
2. Criar um novo Projeto Frontend para apresentar a apuração da votação.
   ** O layout/design desta página HTML pode ser definido livremente pelo desenvolvedor 
   
  
FN04. Autenticação de eleitor
=======================================================================================================
1. Criar um arquivo eleitores.csv no backende/servidor com o seguinte formato: 
(cpf,senha,nome)

2. Criar um novo endpoint/rota ([post]/login) para efetuar a autenticação do eleitor. 
- No corpo da requisição receber cpf e senha: 
{
   cpf: "004.768.212-12",
   senha: "SohEuSei"
}  

- Verificar se a senha e cpf correspondem a algum registro do arquivo eleitores.csv.

- Utilizar JWT para gerar um token de autenticação.

- Caso o eleitor seja autenticado com sucesso, responder com o seguinte json: 

{
   "auth": true,
   "nome": "Nome do Eleitor", 
   token
}


3. Criar um novo endpoint/rota ([post]/logout) para efetuar o logout do eleitor. 
- Registrar o token do eleitor em uma blacklist.
- Verificar a blacklist nos procedimentos de login.

FN05. Tela de Autenticação
=======================================================================================================
1. Criar uma tela de autenticação de eleitores. Esta tela deverá ser apresentada antes da tela da 
Urna Eletrônica. A tela deverá ser composta pelos campos CPF e Senha e um botao login. 

- A tela de autenticação deverá ser criada no mesmo projeto/html da urna eletrônica. Usar containeres e 
manipulação do DOM para ocultar a tela da urna enquanto a tela de login estiver parecendo. 

- Ao clique do botão Login, efetuar uma requisição na rota ([post]/login) passando o cpf e senha 
no corpo da requisição. Esta requisição devolverá um token de autenticação que deverá ser guardado em uma
váriavel de sessão (SessionStorage). 

- Refatorar a rota ([POST]/voto), protegendo-a e permitindo que apenas eleitores autenticados possam registrar 
votos. 