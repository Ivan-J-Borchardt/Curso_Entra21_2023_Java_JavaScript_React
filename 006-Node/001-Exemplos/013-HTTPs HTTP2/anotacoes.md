# HTTPS
## Por que usar 
- Transferencia de dados criptografados 
- Possibilidade de verificar a identidade do server no lado do cliente 
- Navegadores de Internet e Buscadores como o Google dao preferencia a HTTPs 

## Node.js da suporte nativo ao HTTPs
- Módulo Https ao invés de Http
- Boa parte da API Http é reaproveitada no HTTPs 
- Necessita de uma Chave Privada e um Certificado Digital

### Criando Certificados 
- Existem 2 possibilidades
    - Certificados Auto-Assinados 
    - Certificados gerados por certificadoras oficiais 

### OpenSSL no Windows
- Download: https://slproweb.com/products/Win32OpenSSL.html
- Como Instalar: https://forum.casadodesenvolvedor.com.br/topic/44836-como-instalar-o-openssl-passo-a-passo-para-instalar-o-openssl-no-windows/

- Variaveis de ambiente:
set Path=C:\Program Files\OpenSSL-Win64\bin
set OPENSSL_CONF=C:\Program Files\OpenSSL-Win64\bin\openssl.cfg

~~~
#Gerando Chave Privada  
$ openssl genrsa -out privatekey.pem 4096


#Gerando CSR (Certificate Signing Request)
$ openssl req -new -key privatekey.pem -out csr.pem

#Gerando o certificado 
$ openssl x509 -in csr.pem -out certificate.pem -req -signkey privatekey.pem -days 365

#Verificando detalhes do Certificado gerado
$ openssl x509 -in certificate.pem -text -noout
~~~

- Gerando Chave Privada e Certificado:
~~~
$ openssl req -nodes -x509 -newkey rsa:2048  -keyout key.pem -out cert.pem -days 365
~~~

### Gerador SSL Online
- https://pt.rakko.tools/tools/46

## Log de eventos do Chrome
chrome://net-export/


## Http/2
- https://en.wikipedia.org/wiki/SPDY?_gl=1*12wtoyt*_gcl_au*MTUwMzUyMDc0NC4xNzAxOTgwODgx
- https://www.ssl.com/pt/artigo/uma-introdu%C3%A7%C3%A3o-ao-http2/
