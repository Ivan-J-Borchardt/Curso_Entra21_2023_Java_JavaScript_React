--drop table estado; 
create table estado(
    id int PRIMARY KEY, 
	estado VARCHAR(35), 
	uf char(2)
);


--drop table rua;
create table rua (
	id int PRIMARY KEY, 
	nomeRua VARCHAR(35) not null 
);

--drop table cidade;
create table cidade(
	id int PRIMARY key, 
	nomeCidade varchar(35) not null,
	qtdHabitantes int,
	localizacao point 
);

--drop table endereco;
create table endereco(
	id int primary key, 
	cep char(8), 
	id_estado int REFERENCES estado(id), 
	id_rua int references rua(id), 
	id_cidade int references cidade(id)
);


--drop table mae;
create table mae(
	id int PRIMARY key, 
	nome varchar(35) not null, 
	dataNasc date 
);

--drop table end_mae;
create table end_mae(
	id_end int references endereco(id),
	id_mae int references mae(id)
);


