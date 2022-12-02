## Configuração para desenvolvimento

- Aqui encontram-se todas as instruções para execução do sistema. Primeiro, abra o terminal do VsCode e digite:
```sh
cd Backend
```
- depois, execute o comando:
```sh
npm run dev
```

## Divisão das pastas referentes ao código fonte

Dentre os arquivos presentes na raiz dessa sessão, definem-se:

- <b>Backend</b>: Onde estão guardados os arquivos que iniciam a aplicação pelo lado do servidor. Nele, há o arquivo configDB.js, o qual abre o banco de dados para manuseio e o app.js, que inicializa o servidor e importa algumas bibliotecas para funcionamento interno.

- <b>data</b>: Pasta na qual guarda o banco de dados do sistema, o arquivo dele está no formato binário e possui o nome dbUser.db. Além disso, há o seu arquivo no formato sqbpro.

- <b>Frontend</b>: Local onde estão os arquivos para teste das páginas estáticas do lado do cliente.

- <b>public</b>: onde estão todos os arquivos estáticos visualizáveis pelo cliente. Na raiz desse diretório, está o index, o arquivo hipertexto que possibilita a navegação para todos os outros arquivos.Além disso, os arquivos estão dividindo nas pastas: 
    1 - css (arquivos de estilização dos arquivos hipertexto)
    2 - html (arquivos hipertexto)
    3 - img (imagens usadas no sistema)
    4 - js(arquivos na linguagem javascript)

- <b>src</b>: Diritório que contém todos os tratamentos de dados do sistema. Essa parte possui os métodos CRUD (Create, Read, Update, Delete) básicos para o funcionamento da aplicação. Ela está subdividida para melhorar a produtividade de alguma manutenção futura. Para isso, temos a seguinte divisão: 
    1 - Controller (onde as funções do crud são criadas)
    2 - routes (onde as funções criadas na pasta acima são executadas)

- <b>views</b>: Diretório com todos os arquivos dinâmicos do sistema. Nesse caso, a pasta está subdividida nas sessões que representam a aplicação. Nela, teremos:
    1 - adminMrv
    2 - empreiteiro
    3 - erros
    4 - hub
    5 - login
    6 - visitante

- <b>package.json</b>: Onde há objetos JSON que especificam como o projeto vai inicializar e quais bibliotecas ele está usando para tal ato.

- <b>package-lock.json</b>: Conjunto de bibliotecas do javascript para possibilitar a execução de tarefas específicas dentro do sistema.

- <b>gitignore</b>: Arquivo git para evitar o versionamento de pastas não necessárias no repositório. No caso desse sistema, a pasta que está sendo impedida é o node_modules.
