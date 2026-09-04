/* =========================================
   HUB CONECTA AUTÔNOMOS
   SCRIPT.JS
========================================= */


/* =========================================
   DADOS DOS PROFISSIONAIS
========================================= */

const professionals = [
   
    {
        id: 1,
        name: "João da Silva",
        category: "Pedreiro",
        neighborhood: "Bom Jesus",
        city: "Serra Talhada - PE",
        rating: 4.9,
        reviews: 47,
        price: "A partir de R$ 120",
        description: "Especialista em reformas, construção de paredes, pisos e acabamentos.",
        phone: "(87) 9 0000-0001"
    },
    {
        id: 2,
        name: "Carlos Henrique",
        category: "Eletricista",
        neighborhood: "São Cristóvão",
        city: "Serra Talhada - PE",
        rating: 4.8,
        reviews: 35,
        price: "A partir de R$ 80",
        description: "Instalações elétricas residenciais, manutenção e pequenos reparos.",
        phone: "(87) 9 0000-0002"
    },
    {
        id: 3,
        name: "Maria Oliveira",
        category: "Manicure",
        neighborhood: "Nossa Senhora da Penha",
        city: "Serra Talhada - PE",
        rating: 5.0,
        reviews: 62,
        price: "A partir de R$ 35",
        description: "Manicure, pedicure, esmaltação e cuidados especiais com as unhas.",
        phone: "(87) 9 0000-0003"
    },
    {
        id: 4,
        name: "Pedro Alves",
        category: "Pintor",
        neighborhood: "AABB",
        city: "Serra Talhada - PE",
        rating: 4.7,
        reviews: 29,
        price: "A partir de R$ 150",
        description: "Pintura residencial e comercial, preparação de paredes e acabamento.",
        phone: "(87) 9 0000-0004"
    },
    {
        id: 5,
        name: "Rafael Santos",
        category: "Mecânico",
        neighborhood: "Várzea",
        city: "Serra Talhada - PE",
        rating: 4.9,
        reviews: 51,
        price: "A partir de R$ 100",
        description: "Manutenção automotiva, troca de óleo, freios e revisão geral.",
        phone: "(87) 9 0000-0005"
    },
    {
        id: 6,
        name: "José Roberto",
        category: "Encanador",
        neighborhood: "Centro",
        city: "Serra Talhada - PE",
        rating: 4.8,
        reviews: 38,
        price: "A partir de R$ 70",
        description: "Consertos hidráulicos, vazamentos, torneiras, caixas d'água e tubulações.",
        phone: "(87) 9 0000-0006"
    },
    {
        id: 7,
        name: "Lucas Ferreira",
        category: "Eletricista",
        neighborhood: "Tancredo Neves",
        city: "Serra Talhada - PE",
        rating: 4.6,
        reviews: 24,
        price: "A partir de R$ 75",
        description: "Manutenção elétrica, instalação de tomadas, luminárias e chuveiros.",
        phone: "(87) 9 0000-0007"
    },
    {
        id: 8,
        name: "Ana Paula",
        category: "Manicure",
        neighborhood: "Vila Bela",
        city: "Serra Talhada - PE",
        rating: 4.9,
        reviews: 43,
        price: "A partir de R$ 40",
        description: "Alongamento, esmaltação, pedicure e cuidados para eventos.",
        phone: "(87) 9 0000-0008"
    },
    {
        id: 9,
        name: "Marcos Antônio",
        category: "Pedreiro",
        neighborhood: "Nossa Senhora da Conceição",
        city: "Serra Talhada - PE",
        rating: 4.8,
        reviews: 32,
        price: "A partir de R$ 130",
        description: "Construção e reforma de casas, calçadas, muros e áreas externas.",
        phone: "(87) 9 0000-0009"
    },
    {
        id: 10,
        name: "Francisco Lima",
        category: "Pintor",
        neighborhood: "São Sebastião",
        city: "Serra Talhada - PE",
        rating: 4.7,
        reviews: 27,
        price: "A partir de R$ 140",
        description: "Pintura interna e externa, texturas e renovação de ambientes.",
        phone: "(87) 9 0000-0010"
    },
    {
        id: 11,
        name: "André Luiz",
        category: "Mecânico",
        neighborhood: "Cagep",
        city: "Serra Talhada - PE",
        rating: 4.9,
        reviews: 44,
        price: "A partir de R$ 90",
        description: "Diagnóstico, manutenção preventiva e reparos automotivos.",
        phone: "(87) 9 0000-0011"
    },
    {
        id: 12,
        name: "Antônio José",
        category: "Encanador",
        neighborhood: "José Rufino Alves",
        city: "Serra Talhada - PE",
        rating: 4.6,
        reviews: 21,
        price: "A partir de R$ 65",
        description: "Serviços hidráulicos residenciais e comerciais.",
        phone: "(87) 9 0000-0012"
    },
    {
        id: 13,
        name: "Bruno Henrique",
        category: "Pedreiro",
        neighborhood: "José Alves de Carvalho Nunes",
        city: "Serra Talhada - PE",
        rating: 4.8,
        reviews: 36,
        price: "A partir de R$ 110",
        description: "Reformas, assentamento de pisos, revestimentos e alvenaria.",
        phone: "(87) 9 0000-0013"
    },
    {
        id: 14,
        name: "Diego Martins",
        category: "Eletricista",
        neighborhood: "Nossa Senhora de Fátima",
        city: "Serra Talhada - PE",
        rating: 4.7,
        reviews: 31,
        price: "A partir de R$ 80",
        description: "Instalações elétricas, manutenção e iluminação residencial.",
        phone: "(87) 9 0000-0014"
    },
    {
        id: 15,
        name: "Juliana Souza",
        category: "Manicure",
        neighborhood: "Cachoeira",
        city: "Serra Talhada - PE",
        rating: 4.9,
        reviews: 39,
        price: "A partir de R$ 35",
        description: "Manicure e pedicure com atendimento residencial.",
        phone: "(87) 9 0000-0015"
    },
    {
        id: 16,
        name: "Roberto Gomes",
        category: "Pintor",
        neighborhood: "Bomba",
        city: "Serra Talhada - PE",
        rating: 4.6,
        reviews: 18,
        price: "A partir de R$ 130",
        description: "Pintura residencial, comercial e pequenos reparos.",
        phone: "(87) 9 0000-0016"
    },
    {
        id: 17,
        name: "Edivaldo Santos",
        category: "Mecânico",
        neighborhood: "Bom Jesus",
        city: "Serra Talhada - PE",
        rating: 4.8,
        reviews: 33,
        price: "A partir de R$ 100",
        description: "Mecânica geral, revisão e manutenção de veículos.",
        phone: "(87) 9 0000-0017"
    },
    {
        id: 18,
        name: "Gustavo Pereira",
        category: "Encanador",
        neighborhood: "Vila Bela",
        city: "Serra Talhada - PE",
        rating: 4.7,
        reviews: 25,
        price: "A partir de R$ 70",
        description: "Manutenção hidráulica e instalação de equipamentos.",
        phone: "(87) 9 0000-0018"
    },
    {
        id: 19,
        name: "Wellington Alves",
        category: "Pedreiro",
        neighborhood: "São Cristóvão",
        city: "Serra Talhada - PE",
        rating: 5.0,
        reviews: 41,
        price: "A partir de R$ 125",
        description: "Construção, reformas e acabamento de imóveis.",
        phone: "(87) 9 0000-0019"
    },
    {
        id: 20,
        name: "Camila Rodrigues",
        category: "Manicure",
        neighborhood: "Tancredo Neves",
        city: "Serra Talhada - PE",
        rating: 4.8,
        reviews: 34,
        price: "A partir de R$ 40",
        description: "Manicure, pedicure, nail art e atendimento personalizado.",
        phone: "(87) 9 0000-0020"
    },
    {
        id: 21,
        name: "Márcio Silva",
        category: "Eletricista",
        neighborhood: "José Tomé de Souza Ramos",
        city: "Serra Talhada - PE",
        rating: 4.9,
        reviews: 46,
        price: "A partir de R$ 85",
        description: "Eletricista residencial, instalação e manutenção.",
        phone: "(87) 9 0000-0021"
    },
    {
        id: 22,
        name: "Renato Carvalho",
        category: "Pintor",
        neighborhood: "Nossa Senhora da Penha",
        city: "Serra Talhada - PE",
        rating: 4.8,
        reviews: 37,
        price: "A partir de R$ 145",
        description: "Pintura, textura, massa corrida e acabamento.",
        phone: "(87) 9 0000-0022"
    },
    {
        id: 23,
        name: "Samuel Oliveira",
        category: "Mecânico",
        neighborhood: "São Sebastião",
        city: "Serra Talhada - PE",
        rating: 4.7,
        reviews: 28,
        price: "A partir de R$ 95",
        description: "Manutenção automotiva e diagnóstico de problemas.",
        phone: "(87) 9 0000-0023"
    },
   
    {
        id: 24,
        name: "Paulo César",
        category: "Encanador",
        neighborhood: "AABB",
        city: "Serra Talhada - PE",
        rating: 4.9,
        reviews: 40,
        price: "A partir de R$ 75",
        description: "Serviços hidráulicos, vazamentos e instalações.",
        phone: "(87) 9 0000-0024"
    }

];


