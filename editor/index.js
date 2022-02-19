const SAVE_KEY = "saved_text"

let save_btn = document.getElementById("save");
let text_area = document.getElementById("editor_text");
let save_file_btn = document.querySelector('#save_file');
let insert_pic_btn = document.querySelector('#insert_picture');
let file_uploader = document.querySelector("#file-uploader");
let clear_btn = document.querySelector("#clear");

function load_saved() {
  let content = localStorage.getItem(SAVE_KEY);
  if (content != null) {
    text_area.innerText = content;
  }
}

load_saved();

function create_div_text(text) {
    let div = document.createElement("DIV");
    div.setAttribute("id", "ready_text");
    div.innerHTML = text;
    return div;
}

save_btn.addEventListener("click", function() {
  let content = text_area.innerText;
  if (content != "") {
    localStorage.setItem(SAVE_KEY, content);
  }
});

clear_btn.addEventListener("click", function() {
  if confirm("Уверены?") {
    localStorage.clear();
    $("div[contenteditable='true']").html("");
  }
});

function create_editor(text) {
    let textarea = document.createElement("DIV");
    textarea.setAttribute("id", "editor_text");
    textarea.setAttribute("contentEditable", "true");
    textarea.innerHTML = text;
    return textarea;
}

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

const downloadToFile = (content, filename, contentType) => {
  const a = document.createElement('a');
  const file = new Blob([content], {type: contentType});
  a.href= URL.createObjectURL(file);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
};

save_file_btn.addEventListener('click', function () {
  let content = text_area.innerText;
  if (content != "") {
    downloadToFile(content, 'my-new-file.txt', 'text/plain');
  }
});

insert_pic_btn.onclick = function() {
  file_uploader.click();
};

[].forEach.call(document.querySelectorAll('div[contenteditable="true"]'), function (el) {
    el.addEventListener('paste', function(e) {
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        document.execCommand("insertHTML", false, text);
    }, false);
});
