-- ESTADO ---------------------------------------------------------
-- Região Norte
INSERT INTO estado VALUES (1, 'Acre', 'AC');
INSERT INTO estado VALUES (2, 'Amapá', 'AP');
INSERT INTO estado VALUES (3, 'Amazonas', 'AM');
INSERT INTO estado VALUES (4, 'Pará', 'PA');
INSERT INTO estado VALUES (5, 'Rondônia', 'RO');
INSERT INTO estado VALUES (6, 'Roraima', 'RR');
INSERT INTO estado VALUES (7, 'Tocantins', 'TO');

-- Região Nordeste
INSERT INTO estado VALUES (8, 'Alagoas', 'AL');
INSERT INTO estado VALUES (9, 'Bahia', 'BA');
INSERT INTO estado VALUES (10, 'Ceará', 'CE');
INSERT INTO estado VALUES (11, 'Maranhão', 'MA');
INSERT INTO estado VALUES (12, 'Paraíba', 'PB');
INSERT INTO estado VALUES (13, 'Pernambuco', 'PE');
INSERT INTO estado VALUES (14, 'Piauí', 'PI');
INSERT INTO estado VALUES (15, 'Rio Grande do Norte', 'RN');
INSERT INTO estado VALUES (16, 'Sergipe', 'SE');

-- Região Centro-Oeste
INSERT INTO estado VALUES (17, 'Distrito Federal', 'DF');
INSERT INTO estado VALUES (18, 'Goiás', 'GO');
INSERT INTO estado VALUES (19, 'Mato Grosso', 'MT');
INSERT INTO estado VALUES (20, 'Mato Grosso do Sul', 'MS');

-- Região Sudeste
INSERT INTO estado VALUES (21, 'Espírito Santo', 'ES');
INSERT INTO estado VALUES (22, 'Minas Gerais', 'MG');
INSERT INTO estado VALUES (23, 'Rio de Janeiro', 'RJ');
INSERT INTO estado VALUES (24, 'São Paulo', 'SP');

-- Região Sul
INSERT INTO estado VALUES (25, 'Paraná', 'PR');
INSERT INTO estado VALUES (26, 'Rio Grande do Sul', 'RS');
INSERT INTO estado VALUES (27, 'Santa Catarina', 'SC');

-- CIDADE ---------------------------------------------------------
-- Cidades de Acre
INSERT INTO cidade VALUES (1, 'Rio Branco', 500000, '-9.9746,-67.8249',1);
INSERT INTO cidade VALUES (2, 'Cruzeiro do Sul', 80000, '-7.6336,-72.6756',1);
INSERT INTO cidade VALUES (3, 'Sena Madureira', 40000, '-9.065,-68.6571',1);
INSERT INTO cidade VALUES (4, 'Tarauacá', 35000, '-8.1569,-70.7722',1);
INSERT INTO cidade VALUES (5, 'Feijó', 32000, '-8.167,-70.359', 1);

-- Cidades de Amapá
INSERT INTO cidade VALUES (6, 'Macapá', 500000, '0.0356,-51.0706',2);
INSERT INTO cidade VALUES (7, 'Santana', 120000, '0.0456,-51.1725',2);
INSERT INTO cidade VALUES (8, 'Laranjal do Jari', 50000, '-0.8054,-52.4536',2);
INSERT INTO cidade VALUES (9, 'Mazagão', 18000, '-0.1136,-51.2894',2);
INSERT INTO cidade VALUES (10, 'Oiapoque', 12000, '3.828,-51.8006',2);

-- Cidades de Amazonas
INSERT INTO cidade VALUES (11, 'Manaus', 2200000, '-3.119,-60.0217',3);
INSERT INTO cidade VALUES (12, 'Parintins', 114000, '-2.6377,-56.7439',3);
INSERT INTO cidade VALUES (13, 'Itacoatiara', 102000, '-3.1386,-58.4442',3);
INSERT INTO cidade VALUES (14, 'Manacapuru', 100000, '-3.2908,-60.6216',3);
INSERT INTO cidade VALUES (15, 'Coari', 85000, '-4.0847,-63.1406',3);

-- Cidades de Bahia
INSERT INTO cidade VALUES (16, 'Salvador', 2870000, '-12.9714,-38.5014',9);
INSERT INTO cidade VALUES (17, 'Feira de Santana', 627000, '-12.2664,-38.9663',9);
INSERT INTO cidade VALUES (18, 'Vitória da Conquista', 338000, '-14.854,-40.8445',9);
INSERT INTO cidade VALUES (19, 'Camaçari', 300000, '-12.6996,-38.3267',9);
INSERT INTO cidade VALUES (20, 'Itabuna', 220000, '-14.7876,-39.2785',9);

-- Cidades de Ceará
INSERT INTO cidade VALUES (21, 'Fortaleza', 2700000, '-3.7172,-38.5433',10);
INSERT INTO cidade VALUES (22, 'Caucaia', 363000, '-3.7278,-38.6619',10);
INSERT INTO cidade VALUES (23, 'Juazeiro do Norte', 270000, '-7.2132,-39.3151',10);
INSERT INTO cidade VALUES (24, 'Maracanaú', 220000, '-3.8668,-38.6255',10);
INSERT INTO cidade VALUES (25, 'Sobral', 200000, '-3.6891,-40.3483',10);

-- Cidades de Distrito Federal
INSERT INTO cidade VALUES (26, 'Brasília', 3050000, '-15.7801,-47.9292',17);

