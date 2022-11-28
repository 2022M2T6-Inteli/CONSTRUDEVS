// // filtragem de elementos


// //declarando variáveis
// let searchBox = document.querySelector("#search-box");
// let images = document.querySelectorAll(".container .container-image .image");

// // arrow function para filtragem
// searchBox.oninput = () =>{
//   images.forEach(hide => hide.style.display ="none")
//   let value = searchBox.value;

//   images.forEach(filter => {
//     let title = filter.getAttribute("data-title")

//     // caso o valor do atributo data-title seja igual ao buscardor, ele aparece
//     if(value == title){
//       filter.style.display = "block";
//     }

//     // caso em que não aparece
//     if(searchBox.value ==""){
//       filter.style.display = "block"
//     }

//   })
// }

// construção dos cards de forma dinâmica
api = "http://localhost:3001";

$(document).ready(() => {
  empreiteiros.list();
});

var empreiteiros = {
  list() {
    $.ajax({
      url: api + "allmei",
      type: "GET",
      sucess: (data) => {
        let txt = "";
        let imgSelecionada;
        data.forEach((element) => {
          txt += `<div class="image" data-title="${element.principaisAreas}">`;
          if (element.principaisAreas == "projetista") {
            imgSelecionada = "../img/projetistaDeObras.jpeg";
          } else if (element.principaisAreas == "construtor") {
            imgSelecionada = "../img/construpea.png";
          } else if (element.principaisAreas == "pintor") {
            imgSelecionada = "../img/pintorDeObras2.jpg";
          }
          txt += `<img src="${imgSelecionada}"/>`;
          txt += `<h3>Nome: ${element.razaoSocial}</h3>`;
          txt += `<h3>Região: ${element.regiao_empresa}</h3>`;
          txt += `<h3>Especialidades: ${element.principaisAreas}</h3>`;
          txt += `</div>`
        });
        console.log($.ajax())
      },
    })
  },
};
