export class Snippet{
    id;
    title;
    langage;
    code;
    explanation;

    constructor(title,langage,code,explanation){
        this.id = id;
        this.title = title;
        this.langage = langage;
        this.code = code;
        this.explanation = explanation;
    }

    getDiv(){
        var box = document.createElement("div");
        box.classList.add("box");
        var inputId = document.createElement("input");
        inputId.type="hidden";
        var header = document.createElement("div");
        header.classList.add("header");
        var h2 = document.createElement("h2");
        h2.classList.add("lil-title");
        h2.textContent = this.title;
        var img = document.createElement("img");
        img.src = "icon/" + this.langage + ".svg";
        img.classList.add("lil-icon");
        var hr = document.createElement("hr");
        var code = document.createElement("textarea");
        code.addClassList ("code");
        code.textContent = this.code;
        var p = document.createElement("p");
        p.textContent = this.explanation;
        var btn = document.createElement("button");
        btn.classList.add("cta-1-dark active");

        header.appendChild(h2);
        header.appendChild(img);

        box.appendChild(header);
        box.appendChild(inputId);
        box.appendChild(hr);
        box.appendChild(code);
        box.appendChild(p);
        box.appendChild(btn);
        
    }

    

}