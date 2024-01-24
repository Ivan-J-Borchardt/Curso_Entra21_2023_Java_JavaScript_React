-- Selecionando todas as colunas
select * from corretor;

-- Selecionando colunas especificas
select codcorr, nome from corretor; 

-- Alias de coluna
select codcorr as "Codigo Corretor" from corretor; 

-- funcoes de agregacao 
select count(*) as "Qtd Corretores" from corretor; 

-- Aritmetica
select codalu as "aluguel", (valorauguel * 0.05) as "desconto" from aluguel;

--Concatenacao de colunas com strings
-- ???

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








