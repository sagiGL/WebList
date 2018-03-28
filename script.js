
window.onload = function() {
    document.getElementById('add').addEventListener("click", addListItem);
}

function addListItem(){
    let text = document.getElementById("user_input").value;
    let node = document.createElement("li");
    let textNode = document.createTextNode(text);
    node.appendChild(textNode);
    document.getElementById('list').appendChild(node);
}

