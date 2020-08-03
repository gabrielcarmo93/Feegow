# Backend

Para o backend, escolhi Node, pela facilidade que o framework consegue trabalhar com problemas que nos deparamos no cotidiano.
Utilizando o **express** como principal framework para realizar o tráfego HTTP entre as possíveis camadas da aplicação.
E para banco de dados, apesar da orientação dos bancos (MySQL/POSTGRESQL), escolhi um banco, também relacional, que é o SQlite, pela facilitade de subir seus serviços de armazenamento sem ter que pensar em credenciais de conexão e outras coisas que sabemos que as vezes é trabalhoso colocar de pé para funcionamento.

Para iniciar a aplicação do backend é necessário entrar na pasta **web** do projeto e através do terminal, rodar o comando:
```javascript
yarn
```
Esperar que o node carregue todas as dependências necessárias para a execução do processo, e então executar o comando
```javascript
yarn start
```
Seguindo essas instruções, o servidor já estará de pé, e pronto para receber as requisições HTTP.

Vale ressaltar que há apenas duas rotas mapeadas, ambas apontando para o mesmo endereço ```/appointments```, porém uma é do tipo GET e a outra é do tipo POST. Sendo GET a rota que retornará todos os agendamentos, e POST a rota que irá cadastrar um agendamento.

O node por padrão irá rodar na porta 3333, caso haja conflitos com essa porta, basta criar um arquivo ```.env``` e inserir nele a porta desejada. Por exemplo ```PORT=5000```

É imprescindível que o node e o yarn estejam instalados (podendo o yarn ser substituido pelo npm). Sugiro que utilizem a versão mais recente do Yarn, e a versão LTS do Node para melhor fluídez da aplicação.
