let monQuestionnaire = document.getElementById('form')

monQuestionnaire.addEventListener('submit',function(event){
event.preventDefault();
let text = document.getElementById('citation').value
let author = document.getElementById('nom').value
console.log("Texte :", text);
  console.log("Auteur :", author);
})