-- Cidades de Goiás
INSERT INTO cidade VALUES (27, 'Goiânia', 1530000, '-16.6869,-49.2648',18);
INSERT INTO cidade VALUES (28, 'Aparecida de Goiânia', 590000, '-16.8256,-49.2451',18);
INSERT INTO cidade VALUES (29, 'Anápolis', 370000, '-16.3262,-48.9525',18);
INSERT INTO cidade VALUES (30, 'Rio Verde', 240000, '-17.7923,-50.9199',18);
INSERT INTO cidade VALUES (31, 'Luziânia', 210000, '-16.253,-47.953',18);

-- Cidades de Mato Grosso
INSERT INTO cidade VALUES (32, 'Cuiabá', 618000, '-15.601,-56.0974',19);
INSERT INTO cidade VALUES (33, 'Várzea Grande', 290000, '-15.646,-56.132',19);
INSERT INTO cidade VALUES (34, 'Rondonópolis', 230000, '-16.4674,-54.637',19);
INSERT INTO cidade VALUES (35, 'Sinop', 150000, '-11.8643,-55.5053',19);

-- Cidades de Mato Grosso do Sul
INSERT INTO cidade VALUES (36, 'Campo Grande', 895000, '-20.4697,-54.6201',20);
INSERT INTO cidade VALUES (37, 'Dourados', 225000, '-22.2211,-54.8066',20);
INSERT INTO cidade VALUES (38, 'Três Lagoas', 120000, '-20.7722,-51.7007',20);
INSERT INTO cidade VALUES (39, 'Corumbá', 110000, '-19.0096,-57.6517',20);
INSERT INTO cidade VALUES (40, 'Ponta Porã', 95000, '-22.5296,-55.7204',20);

-- Cidades de Espírito Santo
INSERT INTO cidade VALUES (41, 'Vitória', 365000, '-20.3155,-40.3128',21);
INSERT INTO cidade VALUES (42, 'Vila Velha', 500000, '-20.3417,-40.2879',21);
INSERT INTO cidade VALUES (43, 'Cariacica', 385000, '-20.2639,-40.4165',21);
INSERT INTO cidade VALUES (44, 'Serra', 350000, '-20.1274,-40.3077',21);
INSERT INTO cidade VALUES (45, 'Linhares', 200000, '-19.3916,-40.0727',21);

-- Cidades de Minas Gerais
INSERT INTO cidade VALUES (46, 'Belo Horizonte', 2520000, '-19.9167,-43.9345',22);
INSERT INTO cidade VALUES (47, 'Contagem', 670000, '-19.9311,-44.0539',22);
INSERT INTO cidade VALUES (48, 'Uberlândia', 700000, '-18.9141,-48.2766',22);
INSERT INTO cidade VALUES (49, 'Juiz de Fora', 560000, '-21.7627,-43.3435',22);
INSERT INTO cidade VALUES (50, 'Betim', 420000, '-19.967,-44.1984',22);

-- Cidades do Rio de Janeiro
INSERT INTO cidade VALUES (51, 'Rio de Janeiro', 6710000, '-22.9068,-43.1729',23);
INSERT INTO cidade VALUES (52, 'São Gonçalo', 1090000, '-22.8268,-43.0634',23);
INSERT INTO cidade VALUES (53, 'Duque de Caxias', 920000, '-22.7645,-43.3117',23);
INSERT INTO cidade VALUES (54, 'Nova Iguaçu', 800000, '-22.7556,-43.4605',23);
INSERT INTO cidade VALUES (55, 'Niterói', 500000, '-22.8839,-43.1042',23);

-- Cidades de São Paulo
INSERT INTO cidade VALUES (56, 'São Paulo', 12200000, '-23.5505,-46.6333',24);
INSERT INTO cidade VALUES (57, 'Guarulhos', 1380000, '-23.4538,-46.5333',24);
INSERT INTO cidade VALUES (58, 'Campinas', 1200000, '-22.9071,-47.0633',24);
INSERT INTO cidade VALUES (59, 'São Bernardo do Campo', 830000, '-23.7008,-46.565',24);
INSERT INTO cidade VALUES (60, 'Santo André', 720000, '-23.6636,-46.5389',24);

-- Cidades do Paraná
INSERT INTO cidade VALUES (61, 'Curitiba', 1940000, '-25.4296,-49.2719',25);
INSERT INTO cidade VALUES (62, 'Londrina', 570000, '-23.3102,-51.1628',25);
INSERT INTO cidade VALUES (63, 'Maringá', 430000, '-23.4205,-51.9333',25);
INSERT INTO cidade VALUES (64, 'Ponta Grossa', 355000, '-25.0947,-50.1628',25);
INSERT INTO cidade VALUES (65, 'Cascavel', 320000, '-24.9578,-53.459',25);

-- Cidades do Rio Grande do Sul
INSERT INTO cidade VALUES (66, 'Porto Alegre', 1480000, '-30.033,-51.22',26);
INSERT INTO cidade VALUES (67, 'Caxias do Sul', 510000, '-29.1681,-51.1796',26);
INSERT INTO cidade VALUES (68, 'Pelotas', 340000, '-31.7692,-52.3421',26);
INSERT INTO cidade VALUES (69, 'Canoas', 350000, '-29.9189,-51.1842',26);
INSERT INTO cidade VALUES (70, 'Santa Maria', 280000, '-29.6842,-53.8069',26);

-- Cidades de Santa Catarina
INSERT INTO cidade VALUES (71, 'Florianópolis', 520000, '-27.5954,-48.548',27);
INSERT INTO cidade VALUES (72, 'Joinville', 600000, '-26.3045,-48.8486',27);
INSERT INTO cidade VALUES (73, 'Blumenau', 360000, '-26.919,-49.066',27);
INSERT INTO cidade VALUES (74, 'São José', 240000, '-27.6136,-48.6364',27);
INSERT INTO cidade VALUES (75, 'Criciúma', 215000, '-28.6723,-49.3722',27);

