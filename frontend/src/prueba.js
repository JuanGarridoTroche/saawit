
const news = {
  id: 3,
  idNews: 94,
  idUser:3
}
const voted = [
  { idUser: 3, idNews: 3, value: 1 },
  { idUser: 3, idNews: 2, value: 0 },
  { idUser: 3, idNews: 58, value: 0 },
  { idUser: 3, idNews: 68, value: 1 },
  { idUser: 3, idNews: 77, value: 0 },
  { idUser: 3, idNews: 76, value: 0 },
  { idUser: 3, idNews: 69, value: 0 },
  { idUser: 3, idNews: 89, value: 1 },
  { idUser: 3, idNews: 81, value: 1 },
  { idUser: 3, idNews: 32, value: 0 },
  { idUser: 3, idNews: 94, value: 1 }
]

// console.log(voted.includes({"idNews": "94"})); 

const resultado = voted.find(e => e.idNews === news.idNews)

console.log(resultado);

let votedNews = {};
voted.forEach(element => {
  if(element.idNews === news.idNews) {
    votedNews = element;
  }
})

console.log(votedNews);