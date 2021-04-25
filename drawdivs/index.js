var board = document.getElementById("board");
let count = 0;

function create_div(x1, y1, x2, y2) {
    if (x1 > x2) {
        let tmp;
        tmp = x1;
        x1 = x2;
        x2 = tmp;
    }
    if (y1 > y2) {
        let tmp;
        tmp = y1;
        y1 = y2;
        y2 = tmp;
    }
    let div = document.createElement("DIV");
    let width = x2 - x1;
    let height = y2 - y1;
    div.setAttribute("id", count++ + "")
    div.style.position = "absolute";
    div.style.height = height + "px";
    div.style.width = width + "px";
    div.style.marginTop = y1 + "px";
    div.style.marginLeft = x1 + "px";
    div.style.borderRadius = 50 + "%";
    div.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
    return div;
};

function append_div(e) {
    console.log();
    let final_x = e.clientX;
    let final_y = e.clientY;
    let div = create_div(e.target.init_x, e.target.init_y, final_x, final_y);
    board.appendChild(div);
    board.removeEventListener("mouseup", append_div);
    document.title = count + " divs"; 
}

board.addEventListener("mousedown", function (e) {
    let init_x = e.clientX;
    let init_y = e.clientY;
    board.init_x = init_x;
    board.init_y = init_y;
    board.addEventListener("mouseup", append_div);
});



console.log(res);