-- RUA --------------------------------------------------------------------------------------------
-- Ruas de Minas Gerais (Cidades relacionadas ao Estado 22)
INSERT INTO rua VALUES (1, 'Rua dos Girassóis', 29);
INSERT INTO rua VALUES (2, 'Avenida Central', 29);
INSERT INTO rua VALUES (3, 'Rua das Palmeiras', 30);
INSERT INTO rua VALUES (4, 'Avenida dos Ipês', 30);
INSERT INTO rua VALUES (5, 'Travessa das Acácias', 31);

-- Ruas do Rio de Janeiro (Cidades relacionadas ao Estado 23)
INSERT INTO rua VALUES (6, 'Rua das Praias', 34);
INSERT INTO rua VALUES (7, 'Avenida dos Coqueiros', 34);
INSERT INTO rua VALUES (8, 'Rua das Dunas', 35);
INSERT INTO rua VALUES (9, 'Avenida Beira-Mar', 35);
INSERT INTO rua VALUES (10, 'Rua dos Pescadores', 36);

-- Ruas de São Paulo (Cidades relacionadas ao Estado 24)
INSERT INTO rua VALUES (11, 'Rua das Orquídeas', 39);
INSERT INTO rua VALUES (12, 'Avenida das Magnólias', 39);
INSERT INTO rua VALUES (13, 'Rua das Violetas', 40);
INSERT INTO rua VALUES (14, 'Avenida dos Jasmins', 40);
INSERT INTO rua VALUES (15, 'Travessa das Rosas', 41);

-- Ruas do Paraná (Cidades relacionadas ao Estado 25)
INSERT INTO rua VALUES (16, 'Rua das Hortênsias', 44);
INSERT INTO rua VALUES (17, 'Avenida das Azaleias', 44);
INSERT INTO rua VALUES (18, 'Rua das Camélias', 45);
INSERT INTO rua VALUES (19, 'Avenida das Begônias', 45);
INSERT INTO rua VALUES (20, 'Travessa das Dálias', 46);

-- Ruas do Rio Grande do Sul (Cidades relacionadas ao Estado 26)
INSERT INTO rua VALUES (21, 'Rua das Hortaliças', 49);
INSERT INTO rua VALUES (22, 'Avenida dos Cereais', 49);
INSERT INTO rua VALUES (23, 'Rua das Frutas', 50);
INSERT INTO rua VALUES (24, 'Avenida das Verduras', 50);
INSERT INTO rua VALUES (25, 'Travessa dos Legumes', 51);

-- Ruas de Santa Catarina (Cidades relacionadas ao Estado 27)
INSERT INTO rua VALUES (26, 'Rua das Ervas', 54);
INSERT INTO rua VALUES (27, 'Avenida das Especiarias', 54);
INSERT INTO rua VALUES (28, 'Rua das Sementes', 55);
INSERT INTO rua VALUES (29, 'Avenida dos Grãos', 55);
INSERT INTO rua VALUES (30, 'Travessa dos Temperos', 56);

-- Ruas de Minas Gerais (Cidades relacionadas ao Estado 22)
INSERT INTO rua VALUES (31, 'Rua das Flores', 29);
INSERT INTO rua VALUES (32, 'Avenida do Contorno', 29);
INSERT INTO rua VALUES (33, 'Rua Professor Moraes', 30);
INSERT INTO rua VALUES (34, 'Avenida João Naves de Ávila', 30);
INSERT INTO rua VALUES (35, 'Rua Rio Grande do Sul', 31);

-- Ruas do Rio de Janeiro (Cidades relacionadas ao Estado 23)
INSERT INTO rua VALUES (36, 'Avenida Atlântica', 34);
INSERT INTO rua VALUES (37, 'Rua Barata Ribeiro', 34);
INSERT INTO rua VALUES (38, 'Rua Bolívar', 35);
INSERT INTO rua VALUES (39, 'Avenida Princesa Isabel', 35);
INSERT INTO rua VALUES (40, 'Rua do Lavradio', 36);

-- Ruas de São Paulo (Cidades relacionadas ao Estado 24)
INSERT INTO rua VALUES (41, 'Rua Haddock Lobo', 39);
INSERT INTO rua VALUES (42, 'Avenida Brigadeiro Faria Lima', 39);
INSERT INTO rua VALUES (43, 'Rua Bela Cintra', 40);
INSERT INTO rua VALUES (44, 'Avenida Ibirapuera', 40);
INSERT INTO rua VALUES (45, 'Rua da Consolação', 41);

-- Ruas do Paraná (Cidades relacionadas ao Estado 25)
INSERT INTO rua VALUES (46, 'Rua 24 Horas', 44);
INSERT INTO rua VALUES (47, 'Rua XV de Julho', 44);
INSERT INTO rua VALUES (48, 'Avenida República Argentina', 45);
INSERT INTO rua VALUES (49, 'Rua Marechal Deodoro', 45);
INSERT INTO rua VALUES (50, 'Rua Visconde de Nácar', 46);

-- Ruas do Rio Grande do Sul (Cidades relacionadas ao Estado 26)
INSERT INTO rua VALUES (51, 'Rua Padre Chagas', 49);
INSERT INTO rua VALUES (52, 'Avenida Goethe', 49);
INSERT INTO rua VALUES (53, 'Rua dos Andradas', 50);
INSERT INTO rua VALUES (54, 'Rua Marechal Floriano Peixoto', 50);
INSERT INTO rua VALUES (55, 'Rua Duque de Caxias', 51);

