```markdown
# Lojinha - E-commerce Simples

Este é um projeto simples focado na criação de um e-commerce simples desenvolvido em HTML, CSS e React CDN. 

## 🛠️ Funcionalidades

- **Login de Usuário**: Login antes de entrar no sistema para visualizar a loja.
- **Catálogo de Produtos**: Lista de itens disponíveis para compra.
- **Carrinho de Compras**: Adicione e visualize os produtos selecionados.
- **Totalizador**: Calcula o valor total dos itens no carrinho.
- **Finalizar Compra**: Mostra um alerta com o total da compra ao concluir.
- **Limpar Carrinho**: Remove todos os itens do carrinho.

---

## 🚀 Como executar o projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/4rthurdev/E-commerce-JS
   cd E-commerce-JS
   ```

2. **Estrutura de Arquivos:**
   - `main.html`: Arquivo principal que carrega a estrutura HTML.
   - `style.css`: Estilos utilizados no projeto.
   - `script.js`: Lógica do e-commerce utilizando React.
   - `login.js`: Login do usuário.
   - `login.html`: Lógica do login do usuário.
   - `login.css`: Estilos do Login do usuário.

3. **Abra o arquivo `login.html` no navegador.**

4. **No arquivo `login.js` ao final do código constará o comando que deve ser colado no console, clicando F12, assim terá uma credencial cadastrada.**
---

## 📂 Estrutura do Projeto

```
lojinha/
├── main.html       # Estrutura HTML principal
├── style.css       # Estilos do projeto
├── script.js       # Lógica React
├── login.html      # Tela de login
├── login.js        # Lógica JS login
├── login.css       # Estilos do login
└── README.md       # Documentação
```

---

## 🧑‍🤝‍🧑 Desenvolvedores

Este projeto foi desenvolvido em grupo pelos seguintes integrantes:

- **Arthur Vasconcelos**
- **Adriel Ryan**
- **Dhonnatam Nascimento**
- **José Neto**

---

## 📝 Descrição Técnica

O projeto utiliza **React** para renderizar os componentes dinâmicos. As principais funções implementadas são:

- **`addToCart`**: Adiciona produtos ao carrinho.
- **`getTotal`**: Calcula o valor total dos produtos no carrinho.
- **`finalizePurchase`**: Mostra o valor total em um alerta ao finalizar a compra.
- **`clearCart`**: Limpa todos os itens do carrinho.

### Exemplo de Catálogo:
```javascript
const products = [
    { id: 1, name: "Nike", price: 55.90 },
    { id: 2, name: "Jordan", price: 80.90 },
    { id: 3, name: "New Balance", price: 110.90 },
];
```

### Tecnologias Utilizadas:
- HTML
- CSS
- JS
- React (via CDN)
- Babel (via CDN)

---

## 🌟 Melhorias Futuras Propostas

- Adicionar funcionalidade de remoção de itens específicos do carrinho.
- Adicionar contador ao lado dos itens, ao invés de adicionar vários itens um abaixo do outro.

---

## 📜 Licença

Este projeto é de uso livre e foi desenvolvido como atividade. Sinta-se à vontade para contribuir e sugerir melhorias!
``` 
