// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Your code here ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function components() {
    const container = document.createElement("div")
    container.innerHTML = "<span>seed: " + seed + "</span><br>";
    document.body.prepend(container)
}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ Your code here ↑↑↑↑↑↑↑↑↑↑↑↑↑↑

export {components};