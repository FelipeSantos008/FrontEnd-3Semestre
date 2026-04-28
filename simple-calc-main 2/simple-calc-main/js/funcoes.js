

async function calcular() {
    event.preventDefault();
    //entrada
    let n1 = parseFloat( document.getElementById('n1').value ) ;
    let n2 = parseFloat( document.getElementById("n2").value );
    let op = document.getElementById("operacao").value;//soma
    let resultado = null;
    
    if( isNaN(n1) || isNaN(n2) ){
        document.getElementById('resultado').innerText = 'Preencha todos os números!'
    }


    //processamento
    if(op == 'soma'){
        resultado = somar(n1, n2)
        resultado = resultado.toFixed(2);

    } else if(op == 'subtracao') {
        resultado = subtrair(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'multiplicacao'){
        resultado = multiplicar(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'divisao'){

        if(n2 == 0) {
            resultado = 'Não é um número';
        } else {
            resultado = dividir(n1, n2);
            resultado = resultado.toFixed(2);
        }
            
    } else {
        resultado = "Operação Inválida";
    }

    //saída
    // console.log(`Resultado da operação: ${resultado}`);
    const calc = {
        n1: n1,
        n2: n2,
        op: op,
        resultado: resultado
    }
    document.getElementById('resultado').innerHTML = resultado;
    const dadosCadastros = await cadastrarNaApi(calc);
    if("error" in dadosCadastros) {
        alert(dadosCadastros.error);
    }else{
        carregarDados();
    }
}

/**
 * Função somar recebe 2 valores e retorna a soma dos 
 * dois valores
 */
 function somar(valor1, valor2) {
    return valor1 + valor2;
}


function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    if(valor2 == 0) {
        return 'Escolha um número diferente de zero para o segundo valor';
    }
    
    return valor1 / valor2;
}

function mostrarNaTela(calc){
    document.getElementById("cadastro").innerHTML +=
    `
    <article class="data__card-result">
            <span><strong>Primeiro Número:</strong> ${calc.n1}</span>
            <span><strong>Segundo Número:</strong> ${calc.n2}</span>
            <span><strong>Operação:</strong> ${calc.op}</span>
            <span><strong>Resultado:</strong> ${calc.resultado}</span>
    </article>
    `
}
async function cadastrarNaApi(objCadastro){
    try {
        const response = await fetch('http://localhost:3000/calculadora', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objCadastro)
        });
        const dadosCadastros = await response.json();
        return dadosCadastros;
    } catch (error) {
        return await{
        error: "Erro ao cadastrar cálculo"
    }}
}
async function carregarDados(){
    const retorno = await fetch("http://localhost:3000/calculadora");
let dadosCadastros = await retorno.json();
console.log(dadosCadastros);

document.getElementById("cadastro").innerHTML = "";
await dadosCadastros.forEach(calc => {
    mostrarNaTela(calc)});
}