-- Ruas de Santa Catarina (Cidades relacionadas ao Estado 27)
INSERT INTO rua VALUES (56, 'Rua Jerônimo Coelho', 54);
INSERT INTO rua VALUES (57, 'Avenida Hercílio Luz', 54);
INSERT INTO rua VALUES (58, 'Rua Esteves Júnior', 55);
INSERT INTO rua VALUES (59, 'Rua Vidal Ramos', 55);
INSERT INTO rua VALUES (60, 'Rua João Pinto', 56);

-- ENDERECO ---------------------------------------------------------
-- Endereços para as primeiras 30 ruas (IDs 1 a 30)
INSERT INTO endereco VALUES (1, '12345678', 100, 1);
INSERT INTO endereco VALUES (2, '23456789', 200, 2);
INSERT INTO endereco VALUES (3, '34567890', 300, 3);
INSERT INTO endereco VALUES (4, '45678901', 400, 4);
INSERT INTO endereco VALUES (5, '56789012', 500, 5);
INSERT INTO endereco VALUES (6, '67890123', 600, 6);
INSERT INTO endereco VALUES (7, '78901234', 700, 7);
INSERT INTO endereco VALUES (8, '89012345', 800, 8);
INSERT INTO endereco VALUES (9, '90123456', 900, 9);
INSERT INTO endereco VALUES (10, '01234567', 1000, 10);
INSERT INTO endereco VALUES (11, '12345678', 1100, 11);
INSERT INTO endereco VALUES (12, '23456789', 1200, 12);
INSERT INTO endereco VALUES (13, '34567890', 1300, 13);
INSERT INTO endereco VALUES (14, '45678901', 1400, 14);
INSERT INTO endereco VALUES (15, '56789012', 1500, 15);
INSERT INTO endereco VALUES (16, '67890123', 1600, 16);
INSERT INTO endereco VALUES (17, '78901234', 1700, 17);
INSERT INTO endereco VALUES (18, '89012345', 1800, 18);
INSERT INTO endereco VALUES (19, '90123456', 1900, 19);
INSERT INTO endereco VALUES (20, '01234567', 2000, 20);
INSERT INTO endereco VALUES (21, '12345678', 2100, 21);
INSERT INTO endereco VALUES (22, '23456789', 2200, 22);
INSERT INTO endereco VALUES (23, '34567890', 2300, 23);
INSERT INTO endereco VALUES (24, '45678901', 2400, 24);
INSERT INTO endereco VALUES (25, '56789012', 2500, 25);
INSERT INTO endereco VALUES (26, '67890123', 2600, 26);
INSERT INTO endereco VALUES (27, '78901234', 2700, 27);
INSERT INTO endereco VALUES (28, '89012345', 2800, 28);
INSERT INTO endereco VALUES (29, '90123456', 2900, 29);
INSERT INTO endereco VALUES (30, '01234567', 3000, 30);

-- MAE ------------------------------------------------------------------
-- Comandos DML para inserir 50 registros aleatórios
INSERT INTO mae VALUES (1, 'Maria Silva', '1980-05-15');
INSERT INTO mae VALUES (2, 'Ana Oliveira', '1982-08-23');
INSERT INTO mae VALUES (3, 'Juliana Santos', '1975-03-10');
INSERT INTO mae VALUES (4, 'Carla Souza', '1988-12-07');
INSERT INTO mae VALUES (5, 'Fernanda Costa', '1983-06-18');
INSERT INTO mae VALUES (6, 'Patrícia Pereira', '1979-09-25');
INSERT INTO mae VALUES (7, 'Camila Rocha', '1981-11-30');
INSERT INTO mae VALUES (8, 'Aline Lima', '1986-04-14');
INSERT INTO mae VALUES (9, 'Luciana Martins', '1984-01-02');
INSERT INTO mae VALUES (10, 'Tatiane Oliveira', '1977-07-12');
INSERT INTO mae VALUES (11, 'Isabela Almeida', '1989-10-08');
INSERT INTO mae VALUES (12, 'Clara Santos', '1982-02-19');
INSERT INTO mae VALUES (13, 'Cristiane Silva', '1985-05-21');
INSERT INTO mae VALUES (14, 'Amanda Pereira', '1980-08-03');
INSERT INTO mae VALUES (15, 'Larissa Lima', '1978-03-27');
INSERT INTO mae VALUES (16, 'Renata Costa', '1987-06-13');
INSERT INTO mae VALUES (17, 'Gabriela Rocha', '1983-09-09');
INSERT INTO mae VALUES (18, 'Jéssica Oliveira', '1976-12-15');
INSERT INTO mae VALUES (19, 'Vanessa Souza', '1984-02-28');
INSERT INTO mae VALUES (20, 'Beatriz Lima', '1981-07-05');
INSERT INTO mae VALUES (21, 'Daniela Almeida', '1988-11-22');
INSERT INTO mae VALUES (22, 'Monica Rocha', '1985-02-15');
INSERT INTO mae VALUES (23, 'Patrícia Oliveira', '1979-06-30');
INSERT INTO mae VALUES (24, 'Viviane Souza', '1983-10-16');
INSERT INTO mae VALUES (25, 'Vanessa Almeida', '1975-02-02');
INSERT INTO mae VALUES (26, 'Larissa Cardoso', '1981-07-19');
INSERT INTO mae VALUES (27, 'Eliane Santos', '1987-12-04');
INSERT INTO mae VALUES (28, 'Simone Lima', '1974-04-21');
INSERT INTO mae VALUES (29, 'Jéssica Pereira', '1989-08-06');
INSERT INTO mae VALUES (30, 'Amanda Rocha', '1980-12-22');
INSERT INTO mae VALUES (31, 'Fátima Oliveira', '1978-05-08');
INSERT INTO mae VALUES (32, 'Gisele Almeida', '1982-09-25');
INSERT INTO mae VALUES (33, 'Crislaine Cardoso', '1976-02-10');
INSERT INTO mae VALUES (34, 'Nathalia Souza', '1984-06-27');
INSERT INTO mae VALUES (35, 'Tânia Santos', '1979-11-13');
INSERT INTO mae VALUES (36, 'Sandra Lima', '1985-03-02');
INSERT INTO mae VALUES (37, 'Luciene Pereira', '1977-07-17');
INSERT INTO mae VALUES (38, 'Andressa Rocha', '1981-12-03');
INSERT INTO mae VALUES (39, 'Priscila Oliveira', '1987-04-18');
INSERT INTO mae VALUES (40, 'Alessandra Almeida', '1975-08-05');
INSERT INTO mae VALUES (41, 'Fernanda Cardoso', '1983-01-21');
INSERT INTO mae VALUES (42, 'Lúcia Souza', '1989-06-06');
INSERT INTO mae VALUES (43, 'Patrícia Santos', '1980-10-30');
INSERT INTO mae VALUES (44, 'Roberta Lima', '1978-03-16');
INSERT INTO mae VALUES (45, 'Denise Pereira', '1982-07-31');
INSERT INTO mae VALUES (46, 'Caroline Rocha', '1976-11-15');
INSERT INTO mae VALUES (47, 'Tatiane Oliveira', '1984-04-09');
INSERT INTO mae VALUES (48, 'Monica Almeida', '1979-09-24');
INSERT INTO mae VALUES (49, 'Amanda Oliveira', '1985-01-01');
INSERT INTO mae VALUES (50, 'Luana Souza', '1987-08-14');

