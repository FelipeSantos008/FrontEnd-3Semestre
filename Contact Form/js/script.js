function validarFormulario(){
    let nome = document.getElementById("nome").value;

    let quantidadeErros = 0;

    if(nome.trim().length == 0){
        formError("nome");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    }else{
        reiniciaBorda("nome")
    }

    let sobrenome = document.getElementById("sobrenome").value;

    if(sobrenome.trim().length == 0){
        formError("sobrenome");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    }else{
        reiniciaBorda("sobrenome")
    }

    let email = document.getElementById("email").value;

    if(email.trim().length == 0){
        formError("email");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    }else{
        reiniciaBorda("email")
    }
    
    let numeroPais = document.getElementById("numeroPais").value;

    if(numeroPais.trim().length == 0){
        formError("numeroPais");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    }else{
        reiniciaBorda("numeroPais")
    }
    
    let ddd = document.getElementById("ddd").value;

    if(ddd.trim().length == 0){
        formError("ddd");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    }else{
        reiniciaBorda("ddd")
    }
    let exemplo = document.getElementById("exemplo").value;

    if(exemplo.trim().length == 0){
        formError("exemplo");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    }else{
        reiniciaBorda("exemplo")
    }
    let cep = document.getElementById("cep").value;

    if(cep.trim().length == 0){
        formError("cep");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    }else{
        reiniciaBorda("cep")
    }
    let rua = document.getElementById("rua").value;

    if(rua.trim().length == 0){
        formError("rua");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    }else{
        reiniciaBorda("rua")
    }
    let numeroCasa = document.getElementById("numeroCasa").value;

    if(numeroCasa.trim().length == 0){
        formError("numeroCasa");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    }else{
        reiniciaBorda("numeroCasa")
    }
    let complemento = document.getElementById("complemento").value;

    if(complemento.trim().length == 0){
        formError("complemento");
        quantidadeErros++;
        // alert("O campo nome é obrigatório.")
    }else{
        reiniciaBorda("complemento")
    }

    if(quantidadeErros > 0){
        alert("Existem " + quantidadeErros + " erros no formulário.");
        quantidadeErros = 0;
    }else{
        alert("Formulário enviado com sucesso.");
        reiniciaTodasAsBordas();
    }


}

function formError(idCampo){
    document.getElementById(idCampo).style.border = "2px solid red"
}

function reiniciaBorda(idCampo){
    document.getElementById(idCampo).style.border = "transparent"
}