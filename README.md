# challange-node-wit
Calculator challage for WIT Node.js role

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
