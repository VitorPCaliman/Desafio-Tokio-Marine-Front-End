# Transferências Frontend

Este é o frontend da aplicação de agendamento de transferências. Ele permite aos usuários agendar transferências com base em datas e valores, além de exibir transferências agendadas com detalhes.

## 🛠️ Tecnologias Utilizadas

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular--Material-009688?style=for-the-badge&logo=angular-material&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 🚀 Instruções para Rodar a Aplicação

1. Clone o repositório:
    ```bash
    git clone https://github.com/VitorPCaliman/Desafio-Tokio-Marine-Front-End.git
    cd frontend-transferencias
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute a aplicação:
    ```bash
    ng serve
    ```

4. Acesse o aplicativo em: `http://localhost:4200`.

## 📐 Decisões de Arquitetura

- **Componentização**: A aplicação foi dividida em componentes Angular reutilizáveis e isolados, como `AgendamentoTransferenciaComponent` e `ListarAgendamentosComponent`.
- **Material Design**: Utilizamos Angular Material para garantir uma UI moderna e responsiva, facilitando o desenvolvimento de componentes de interface.
- **Integração com a API REST**: O frontend se comunica diretamente com a API backend via HTTP utilizando o serviço `TransferenciaService` para buscar, criar e listar transferências.

## 📊 Modelos Utilizados

### Transferência

| Campo              | Tipo        | Descrição                                        |
|--------------------|-------------|--------------------------------------------------|
| `contaOrigem`       | `string`    | Conta de onde sairá a transferência              |
| `contaDestino`      | `string`    | Conta de destino da transferência                |
| `valorTransferencia`| `number`    | Valor da transferência                           |
| `dataTransferencia` | `Date`      | Data da transferência                            |

### Modelo de Paginação

| Campo              | Tipo        | Descrição                                        |
|--------------------|-------------|--------------------------------------------------|
| `content   `       | `Transferencia[]`    | Lista de tranferências |
| `totalElements`      | `number`    | Total de Elementos               |
| `size`| `number`    | Tamanho                       |
| `number` | `Number`      | Número                           |


## 💡 Melhorias e Próximos Passos

1. **Autenticação e Login**: Integrar um sistema de autenticação JWT com o backend para proteger rotas.
2. **Testes Automatizados**: Escrever testes de unidade e de integração utilizando frameworks como Jasmine e Karma.
3. **Notificações em Tempo Real**: Implementar uma funcionalidade de notificações em tempo real para alertar os usuários sobre o status das transferências.
