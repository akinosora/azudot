(function(){
    // 37x22
    const HEIGHT = 22;
    const WIDTH = 37;
    
    const myCanvas = document.createElement("div");

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

    document.addEventListener('DOMContentLoaded', function() {
        Array.from(document.getElementsByTagName("my-canvas"), elem => {
            // draw canvas
            const canvasTable = document.createElement("table");
            canvasTable.onselectstart = () => false;
            elem.appendChild(myCanvas)
                .appendChild(canvasTable)
                .appendChild(createCanvasTbody());
        });
    });
    
})();