/* =========================================
   ELEMENTOS
========================================= */

const grid =
    document.getElementById("professionalGrid");

const emptyState =
    document.getElementById("emptyState");

const categoryFilter =
    document.getElementById("categoryFilter");

const ratingFilter =
    document.getElementById("ratingFilter");

const searchInput =
    document.getElementById("serviceSearch");

const neighborhoodInput =
    document.getElementById("neighborhoodSearch");

const searchButton =
    document.getElementById("searchButton");

const profileModal =
    document.getElementById("profileModal");

const profileContent =
    document.getElementById("profileContent");

const professionalModal =
    document.getElementById("professionalModal");

const toast =
    document.getElementById("toast");


/* =========================================
   RENDER PROFISSIONAIS
========================================= */

function renderProfessionals(list) {

    grid.innerHTML = "";

    if (list.length === 0) {

        emptyState.style.display = "block";

        return;
    }

    emptyState.style.display = "none";


    list.forEach(professional => {

        const card =
            document.createElement("article");

        card.className =
            "professional-card";


        card.innerHTML = `

            <div class="card-header">

                <div class="avatar avatar-blue">
                    ${professional.initials}
                </div>

                <div>

                    <h3>
                        ${professional.name}
                    </h3>

                    <p>
                        ${professional.profession}
                    </p>

                </div>

            </div>


            <div class="card-location">
                📍 ${professional.location}
            </div>


            <div class="card-rating">

                ★★★★★

                <span>
                    ${professional.rating}
                    (${professional.reviews} avaliações)
                </span>

            </div>


            <div class="card-buttons">

                <button
                    onclick="openProfile(${professional.id})"
                >
                    Ver perfil
                </button>

                <button
                    onclick="requestService('${professional.name}')"
                >
                    Solicitar
                </button>

            </div>

        `;


        grid.appendChild(card);

    });

}


