# Projetode_software
Documentação do projeto de implementação de um software desenvolvido na matéria de projeto de desenvolvimento de software acompanhada pelo professor Andouglas

<h1>Sobre o projeto:</h1>

<h2>Participantes</h2>

* Adriane Lira da Silva 
>**Linkedln:** [Adriane Lira](https://www.linkedin.com/in/adriane-lira-5399a0218/)

* Áurea Cavalcante de Morais 
>**Linkedln:** [Áurea Morais](https://www.linkedin.com/in/%C3%A1urea-morais-2077b0260/)

* Anna Loyse Azevedo de Araújo
>**Linkedln:** [Anna Loyse](https://www.linkedin.com/in/loyse-azevedo-1bb7aa260/)

* Lucas Gabriel Guedes Limeira 
>**Linkedln:** [Lucas Guedes](https://www.linkedin.com/in/lucas-guedes-0b58a61b0/)

<h2>Tecnologias usadas</h2>
<div class="row">
  <div class="col-sm-4">
   <img src="https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg" width="100">
   <img src="https://s3images.coroflot.com/user_files/individual_files/large_474993_8JKPIOE8SHnbazdmDqIJI87DH.jpg" width="100">
   <img src="https://user-images.githubusercontent.com/106175060/210423736-f3ff3c6b-01ab-453a-b9f5-5c4c78f86b51.jpg" width="110">
   <img src="https://user-images.githubusercontent.com/106175060/210424306-d0066a48-7c6e-4b9b-93c4-8ffd1b918cc1.png" width="50">    
  </div>
</div>

<h2>1. Necessidades do cliente</h2>
O Centro Tecnológico do Queijo (CTq), ainda utiliza, geralmente, recursos manuais em vários setores da produção de seus produtos. Em decorrência disso, enfrenta diferentes necessidades em setores específicos da producão, uma delas é gerenciar as solicitações de pedidos. Traçando um perfil do nosso público-alvo é possível indentificar, os servidores de uma indústria sem fins lucrativos que oferta produtos não apenas para o IFRN Campus Currais Novos -onde se localiza- como também para outros Campus e Orgãos Públicos, a exemplo o IFRN Campus Avançado Parelhas no qual o CTq oferta demandas de produtos para a merenda dos discentes. Entretanto, por mais que oferte seus produtos para muitas instituições, o CTq ainda não possui um sistema especializado para realizar a gerencia das demandas - como receber solicitações, aceitar, recusar e agendar a entrega de produtos. Com isso, o cliente, concebe a necessidade de um sistema que sane a dificuldade de gerenciar a demanda de produtos.

<h2>2. Requisitos</h2>

<h3>2.1 Requisitos funcionais:</h3>

Requisitos relacionados ao que o sistema deve fazer para atender às necessidades ou expectativas do usuário.

**Cadastrar solicitante:** O sistema permite que o solicitante cadastre seus dados, acompanhe a situação do seu pedido e mantenha os seus dados salvos e guardados no banco de dados.
>**Prioridade:** Essencial.

**Login do solicitante:** O sistema permite que o solicitante tenha acesso a página de solicitação de pedidos e acompanhe a situação do seu pedido. 
>**Prioridade:** Essencial.

**Solicitar produto:** O serviço inclui, principalmente, o recebimento e análise de pedidos dos produtos oferecidos pelo site. 
>**Prioridade:** Essencial.

**Login do administrador:** Esta interface destina-se aos administradores do site que utilizam o sistema e possuem um login de acesso.
>**Prioridade:** Essencial.

**Aceitar ou recusar pedidos:** Permite que o administrador aceite ou recuse as demandas recebidas do(s) solicitante(s). 
>**Prioridade:** Essencial.

**Emissão do relatório:** Documenta a situação do produto, se foi aceito ou recusado, caso seja recusado é enviado a justificativa da rejeição. Além disso, registra a data de entrega do(s) produto(s). 
>**Prioridade:** Essencial.

**Controle do agendamento de pedidos:** Cria uma agenda de pedidos aceitos, organizando-os com data e hora de entrega.
>**Prioridade:** Essencial.

<h3>2.2 Requisitos não funcionais:</h3> 

Requisitos relacionados ao uso da aplicação em termos de desempenho, usabilidade, confiabilidade, segurança, disponibilidade, manutenção e tecnologias envolvidas. Ou seja, como as funcionalidades serão entregues ao usuário do software. 

**Segurança** A segurança do site é baseada em criptografias para proteger as senhas dos clientes, assim, o cliente cria uma senha e o sistema  faz, automaticamente, a criptografia da senha, garantindo que somente o cliente tenha acesso a sua própria senha.
>**Prioridade:** Essencial.
 
**Acessibilidade:** A acessibilidade garante que o site tenha uma adaptação para que pessoas com necessidades especiais também tenham acesso a plataforma. 
>**Prioridade:** Desejável.

**Design:** O design irá facilitar a visualização e a organização da plataforma, através do design as imagens dos produtos que estão sendo fabricados pelo Centro Tecnológico do Queijo (CTq) serão expostas para os clientes que têm acesso a plataforma.
>**Prioridade:** Desejável.

<h2>3. Análise dos requisitos</h2>
Análisando os requisitos e levando-se em consideração o tempo de implementação, foi definido que será desenvolvido os requisitos funcionais considerados essenciais para suprir as expectativas do cliente. Sendo eles: cadastrar solicitante, login do solicitante, solicitar produto, login do administrador, aceitar ou recusar pedidos, emissão do relatório e controle do agendamento de pedidos. Ademais, também foi considerado essencial alguns requisitos não funcionais que garantiriam a integridade do sistema e sua visualização, os referidos: segurança e design.

<h3>3.1 Diagrama de caso de uso</h3>
Para melhor visualização foi desenvolvido um diagrama de caso de uso que exemplifica de que forma cada ator interage com o sistema.

<img src="https://user-images.githubusercontent.com/106175060/210894071-e54764ed-b3ae-4ec6-b2c5-86b023b1f2d0.png" align="center" width="800">
 
<h4>3.1.1 Analisando os elementos do diagrama</h4>

<h5>3.1.1.1 Sistema</h5>
O sistema está sendo representado por um retângulo e seu nome, controle de pedidos, está representado no topo. Dessa forma, tudo que está dentro do retângulo acontece dentro do sistema e o que está fora não acontece nele.

<h5>3.1.1.2 Ator</h5>
O ator, representado por bonecos palitos, é algo ou alguém que faz uso do sistema, nesse caso, o solicitante e administrador - que por serem objetos externos ao sistema estão do lado de fora do retângulo. O solicitante está localizado no lado esquerdo do sistema por ser o ator primário, ou seja, quem inicia a utilização do sistema. Nesse viés, o administrador está do lado direito, sendo assim, o ator secundário - quem irá reagir - dessa forma, o administrador só irá interagir com o sistema quando o solicitante fizer uma solicitação de algum pedido.

<h5>3.1.1.3 Caso de uso</h5>
O caso de uso - que por fazer parte do sistema está localizado dentro do retângulo- é a descrição do que o sistema faz. Nessa pespectiva, o sistema controler de pedidos será capaz de fazer cadastro, fazer login, fazer pedidos, aceitar ou recusar pedidos, emitir relatório e controlar o agendamento de pedidos.

<h5>3.1.1.4 Relacionamentos</h5>
Cada ator do sistema precisa interagir com pelo menos um caso de uso, assim, o relacionamento, representado por uma linha sólida, em uma diagramação é essencial. Portanto, nesse sistema, o solicitante interage com os casos de uso: fazer cadastro, fazer login, fazer pedidos e o administrador interage com os casos de uso: fazer login, aceitar ou recusar pedidos, emitir relatório e controlar o agendamento de pedidos.

<h2>4. Projeto do banco de dados</h2>
O banco de dados utilizado no projeto foi o PostgreSQL, como também, foi utilizado o prisma, um ORM(object-relational mapping), para auxiliar a criação da aplicação.

<h3>4.1 Diagrama entidade-relacionamento</h3>
Para melhor projeção do banco de dados foi criado um diagrama entidade-relacionamento.

<img src="https://user-images.githubusercontent.com/106175060/211171165-bffc7ad3-69b0-4833-87f3-891ceb9d3a87.png" align="center" width="500">

O diagrama entidade-relacionamento representa como as entidades se relacionam dentro de um sistema. Logo, o diagrama do projeto controle de pedidos exemplifica como as entidades usuarios, pedidos e administradores se relacionam no sistema.

<h4>4.1.1 Analisando os elementos do diagrama</h4>

<h5>4.1.1.1 Entidade</h5>

A entidade, por definição, é algo que pode ser definido e que pode ter dados armazenados sobre ele- como uma pessoa, um objeto, conceito ou evento. No diagrama do projeto, as entidades existentes são os usuarios, os pedidos e os administradores. 

<h5>4.1.1.2 Atributo</h5>

Cada entidade possue seus atributos que são as suas características ou propriedades, a exemplo a entidade usuarios tem os atributos id, email, senha e nome.

<h5>4.1.1.3 Relacionamento</h5>

Os relacionamentos em um diagrama entidade-relacionamento são, por definição, como entidades atuam umas sobre as outras ou estão associadas uma com as outras. Por exemplo, na relação entre as entidades usuarios e pedidos, onde um usuário pode realizar um pedido, o relacionamento seria o ato de solicitar o pedido que conecta as duas entidades.

<h5>4.1.1.4 Cardinalidade</h5>

A cardinalidade é usada para definir os atributos numéricos na relação entre duas entidades. No projeto as cardinalidades existentes é a relação entre usuarios e pedidos - do tipo um para muitos ou muitos para um, a depender  do sentido - onde apenas um usuário pode realizar muitos pedidos. Ademais, outra cardinalidade é a presente entre pedidos e administradores - um para muitos ou muitos para um, a depender do sentido - assim, um administrador tem acesso a muitos pedidos.


 








