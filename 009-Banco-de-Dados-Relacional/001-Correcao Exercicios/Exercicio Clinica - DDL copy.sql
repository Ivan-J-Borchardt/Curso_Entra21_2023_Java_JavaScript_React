 
create table estado(
    id int PRIMARY KEY, 
	estado VARCHAR(35), 
	uf char(2)
);


create table rua (
	id int PRIMARY KEY, 
	nomeRua VARCHAR(35) not null 
);

create table cidade(
	id int PRIMARY key, 
	nomeCidade varchar(35) not null,
	qtdHabitantes int,
	localizacao point 
);

create table endereco(
	id int primary key, 
	cep char(8), 
	id_estado int REFERENCES estado(id),  
	id_rua int references rua(id), 
	id_cidade int references cidade(id)
);

create table mae(
	id int PRIMARY key, 
	nome varchar(35) not null, 
	dataNasc date 
);

create table end_mae(
	id_end int,         
	id_mae int,   
	primary key (id_end, id_mae),
	foreign key (id_end) references endereco(id),
	foreign key (id_mae) references mae(id)
);

CREATE TABLE parto(
  id INT,
  data DATE,
  horario time,
  tipo CHAR(1),
  id_mae INT,
  PRIMARY KEY (id),
  FOREIGN KEY (id_mae) REFERENCES mae(id)
);

CREATE TABLE medico(
  id INT,
  nome VARCHAR(35),
  crm VARCHAR(35),
  PRIMARY KEY (id)
);

CREATE TABLE Telefone(
  id INT,
  numTel VARCHAR(35),
  id_medico INT,
  PRIMARY KEY (id),
  FOREIGN KEY (id_medico) REFERENCES medico(id)
);

CREATE TABLE mae_medico(
  id_mae INT,
  id_medico INT,
  FOREIGN KEY (id_mae) REFERENCES mae(id),
  FOREIGN KEY (id_medico) REFERENCES medico(id)
);

CREATE TABLE medico_parto(
  id_parto INT,
  id_medico INT,
  FOREIGN KEY (id_parto) REFERENCES parto(id),
  FOREIGN KEY (id_medico) REFERENCES medico(id)
);

CREATE TABLE especialidade(
  id INT,
  espcialidade VARCHAR(35) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE medico_Especialidade(
  id_especialidade INT,
  id_medico INT,
  FOREIGN KEY (id_especialidade) REFERENCES especialidade(id),
  FOREIGN KEY (id_medico) REFERENCES medico(id)
);

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

CREATE TABLE medico_bebe(
  id_medico INT NOT NULL,
  id_bebe INT NOT NULL,
  FOREIGN KEY (id_medico) REFERENCES medico(id),
  FOREIGN KEY (id_bebe) REFERENCES bebe(id)
);

CREATE TABLE end_bebe(
  id_end INT,
  id_bebe INT,
  FOREIGN KEY (id_end) REFERENCES endereco(id),
  FOREIGN KEY (id_bebe) REFERENCES bebe(id)
);




















