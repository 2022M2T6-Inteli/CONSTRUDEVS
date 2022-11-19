// filtragem de elementos 

//declarando variáveis
let searchBox = document.querySelector("#search-box");
let images = document.querySelectorAll(".container .container-image .image");

// arrow function para filtragem
searchBox.oninput = () =>{
  images.forEach(hide => hide.style.display ="none")
  let value = searchBox.value;

  images.forEach(filter => {
    let title = filter.getAttribute("data-title")

    // caso o valor do atributo data-title seja igual ao buscardor, ele aparece
    if(value == title){
      filter.style.display = "block";
    }

    // caso em que não aparece
    if(searchBox.value ==""){
      filter.style.display = "block"
    }

  
  })
}
