const app = () => {
    // Obtém o valor dos campos de entrada
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Recupera usuários armazenados no localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Verifica se a senha e login estão corretos
    const user = users.find(
        (user) => user.username === username && user.password === password
    );

    if (user) {
        alert("Login bem-sucedido!");
        window.location.href = "index.html"; // Redireciona para a página principal
    } else {
        alert("Usuário ou senha incorretos!");
    }
};

// Clear = localStorage.clear();

// Recupera se tem usuários = const users = JSON.parse(localStorage.getItem("users")) || [];
// Adiciona um usuário = users.push({ username: "Arthur", password: "12345" });
// Salva a lista atualizada, tudo transformado em string = localStorage.setItem("users", JSON.stringify(users));
