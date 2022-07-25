# Firebase Remote Config and Angular


<p align="left">
  <img alt="Java" width="100px" src="https://emendes.com/wp-content/uploads/2019/08/angular-firebase-1024x653.png" />
</p>

### Visão geral
Template funcional para referência de implementação do Firebase Remote Config no Angular 14, utilizando a mais recente ```web version 9``` do Firebase JS SDK (```npm install firebase```), que utiliza o formato de módulo JavaScript. 

### Como posso usar o Remote Config?
Você pode usar o Firebase Remote Config para definir parâmetros em seu aplicativo Mobile ou Web e atualizar seus valores na nuvem, permitindo modificar a aparência e o comportamento do seu aplicativo sem distribuir uma atualização para isso.

### Observação
Ao utilizar esse template assegure-se de previamente haver configurado um aplicativo Web no Firebase. Esse template não aborda essa etapa. Entretando, após cadastrar o aplicativo na plataforma do Firebase, toda cofiguração para o front Angular interagir com o serviço Remote Config pode ser verificada nos arquivos ```src/environments/environment.ts``` e ```/src/app/app.component.ts```

### Socket.io
Houve uma integração do Front-end com Socket.io o que proporciona a leitura e/ou exibição de dados em <strong>tempo real</strong>. Os dados são disparados através de eventos pelo Back-end e são lidos quase que instantaneamente pelo Front. A implementação no Back-end pode ser vista [aqui](https://github.com/damtaipu/order).


