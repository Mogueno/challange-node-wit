# challenge-node-wit
Desafio projeto calculadora em Node.js

## Como rodar localmente

Acesse a pasta `./back` e `./front` com terminais diferentes. 

Inicie o servico do MongoDB local ( min ver >= 4)

rode `yarn start` em ambos os diretorios. 

Navegue até `localhost:3000`. :tada:

---

## Routes

### Add
Retorna a soma de 2 numeros.

Caminho: `/add?number1=a&number2=b`
Método: POST

Status code esperado: 200
Body esperado: 
``` uniqueId: uuid,
    number1: a,
    number2: b,
    operation: "add",
    result: a + b ,
```

### Divide
Retorna a divisão de dois numeros.

Caminho: `/divide?number1=a&number2=b`
Método: POST

Status code esperado: 200
Body esperado: 
``` uniqueId: uuid,
    number1: a,
    number2: b,
    operation: "divide",
    result: a / b ,
```

### Multiply
Retorna a multiplicação de dois numeros.


Caminho: `/multiply?number1=a&number2=b`
Método: POST

Status code esperado: 200
Resultado esperado: 
``` uniqueId: uuid,
    number1: a,
    number2: b,
    operation: "multiply",
    result: a * b ,
```

### Subtract
Retorna a subtração de dois números.

Caminho: `/subtract?number1=a&number2=b`
Método: POST

Status code esperado: 200
Body esperado: 
``` uniqueId: uuid,
    number1: a,
    number2: b,
    operation: "subtract",
    result: a - b ,
```

### Get Operation
Retorna qual operação aconteceu, dado um uniqueID.


Caminho: `/get-operation?uniqueID=someuniqueID`
Método: GET

Status code esperado: 200
Body esperado: 
``` uniqueId: uuid,
    number1: a,
    number2: b,
    operation: "subtract",
    result: a - b ,
```

### Logs to CSV
Cria o arquivo CSV dentro do diretório `./logs`, desde os logs do arquivo `./logs/combined.log`.

Caminho: `/logs-to-csv`
Método: POST

Status code esperado: 200
Resultado esperado: 
```
logs saved to csv
```

### Server Configs
Atualiza as configurações dentro do servidor.

shouldLogQueries - Flag que indica se o servidor deveria ou não logar as queries feitas no MongoDB.

shouldSaveLogs - Flag que indica se o servidor deve ou não salvar os logs em CSV.

saveLogsTime - Intervalo em segundos que o servidor vai salvar os logs em CSV.

Caminho: `/server-config`
Médodo: POST
Body: 
```
{
    "shouldLogQueries": Boolean,
    "shouldSaveLogs": Boolean,
    "saveLogsTime": Number
}
```
Status code esperado: 200
Body esperado: 
```
server configs updated
```

---

## Este challenge tem como objectivo a avaliação do conhecimento em Node.js developers candidatos à WIT.


Descrição:
Deves criar um servidor, uma mini calculadora, que faça operações matemáticas usando inputs do utilizador,
com os seguintes requisitos:

• REST API (em express.js) que expõe as operações de soma, subtração, multiplicação, divisão para além
de mais uma validação para que o utilizador possa confirmar o resultado da acção;

• Os endpoints associados à calculadora, suportam apenas dois operandos (a e b, por simplicidade);

• Todos os pedidos geram um identificador único;

• Os endpoints associados à calculadora devolvem esse identificador único num header;

• O endpoint de validação, recebe como parâmetro um identificador único e devolve qual foi a operação
associada a esse identificador;

• O Servidor deve conseguir loggar todos os pedidos, guardando o client IP, o identificador único associado
ao pedido, tempo de execução e o http status code;

• Estes logs devem ser guardados de x em x tempo (configurável) num ficheiro CSV (esta funcionalidade
também pode ser desligada através de configuração do servidor);

• O servidor deve utilizar a mongo db e deve ser resiliente ao ponto de conseguir criar as collections
necessárias mesmo quando estas não existem, deve também ter uma configuração que permite fazer (ou
não) o log das queries efetuadas;

• Se as configurações do servidor forem alteradas, o servidor deve conseguir assumi-las sem necessitar de
restart;


## BONUS:
Desenvolver em typescript;
Testes unitários;
Métricas de Avaliação:


Os parâmetros de avaliação para este challenge, sem ordem de importância específica, são:
• Qualidade e estruturação do código;
• UX construída;
• Desempenho da solução desenvolvida;
• Capacidade de cumprir deadlines.
