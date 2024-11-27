### README.md

```markdown
# Lojinha - E-commerce Simples

Este é um projeto simples de e-commerce desenvolvido em **HTML**, **CSS** e **React**. O objetivo é demonstrar funcionalidades básicas de um sistema de loja online, incluindo um catálogo de produtos, carrinho de compras, finalização de compra e a opção de limpar o carrinho.

---

## 🛠️ Funcionalidades

- **Catálogo de Produtos**: Lista de itens disponíveis para compra.
- **Carrinho de Compras**: Adicione e visualize os produtos selecionados.
- **Totalizador**: Calcula o valor total dos itens no carrinho.
- **Finalizar Compra**: Mostra um alerta com o total da compra ao concluir.
- **Limpar Carrinho**: Remove todos os itens do carrinho.

---

## 🚀 Como executar o projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/lojinha.git
   cd lojinha
   ```

2. **Estrutura de Arquivos:**
   - `index.html`: Arquivo principal que carrega a estrutura HTML.
   - `style.css`: Estilos utilizados no projeto.
   - `script.js`: Lógica do e-commerce utilizando React.

3. **Abra o arquivo `index.html` no navegador.**

   > Não é necessário nenhum servidor adicional, pois o projeto utiliza apenas tecnologias frontend.

---

## 📂 Estrutura do Projeto

```
lojinha/
├── index.html       # Estrutura HTML principal
├── style.css        # Estilos do projeto
├── script.js        # Lógica React
└── README.md        # Documentação
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
    { id: 1, name: "Carroça", price: 55.90 },
    { id: 2, name: "Pallet", price: 80.90 },
    { id: 3, name: "Jegue", price: 110.90 },
];
```

### Tecnologias Utilizadas:
- HTML
- CSS
- React (via CDN)
- Babel (via CDN)

---

## 🌟 Melhorias Futuras

- Adicionar funcionalidade de remoção de itens específicos do carrinho.
- Salvar o estado do carrinho no localStorage.
- Criar um backend simples para persistência de dados.

---

## 📜 Licença

Este projeto é de uso livre e foi desenvolvido como um exercício de aprendizado. Sinta-se à vontade para contribuir e sugerir melhorias!
``` 

Se precisar de ajustes ou mais informações, é só avisar! 😊
