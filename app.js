var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// console.log(outputDiv)
var serverURL ="https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(text){
  return serverURL + "?" + "text=" + text
}

function errorHandler(error){
  console.log("error occured" , error)
  alert("something's wrong try again later")
}

function clickHandler(){   
  // outputDiv.innerText = "Translated " + txtInput.value
var inputTxt = txtInput.value //taking input

//calling the server for processing
fetch(getTranslationURL(inputTxt))
.then(response => response.json())
.then(json => {
  var TranslatedOutput = json.contents.translated
  outputDiv.innerText = TranslatedOutput  //output
})
.catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)