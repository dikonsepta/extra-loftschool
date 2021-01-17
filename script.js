//////////////////////////////// реализация ЗАПУСКА КОДА ////////////////////////////////

function include(url) {
    let script = document.createElement("script");
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

const butOneRun = document.querySelector(".task--one button.run");
butOneRun.addEventListener("click", () => {
    include("./common/1-string-filtering.js");
    document.querySelector("script").remove();
});

const butTwoRun = document.querySelector(".task--two button.run");
butTwoRun.addEventListener("click", () => {
    include("./common/2-object-selection.js");
    document.querySelector("script").remove();
});

const butThreeRun = document.querySelector(".task--three button.run");
butThreeRun.addEventListener("click", () => {
    include("./common/3-string-analysis.js");
    document.querySelector("script").remove();
});

const butFourRun = document.querySelector(".task--four button.run");
butFourRun.addEventListener("click", () => {
    include("./common/4-array-filtering.js");
    document.querySelector("script").remove();
});



//////////////////////////////// реализация МОДАЛЬНОГО ОКНА ////////////////////////////////

const pop = document.querySelector(".popup");
const cont = document.querySelector(".popup__content");
const myIframe = document.querySelector("iframe");

// Скрипт с https://learn.javascript.ru/cross-window-communication#ifreym-podozhdite-dokument
// Он каждые 10 миллисекунд проверяет, не обновился ли iframe
let oldDoc = myIframe.contentDocument;
let timer = setInterval(() => {
    let newDoc = myIframe.contentDocument;
    if (newDoc == oldDoc) return;

    // Если документ обновился он добавляет окну стили из iframe.css
    incCode = () => {
        let style = myIframe.contentWindow.document.createElement("link");
        style.rel = "stylesheet";
        style.href = "/extra-loftschool/iframe.css";
        style.type = "text/css";
        myIframe.contentWindow.document.head.appendChild(style);

        setTimeout(sizes = () => {
            let newWidth = document.querySelector("iframe").contentWindow.document.body.scrollWidth;
            let newHeight = document.querySelector("iframe").contentWindow.document.body.scrollHeight;
            if (newWidth != 0 && newHeight != 0) {
                myIframe.style.width = String(newWidth + "px");
                myIframe.style.height = String(newHeight + "px");
            }
        }, 1000);
    }
    // Задержка в 30 миллисекунд у вызова функции — обязательна!
    // При медленном 3G необходима 600мс

    clearInterval(timer);
}, 10);

const body = document.querySelector("body");

const butOneFile = document.querySelector(".task--one button.file");
butOneFile.addEventListener("click", () => {
    myIframe.setAttribute("src", "/extra-loftschool/common/1-string-filtering.js");
    pop.style.display = "block";
    body.style.overflowY = "hidden";
    setTimeout(incCode, 1000);
    setTimeout(() => { cont.style.display = "block"; }, 2000);
});

const butTwoFile = document.querySelector(".task--two button.file");
butTwoFile.addEventListener("click", () => {
    myIframe.setAttribute("src", "/extra-loftschool/common/2-object-selection.js");
    pop.style.display = "block";
    body.style.overflowY = "hidden";
    setTimeout(incCode, 1000);
    setTimeout(() => { cont.style.display = "block"; }, 2000);
});

const butThreeFile = document.querySelector(".task--three button.file");
butThreeFile.addEventListener("click", () => {
    myIframe.setAttribute("src", "/extra-loftschool/common/3-string-analysis.js");
    pop.style.display = "block";
    body.style.overflowY = "hidden";
    setTimeout(incCode, 1000);
    setTimeout(() => { cont.style.display = "block"; }, 2000);
});

const butFourFile = document.querySelector(".task--four button.file");
butFourFile.addEventListener("click", () => {
    myIframe.setAttribute("src", "/extra-loftschool/common/4-array-filtering.js");
    pop.style.display = "block";
    body.style.overflowY = "hidden";
    setTimeout(incCode, 1000);
    setTimeout(() => { cont.style.display = "block"; }, 2000);
});

const popBut = document.querySelector(".popup button.exit");
const popPush = document.querySelector(".popup__push");
popBut.addEventListener("click", () => {
    pop.style.display = "none";
    cont.style.display = "none";
    body.style.overflowY = "visible";
});
popPush.addEventListener("click", () => {
    pop.style.display = "none";
    cont.style.display = "none";
    body.style.overflowY = "visible";
});



//////////////////////////////// реализация СЛАДЕРА ////////////////////////////////

const mySlider = document.querySelector("ul.slider__content");
let msLength = 0;
for (let li of document.querySelectorAll("li.task")) {
    li.id = "n" + String(msLength);
    msLength += 1;
}
const ididid = "n" + String(msLength - 1);
document.getElementById(ididid).id = "n-1";

const msButL = document.querySelector("#left");
msButL.addEventListener("click", () => {
    for (let li of document.querySelectorAll("li.task")) {
        let oldID = Number(li.id.slice(1));
        if (oldID == Number(ididid.slice(1) - 1)) {
            li.id = "n" + String(-1);
        } else {
            li.id = "n" + String(oldID + 1);
        }
    }
});

const msButR = document.querySelector("#right");
msButR.addEventListener("click", () => {

    for (let li of document.querySelectorAll("li.task")) {
        let oldID = Number(li.id.slice(1));
        if (oldID == -1) {
            li.id = "n" + String(oldID + Number(ididid.slice(1)));
        } else {
            li.id = "n" + String(oldID - 1);
        }
    }
});



//////////////////////////////// реализация СОЗДАНИЯ И ОКРАШИВАНИЯ ////////////////////////////////

const myNumber = document.querySelector("input.num");
const myColor = document.querySelector("input.col");
const mySpace = document.querySelector(".space");

myNumber.addEventListener("change", event => {
    const numVal = event.target.value;
    if (numVal < 13) {
        for (let oldDiv of document.querySelectorAll("div.block")) {
            oldDiv.remove(mySpace);
        }
        for (let i = 0; i < numVal; i++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("block");
            newDiv.textContent = String(i + 1);
            mySpace.append(newDiv);
        }
    } else {
        for (let oldDiv of document.querySelectorAll("div.block")) {
            oldDiv.remove(mySpace);
        }
        const devil = document.createElement("div");
        devil.classList.add("devil");
        devil.classList.add("block");
        devil.textContent = "🔥👺🔥";
        mySpace.append(devil);
    }
});

let chanVal = 0;
myColor.addEventListener("change", event => {
    if (document.querySelectorAll(".block").length > 0) {
        const colVal = event.target.value;
        chanVal += 1;
        if (chanVal == 1) {
            let color = colVal;
            for (let block of document.querySelectorAll(".block:nth-child(odd)")) {
                block.style.backgroundColor = String(color);
            }
            for (let block of document.querySelectorAll(".block:nth-child(even)")) {
                block.style.backgroundColor = "#fff";
            }
        } else {
            let color = colVal;
            for (let block of document.querySelectorAll(".block:nth-child(even)")) {
                block.style.backgroundColor = String(color);
            }
            for (let block of document.querySelectorAll(".block:nth-child(odd)")) {
                block.style.backgroundColor = "#fff";
            }
            chanVal = 0;
        }
    }
    document.querySelector(".devil").style.backgroundColor = "#fff";
});