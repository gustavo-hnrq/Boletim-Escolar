function calcularMedia(){

    // -=- Explicação de como esse código funciona -=- 
    // Válido apenas para essa primeria parte - A primeria linha de intrução das condições acrescenta a situação do aluno, a segunda chama o ID das situações que serão mostradas e a terceira muda a cor do background da tag <p> da situação

    //linha 1 
    var nome1, n1l1, n2l1, n3l1, n4l1, media1 = 0;

    nome1 = document.querySelector("#nome1");
    var aluno1 = nome1.value
    n1l1 = parseFloat(document.getElementById("nota1_line1").value);
    n2l1 = parseFloat(document.getElementById("nota2_line1").value);
    n3l1 = parseFloat(document.getElementById("nota3_line1").value);
    n4l1 = parseFloat(document.getElementById("nota4_line1").value);

    media1 = (n1l1 + n2l1 + n3l1 + n4l1) / 4;

    document.getElementById("media1").innerHTML = parseFloat(media1);
    
    if(media1 >= 70){
        document.getElementById("situacao1").innerHTML = "Aprovado"
        var situacao1 = document.getElementById("situacao1")
        situacao1.style.backgroundColor = "green"
    }
    else if(media1 >= 50 && media1 < 70){
        document.getElementById("situacao1").innerHTML = "Recuperação"
        var situacao1 = document.getElementById("situacao1")
        situacao1.style.backgroundColor = "yellow"
        document.getElementById("media_abaixo1").style.padding = "10px"
    }
    else{
        document.getElementById("situacao1").innerHTML = "Reprovado"
        var situacao1 = document.getElementById("situacao1")
        situacao1.style.backgroundColor = "red"
        document.getElementById("media_abaixo1").style.padding = "10px"
    }

    // linha 2

    var nome2, n1l2, n2l2, n3l2, n4l2, media2 = 0;

    nome2 = document.querySelector("#nome2");
    var aluno2 = nome2.value;
    n1l2 = parseFloat(document.getElementById("nota1_line2").value);
    n2l2 = parseFloat(document.getElementById("nota2_line2").value);
    n3l2 = parseFloat(document.getElementById("nota3_line2").value);
    n4l2 = parseFloat(document.getElementById("nota4_line2").value);

    media2 = (n1l2 + n2l2 + n3l2 + n4l2) / 4;

    document.getElementById("media2").innerHTML = parseFloat(media2);

    if(media2 >= 70){
        document.getElementById("situacao2").innerHTML = "Aprovado"
        var situacao2 = document.getElementById("situacao2")
        situacao2.style.backgroundColor = "green"
    }
    else if(media2 >= 50 && media2 < 70){
        document.getElementById("situacao2").innerHTML = "Recuperação"
        var situacao2 = document.getElementById("situacao2")
        situacao2.style.backgroundColor = "yellow"
        document.getElementById("media_abaixo2").style.padding = "10px"
    }
    else{
        document.getElementById("situacao2").innerHTML = "Reprovado"
        var situacao2 = document.getElementById("situacao2")
        situacao2.style.backgroundColor = "red"
        document.getElementById("media_abaixo2").style.padding = "10px"
    }

    // linha 3

    var nome3, n1l3, n2l3, n3l3, n4l3, media3 = 0;

    nome3 = document.querySelector("#nome3");
    var aluno3 = nome3.value;
    n1l3 = parseFloat(document.getElementById("nota1_line3").value);
    n2l3 = parseFloat(document.getElementById("nota2_line3").value);
    n3l3 = parseFloat(document.getElementById("nota3_line3").value);
    n4l3 = parseFloat(document.getElementById("nota4_line3").value);

    media3 = (n1l3 + n2l3 + n3l3 + n4l3) / 4;

    document.getElementById("media3").innerHTML = parseFloat(media3);

    if(media3 >= 70){
        document.getElementById("situacao3").innerHTML = "Aprovado"
        var situacao3 = document.getElementById("situacao3")
        situacao3.style.backgroundColor = "green"
    }
    else if(media3 >= 50 && media3 < 70){
        document.getElementById("situacao3").innerHTML = "Recuperação"
        var situacao3 = document.getElementById("situacao3")
        situacao3.style.backgroundColor = "yellow"
        document.getElementById("media_abaixo3").style.padding = "10px"
    }
    else{
        document.getElementById("situacao3").innerHTML = "Reprovado"
        var situacao3 = document.getElementById("situacao3")
        situacao3.style.backgroundColor = "red"
        document.getElementById("media_abaixo3").style.padding = "10px"
    }

    // linha 4

    var nome4, n1l4, n2l4, n3l4, n4l4, media4 = 0;

    nome4 = document.querySelector("#nome4");
    var aluno4 = nome4.value;
    n1l4 = parseFloat(document.getElementById("nota1_line4").value);
    n2l4 = parseFloat(document.getElementById("nota2_line4").value);
    n3l4 = parseFloat(document.getElementById("nota3_line4").value);
    n4l4 = parseFloat(document.getElementById("nota4_line4").value);

    media4 = (n1l4 + n2l4 + n3l4 + n4l4) / 4;

    document.getElementById("media4").innerHTML = parseFloat(media4);

    if(media4 >= 70){
        document.getElementById("situacao4").innerHTML = "Aprovado"
        var situacao4 = document.getElementById("situacao4")
        situacao4.style.backgroundColor = "green"
    }
    else if(media4 >= 50 && media4 < 70){
        document.getElementById("situacao4").innerHTML = "Recuperação"
        var situacao4 = document.getElementById("situacao4")
        situacao4.style.backgroundColor = "yellow"
        document.getElementById("media_abaixo4").style.padding = "10px"
    }
    else{
        document.getElementById("situacao4").innerHTML = "Reprovado"
        var situacao4 = document.getElementById("situacao4")
        situacao4.style.backgroundColor = "red"
        document.getElementById("media_abaixo4").style.padding = "10px"
    }

    // linha 5

    var nome5, n1l5, n2l5, n3l5, n4l5, media5 = 0;

    nome5 = document.querySelector("#nome5");
    var aluno5 = nome5.value
    n1l5 = parseFloat(document.getElementById("nota1_line5").value);
    n2l5 = parseFloat(document.getElementById("nota2_line5").value);
    n3l5 = parseFloat(document.getElementById("nota3_line5").value);
    n4l5 = parseFloat(document.getElementById("nota4_line5").value);

    media5 = (n1l5 + n2l5 + n3l5 + n4l5) / 4;

    document.getElementById("media5").innerHTML = parseFloat(media5);

    if(media5 >= 70){
        document.getElementById("situacao5").innerHTML = "Aprovado"
        var situacao5 = document.getElementById("situacao5")
        situacao5.style.backgroundColor = "green"
    }
    else if(media5 >= 50 && media5 < 70){
        document.getElementById("situacao5").innerHTML = "Recuperação"
        var situacao5 = document.getElementById("situacao5")
        situacao5.style.backgroundColor = "yellow"
        document.getElementById("media_abaixo5").style.padding = "10px"
    }
    else{
        document.getElementById("situacao5").innerHTML = "Reprovado"
        var situacao5 = document.getElementById("situacao5")
        situacao5.style.backgroundColor = "red"
        document.getElementById("media_abaixo5").style.padding = "10px"
    }

    // mostrar média geral

    media_geral = (media1 + media2 + media3 + media4 + media5) / 5;

    document.getElementById("media_geral").innerHTML = "Média geral da turma: " + media_geral;
    
    // condições para aparecer os nomes dos alunos com a média final abaixo da geral

    if(media1 < media_geral){
        document.getElementById("media_abaixo1").innerHTML = aluno1
    }

    if(media2 < media_geral){
        document.getElementById("media_abaixo2").innerHTML = aluno2
    }

    if(media3 < media_geral){
        document.getElementById("media_abaixo3").innerHTML = aluno3
    }

    if(media4 < media_geral){
        document.getElementById("media_abaixo4").innerHTML = aluno4
    }

    if(media5 < media_geral){
        document.getElementById("media_abaixo5").innerHTML = aluno5
    }
}