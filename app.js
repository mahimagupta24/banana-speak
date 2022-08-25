var btnTranslate=document.querySelector("#btn-Translate")
var txtInput=document.querySelector("#txt-input")
var outputDiv=document.querySelector("#output")
//var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL="https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(text){
    return serverURL+"?"+"text=" +text
}
function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with server");
}

function clickHandler(){
    var inputText=txtInput.value;
    fetch(getTranslationURL(inputText))
    .then((response)=>response.json())
    .then((json)=>(outputDiv.innerText=json.contents.translated))
    .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler)