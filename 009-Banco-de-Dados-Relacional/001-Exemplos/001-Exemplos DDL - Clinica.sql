--drop table estado; 
create table estado(
  id int PRIMARY KEY, 
	estado VARCHAR(35), 
	uf char(2)
);

--drop table cidade;
create table cidade(
	id int PRIMARY key, 
	nomeCidade varchar(35) not null,
	qtdHabitantes int,
	localizacao point,
  id_estado int references estado(id)
);


--drop table rua;
create table rua (
	id int PRIMARY KEY, 
	nomeRua VARCHAR(35) not null,
  id_cidade int references cidade(id)
);



--drop table endereco;
create table endereco(
	id int primary key, 
	cep char(8), 
  numero int, 
	id_rua int references rua(id)
);


--drop table mae;
create table mae(
	id int PRIMARY key, 
	nome varchar(35) not null, 
	dataNasc date 
);

--drop table end_mae;
create table end_mae(
	id_end int,         
	id_mae int,   
	primary key (id_end, id_mae),
	foreign key (id_end) references endereco(id),
	foreign key (id_mae) references mae(id)
);

alter table end_mae add tipo_uso char(4) not null default 'nc';  

alter table end_mae alter column tipo_uso TYPE varchar(15); 

alter table end_mae add constraint chk_const_tipo_uso check(tipo_uso in ('Veraneio', 'Fim Semana', 'Uso Regular' ))


--alter table end_mae DROP CONSTRAINT end_mae_pkey; 

--alter table end_mae drop tipo_uso; 

 
--drop table parto;
CREATE TABLE parto(
  id INT,
  data DATE,
  horario time,
  tipo CHAR(1),
  id_mae INT,
  PRIMARY KEY (id),
  FOREIGN KEY (id_mae) REFERENCES mae(id)
);

--drop tabe medico;
CREATE TABLE medico(
  id INT,
  nome VARCHAR(35),
  crm VARCHAR(35),
  PRIMARY KEY (id)
);

--drop table telefone;
CREATE TABLE Telefone(
  id INT,
  numTel VARCHAR(35),
  id_medico INT,
  PRIMARY KEY (id),
  FOREIGN KEY (id_medico) REFERENCES medico(id)
);

--drop table mae_medico;
CREATE TABLE mae_medico(
  id_mae INT,
  id_medico INT,
  FOREIGN KEY (id_mae) REFERENCES mae(id),
  FOREIGN KEY (id_medico) REFERENCES medico(id)
);

--drop table medico_parto; 
CREATE TABLE medico_parto(
  id_parto INT,
  id_medico INT,
  FOREIGN KEY (id_parto) REFERENCES parto(id),
  FOREIGN KEY (id_medico) REFERENCES medico(id)
);

--drop table especialidade;
CREATE TABLE especialidade(
  id INT,
  espcialidade VARCHAR(35) NOT NULL,
  PRIMARY KEY (id)
);

--drop table medico_especialidade;
CREATE TABLE medico_Especialidade(
  id_especialidade INT,
  id_medico INT,
  FOREIGN KEY (id_especialidade) REFERENCES especialidade(id),
  FOREIGN KEY (id_medico) REFERENCES medico(id)
);

--drop table bebe;
CREATE TABLE bebe(
  id INT, 
  dataNasc DATE,
  pesoNasc FLOAT,
  alturaNasc FLOAT,
  id_mae INT,
  id_parto INT,
  PRIMARY KEY (id),
  FOREIGN KEY (id_mae) REFERENCES mae(id),
  FOREIGN KEY (id_parto) REFERENCES parto(id)
);

--drop table medico_bebe;
CREATE TABLE medico_bebe(
  id_medico INT NOT NULL,
  id_bebe INT NOT NULL,
  FOREIGN KEY (id_medico) REFERENCES medico(id),
  FOREIGN KEY (id_bebe) REFERENCES bebe(id)
);

--drop table end_bebe;
CREATE TABLE end_bebe(
  id_end INT,
  id_bebe INT,
  FOREIGN KEY (id_end) REFERENCES endereco(id),
  FOREIGN KEY (id_bebe) REFERENCES bebe(id)
);


-- Auto Incremento com Serial
create table medicamentos(
	id serial PRIMARY key,
	descricao VARCHAR(20), 
	qdt int
);

insert into medicamentos(descricao, qdt) values ('bandagem3', 34);


select * from medicamentos;

----
-- Sequence 
CREATE sequence id_medicamento_seq increment 1 start 100;
--CREATE sequence id_medicamento_seq increment 1 start (select max(id) + 1 from tabela);
create table med(
	id int PRIMARY key,
	descricao VARCHAR(20), 
	qdt int
);
select nextval('id_medicamento_seq');
--------


insert into med values (nextval('id_medicamento_seq'),'bandagem3', 54);

select * from med;

----------------------
create table medicam(
	id int PRIMARY key default nextval('id_medicamento_seq'),
	descricao VARCHAR(20), 
	qdt int
);
insert into medicam(descricao, qdt) values ('bandagem3', 12);
select * from medicam;

--------------- Criar tabela com base em outra tabela
select * from proprietario;

create table proprietario_IB as 
  select * from proprietario;

select * from proprietario_IB  --getProprioetarioById(34)

drop table proprietario_ib; 

select * from public.usuario; 

--- 
select * from public.usuario; 

UPDATE public.usuario
SET nomeusu = 'ZZZ'
WHERE id >= 55
RETURNING *;

create index idx_aluguel_valorauguel
on aluguel(valorauguel);

select * from aluguel where valorauguel > 1000