-- MEDICO --------------------------------------------------------------
-- Comandos DML para gerar dados de 20 médicos
INSERT INTO medico VALUES (1, 'Dr. Carlos Silva', 'CRM12345');
INSERT INTO medico VALUES (2, 'Dra. Ana Oliveira', 'CRM67890');
INSERT INTO medico VALUES (3, 'Dr. Rafael Santos', 'CRM23456');
INSERT INTO medico VALUES (4, 'Dra. Maria Lima', 'CRM78901');
INSERT INTO medico VALUES (5, 'Dr. Gustavo Pereira', 'CRM34567');
INSERT INTO medico VALUES (6, 'Dra. Juliana Costa', 'CRM89012');
INSERT INTO medico VALUES (7, 'Dr. Anderson Rocha', 'CRM45678');
INSERT INTO medico VALUES (8, 'Dra. Camila Souza', 'CRM90123');
INSERT INTO medico VALUES (9, 'Dr. Ricardo Almeida', 'CRM56789');
INSERT INTO medico VALUES (10, 'Dra. Vanessa Cardoso', 'CRM23456');
INSERT INTO medico VALUES (11, 'Dr. Marcelo Oliveira', 'CRM78901');
INSERT INTO medico VALUES (12, 'Dra. Fernanda Santos', 'CRM34567');
INSERT INTO medico VALUES (13, 'Dr. Tiago Lima', 'CRM89012');
INSERT INTO medico VALUES (14, 'Dra. Laura Pereira', 'CRM45678');
INSERT INTO medico VALUES (15, 'Dr. Felipe Costa', 'CRM90123');
INSERT INTO medico VALUES (16, 'Dra. Patricia Rocha', 'CRM56789');
INSERT INTO medico VALUES (17, 'Dr. Eduardo Souza', 'CRM23456');
INSERT INTO medico VALUES (18, 'Dra. Carolina Almeida', 'CRM78901');
INSERT INTO medico VALUES (19, 'Dr. Renato Cardoso', 'CRM34567');
INSERT INTO medico VALUES (20, 'Dra. Beatriz Oliveira', 'CRM89012');

-- ESPECIALIDADE -----------------------------------------------------------------
-- Comandos DML para gerar dados de especialidades médicas
INSERT INTO especialidade VALUES (1, 'Cardiologia');
INSERT INTO especialidade VALUES (2, 'Dermatologia');
INSERT INTO especialidade VALUES (3, 'Ginecologia');
INSERT INTO especialidade VALUES (4, 'Ortopedia');
INSERT INTO especialidade VALUES (5, 'Pediatria');
INSERT INTO especialidade VALUES (6, 'Psiquiatria');
INSERT INTO especialidade VALUES (7, 'Oftalmologia');
INSERT INTO especialidade VALUES (8, 'Urologia');
INSERT INTO especialidade VALUES (9, 'Neurologia');
INSERT INTO especialidade VALUES (10, 'Endocrinologia');
INSERT INTO especialidade VALUES (11, 'Oncologia');
INSERT INTO especialidade VALUES (12, 'Nefrologia');
INSERT INTO especialidade VALUES (13, 'Radiologia');
INSERT INTO especialidade VALUES (14, 'Otorrinolaringologia');
INSERT INTO especialidade VALUES (15, 'Cirurgia Geral');
INSERT INTO especialidade VALUES (16, 'Anestesiologia');
INSERT INTO especialidade VALUES (17, 'Cardiologia Pediátrica');
INSERT INTO especialidade VALUES (18, 'Cirurgia Plástica');
INSERT INTO especialidade VALUES (19, 'Clínica Médica');
INSERT INTO especialidade VALUES (20, 'Gastroenterologia');

-- TELEFONE -------------------------------------------------------------------
-- Comandos DML para gerar dados de telefones para médicos
-- Médico 1
INSERT INTO Telefone VALUES (1, '123-456-7890', 1);
INSERT INTO Telefone VALUES (2, '987-654-3210', 1);

