//Barra Nav
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const enlaces = document.querySelectorAll(".nav-list li a");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

// Cierra el menú cuando se hace clic en cualquier enlace de la lista
enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
});


//Lista productos
    const products = [
        ["aguacate hass primera", "kilo"],
        ["aguacate hass segunda", "kilo"],
        ["ajo 1x3", "kilo"],
        ["ajo malla 500grs", "kilo"],
        ["ajo trenza", "kilo"],
        ["ajo pelado", "kilo"],
        ["albahaca rollo", "unidad"],
        ["alfalfa", "unidad"],
        ["apio", "kilo"],
        ["arugula", "rollo"],
        ["ayote mantequilla", "kilo"],
        ["ayote sazon", "kilo"],
        ["ayote tierno", "unidad"],
        ["banano", "unidad"],
        ["banano datil", "kilo"],
        ["berenjena", "unidad"],
        ["berro", "bandeja"],
        ["brocoli", "kilo"],
        ["camote", "kilo"],
        ["cebolla blanca", "kilo"],
        ["cebolla morada", "kilo"],
        ["cebollino", "rollo"],
        ["chayote quelite", "unidad"],
        ["chayote negro", "unidad"],
        ["chile dulce primera", "unidad"],
        ["chile jalapeño", "kilo"],
        ["chile panameño", "kilo"],
        ["ciruela", "kilo"],
        ["coco", "unidad"],
        ["pipa", "unidad"],
        ["cocoro chayotes", "bolsa"],
        ["col bruselas", "bandeja"],
        ["coliflor", "unidad"],
        ["culantro castilla", "rollo"],
        ["culantro coyote", "rollo"],
        ["curcuma", "kilo"],
        ["dulce tapa 1x2", "atado 1x2"],
        ["maiz dulce", "bandeja"],
        ["esparragos", "rollo"],
        ["espinaca", "rollo"],
        ["elote tuza", "unidad"],
        ["flores comestibles", "bandeja"],
        ["fresa 400grs", "bandeja"],
        ["frijol blanco", "kilo"],
        ["frijol tierno", "kilo"],
        ["granadilla", "unidad"],
        ["guayaba real", "kilo"],
        ["hierba buena", "rollo"],
        ["hongo ostra", "bandeja"],
        ["hongo portobello", "bandeja"],
        ["hongo blanco", "bandeja"],
        ["jenjibre", "kilo"],
        ["kale", "rollo"],
        ["kiwi", "kilo"],
        ["lechuga hidroponica", "unidad"],
        ["lechuga americana", "unidad"],
        ["lecguga escarola", "unidad"],
        ["lechuga romana", "unidad"],
        ["lechuga roja", "unidad"],
        ["limon mandarina", "unidad"],
        ["limon mecino", "unidad"],
        ["mandarina dulce importada", "kilo"],
        ["mango", "kilo"],
        ["manzana gala 1x6", "bolsa 1x6"],
        ["manzana roja", "unidad"],
        ["manzana verde", "unidad"],
        ["manzanilla seca", "rollo"],
        ["maracuya", "kilo"],
        ["melocoton", "kilo"],
        ["melon", "kilo"],
        ["menta rollo", "rollo"],
        ["mini vegetales", "bandeja"],
        ["minizuiquini", "bandeja"],
        ["mini zanahoria", "bandeja"],
        ["mini elotes", "bandejas"],
        ["mora", "kilo"],
        ["naranja", "unidad"],
        ["naranja importada", "kilo"],
        ["ñampi", "kilo"],
        ["oregano 1x5", "rollo 1x5"],
        ["palmito", "bolsa"],
        ["papa", "kilo"],
        ["papa roja", "kilo"],
        ["papa semilla mini", "kilo"],
        ["papaya", "kilo"],
        ["pepino", "kilo"],
        ["pera", "unidad"],
        ["perejil 1x5", "rollo 1x5"],
        ["platano maduro", "unidad"],
        ["platano verde", "unidad"],
        ["remolacha", "unidad"],
        ["repollo morado", "unidad"],
        ["repollo verde", "unidad"],
        ["romero rollo", "unidad"],
        ["sandía", "kilo"],
        ["tamarindo", "kilo"],
        ["tomate cherry", "bandeja"],
        ["tomate primera", "kilo"],
        ["tomate segunda", "kilo"],
        ["tomillo rollo 1x5", "rollo 1x5"],
        ["uchuva", "kilo"],
        ["uva morada", "kilo"],
        ["uva verde", "kilo"],
        ["vainica", "kilo"],
        ["vainica mini", "bolsa"],
        ["yuca", "kilo"],
        ["zanahoria", "kilo"],
        ["zuquini", "unidad"]
    ];

    const pageSize = 15;
    let currentPage = 0;

    function renderPages() {
        const tableContainer = document.getElementById("product-table-container");
        tableContainer.innerHTML = "";
        
        const table = document.createElement("table");
        table.classList.add("table", "table-bordered", "table-sm", "table-striped");
        
        const thead = document.createElement("thead");
        thead.innerHTML = "<tr><th>Producto</th><th>Unidad</th></tr>";
        table.appendChild(thead);
        
        const tbody = document.createElement("tbody");
        const start = currentPage * pageSize;
        const end = start + pageSize;
        
        products.slice(start, end).forEach(product => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${product[0]}</td><td>${product[1]}</td>`;
            tbody.appendChild(row);
        });
        
        table.appendChild(tbody);
        tableContainer.appendChild(table);

        updatePagination();
    }

    function updatePagination() {
        const pagination = document.getElementById("pagination");
        const totalPages = Math.ceil(products.length / pageSize);
        pagination.innerHTML = `Página ${currentPage + 1} de ${totalPages}`;
    }

    function nextPage() {
        const totalPages = Math.ceil(products.length / pageSize);
        if (currentPage < totalPages - 1) {
            currentPage++;
            renderPages();
        }
    }

    function previousPage() {
        if (currentPage > 0) {
            currentPage--;
            renderPages();
        }
    }
 // Animación al cambiar de página
 function animateTableChange() {
    const tableContainer = document.getElementById("table-container");
    tableContainer.classList.remove("fade-in");
    tableContainer.classList.add("fade-out");

    setTimeout(() => {
        tableContainer.classList.remove("fade-out");
        tableContainer.classList.add("fade-in");
    }, 500);
}

// Efecto Parallax en el scroll
window.addEventListener("scroll", () => {
    const parallax = document.querySelector(".parallax-background");
    const scrollPosition = window.pageYOffset;
    parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

renderPages();