// Função Principal do Site
// Cart= carrinho, setCart= função para atualizar o carrinho, products= produtos disponíveis, addToCart= função para adicionar ao carrinho, getTotal= função para calcular o total, finalizePurchase= função para finalizar a compra, clearCart= função para limpar o carrinho
const App = () => {
    const [cart, setCart] = React.useState([]); // Estado para o carrinho, iniciar vazio
    const products = [
        { id: 1, name: "Nike", price: 55.90 },
        { id: 2, name: "Jordan", price: 80.90 },
        { id: 3, name: "New Balance", price: 110.90 },
    ]; // Produtos disponíveis

    const addToCart = (product) => {
        setCart([...cart, product]);
    }; // Adiciona um produto ao carrinho, cart é um array, setCart é a função para atualizar o estado lá encima e product é o produto que será adicionado

    const getTotal = () => {
        return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
    }; // Calcula o total do carrinho, reduce é uma função para percorrer o array, depois soma e retorna o total

    const finalizePurchase = () => {
        const total = getTotal();
        if (cart.length === 0) {
            alert("O carrinho está vazio. Adicione algum item para finalizar a compra.");
        } else {
            alert(`Compra finalizada! O total é R$ ${total}. Volte sempre!`);
            clearCart();
        }
    }; // Função ao apertar em "Finalizar Compra"

    const clearCart = () => { setCart([]); }; // Função para limpar o carrinho

    // Função para renderizar o site
    return (
        <div className="container">
            <h2>Catálogo de Produtos</h2>
            {/* A div abaixo mapeia os produtos e cria um bloco para cada produto */}
            {products.map((product) => (
                <div className="product" key={product.id}>
                    <span>
                        {product.name} - R$ {product.price.toFixed(2)}
                    </span>
                    <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button> {/* Botão para adicionar ao carrinho */}
                </div>
            ))}
            {/* A div abaixo é o carrinho */}
            <div className="cart">
                <h3>Carrinho</h3>
                {cart.length === 0 ? (
                    <p>O carrinho está vazio.</p>
                ) : (
                    <>
                        {/* Mostra os produtos no carrinho */}
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index}>
                                    {item.name} - R$ {item.price.toFixed(2)}
                                </li>
                            ))}
                        </ul>
                        {/* Mostra o total */}
                        <h4>Total: R$ {getTotal()}</h4>
                        {/* Botão para finalizar a compra */}
                        <button onClick={finalizePurchase}>Finalizar Compra</button>
                        {/* Botão para limpar carrinho */}
                        <button className="clearCart" onClick={clearCart}>Limpar Carrinho</button>
                    </>
                )}
            </div>
            {/* Fim do site */}
        </div>
    );
};

ReactDOM.render(
    <App />, document.getElementById("app") // Renderiza o site no elemento com id "app"
);