-- Médico 2
INSERT INTO Telefone VALUES (3, '555-123-4567', 2);

-- Médico 3
INSERT INTO Telefone VALUES (4, '777-888-9999', 3);
INSERT INTO Telefone VALUES (5, '111-222-3333', 3);
INSERT INTO Telefone VALUES (6, '444-555-6666', 3);

-- Médico 4
INSERT INTO Telefone VALUES (7, '999-888-7777', 4);
INSERT INTO Telefone VALUES (8, '444-333-2222', 4);

-- Médico 5
INSERT INTO Telefone VALUES (9, '111-222-3333', 5);

-- Médico 6
INSERT INTO Telefone VALUES (10, '666-777-8888', 6);
INSERT INTO Telefone VALUES (11, '333-444-5555', 6);
INSERT INTO Telefone VALUES (12, '888-999-0000', 6);

-- Médico 7
INSERT INTO Telefone VALUES (13, '123-456-7890', 7);

-- Médico 8
INSERT INTO Telefone VALUES (14, '555-555-5555', 8);
INSERT INTO Telefone VALUES (15, '999-999-9999', 8);

-- Médico 9
INSERT INTO Telefone VALUES (16, '111-111-1111', 9);
INSERT INTO Telefone VALUES (17, '444-444-4444', 9);

-- Médico 10
INSERT INTO Telefone VALUES (18, '777-777-7777', 10);
INSERT INTO Telefone VALUES (19, '888-888-8888', 10);
INSERT INTO Telefone VALUES (20, '000-000-0000', 10);
-- Médico 11
INSERT INTO Telefone VALUES (21, '111-222-3333', 11);
INSERT INTO Telefone VALUES (22, '444-555-6666', 11);

-- Médico 12
INSERT INTO Telefone VALUES (23, '777-888-9999', 12);
INSERT INTO Telefone VALUES (24, '111-222-3333', 12);

-- Médico 13
INSERT INTO Telefone VALUES (25, '666-777-8888', 13);
INSERT INTO Telefone VALUES (26, '333-444-5555', 13);
INSERT INTO Telefone VALUES (27, '888-999-0000', 13);

-- Médico 14
INSERT INTO Telefone VALUES (28, '123-456-7890', 14);

-- Médico 15
INSERT INTO Telefone VALUES (29, '555-555-5555', 15);
INSERT INTO Telefone VALUES (30, '999-999-9999', 15);

-- Médico 16
INSERT INTO Telefone VALUES (31, '111-111-1111', 16);
INSERT INTO Telefone VALUES (32, '444-444-4444', 16);

-- Médico 17
INSERT INTO Telefone VALUES (33, '777-777-7777', 17);
INSERT INTO Telefone VALUES (34, '888-888-8888', 17);
INSERT INTO Telefone VALUES (35, '000-000-0000', 17);

-- Médico 18
INSERT INTO Telefone VALUES (36, '999-888-7777', 18);
INSERT INTO Telefone VALUES (37, '444-333-2222', 18);

-- Médico 19
INSERT INTO Telefone VALUES (38, '123-456-7890', 19);

-- Médico 20
INSERT INTO Telefone VALUES (39, '555-123-4567', 20);
INSERT INTO Telefone VALUES (40, '987-654-3210', 20);

-- PARTO -----------------------------------------------------------------
-- Comandos DML para gerar dados de partos para cada mãe
-- Mãe 1
INSERT INTO parto VALUES (1, '2022-03-10', '08:30:00', 'C', 1);
INSERT INTO parto VALUES (2, '2023-05-15', '14:45:00', 'V', 1);

-- Mãe 2
INSERT INTO parto VALUES (3, '2022-07-22', '11:20:00', 'C', 2);
INSERT INTO parto VALUES (4, '2023-09-01', '18:00:00', 'V', 2);
INSERT INTO parto VALUES (5, '2024-01-05', '09:10:00', 'C', 2);

-- Mãe 3
INSERT INTO parto VALUES (6, '2022-11-12', '15:30:00', 'V', 3);
INSERT INTO parto VALUES (7, '2023-02-28', '07:45:00', 'C', 3);

-- Mãe 4
INSERT INTO parto VALUES (8, '2022-04-18', '10:00:00', 'V', 4);

-- Mãe 5
INSERT INTO parto VALUES (9, '2022-08-05', '13:15:00', 'C', 5);
INSERT INTO parto VALUES (10, '2023-10-10', '16:20:00', 'V', 5);
INSERT INTO parto VALUES (11, '2024-03-01', '08:45:00', 'C', 5);

-- Mãe 6
INSERT INTO parto VALUES (12, '2022-12-15', '17:00:00', 'V', 6);

-- Mãe 7
INSERT INTO parto VALUES (13, '2022-05-30', '12:30:00', 'C', 7);
INSERT INTO parto VALUES (14, '2023-07-10', '09:15:00', 'V', 7);

-- Mãe 8
INSERT INTO parto VALUES (15, '2022-09-20', '14:00:00', 'C', 8);

-- Mãe 9
INSERT INTO parto VALUES (16, '2023-01-03', '11:45:00', 'V', 9);

-- Mãe 10
INSERT INTO parto VALUES (17, '2023-05-22', '16:30:00', 'C', 10);
INSERT INTO parto VALUES (18, '2024-02-08', '07:00:00', 'V', 10);

-- Comandos DML para gerar dados de partos para as demais mães (IDs 11 a 50)
-- Mãe 11
INSERT INTO parto VALUES (19, '2022-07-05', '10:30:00', 'C', 11);

