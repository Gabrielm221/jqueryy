function Altera_text() {
    $("#jquery1").text("Eu estou estudando jQuery!");
}

function Altera_vis(){
    $("#jquery2").toggle();
}

$(document).ready(function () {
    $("#enviar").click(function () {
        Valida_dados();
    });
});


function Valida_dados() {
    $("#error-message").text("");

    var nome = $("#name").val();
    var endereco = $("#endereco").val();

    if (!nome.match(/^\S.{4,39}$/)) {
        $("#error-message").text("Nome inválido. Deve ter entre 5 e 40 caracteres (sem espaços em branco no início ou final).");
        return;
    }

    if (!endereco.match(/\S+\s+\S+/)) {
        $("#error-message").text("Endereço inválido. Digite um endereço valido");
        return;
    }
}


function setupimg(){
    $(document).ready(function() {
        var imagens = $(".imagem");
        var indexAtual = 0;
    

        function mostrarImagem(index) {
            imagens.hide();
            imagens.eq(index).fadeIn();
        }

        mostrarImagem(indexAtual);
    
        $("#anterior").click(function() {
            indexAtual--;
            if (indexAtual < 0) {
                indexAtual = imagens.length - 1;
            }
            mostrarImagem(indexAtual);
        });
    
        $("#proximo").click(function() {
            indexAtual++;
            if (indexAtual >= imagens.length) {
                indexAtual = 0; 
            }
            mostrarImagem(indexAtual);
        });
    });
}


function setupAcordeon() {
    $(".sublista").hide();

    $("#menu-acordeon > li").click(function () {
        if (!$(this).parents(".exercise-section").length) {
            $(this).siblings().find(".sublista").slideUp();
        }
        $(this).find(".sublista").slideToggle();
    });
}


document.addEventListener("DOMContentLoaded", function () {
    setupAcordeon();
    setupimg();
    
});













