/**
 essa função recebe os dados do formulário em um objeto JavaScript
 e em seguida chama a api para cadastrar
 **/
async function cadastrarContato(objetoContato) {
    console.log(objetoContato)

    //chamar api com o fetch
    const resposta = await fetch("http://localhost:3000/contatos", {
        method: "POST",
        body: JSON.stringify(objetoContato), // convete o objeto JavaScript em JSON
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });

    return await resposta;
}

async function buscarEndereco(cep) {

    // //quando o cep não vier preenchido
    if (cep.trim().length == 0) {
        alert("O CEP deve ter 8 números");
        return false;
    }


    //buscar via cep
    try {
        aguardandoCampos();

        let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let dados = await retorno.json();

        console.log(dados);

        document.getElementById('rua').value = dados.logradouro;
        document.getElementById('bairro').value = dados.bairro;
        document.getElementById('cidade').value = dados.localidade;
        document.getElementById('estado').value = dados.estado;
    } catch (error) {
        console.log(error);
    }
}

function aguardandoCampos() {
    document.getElementById('rua').value = "aguarde ...";
    document.getElementById('bairro').value = "aguarde ...";
    document.getElementById('cidade').value = "aguarde ...";
    document.getElementById('estado').value = "aguarde ...";
}




function validarFormulario() {
    let nome = document.getElementById("nome").value;

    let quantidadeErros = 0;

    if (nome.trim().length == 0) {
        formError("nome");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    } else {
        reiniciaBorda("nome")
    }

    let sobrenome = document.getElementById("sobrenome").value;

    if (sobrenome.trim().length == 0) {
        formError("sobrenome");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    } else {
        reiniciaBorda("sobrenome")
    }

    let email = document.getElementById("email").value;

    if (email.trim().length == 0) {
        formError("email");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    } else {
        reiniciaBorda("email")
    }

    let numeroPais = document.getElementById("numeroPais").value;

    if (numeroPais.trim().length == 0) {
        formError("numeroPais");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    } else {
        reiniciaBorda("numeroPais")
    }

    let ddd = document.getElementById("ddd").value;

    if (ddd.trim().length == 0) {
        formError("ddd");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    } else {
        reiniciaBorda("ddd")
    }
    let exemplo = document.getElementById("exemplo").value;

    if (exemplo.trim().length == 0) {
        formError("exemplo");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    } else {
        reiniciaBorda("exemplo")
    }
    let cep = document.getElementById("cep").value;

    if (cep.trim().length == 0) {
        formError("cep");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    } else {
        reiniciaBorda("cep")
    }
    let rua = document.getElementById("rua").value;

    if (rua.trim().length == 0) {
        formError("rua");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    } else {
        reiniciaBorda("rua")
    }
    let numeroCasa = document.getElementById("numeroCasa").value;

    if (numeroCasa.trim().length == 0) {
        formError("numeroCasa");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    } else {
        reiniciaBorda("numeroCasa")
    }
    let aptoBloco = document.getElementById("aptoBloco").value;

    if (numeroCasa.trim().length == 0) {
        formError("aptoBloco");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    } else {
        reiniciaBorda("aptoBloco")
    }
    let bairro = document.getElementById("bairro").value;

    if (numeroCasa.trim().length == 0) {
        formError("bairro");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    } else {
        reiniciaBorda("bairro")
    }
    let cidade = document.getElementById("cidade").value;

    if (numeroCasa.trim().length == 0) {
        formError("cidade");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    } else {
        reiniciaBorda("cidade")
    }
    let complemento = document.getElementById("complemento").value;

    if (complemento.trim().length == 0) {
        formError("complemento");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    } else {
        reiniciaBorda("complemento")
    }
    let anotacoes = document.getElementById("anotacoes").value;

    if (complemento.trim().length == 0) {
        formError("anotacoes");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    } else {
        reiniciaBorda("anotacoes")
    }

    if (quantidadeErros > 0) {
        alert("Existem " + quantidadeErros + " erros no formulário.");
        quantidadeErros = 0;
    } else {

        let objetoContato = {
            nome: nome,
            sobrenome: sobrenome,
            email : email,
            numeroPais : numeroPais,
            ddd : ddd,
            exemplo : exemplo,
            cep : cep,
            rua : rua,
            numeroCasa : numeroCasa,
            aptoBloco : aptoBloco,
            bairro : bairro,
            cidade : cidade,
            complemento : complemento,
        }

        let cadastrado = cadastrarContato(objetoContato);
        alert("Formulário enviado com sucesso.");
        // reiniciaTodasAsBordas();

    }


}

function formError(idCampo) {
    document.getElementById(idCampo).style.border = "2px solid red"
}

function reiniciaBorda(idCampo) {
    document.getElementById(idCampo).style.border = "transparent"
}