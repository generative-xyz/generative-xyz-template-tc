import {rand} from "./rand";

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Your traits here ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
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
function traits() {
    window.$generativeTraits = {
        "T1": T1(rand),
    }
    console.log(window.$generativeTraits)
}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ Your traits here ↑↑↑↑↑↑↑↑↑↑↑↑↑↑

export {traits};