--DML Data Manipulation Language
--insert 

--CIDADE
insert into cidade values (1, 'Blumenau', 300000, '23.56,12.78'); 
insert into cidade values (2, 'Gaspar', 50000, '23.56,12.78'); 
insert into cidade values (3, 'Pomerode', 30000, '23.56,12.78'); 
insert into cidade values (4, 'Indaial', 100000, '23.56,12.78'); 
insert into cidade values (5, 'Timbó', 70000, '23.56,12.78'); 
insert into cidade values (7, 'Joinville', 650000, '23.56,12.78'); 
 
select * from cidade where id = 1;

--RUA
insert into rua values (1, 'Rua das Palmeiras');
insert into rua values (2, 'Rua XY de Novembro');
insert into rua values (3, 'Guanabara');

select * from rua;

--ESTADO 

insert into estado values (1, 'Santa Catarina', 'SC');

select * from estado; 


--ENDERECO 
insert into endereco values (2, '89203077', null, null, 7);


INSERT INTO endereco (id, cep, id_cidade) VALUES (3, '89203098', 5);

select * from endereco; 


--update 

UPDATE endereco
SET id_rua = 2, 
    id_estado = 1
WHERE id_cidade = 3;

--commit; 
--rollback; 

select * from endereco;

--delete 
delete from cidade where id = 2;

--delete from cidade where id = 7;

select * from cidade; 


