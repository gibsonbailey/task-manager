function dragStart(e) {
    console.log("Drag Start")
    if (e.dataTransfer) {
        e.dataTransfer.setData('text', e.target.id);
    }
    else if (e.originalEvent.dataTransfer){
        e.originalEvent.dataTransfer.setData('text', e.target.id);
    }
}

function dragDrop(e) {
    console.log("Drag Drop")
    event.preventDefault()
    var data = e.dataTransfer.getData("text")
    e.target.appendChild(document.getElementById(data))
}

function dragOver(e) {
    console.log("Drag Over")
    event.preventDefault()
}
