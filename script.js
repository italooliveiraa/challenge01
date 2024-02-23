const texto = document.querySelector('#criptografia')
const texto_descri = document.querySelector('#descriptografia')
const copia_texto = document.querySelector(".texto__cripto")


const criptografar = () => {
    let texto_criptografado = texto.value.split("").map(letra => {
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
            return letra
        }
    }).join("");

    copia_texto.innerHTML = texto_criptografado
    texto.value = ''

}

const descriptografar = () => {
    copia_texto.innerHTML = ''
    let texto_descriptografado = texto_descri.value

    let novo_texto = texto_descriptografado
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")

    copia_texto.innerHTML = novo_texto
    texto_descri.value = ''
}

const copiarTexto = () => {
    const copiar_texto_area = document.querySelector(".texto__cripto").innerText;

    navigator.clipboard.writeText(copiar_texto_area).then(() => {
        alert("Texto copiado com sucesso!!!")
    }).catch(err => {
        throw new Error(err.message)
    })

}