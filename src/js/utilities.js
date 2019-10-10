function loadDoc(file, tag) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(tag).innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
}

$ = (id) => document.querySelector(id)
$id = (id) => document.getElementById(id)

createElement = (type, data) =>{
    let e = document.createElement(type)
    Object.keys(data).forEach(field =>{
        e[field] = data[field]
    })
    return e
}

inyectCSS = (element, styles) =>{
    Object.keys(styles).forEach(style => {
        element.style[style] = styles[style]
    })
}

loadElementos= (E)=> {
    Object.keys(E).forEach(e=>{
        $('.elementos').appendChild(createElement('div', {
            className: 'elemento',
            innerHTML: `${e} ${E[e]}`
        }))
    })
}

loadreactivos = (r)=>{
    Object.keys(r).forEach(e=>{
      $('.reactivos').appendChild(r[e].create())
    })
}

