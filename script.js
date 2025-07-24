import {Visitor} from './classVisitor';

var visitor = new Visitor(document.querySelector(".flow"));




var buttons = document.querySelectorAll(".cta-1-dark");


buttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        console.log(btn.classList);
        activeBtn(btn);

        if(btn.textContent.includes("Copier") || btn.textContent.includes("Copié")){
            copierToClipboard(btn);
        }
    })

});

function activeBtn(btn){
    btn.classList.toggle("active");
}

function copierToClipboard(btn){
    var text = btn.parentElement.querySelector(".code").value;

    navigator.clipboard.writeText(text).then(function() {
        btn.classList.add("active");
        btn.innerHTML = `Copié  <i class='fa-solid fa-check'></i>`;
        console.log("copié");
    }, function(err) {
        console.error('Erreur lors de la copie dans le presse-papiers: ', err);
    });
}