const rand = mathRand();


// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Your code here ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
const container = document.createElement("div")
container.innerHTML = "<span>seed: " + seed + "</span><br>";
document.body.prepend(container)
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ Your code here ↑↑↑↑↑↑↑↑↑↑↑↑↑↑

export {rand};
