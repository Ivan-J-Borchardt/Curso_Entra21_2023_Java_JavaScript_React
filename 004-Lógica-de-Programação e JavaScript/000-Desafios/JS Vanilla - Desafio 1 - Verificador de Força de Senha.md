# JavaScript
## Projeto 1 - Verificador de Força de Senha
### Objetivos
- Desenvolver o racíocinio lógico e a habilidade analítica.
- Desenvolver a compreensão dos conceitos de manipulação de eventos. 
- Reforçar a compreensão do conceito de estruturas de seleção. 

#### Palavras Chave  
- JavaScript, Eventos, Estruturas de Seleção, Noções de Segurança de Senhas 

---
### Instruções Adicionais 
- Crie um repositório chamado ForcaSenha-[seu nome];


--- 
### Projeto 

Senhas são um dos pontos de vulnerabilidade mais explorados por criminosos cibernéticos. O motivo disso é simples, eles sabem que muitos usuários são descuidados e criam senhas fáceis de quebrar.   
  
Pensando nisso a empresa XPTO decidiu desenvolver um verificador de força de senha que deverá ser usado toda vez que um usuário precisar alterar sua senha. 

O verificador de força de senha se baseia nas seguintes regras: 
- Se a senha tiver mais de 1 caractere - 1 ponto;
- Se a senha tiver mais de 6 caracteres - 2 pontos;
- Se a senha tiver 10 ou mais caracteres - 3 pontos;
- Se a senha tiver 12 ou mais caracteres - 4 pontos;
- Se a senha tiver 14 ou mais caracteres - 5 pontos;
- Se a senha contiver pelo menos um número - +1 ponto;
- Se a senha contiver pelo menos uma letra maiúscula - +1 ponto;
- Se a senha contiver pelo menos um caractere minusculo - +1 ponto;
- Se a senha contiver pelo menos um caractere especial (não alfanumérico) - +2 pontos;

Total de pontos possíveis: 10. 

- A senha será considerada "Forte" se somar 9 ou mais pontos;  
- A senha será considerada "Moderada" se somar mais de 5 e menos de 9 pontos;
- A senha será considerada "Fraca" se somar 5 ou menos pontos.

- Deverá ser possível alternar entre digitação oculta e não oculta; 
- A progressão da força da senha deverá ser exibida a medida que o usuário for digitando a senha, tal qual no protótipo abaixo. 

![Força de Senha](assets/For%C3%A7adeSenha.gif)