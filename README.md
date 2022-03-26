# challange-node-wit
Calculator challage for WIT Node.js role

## How to Run

Acesse a pasta `./back` e `./front` com terminais diferentes. 

Inicie o servico do MongoDB local ( min ver >= 4)

rode `yarn start` em ambos os diretorios. 

Navegue até `localhost:3000`. :tada:

---

## Routes

### Add
Returns the sum of 2 given numbers.

PATH: `/add?number1=a&number2=b`
METHOD: POST

EXPECTED RESULT STATUS CODE: 200
EXPECTED RESULT: 
``` uniqueId: uuid,
    number1: a,
    number2: b,
    operation: "add",
    result: a + b ,
```

### Divide
Returns the division of 2 given numbers.

PATH: `/divide?number1=a&number2=b`
METHOD: POST

EXPECTED RESULT STATUS CODE: 200
EXPECTED RESULT: 
``` uniqueId: uuid,
    number1: a,
    number2: b,
    operation: "divide",
    result: a / b ,
```

### Multiply
Returns the multiplication of 2 given numbers.


PATH: `/multiply?number1=a&number2=b`
METHOD: POST

EXPECTED RESULT STATUS CODE: 200
EXPECTED RESULT: 
``` uniqueId: uuid,
    number1: a,
    number2: b,
    operation: "multiply",
    result: a * b ,
```

### Subtract
Returns the subtraction of 2 given numbers.


PATH: `/subtract?number1=a&number2=b`
METHOD: POST

EXPECTED RESULT STATUS CODE: 200
EXPECTED RESULT: 
``` uniqueId: uuid,
    number1: a,
    number2: b,
    operation: "subtract",
    result: a - b ,
```

### Get Operation
Get the call that matches the given uniqueID.


PATH: `/get-operation?uniqueID=someuniqueID`
METHOD: GET

EXPECTED RESULT STATUS CODE: 200
EXPECTED RESULT: 
``` uniqueId: uuid,
    number1: a,
    number2: b,
    operation: "subtract",
    result: a - b ,
```

### Server Configs
Updates the config on the server.

shouldLogQueries - Tells the server to log the queries done to the MongoDB.

shouldSaveLogs - Tells the server to save the logs on a CSV file.

saveLogsTime - Set the time in seconds that the server will save the logs to the CSV file.

PATH: `/server-config?uniqueID=someuniqueID`
METHOD: POST
BODY: 
```
{
    "shouldLogQueries": Boolean,
    "shouldSaveLogs": Boolean,
    "saveLogsTime": Number
}
```
EXPECTED RESULT STATUS CODE: 200
EXPECTED RESULT: 
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
