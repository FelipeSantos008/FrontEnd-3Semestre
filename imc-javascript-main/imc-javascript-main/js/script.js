function calcular() {
    // alert("função calcular() Rodando")

    //nome
    const nome = document.getElementById("nome").value.trim();
    //altura
    const altura = parseFloat(document.getElementById("altura").value);
    //peso
    const peso = parseFloat(document.getElementById("peso").value);

    //verificar se os campos estão vazios
    if (nome.length == 0 || isNaN(altura) || isNaN(peso)) {

        alert("Por favor, preencha todos os campos.");
        return false;
    }

    console.log("Campos preenchidos corretamente");

    //calculo do imc
    const IMC = calcularIMC(peso, altura);
    console.log("IMC: " + IMC);

    //gerar o texto do resultado
    const resultado = gerarSituacao(IMC);
    console.log("Situação: " + resultado);

    //gerar um objeto JS com os dados
    const objIMC = {
        nome: nome,
        altura: altura,
        peso: peso,
        imc: IMC,
        situacao: resultado
    };

    //cadastrar na API
    const dadosGravados = cadastrarNaAPI(objIMC);
    console.log(dadosGravados);
    if ("error" in dadosGravados) {
        alert(dadosGravados.error);
    } else {
        //mostrar no html (inserir linha da tabela))
        carregarCadastro();
    }
}

async function carregarCadastro() {
    // alert("Carregando os dados do cadastro...");

    try { 
        const resposta = await fetch("http://localhost:3000/imc"); //faz uma busca GET
        let dados = await resposta.json(); //transforma o json em um objeto JS

        dados.sort((a, b) => a.nome.localeCompare(b.nome)); //ordena os dados do mais recente para o mais antigo

        document.getElementById("cadastro").innerHTML = ""; // Limpa a tabela antes de carregar os dados

        dados.forEach(pessoa => {
            mostrarNaTela(pessoa);
        });
    } catch (error) {
        console.log(error);
        return await{
            error: "Problemas para carregar os dados do cadastro."
        }
    }
}



async function cadastrarNaAPI(objCadastro) {

    //fazer um post na API

    try {
        const retorno = await fetch("http://localhost:3000/imc", {
            method: "POST",
            body: JSON.stringify(objCadastro),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });

        const dadosGravados = await retorno.json();
        return await dadosGravados;
        console.log(dadosGravados);


    } catch (error) {
        console.log(error);
        return await {
            error: "Problemas para cadastrar os dados"
        }
    }
}

function mostrarNaTela(objCadastro) {

    document.getElementById("cadastro").innerHTML += `
        <tr>
            <td>${objCadastro.nome}</td>
            <td>${objCadastro.altura}</td>
            <td>${objCadastro.peso}</td>
            <td>${objCadastro.imc.toFixed(2)}</td>
            <td>${objCadastro.situacao}</td>
        </tr>`;
}



function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

/*Menor que 16 – Magreza grave;

16 a menor que 17 – Magreza moderada;

17 a menor que 18,5 – Magreza leve;

18,5 a menor que 25 – Saudável;

25 a menor que 30 – Sobrepeso;

30 a menor que 35 – Obesidade Grau I;

35 a menor que 40 – Obesidade Grau II (considerada severa);

Maior que 40 – Obesidade Grau III (considerada mórbida).*/


//a funcção devera retornar o texto da situação do imc

function gerarSituacao(IMC) {
    if (IMC < 16) {
        return "Magreza grave";
    } else if (IMC < 17) {
        return "Magreza moderada";
    } else if (IMC < 18.5) {
        return "Magreza leve";
    } else if (IMC < 25) {
        return "Saudável";
    } else if (IMC < 30) {
        return "Sobrepeso";
    } else if (IMC < 35) {
        return "Obesidade Grau I";
    } else if (IMC < 40) {
        return "Obesidade Grau II (considerada severa)";
    } else {
        return "Obesidade Grau III (considerada mórbida)";
    }
}                   