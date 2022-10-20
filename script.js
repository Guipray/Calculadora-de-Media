var notas = []
function primeiraNota() {
  var primeiraNota = parseFloat(document.getElementById("nota1").value)
  if (primeiraNota >= 0 & primeiraNota <= 10) {
    notas.push(primeiraNota)
    document.getElementById("nota1").disabled = true;
    document.getElementById("botaoNota1").disabled = true;
  }
}

function segundaNota() {
  var segundaNota = parseFloat(document.getElementById("nota2").value)
  if (segundaNota >= 0 & segundaNota <= 10) {
    notas.push(segundaNota)
    document.getElementById("nota2").disabled = true;
    document.getElementById("botaoNota2").disabled = true;
  }
}

function terceiraNota() {
  var terceiraNota = parseFloat(document.getElementById("nota3").value)
  if (terceiraNota >= 0 & terceiraNota <= 10) {
    notas.push(terceiraNota)
    document.getElementById("nota3").disabled = true;
    document.getElementById("botaoNota3").disabled = true;
  }
}

function quartaNota() {
  var quartaNota = parseFloat(document.getElementById("nota4").value)
  if (quartaNota >= 0 & quartaNota <= 10) {
    notas.push(quartaNota)
    document.getElementById("nota4").disabled = true;
    document.getElementById("botaoNota4").disabled = true;
  }
}

function media() {
  var resultado = document.getElementById("resultado")
  if (notas.length != 4) {
    resultado.innerHTML = "<h2>Você esqueceu de colocar a nota em um dos campos</h2>"
    document.getElementById("botaoMedia").disabled = false;
  } else if (notas.length == 4) {
    var notaFinal = (notas[0] + notas[1] + notas[2] + notas[3]) / 4
    if (notaFinal < 6) {
    resultado.innerHTML = "<h2>Você está de recuperação! Sua nota foi " + notaFinal + "</h2>"
      document.getElementById("botaoMedia").disabled = true;
    } else if (notaFinal == 6) {
     resultado.innerHTML = "<h2>Cuidado, você passou porém tem de estudar mais! Sua nota foi " + notaFinal + "</h2>"
      document.getElementById("botaoMedia").disabled = true;
    } else if (notaFinal == 10) {
     resultado.innerHTML = "<h2>Muito bem, você fechou tudo! Pode ficar tranquilo como esquilo! Sua nota foi " + notaFinal + "</h2>"
      document.getElementById("botaoMedia").disabled = true;
    } else {
     resultado.innerHTML = "<h2>Parabéns, você foi aprovado! Sua nota foi " + notaFinal + "</h2>"
      document.getElementById("botaoMedia").disabled = true;
    }
  }
}