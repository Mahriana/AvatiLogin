# AvatiLogin

Este é um projeto simples de uma Tela de Login desenvolvida com **HTML**, **CSS** e **JavaScript**. Ele inclui funcionalidades de validação básica para os campos de e-mail e senha, bem como mensagens de erro e sucesso para guiar o usuário.

## Funcionalidades

- **Validação dos campos:**
  - O campo de e-mail aceita apenas endereços válidos (deve conter "@" e ".").
  - O campo de senha deve ter no mínimo 6 caracteres.
- **Mensagens de erro:**
  - Exibidas abaixo dos campos correspondentes, caso o usuário não preencha ou insira valores inválidos.
- **Simulação de envio:**
  - Após clicar no botão "Entrar", é exibida uma mensagem de sucesso após uma simulação de carregamento.
- **Modo Escuro**
  - Após clicar no ícone de sol ou de lua, alterna o modo de luz da página.

## Tecnologias Utilizadas

- **HTML** para estrutura da página.
- **CSS** para estilização.
- **JavaScript** para as validações e funcionalidades dinâmicas.

## Layout

A interface é simples, mas funcional, com os seguintes elementos:

- Campos para:
  - **Nome de usuário (e-mail)**
  - **Senha**
- Botão "Entrar".
- Mensagens de erro e sucesso.
- Design básico utilizando a cor principal **#e9f035**.

## Estrutura de Arquivos

```
├── Login.html       # Estrutura principal da página.
├── assets/
│   ├── css/
│   │   └── style.css  # Estilização da interface.
│   ├── img/           #Imagens do projeto.
│   └── js/
│       └── main.js    # Lógica e validações em JavaScript.

└── README.md         # Documentação do projeto.
```

## Como Rodar o Projeto Localmente

1. **Clone o repositório** para sua máquina local:

   ```bash
   git clone https://github.com/Mahriana/AvatiLogin
   ```

2. **Navegue até a pasta do projeto:**

   ```bash
   cd AvatiLogin
   ```

3. **Abra o arquivo `Login.html` em seu navegador:**
   - Você pode abrir diretamente clicando duas vezes no arquivo ou utilizando uma extensão como "Live Server" no VS Code.

## Exemplos de Uso

1. Insira um e-mail inválido e veja a mensagem de erro abaixo do campo de e-mail.
2. Insira uma senha com menos de 6 caracteres e veja a mensagem de erro correspondente.
3. Preencha ambos os campos corretamente e clique em "Entrar". Observe a mensagem de sucesso após uma breve simulação de envio.

## Melhorias Futuras

- Integração com um back-end para autenticação real.
- Estilizações mais avançadas para melhorar a experiência do usuário.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais informações.
