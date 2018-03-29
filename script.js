let listCounter = 0;

window.onload = function() {
    document.getElementById('add').addEventListener("click", addListItem);
    document.getElementById('sort').addEventListener("click", sortList);

}

function addListItem(){
    let text = document.getElementById("user_input").value;
    let node = document.createElement("li");
    let textNode = document.createTextNode(text);
    let xBtn = document.createElement("button");
    let t = document.createTextNode("X");      // Create a text node

    //xBtn.style.alignContent="center";
    node.appendChild(textNode);
    //xBtn.appendChild(t);
    //node.appendChild(xBtn);
    document.getElementById('list').appendChild(node);
    node.setAttribute("class","listItem");
    node.setAttribute("id",listCounter + 1);
    listCounter++;
    node.addEventListener("click", function(event) {
        node.parentNode.removeChild(node);
    });
}

function sortList() {
    let  list, i, switching, b, shouldSwitch;
    list = document.getElementById('list');
    switching = true;
    // switching loop till all switch needed to be done are done
    while (switching){
        switching = false;
        b = list.getElementsByTagName("LI");
        for (i = 0; i < (b.length -1); i++){
            shouldSwitch = false;
            if (b[i].innerHTML.toLocaleLowerCase() > b[i + 1].innerHTML.toLowerCase()){
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch){
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}