/* =========================================
   FILTROS
========================================= */

function filterProfessionals() {

    const category =
        categoryFilter.value;

    const minRating =
        Number(ratingFilter.value);

    const service =
        searchInput.value
            .trim()
            .toLowerCase();

    const neighborhood =
        neighborhoodInput.value
            .trim()
            .toLowerCase();


    const filtered =
        professionals.filter(professional => {

            const categoryMatch =
                category === "Todos" ||
                professional.category === category;


            const ratingMatch =
                professional.rating >= minRating;


            const serviceMatch =
                service === "" ||
                professional.name.toLowerCase().includes(service) ||
                professional.profession.toLowerCase().includes(service) ||
                professional.category.toLowerCase().includes(service);


            const neighborhoodMatch =
                neighborhood === "" ||
                professional.location.toLowerCase().includes(neighborhood);


            return (
                categoryMatch &&
                ratingMatch &&
                serviceMatch &&
                neighborhoodMatch
            );

        });


    renderProfessionals(filtered);


    document
        .getElementById("profissionais")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================================
   PERFIL
========================================= */

function openProfile(id) {

    const professional =
        professionals.find(
            item => item.id === id
        );


    if (!professional) {
        return;
    }


    profileContent.innerHTML = `

        <div class="modal-header">

            <div
                class="avatar avatar-blue"
                style="margin-bottom:15px;"
            >
                ${professional.initials}
            </div>

            <span class="section-label">
                Profissional verificado ✓
            </span>

            <h2>
                ${professional.name}
            </h2>

            <p>
                ${professional.profession}
            </p>

        </div>


        <div
            style="
                background:#f8fafc;
                padding:18px;
                border-radius:12px;
                margin-bottom:20px;
            "
        >

            <strong>
                ⭐ ${professional.rating}
            </strong>

            <span style="color:#64748b;">
                (${professional.reviews} avaliações)
            </span>

            <br>

            <span style="color:#64748b;">
                📍 ${professional.location}
            </span>

        </div>


        <p style="color:#64748b; margin-bottom:25px;">
            ${professional.description}
        </p>


        <button
            class="btn btn-primary full"
            onclick="requestService('${professional.name}')"
        >
            Solicitar serviço
        </button>

    `;


    profileModal.classList.add("active");

}


/* =========================================
   SOLICITAR SERVIÇO
========================================= */

function requestService(name) {

    profileModal.classList.remove("active");

    showToast(
        `Solicitação enviada para ${name}!`
    );

}


/* =========================================
   MODAL PROFISSIONAL
========================================= */

function openProfessionalModal() {

    professionalModal.classList.add("active");

}


function closeProfessionalModal() {

    professionalModal.classList.remove("active");

}


/* =========================================
   CADASTRO
========================================= */

document
    .getElementById("professionalForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const profession =
            document.getElementById("profession").value;


        closeProfessionalModal();


        this.reset();


        showToast(
            `Perfil de ${name} criado como ${profession}!`
        );

    });


