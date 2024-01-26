-- Questao 1
select * from corretor; 

-- Questao 2 
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
 
-- Questao 2 mostrando o nome do inquilino... 
select c.nome as "Corretor",
       c.licenca, 
	   a.codalu, 
	   a.codinq,
	   i.nome as "Inquilino", 
	   a.codimo,
	   l.descricao,
	   a.codcorr,
	   a.dataalug, 
	   a.datavenc,
	   a.valorauguel
  from corretor c, aluguel a, inquilino i, imovel l 
  where i.codinq = a.codinq
    and c.codcorr = a.codcorr
	and l.codimo = a.codimo
   order by codcorr, dataalug;   
   
   
-- Questao 3
select i.descricao,
       i.valorauguel,
	   i.alugado as "situação", 
	   p.nome,
	   p.telefone
  from imovel i, proprietario p
  where p.codprop = i.codprop;



-- Questao 4
select a.codalu, 
	   a.dataalug, 
	   a.valorauguel
	   i.nome as "Inquilino", 
       c.nome as "Corretor",
  from corretor c, aluguel a, inquilino i
  where i.codinq = a.codinq
    and c.codcorr = a.codcorr
   order by codcorr, dataalug;

-- Questao 5
select count(codalu)
  from aluguel, corretor  
  where corretor.codcorr = aluguel.codcorr
  and corretor.licenca = 'LC587';
   
--select * from corretor where licenca = 'LC587'; 
--select * from aluguel where codcorr = 3;

-- Questao 6
select proprietario.nome,
       imovel.descricao, 
	   imovel.valorauguel, 
	   imovel.alugado
  from imovel, proprietario
  where proprietario.codprop = imovel.codprop
   --and proprietario.codprop = 2
   and proprietario.nome = 'Bill Gates'
   and imovel.alugado = true; 
   
  
--select * from proprietario;
--select * from imovel;
--update imovel set alugado = false  where codimo = 7

-- Questao 7

select proprietario.nome
  from proprietario, aluguel, imovel
  where proprietario.codprop = imovel.codprop
   and  imovel.codimo = aluguel.codimo
   and aluguel.codalu = 6; 
   
-- Questao 8 
select proprietario.nome
  from proprietario, corrprop, Corretor
  where proprietario.codprop = corrprop.codprop
   and corretor.codcorr = corrprop.codcorr
   and corretor.nome = 'Alan Moore';
   
-- Questao 9
select inquilino.nome, 
       aluguel.valorauguel
  from inquilino, aluguel
where inquilino.codinq = aluguel.codinq
  and  aluguel.valorauguel > 5000;














