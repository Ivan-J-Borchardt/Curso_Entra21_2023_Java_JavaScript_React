-- Tabela corretor 
create table corretor (
    codcorr int primary key, 
    nome varchar(35) not null, 
    licenca varchar(35), 
    telefone varchar(35)
);

-- Tabela
create table proprietario(
    codprop int primary key, 
    nome varchar(35) not null, 
    telefone varchar(35)
);

-- Tabela
create table inquilino(
    codinq int primary key, 
    nome varchar(35) not null, 
    cpf varchar(35) not null
);

-- Tabela
create table imovel(
    codimo int primary key, 
    descricao varchar(100), 
    codprop int references proprietario(codprop), 
    valorauguel real not null, 
    alugado boolean not null
);

-- Tabela
create table aluguel(
    codalu int primary key, 
    codinq int references inquilino(codinq) not null, 
    codimo int references imovel(codimo) not null, 
    codcorr int references corretor(codcorr) not null, 
    dataalug date, 
    datavenc date, 
    valorauguel real
);

-- Tabela
create table corrinqu(
    codcorr int references corretor(codcorr), 
    codinq int references inquilino(codinq)
);
alter table corrinqu add primary key(codcorr, codinq); 


-- Tabela
create table corrprop(
    codcorr int references corretor(codcorr),
    codprop int references proprietario(codprop)
);
alter table corrprop add primary key(codcorr, codprop);


--drop table corrprop; 
--drop table corrinqu; 
--drop table aluguel; 
--drop table imovel; 
--drop table inquilino; 
--drop table proprietario; 
--drop table corretor; 