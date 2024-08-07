function misterio1(){
    var msg;
    msg = document.createElement("p");
    msg.innerHTML = "Não tem 2 reais";
    document.body.appendChild(msg);

    document.getElementById("doisReais").disabled = true;
    document.getElementById("misterio2").disabled = true;

    var button
    button = document.createElement("button");
    button.innerHTML = "Resetar";
    document.body.appendChild(button)
    button.setAttribute("id", "resetar");
    button.setAttribute("onclick", "location.reload()");
}

function misterio2(){
    var imagem;
    imagem = document.createElement("img");
    imagem.setAttribute("src", "./src/selfie.webp");
    document.body.appendChild(imagem)

    document.getElementById("doisReais").disabled = true;
    document.getElementById("misterio2").disabled = true;

    var button
    button = document.createElement("button");
    button.innerHTML = "Resetar";
    document.body.appendChild(button)
    button.setAttribute("id", "resetar");
    button.setAttribute("onclick", "location.reload()");
}
