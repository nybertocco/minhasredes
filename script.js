function toggleMode() {
const html = document.documentElement
html.classList.toggle('light')

// pegar a tag Img 
const img = document.querySelector("#profile img")

// substituir a Imagem 
if(html.classList.contains('light')) {
   // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/foto-light.jpg")
} else {
   // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/foto-dark.png")
}
}    