-- Mãe 12
INSERT INTO parto VALUES (20, '2023-01-20', '15:15:00', 'V', 12);
INSERT INTO parto VALUES (21, '2023-06-08', '08:20:00', 'C', 12);

-- Mãe 13
INSERT INTO parto VALUES (22, '2023-11-25', '12:45:00', 'V', 13);

-- Mãe 14
INSERT INTO parto VALUES (23, '2022-03-28', '11:00:00', 'C', 14);
INSERT INTO parto VALUES (24, '2022-09-15', '16:35:00', 'V', 14);
INSERT INTO parto VALUES (25, '2023-04-02', '09:50:00', 'C', 14);

-- Mãe 15
INSERT INTO parto VALUES (26, '2023-08-10', '14:15:00', 'V', 15);

-- Mãe 16
INSERT INTO parto VALUES (27, '2022-12-01', '17:30:00', 'C', 16);

-- Mãe 17
INSERT INTO parto VALUES (28, '2022-05-15', '13:00:00', 'V', 17);

-- Mãe 18
INSERT INTO parto VALUES (29, '2023-09-05', '15:45:00', 'C', 18);

-- Mãe 19
INSERT INTO parto VALUES (30, '2022-01-10', '08:10:00', 'V', 19);
INSERT INTO parto VALUES (31, '2022-07-28', '11:25:00', 'C', 19);

-- Mãe 20
INSERT INTO parto VALUES (32, '2023-01-15', '15:40:00', 'V', 20);

-- Mãe 21
INSERT INTO parto VALUES (33, '2023-05-30', '12:30:00', 'C', 21);

-- Mãe 22
INSERT INTO parto VALUES (34, '2023-11-12', '15:30:00', 'V', 22);

-- Mãe 23
INSERT INTO parto VALUES (35, '2022-04-18', '10:00:00', 'C', 23);

-- Mãe 24
INSERT INTO parto VALUES (36, '2022-08-05', '13:15:00', 'V', 24);
INSERT INTO parto VALUES (37, '2023-10-10', '16:20:00', 'C', 24);

-- Mãe 25
INSERT INTO parto VALUES (38, '2022-12-15', '17:00:00', 'V', 25);

-- Mãe 26
INSERT INTO parto VALUES (39, '2022-05-30', '12:30:00', 'C', 26);
INSERT INTO parto VALUES (40, '2023-07-10', '09:15:00', 'V', 26);

-- Mãe 27
INSERT INTO parto VALUES (41, '2022-09-20', '14:00:00', 'C', 27);

-- Mãe 28
INSERT INTO parto VALUES (42, '2023-01-03', '11:45:00', 'V', 28);

-- Mãe 29
INSERT INTO parto VALUES (43, '2023-05-22', '16:30:00', 'C', 29);
INSERT INTO parto VALUES (44, '2024-02-08', '07:00:00', 'V', 29);

-- Mãe 30
INSERT INTO parto VALUES (45, '2022-07-05', '10:30:00', 'C', 30);

-- Mãe 31
INSERT INTO parto VALUES (46, '2023-01-20', '15:15:00', 'V', 31);
INSERT INTO parto VALUES (47, '2023-06-08', '08:20:00', 'C', 31);
INSERT INTO parto VALUES (48, '2025-06-08', '08:20:00', 'C', 31);

-- Mãe 32
INSERT INTO parto VALUES (59, '2023-01-15', '15:40:00', 'V', 32);

-- Mãe 33
INSERT INTO parto VALUES (60, '2023-05-30', '12:30:00', 'C', 33);

-- Mãe 34
INSERT INTO parto VALUES (61, '2023-11-12', '15:30:00', 'V', 34);

-- Mãe 35
INSERT INTO parto VALUES (62, '2022-04-18', '10:00:00', 'C', 35);

-- Mãe 36
INSERT INTO parto VALUES (63, '2022-08-05', '13:15:00', 'V', 36);
INSERT INTO parto VALUES (64, '2023-10-10', '16:20:00', 'C', 36);

-- Mãe 37
INSERT INTO parto VALUES (65, '2022-12-15', '17:00:00', 'V', 37);

-- Mãe 38
INSERT INTO parto VALUES (66, '2022-05-30', '12:30:00', 'C', 38);
INSERT INTO parto VALUES (67, '2023-07-10', '09:15:00', 'V', 38);

-- Mãe 39
INSERT INTO parto VALUES (68, '2022-09-20', '14:00:00', 'C', 39);

-- Mãe 40
INSERT INTO parto VALUES (69, '2023-01-03', '11:45:00', 'V', 40);

-- Mãe 41
INSERT INTO parto VALUES (70, '2023-05-22', '16:30:00', 'C', 41);
INSERT INTO parto VALUES (71, '2024-02-08', '07:00:00', 'V', 41);

-- Mãe 42
INSERT INTO parto VALUES (72, '2023-01-20', '15:15:00', 'V', 42);
INSERT INTO parto VALUES (73, '2023-06-08', '08:20:00', 'C', 42);

-- Mãe 43
INSERT INTO parto VALUES (74, '2023-01-15', '15:40:00', 'V', 43);

-- Mãe 44
INSERT INTO parto VALUES (75, '2023-05-30', '12:30:00', 'C', 44);

-- Mãe 45
INSERT INTO parto VALUES (76, '2023-11-12', '15:30:00', 'V', 45);

-- Mãe 46
INSERT INTO parto VALUES (77, '2022-04-18', '10:00:00', 'C', 46);

-- Mãe 47
INSERT INTO parto VALUES (78, '2022-08-05', '13:15:00', 'V', 47);
INSERT INTO parto VALUES (79, '2023-10-10', '16:20:00', 'C', 47);

