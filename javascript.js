const grid=document.getElementById('grid');
function grid_init(n){
    for(let i=0; i<n; i++){
        const vertical=document.createElement("div");
        vertical.classList.add('grid-vertical');
        let row=grid.appendChild(vertical);
        for(let j=0; j<n; j++){
            const horizontal=document.createElement("div");
            horizontal.classList.add('grid-horizontal');
            row.appendChild(horizontal);
        }
    }

}
grid_init(16);