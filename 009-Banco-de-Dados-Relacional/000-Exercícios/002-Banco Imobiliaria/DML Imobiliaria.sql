-- Corretores
insert into corretor values(1, 'Alan Turing', 'LC234', '(47)9987-0099'); 
insert into corretor values(2, 'Alberto Santos Dumont', 'LC258', '(47)8877-4568'); 
insert into corretor values(3, 'Ada Lovelace', 'LC587', '(47)4568-1587'); 
insert into corretor values(4, 'Alan Moore', 'LC887', '(47)5674-1546'); 
insert into corretor values(5, 'John Von Neumann', 'LC547', '(47)8777-0000'); 

-- Inquilinos 
insert into inquilino values(1, 'Antônio Alexandre Wreczinski', '000.000.000-01'); 
insert into inquilino values(2, 'Diego Ailton Prudêncio', '000.000.000-02'); 
insert into inquilino values(3, 'Franciele Rodrigues', '000.000.000-03'); 
insert into inquilino values(4, 'Francielle Eliete Sales', '000.000.000-04'); 
insert into inquilino values(5, 'Francielle Rodrigues', '000.000.000-05'); 
insert into inquilino values(6, 'Gabriel Bochi Farina', '000.000.000-06'); 
insert into inquilino values(7, 'Jean da Rocha Vertuoso', '000.000.000-07'); 
insert into inquilino values(8, 'Letícia Suzana Pedro', '000.000.000-08'); 
insert into inquilino values(9, 'Luis Augusto Berwanger Mallmann', '000.000.000-09'); 
insert into inquilino values(10, 'Marilia Acordi Alexandre', '000.000.000-10'); 
insert into inquilino values(11, 'Rafael Ronsoni Gaidzinski', '000.000.000-11'); 
insert into inquilino values(12, 'Robson José Hoepers', '000.000.000-12'); 
insert into inquilino values(13, 'Ronaldo Ribeiro', '000.000.000-13'); 


-- Proprietarios
insert into proprietario values(1, 'Linus Torvals', '(11)2135-1547');
insert into proprietario values(2, 'Bill Gates', '(11)6547-6547'); 
insert into proprietario values(3, 'Steve Jobs', '(11)6547-6587'); 
insert into proprietario values(4, 'Steve Wozniak', '(11)6547-7894');  
insert into proprietario values(5, 'Mark Zuckerberg', '(11)6547-8654'); 

-- Imovel 
insert into imovel values(1, 'Casa de campo 4 quartos', 5, 1200.00, false);
insert into imovel values(2, 'Casa de 2 quartos', 2, 800.00, true);
insert into imovel values(3, 'Apartamento com garagem', 3, 2200.00, true);
insert into imovel values(4, 'Casa de Praia 3 quarto', 5, 3500.00, false); 
insert into imovel values(5, 'kitnet', 1, 500.00, false);
insert into imovel values(6, 'Casa mal assombrada', 1, 8000.00, true);
insert into imovel values(7, 'Cobertura com piscina', 2, 12500.00, true);
insert into imovel values(8, 'Quarto 1 na pensao XPTO', 4, 350.00, true);
insert into imovel values(9, 'Quarto 2 na pensao XPTO', 4, 350.00, true);
insert into imovel values(10, 'Quarto 3 na pensao XPTO', 4, 350.00, true);
insert into imovel values(11, 'Casa 5 quartos banheiros e piscina', 2, 8500.00, true);
insert into imovel values(12, 'Sobrado com quintal', 2, 1850.00, true);
insert into imovel values(13, 'Apartamento 2 quartos', 4, 650.00, true);
insert into imovel values(14, 'Castelo medieval', 5, 65000.00, true);
insert into imovel values(15, 'Casa 7 quartos', 5, 9350.00, true);

-- CorrProp
insert into corrprop values(1,5); 
insert into corrprop values(1,4); 
insert into corrprop values(1,2); 
insert into corrprop values(2,1); 
insert into corrprop values(2,3); 
insert into corrprop values(3,1); 
insert into corrprop values(3,4);
insert into corrprop values(3,5); 
insert into corrprop values(4,1); 
insert into corrprop values(4,5); 
insert into corrprop values(5,2);
insert into corrprop values(5,3);
insert into corrprop values(5,4);

-- CorrInq
insert into corrinqu values(1,3); 
insert into corrinqu values(1,4); 
insert into corrinqu values(1,5); 
insert into corrinqu values(2,3); 
insert into corrinqu values(2,4); 
insert into corrinqu values(3,1); 
insert into corrinqu values(3,2); 
insert into corrinqu values(3,3); 
insert into corrinqu values(3,4); 
insert into corrinqu values(3,5); 
insert into corrinqu values(4,1);
insert into corrinqu values(5,3);  
insert into corrinqu values(5,4); 
insert into corrinqu values(5,5); 


-- alugueis 
insert into aluguel values(1, 2, 2, 5, '2022.05.01', '2023.05.01', 750.00); 
insert into aluguel values(2, 4, 3, 2, '2022.07.01', '2023.07.01', 2200.00); 
insert into aluguel values(3, 3, 6, 2, '2021.07.01', '2023.07.01', 2200.00);
insert into aluguel values(4, 8, 8, 2, '2000.03.23', '2045.03.23', 2200.00);
insert into aluguel values(5, 5, 7, 2, '2022.12.01', '2025.07.01', 2200.00);
insert into aluguel values(6, 6, 10, 2, '2020.03.15', '2024.03.01', 2200.00);
insert into aluguel values(7, 7, 9, 2, '2018.08.15', '2022.09.01', 2200.00);
insert into aluguel values(8, 9, 11, 2, '2017.07.01', '2023.07.01', 2200.00);
insert into aluguel values(9, 10, 12, 2, '2016.05.11', '2023.05.11', 2200.00);
insert into aluguel values(10, 11, 15, 2, '2021.02.01', '2023.02.01', 2200.00);
insert into aluguel values(11, 12, 14, 2, '2022.07.01', '2023.07.01', 2200.00);
insert into aluguel values(12, 13, 13, 2, '2021.04.01', '2023.07.01', 2200.00);
insert into aluguel values(13, 1, 2, 2, '2022.07.01', '2023.07.01', 2200.00);