/* =========================================
   EVENTOS DE FILTRO
========================================= */

categoryFilter
    .addEventListener(
        "change",
        filterProfessionals
    );


ratingFilter
    .addEventListener(
        "change",
        filterProfessionals
    );


searchButton
    .addEventListener(
        "click",
        filterProfessionals
    );


/* =========================================
   BUSCA AO PRESSIONAR ENTER
========================================= */

searchInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {
            filterProfessionals();
        }

    }
);


neighborhoodInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {
            filterProfessionals();
        }

    }
);


/* =========================================
   BUSCAS POPULARES
========================================= */

document
    .querySelectorAll("[data-search]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                searchInput.value =
                    button.dataset.search;

                filterProfessionals();

            }
        );

    });


/* =========================================
   CATEGORIAS
========================================= */

document
    .querySelectorAll("[data-category]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.category;

                categoryFilter.value =
                    category;

                filterProfessionals();

            }
        );

    });


/* =========================================
   LIMPAR FILTROS
========================================= */

document
    .getElementById("clearFilter")
    .addEventListener(
        "click",
        () => {

            categoryFilter.value = "Todos";
            ratingFilter.value = "0";

            searchInput.value = "";
            neighborhoodInput.value = "";

            renderProfessionals(
                professionals
            );

        }
    );


/* =========================================
   BOTÕES DE CADASTRO
========================================= */

document
    .getElementById("openProfessional")
    .addEventListener(
        "click",
        openProfessionalModal
    );


document
    .getElementById("openProfessionalCta")
    .addEventListener(
        "click",
        openProfessionalModal
    );


/* =========================================
   FECHAR MODAIS
========================================= */

document
    .getElementById("closeProfile")
    .addEventListener(
        "click",
        () => profileModal.classList.remove("active")
    );


document
    .getElementById("closeProfessional")
    .addEventListener(
        "click",
        closeProfessionalModal
    );


profileModal.addEventListener(
    "click",
    event => {

        if (event.target === profileModal) {
            profileModal.classList.remove("active");
        }

    }
);


professionalModal.addEventListener(
    "click",
    event => {

        if (event.target === professionalModal) {
            professionalModal.classList.remove("active");
        }

    }
);


/* =========================================
   TOAST
========================================= */

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


/* =========================================
   MENU MOBILE
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const menu =
    document.querySelector(".menu");


menuToggle.addEventListener(
    "click",
    () => {

        if (menu.style.display === "flex") {

            menu.style.display = "none";

        } else {

            menu.style.display = "flex";
            menu.style.position = "absolute";
            menu.style.top = "76px";
            menu.style.left = "0";
            menu.style.right = "0";
            menu.style.background = "white";
            menu.style.padding = "20px";
            menu.style.flexDirection = "column";
            menu.style.borderBottom = "1px solid #e2e8f0";

        }

    }
);

/* =========================================
   LIGHT / DARK MODE
========================================= */

const themeToggle =
    document.getElementById("themeToggle");


/*
    Verifica se o usuário já escolheu
    um tema anteriormente.
*/

const savedTheme =
    localStorage.getItem("hub-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-theme");

    themeToggle.textContent = "☀️";

}


/*
    Alternar tema
*/

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle("dark-theme");


        const isDark =
            document.body.classList.contains("dark-theme");


        if (isDark) {

            themeToggle.textContent = "☀️";

            localStorage.setItem(
                "hub-theme",
                "dark"
            );

        } else {

            themeToggle.textContent = "🌙";

            localStorage.setItem(
                "hub-theme",
                "light"
            );

        }

    }
);

const neighborhoodFilter =
    document.getElementById("neighborhoodFilter");

function filterProfessionals() {

    const category =
        categoryFilter.value;

    const neighborhood =
        neighborhoodFilter.value;

    const rating =
        ratingFilter.value;

    const filtered = professionals.filter(professional => {

        const categoryMatch =
            !category ||
            professional.category === category;

        const neighborhoodMatch =
            !neighborhood ||
            professional.neighborhood === neighborhood;

        const ratingMatch =
            !rating ||
            professional.rating >= Number(rating);

        return (
            categoryMatch &&
            neighborhoodMatch &&
            ratingMatch
        );
    });

    renderProfessionals(filtered);
}


/* =========================================
   INICIALIZAÇÃO
========================================= */

renderProfessionals(professionals);
