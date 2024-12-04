# Adapter Design Pattern Example

Este repositório contém um exemplo prático do **Design Pattern Adapter**, que demonstra como integrar diferentes sistemas de banco de dados (MySQL e Oracle) a uma interface comum (`DbAdapter`).

## 📝 Descrição

O objetivo deste projeto é ilustrar o uso do padrão estrutural **Adapter**, que permite que classes com interfaces incompatíveis trabalhem juntas. Aqui, adaptamos comandos específicos de banco de dados (`MySQLCommands`) para uma interface genérica (`DbAdapter`), permitindo a integração de diferentes sistemas de forma transparente.

### Conceitos de Design Pattern utilizados:

- **Target Interface**: Interface `DbAdapter`, que define métodos genéricos (`insert`, `update`, `delete`).
- **Adaptee**: Classe `MySQLCommands`, que possui métodos específicos do MySQL.
- **Adapter**: Classe `MySQLAdapter`, que traduz as chamadas da interface genérica para os comandos do MySQL.
- **Client**: O código que utiliza o `DbAdapter` sem conhecer detalhes de implementação dos bancos de dados.

---

## 🛠️ Estrutura do Código

- `DbAdapter`: Interface genérica que define os métodos `insert`, `update` e `delete`.
- `MySQLCommands`: Classe que contém os métodos específicos do MySQL (`insertMySQL`, `updateMySQL`, `deleteMySQL`).
- `MySQLAdapter`: Classe adaptadora que implementa `DbAdapter` e traduz as chamadas para os métodos do MySQL.
- `OracleCommands`: Exemplo de uma implementação direta da interface `DbAdapter`, representando outro sistema de banco de dados.
- Arquivo principal (`main`): Demonstra como usar os adaptadores para integrar os sistemas de banco de dados.

---

## 🚀 Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Certifique-se de que você tem o **Node.js** instalado.

3. Instale as dependências (caso existam):

   ```bash
   npm install
   ```

4. Execute o código:
   ```bash
   node main.js
   ```

---

## 📂 Estrutura de Arquivos

```
.
├── DbAdapter.ts           # Interface genérica
├── MySQLCommands.ts       # Classe com comandos específicos do MySQL
├── MySQLAdapter.ts        # Adapter para MySQL
├── OracleCommands.ts      # Implementação direta do DbAdapter para Oracle
├── Client.ts                # Arquivo principal de execução
└── README.md              # Documentação do projeto
```