-- Mãe 48
INSERT INTO parto VALUES (80, '2022-12-15', '17:00:00', 'V', 48);

-- Mãe 49
INSERT INTO parto VALUES (81, '2022-05-30', '12:30:00', 'C', 49);
INSERT INTO parto VALUES (82, '2023-07-10', '09:15:00', 'V', 49);

-- Mãe 50
INSERT INTO parto VALUES (83, '2022-09-20', '14:00:00', 'C', 50);


-- BEBE ------------------------------------------------------------
-- Bebe 1
INSERT INTO bebe VALUES (1, '2022-03-10', 3.2, 0.5, 1, 1);

-- Bebe 2
INSERT INTO bebe VALUES (2, '2023-05-15', 3.5, 0.55, 1, 2);

-- Bebe 3
INSERT INTO bebe VALUES (3, '2022-07-22', 3.1, 0.48, 2, 3);

-- Bebe 4
INSERT INTO bebe VALUES (4, '2023-09-01', 3.6, 0.52, 2, 4);

-- Bebe 5
INSERT INTO bebe VALUES (5, '2024-01-05', 3.8, 0.53, 2, 5);

-- Bebe 6
INSERT INTO bebe VALUES (6, '2022-11-12', 3.4, 0.51, 3, 6);

-- Bebe 7
INSERT INTO bebe VALUES (7, '2023-02-28', 3.2, 0.49, 3, 7);

-- Bebe 8
INSERT INTO bebe VALUES (8, '2022-04-18', 3.3, 0.5, 4, 8);

-- Bebe 9
INSERT INTO bebe VALUES (9, '2022-08-05', 3.7, 0.54, 5, 9);

-- Bebe 10
INSERT INTO bebe VALUES (10, '2023-10-10', 3.9, 0.56, 5, 10);

-- Bebe 11
INSERT INTO bebe VALUES (11, '2022-07-05', 3.2, 0.5, 11, 19);

-- Bebe 12
INSERT INTO bebe VALUES (12, '2023-01-20', 3.5, 0.55, 12, 20);

-- Bebe 13
INSERT INTO bebe VALUES (13, '2023-06-08', 3.1, 0.48, 12, 21);

-- Bebe 14
INSERT INTO bebe VALUES (14, '2023-11-25', 3.6, 0.52, 13, 22);

-- Bebe 15
INSERT INTO bebe VALUES (15, '2022-03-28', 3.8, 0.53, 14, 23);

-- Bebe 16
INSERT INTO bebe VALUES (16, '2022-09-15', 3.4, 0.51, 14, 24);

-- Bebe 17
INSERT INTO bebe VALUES (17, '2023-04-02', 3.2, 0.49, 14, 25);

-- Bebe 18
INSERT INTO bebe VALUES (18, '2023-08-10', 3.3, 0.5, 15, 26);

-- Bebe 19
INSERT INTO bebe VALUES (19, '2022-12-01', 3.7, 0.54, 16, 27);

-- Bebe 20
INSERT INTO bebe VALUES (20, '2022-05-15', 3.9, 0.56, 17, 28);

-- Bebe 21
INSERT INTO bebe VALUES (21, '2023-09-05', 3.2, 0.5, 18, 29);

-- Bebe 22
INSERT INTO bebe VALUES (22, '2022-01-10', 3.5, 0.55, 19, 30);

-- Bebe 23
INSERT INTO bebe VALUES (23, '2022-07-28', 3.1, 0.48, 19, 31);

-- Bebe 24
INSERT INTO bebe VALUES (24, '2023-01-15', 3.6, 0.52, 20, 32);

-- Bebe 25
INSERT INTO bebe VALUES (25, '2023-05-30', 3.8, 0.53, 21, 33);

-- Bebe 26
INSERT INTO bebe VALUES (26, '2023-11-12', 3.4, 0.51, 22, 34);

-- Bebe 27
INSERT INTO bebe VALUES (27, '2022-04-18', 3.2, 0.49, 23, 35);

-- Bebe 28
INSERT INTO bebe VALUES (28, '2022-08-05', 3.3, 0.5, 24, 36);

-- Bebe 29
INSERT INTO bebe VALUES (29, '2023-10-10', 3.7, 0.54, 24, 37);

-- Bebe 30
INSERT INTO bebe VALUES (30, '2022-12-15', 3.9, 0.56, 25, 38);

-- Bebe 31
INSERT INTO bebe VALUES (31, '2022-05-30', 3.2, 0.5, 26, 39);

-- Bebe 32
INSERT INTO bebe VALUES (32, '2023-07-10', 3.5, 0.55, 26, 40);

-- Bebe 33
INSERT INTO bebe VALUES (33, '2022-09-20', 3.1, 0.48, 27, 41);

-- Bebe 34
INSERT INTO bebe VALUES (34, '2023-01-03', 3.6, 0.52, 28, 42);

-- Bebe 35
INSERT INTO bebe VALUES (35, '2023-05-22', 3.8, 0.53, 29, 43);

-- Bebe 36
INSERT INTO bebe VALUES (36, '2024-02-08', 3.4, 0.51, 29, 44);

-- Bebe 37
INSERT INTO bebe VALUES (37, '2022-07-05', 3.2, 0.49, 30, 45);

-- Bebe 38
INSERT INTO bebe VALUES (38, '2023-01-20', 3.3, 0.5, 31, 46);

-- Bebe 39
INSERT INTO bebe VALUES (39, '2023-06-08', 3.7, 0.54, 31, 47);

-- Bebe 40
INSERT INTO bebe VALUES (40, '2023-11-25', 3.9, 0.56, 32, 48);

