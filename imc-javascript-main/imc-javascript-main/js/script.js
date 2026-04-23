function calcular() {
    // alert("função calcular() Rodando")

    //nome
    const nome = document.getElementById("nome").value;
    //altura
    const altura = parseFloat(document.getElementById("altura").value);
    //peso
    const peso = parseFloat(document.getElementById("peso").value);

    console.log(altura);
    console.log(peso);

    //verificar se os campos estão vazios
    if (nome.trim().length == 0 ||
        isNaN(altura) ||
        isNaN(peso)) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    console.log("Campos preenchidos corretamente");
}