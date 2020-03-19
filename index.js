let list = document.querySelector('.list-products');
const listOfProd = [
  { title: "VueJS", img: "1" },
  { title: "AngularJS", img: "2" },
  { title: "ReactJS", img: "3" },
  { title: "Redux", img: "4" },
  { title: "NodeJS", img: "5" },
  { title: "Sass", img: "6" },
  { title: "HTML5", img: "7" },
  { title: "Github", img: "8" },
  { title: "Bulma css", img: "9" },
  { title: "TypeScript", img: "10" },
  { title: "Drupal", img: "11" },
  { title: "Javascript", img: "12" }
]

const product = (idImg, titleloImg) => 
`<li>
  <img src="img/${idImg}.jpg" loading="lazy" alt="${titleloImg}">
  <p>${titleloImg} <span>$25</span></p>
  <a href="#" class="button">BUY NOW</a>
</li>`

listOfProd.map((prod) => list.innerHTML += product(prod.img, prod.title));
