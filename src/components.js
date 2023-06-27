// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Your code here ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function components() {
    const canvas = document.createElement("canvas");
    document.body.append(canvas)
    const ctx = canvas.getContext("2d");
    ctx.font = "11px serif";
    ctx.fillText(seed, 10, 50);
}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ Your code here ↑↑↑↑↑↑↑↑↑↑↑↑↑↑

export {components};