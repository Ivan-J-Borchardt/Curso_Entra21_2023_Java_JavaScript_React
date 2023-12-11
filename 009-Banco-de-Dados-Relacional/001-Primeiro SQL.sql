-- DDL
drop table aluno;

create table aluno (
  id integer PRIMARY KEY,
  nome VARCHAR(50), 
  cpf char(14),   
  id_End INTEGER REFERENCES endereco(id) not null
  ); 

create TABLE endereco (
  id INTEGER PRIMARY key, 
  rua VARCHAR(35), 
  cidade varchar(35), 
  estado varchar (35)
);

insert into endereco values (1, 'rua das palmeiras', 'Blumenau', 'SC')
insert into endereco values (2, 'Av. Beirra mar Norte', 'Florianópolis', 'SC');


INSERT into aluno values (1, 'Joao', '009.000.567-12', 1);
INSERT into aluno values (3, 'Joana', '009.000.567-12', 2);


select * from endereco; 
select * from aluno; 

SELECT aluno.id, 
       aluno.nome, 
       aluno.cpf, 
       endereco.id,
       endereco.rua, 
       endereco.cidade,
       endereco.estado
  from aluno, endereco
where aluno.id_end = endereco.id; 

-- DQL 
select * 
  from demo
 where id >= 2 
   and id <= 4; 
  
  
 where id BETWEEN 2 and 4;