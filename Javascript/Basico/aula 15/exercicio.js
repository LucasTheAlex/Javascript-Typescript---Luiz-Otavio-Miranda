const nome = prompt("Digite o seu nome completo");

const quebraLinha = " <br/>";

window.document.body.innerHTML += `Seu é ${nome}` + quebraLinha;
window.document.body.innerHTML += `Seu nome tem ${nome.length} letras` + quebraLinha;
window.document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}` + quebraLinha;
window.document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${nome.indexOf('a')} ` + quebraLinha;
window.document.body.innerHTML += `Qual o último índice da letra a no seu nome? ${nome.lastIndexOf('a')} ` + quebraLinha;
window.document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.substring(nome.length - 3)} ` + quebraLinha;
window.document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} ` + quebraLinha;
window.document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} ` + quebraLinha;
window.document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} ` + quebraLinha;