# Git e GitHub
## Fluxo simplificado para trabalho individual
1. Criar Repositório remoto no GitHub
2. Clonar o repositório remoto (Branch Master/main)
3. Trabalhar/Desenvolver o projeto 
4. Adicionar as alterações à Staged Area (Git add) 
5. Consolidar as alterações (Git commit) 
6. Sincronizar o repositório remoto (Git push origin <nomeDaBranch>) 


## Fluxo para trabalho em equipe
1. Criar Repositório remoto no GitHub 
2. Clonar o repositório remoto (Branch Master/main)
3. Criar uma nova branch
4. Dar Checkout na nova branch 
3. Trabalhar/Desenvolver o projeto 
4. Git add 
5. Git commit 
6. Git push origin <nomeDaBranch>
7. Criar pull request (No GitHub)
8. Validar a qualidade do código 
9. Dar Merge da Branch trabalhada na Branch Master (No)
10. Deletar a Branch trabalhada 

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

- Adicionando e Consolidando as alterações em um único comando

git commit am “Criando website XPTO”


7. Mapeando um repositório remoto

git remote add origin "http://...url do rep remoto..."  
git remote -v 

8. Enviando as alterações para o repositório remoto (Sincronizando o Rep. Remoto)

git push -u origin master 
git push 
git push origin master --force   

9. Clonando um repositório remoto 

git clone "http://...url do rep remoto..."

10. Atualizando o Repositório Local 

git pull 

11. Criar nova Branch 

git branch <nomeDaNovaBranch>

12. Apontando para a nova Branch 

git checkout <nomeDaNovaBranch>

* Use git status para verificar se vc está mesmo trabalhando na 
branch correta...


13. Renomeando a Branch

git branch -M main 