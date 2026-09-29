const formulario = document.getElementById("formCadastro");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const contato = document.getElementById("contato").value;
    const endereco = document.getElementById("endereço").value;
    const cpf = document.getElementById("cpf").value;
    const foto = document.getElementById("foto").files[0];

    const nomeFoto = foto ? foto.name : "Nenhuma foto selecionada";

    const dados = 
`K-POP STORE
==============================

CADASTRO DE USUÁRIO

Nome: ${nome}
E-mail: ${email}
Senha: ${senha}
Contato: ${contato}
Endereço: ${endereco}
CPF: ${cpf}
Foto de perfil: ${nomeFoto}

==============================
Cadastro realizado com sucesso!
`;

    const arquivo = new Blob([dados], {
        type: "text/plain"
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(arquivo);
    link.download = "cadastro_usuario.txt";

    link.click();

    URL.revokeObjectURL(link.href);

    alert("Cadastro realizado com sucesso!");
});


