# wheather-app

## Project setup -
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
#### Considerações
* CSS - Foi utilizado SASS como pré processador e o padrão BEM (Block Element Modifier) para a estrutura de css dos componentes.
* Testes - Foi realizado apenas testes unitários pela questão do tempo. Foquei mais nos testes lógicos mas existe espaço para os testes de template.
* Framework - Utilizado **VueJs** para a componentização do projeto.
* Linguagem - Typescript
* Estrutura de pastas - Utilizei a estrutura de módulos separando o escopo dentre eles. Pensando em escalabilidade desse projeto, acredito ser a melhor alternativa. Cada pasta possui suas entidades, interfaces, serviços e testes relacionado apenas aquele escopo. 
* Coverage - Só é relativo para o **Coverage** arquivos, .Vue, .js e .ts exlcuindo services e interfaces. Embora no localstorage.service os testes foram escritos. 
* Lint - Utilizado Eslint com o padrão AirBnb

