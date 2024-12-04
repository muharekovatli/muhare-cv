document.addEventListener('mousemove', (e) => { // Escuta todos os movimentos de mouse do usuário
    const rastro = document.createElement('div'); // e executa o código criando um novo elemento
    rastro.classList.add('rastro');               // div no HTML que recebe a classe .rastro
    rastro.textContent = Math.floor(Math.random() * 100); // Gera um número aleatório entre 0 e 99
    rastro.style.left = e.pageX + 'px';  // obtém as coordenadas X e Y do mouse 
    rastro.style.top = e.pageY + 'px';   // para definir como posição do elemento rastro criado

    document.body.appendChild(rastro);   // acessa o corpo da página e adiciona o elemento rastro

    setTimeout(() => rastro.remove(), 1000); // Remove o rastro após 2 segundos
});