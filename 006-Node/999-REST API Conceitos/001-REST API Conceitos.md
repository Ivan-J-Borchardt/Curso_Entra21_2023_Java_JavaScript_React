
# API REST (Representational State Transfer)

- É um modelo de arquitetura para sistemas distribuidos 

- Roy Fielding, um dos principais autores do protocolo HTTP, em 2000 lista alguns modelos de arquitetura que poderiam ser usados para desenvolvimento de sistemas distribuitos, dentre eles o REST. 

- O Modelo REST foi a base para o protocolo HTTP. 

## Conceitos: RESTFull

- Recursos:
    -  Aluno 
    -  Topico 
    -  Curso 
    -  Disciplinas

- Identificador de Recursos (URI): 
    -  Aluno(/aluno) 
    -  Topico(/topico) 
    -  Curso(/curso) 
    -  Disciplina(/disciplina)  

- Manipulação de Recursos (Verbos HTTP):
~~~
       CRUD - Create, Read, Update, Delete
       ====== 
       Consultas   GET/aluno     
                   GET/aluno/{id}
       Criar Novo  POST/aluno 
       Alterar     PUT/aluno
                   PUT/aluno/{id}
       Apagar      DELETE/aluno 
                   DELETE/aluno/{id}        
~~~ 
- Representação de Recursos (Media Type): 
~~~        
    - JSON 
        "aluno":{
            "userId" : "XPTO123", 
            "nome" : "John Von Neumann", 
            "tipo" : "adm" 
        }

    - XML 
        <aluno>
            <userId>XPTO123</userId>
            <nome>John Von Neumann</nome>
            <tipo>adm</tipo>
        </aluno>
    
    - TXT, HTML, Binário, etc. 
~~~

- Comunicação Stateless (não mantém sessão aberta) 

### HTTP status codes

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status 

