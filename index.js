const rand = mathRand();

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Add traits here ↓↓↓↓↓↓↓↓↓↓↓↓↓↓

function T1(rand) {
    // calculate rarity by yourself
    if (rand > 0.5) {
        return true;
    } else {
        return false
    }
}

// window.$generativeTraits contain list traits for token
// you need to populate a $generativeTraits object in the window object
window.$generativeTraits = {
    "T1": T1(rand),
}
console.log(window.$generativeTraits)

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ Add traits here ↑↑↑↑↑↑↑↑↑↑↑↑↑↑


// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Add your code here ↓↓↓↓↓↓↓↓↓↓↓↓↓↓

const canvas = document.createElement("canvas");
document.body.append(canvas)
const ctx = canvas.getContext("2d");
ctx.font = "11px serif";
ctx.fillText(seed, 10, 50);

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ Add your code here ↑↑↑↑↑↑↑↑↑↑↑↑↑↑