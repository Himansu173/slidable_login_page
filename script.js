function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function swap_login() {
    document.getElementById('login').style.cssText = `left:72%; transition:0.8s;`
    await sleep(300)
    document.getElementById('signup').style.cssText = `transition:0.6s; transform: rotate(0deg);`
    await sleep(300)
    document.getElementById('signup').style.zIndex = 1;
    document.getElementById('login').style.cssText = `left:37%; transition:0.9s; z-index: 0; transform: rotate(7deg);`
}

async function swap_signup() {
    document.getElementById('signup').style.cssText = `left:2%; transition:0.8s; z-index: 1; transform: rotate(0deg);`
    await sleep(300)
    document.getElementById('login').style.cssText = `z-index: 1; transition:0.6s; transform: rotate(0deg);`
    await sleep(300)
    document.getElementById('signup').style.zIndex = 0;
    document.getElementById('signup').style.cssText = `left:37%; transition:0.9s; transform: rotate(7deg);`
}