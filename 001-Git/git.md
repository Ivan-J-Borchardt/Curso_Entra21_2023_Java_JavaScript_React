# Git e GitHub
## Fluxo 
1. Criar Repositório remoto no GitHub
2. Clonar o repositório remoto (Branch Master/main)
3. Trabalhar/Desenvolver o projeto 
4. Adicionar as alterações à Staged Area (Git add) 
5. Consolidar as alterações (Git commit) 
6. Sincronizar o repositório remoto (Git push origin <nomeDaBranch>) 



## Command Guide
1. Verificando se o git está instalado (e qual versão está...)

git --version 

2. Configurando algumas variáveis 

git config --global user.email you@example.com   
git config --global user.name "Your Name"  
  
ou   
  
git config --local user.email you@example.com  
git config --local user.name "Your Name"  
  
** --global -> Configuração para a máquina toda   
** --local  -> Configuração para o projeto   
  
Visualizar as configurações válidas para o projeto:  
  
git config user.name
  
Erro SSL Certificate Problem:  

git config --global http.sslbackend schannel  

3. Inicializando um repositório 

git init  
git status 

4. Adicionando arquivos ao staged 

git add nome_arquivo   
git add . 

6. Consolidando alterações 

git commit -m "comentário"


7. Mapeando um repositório remoto

git remote add origin "http://...url do rep remoto..."  
git remote -v 

8. Enviando as alterações para o repositório remoto (Sincronizando o Rep. Remoto)

git push -u origin master 
git push 
git push origin master --force   

9. Clonando um repositório remoto 

git clone "http://...url do rep remoto..."


10. Trocando o nome da Branch

git branch -M main