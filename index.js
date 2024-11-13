function gerarAleatoriosOtimizado(quantidade) {
    const numeros = Array.from({ length: 60 }, (_, i) => i + 1); // Cria um array de 1 a 60
    for (let i = numeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numeros[i], numeros[j]] = [numeros[j], numeros[i]]; // Troca os elementos
    }
    return numeros.slice(0, quantidade); // Retorna os primeiros 'quantidade' números
}

console.log(gerarAleatoriosOtimizado(6));
// Função original para medir tempo
function gerarAleatoriosOriginal(quantidade) {
    const vetor = [];
    const geracoes = [];

    while (vetor.length < quantidade) {
        const aleatorio = Math.floor(Math.random() * 60) + 1;
        geracoes.push(aleatorio);
        if (!vetor.includes(aleatorio)) {
            vetor.push(aleatorio);
        }
    }

    console.log("Total de gerações:", geracoes.length);
    return vetor;
}

// Medição de tempo
console.time("Original");
gerarAleatoriosOriginal(6);
console.timeEnd("Original");

console.time("Otimizado");
gerarAleatoriosOtimizado(6);
console.timeEnd("Otimizado");
