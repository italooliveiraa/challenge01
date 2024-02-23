let palavra = "gato";
let novaPalavra = palavra.split("").map(letra => {
    if (letra === 'a') {
        return 'ai'
    }
    else if (letra === 'e') {
        return 'enter'
    }
    else if (letra === 'i') {
        return 'imes'
    }
    else if (letra === 'o') {
        return 'ober'
    }
    else if (letra === 'u') {
        return 'ufat'
    }
    else {
        return letra; // Mantém a letra original
    }
}).join("");
console.log(novaPalavra);