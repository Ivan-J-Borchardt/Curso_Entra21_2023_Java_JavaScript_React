-- Selecionando todas as colunas
select * from corretor;

-- Selecionando colunas especificas
select codcorr, nome from corretor; 

-- Alias de coluna
select codcorr as "Codigo Corretor" from corretor; 

-- funcoes de agregacao (count, max, min, avg, sum)
select sum(codcorr) as "Qtd Corretores" from corretor; 
select count(*) as "Qtd Corretores" from corretor; 

-- Aritmetica
select codalu as "aluguel", (valorauguel * 0.05) as "desconto" from aluguel;

--Concatenacao de colunas com strings
select 'teste ' || codalu || ' - ' from aluguel; 
select 'insert into aluguel values(' || codalu || ',' || dataalug || ');' from aluguel;


-- Operadores relacionais (=, >,<, >=, <=, <>, like, in, between)
select * from corretor where licenca like '%7'; 
select * from corretor where licenca like 'LC8%';
select * from corretor where licenca like '%C25%'; 

select * from corretor where codcorr in (2,3,4);

select * from corretor where codcorr between 2 and 4;


-- Operadores Lógicos (AND, OR, NOT)
select * from aluguel where dataalug > '2020-01-01' and codcorr = 5;
select * from aluguel where dataalug > '2020-01-01' and not codcorr = 5;


-- Ordenacao dos resultados
  select * 
    from aluguel 
   where dataalug > '2020-01-01' 
     and not codcorr = 5 
order by codimo desc;

-- Agrupamento 'group by' 


-- Selecionar dados de mais de uma tabela (join)

--select * from aluguel;
--select * from corretor; 
select corretor.codcorr, nome, licenca, codalu, dataalug, valorauguel
  from corretor, aluguel 
 where corretor.codcorr = aluguel.codcorr
   and dataalug > '2020-01-01'; 
   
select * from imovel    
   
select imovel.descricao, 
       aluguel.valorauguel, 
	   imovel.alugado,
	   proprietario.nome,
	   proprietario.telefone
  from imovel, aluguel, proprietario
 where proprietario.codprop = imovel.codprop
   and imovel.codimo = aluguel.codimo;
	   
-- Alias de Tabela...     
select c.nome as "Nome Corr",
       c.licenca, 
	   a.codalu, 
	   a.codinq,
	   a.codimo,
	   a.codcorr,
	   a.dataalug, 
	   a.datavenc,
	   a.valorauguel
  from corretor c, aluguel a 
  where c.codcorr = a.codcorr
   order by codcorr, dataalug;
 
	   
   










