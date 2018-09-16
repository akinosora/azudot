"use strict";

(function(){
    // 37x22
    const HEIGHT = 22;
    const WIDTH = 37;
    
    const myCanvas = document.createElement("div");
    const myPalette = document.createElement("div");

    const colorSet = {
        _: "#bdaead", // default
        A: "#ffffff", // A
        B: "#312829", // B
        C: "#ffd373", // C
        D: "#73ffad", // D
        E: "#7382ff", // E
        F: "#ff7194", // F
        G: "#ffd7c6", // G
    };
    let currentColor = colorSet.A;

    const createCanvasTbody = () => {
        const tbody = document.createElement("tbody");
        for(let i=0; i<HEIGHT; i++){
            const tr = document.createElement("tr");
            for(let j=0; j<WIDTH; j++){
                const td = document.createElement("td");
                td.innerHTML="&nbsp;";
                td.style.backgroundColor = colorSet._;
                td.onclick = (e) => {
                    e.target.style.backgroundColor = currentColor;
                };
                td.oncontextmenu = (e) => {
                    e.target.style.backgroundColor = colorSet._;
                    return false;
                };
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        return tbody;
    }
    const createPaletteTbody = () => {
        const tbody = document.createElement("tbody");
        const tr = document.createElement("tr");
        for(const key in colorSet){
            if (colorSet[key] === colorSet._) continue;
            const td = document.createElement("td");
            td.innerHTML="&nbsp;";
            td.style.backgroundColor = colorSet[key];
            const getColor = (e) => (currentColor = colorSet[key]) && false;
            td.onclick = getColor;
            td.oncontextmenu = getColor;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
        return tbody;
    }

    document.addEventListener('DOMContentLoaded', function() {
        Array.from(document.getElementsByTagName("my-canvas"), elem => {
            const canvasHint = document.createElement("div");
            canvasHint.innerText = "左クリックで描画、右クリックで消しゴムだよ！";
            elem.appendChild(canvasHint);
            // draw canvas
            const canvasTable = document.createElement("table");
            canvasTable.style.width = 16 * WIDTH + "px";
            canvasTable.style["table-layout"] = "fixed";
            canvasTable.onselectstart = () => false;
            elem.appendChild(myCanvas)
                .appendChild(canvasTable)
                .appendChild(createCanvasTbody());
            // draw palette
            const paletteTable = document.createElement("table");
            paletteTable.onselectstart = () => false;
            elem.appendChild(myPalette)
                .appendChild(paletteTable)
                .appendChild(createPaletteTbody());
            const paletteHint = document.createElement("div");
            paletteHint.innerText = "パレットを右/左クリックで色選択だよ！";
            myPalette.appendChild(paletteHint);
        });
    });
    
})();
