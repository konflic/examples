let show_btn = document.getElementById("show");
let edit_btn = document.getElementById("edit");
let text_area = document.getElementById("editor_text");
let editor = document.getElementById("editor");
let file = document.getElementById("file");

function create_div_text(text) {
    let div = document.createElement("DIV");
    div.setAttribute("id", "ready_text");
    div.style.height = "400px";
    div.style.width = "500px";
    div.innerHTML = text;
    return div;
}

function create_editor(text) {
    let textarea = document.createElement("DIV");
    textarea.setAttribute("id", "editor_text");
    textarea.setAttribute("contentEditable", "true");
    textarea.style.height = "400px";
    textarea.style.width = "500px";
    textarea.innerHTML = text;
    return textarea;
}

function show_edited_text(event) {
    event.target.removeEventListener("click", show_edited_text);
    event.target.setAttribute("class", "btn btn-secondary");
    event.target.disabled = true;
    let text_area = document.getElementById("editor_text");
    let text = text_area.innerHTML;
    text_area.remove();
    editor.prepend(create_div_text(text));
    edit_btn.addEventListener("click", show_editor_with_text);
    edit_btn.setAttribute("class", "btn btn-primary");
    edit_btn.disabled = false;
}

function show_editor_with_text(event) {
    event.target.removeEventListener("click", show_editor_with_text);
    event.target.setAttribute("class", "btn btn-secondary");
    event.target.disabled = true;
    let ready_text = document.getElementById("ready_text");
    let text = ready_text.innerHTML;
    console.log(ready_text);
    ready_text.remove();
    editor.prepend(create_editor(text));
    show_btn.addEventListener("click", show_edited_text);
    show_btn.setAttribute("class", "btn btn-primary");
    show_btn.disabled = false;
}

show_btn.addEventListener("click", show_edited_text);

function readURL(input) {
    let img = document.createElement("IMG");
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      let text_area = document.getElementById("editor_text");
      text_area.append(img);
      reader.onload = function (event) {
        img.setAttribute("src", event.target.result);
        img.style.width = "200px";
        img.style.height = "200px";
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
