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
        name: "João Silva",
        profession: "Eletricista",
        category: "Eletricista",
        location: "Boa Viagem",
        rating: 4.9,
        reviews: 87,
        initials: "JS",
        description:
            "Instalações elétricas residenciais, manutenção e reparos."
    },

    {
        id: 2,
        name: "Carlos Santos",
        profession: "Pedreiro",
        category: "Pedreiro",
        location: "Casa Amarela",
        rating: 4.8,
        reviews: 64,
        initials: "CS",
        description:
            "Construção, reformas, acabamento e pequenos reparos."
    },

    {
        id: 3,
        name: "Mariana Oliveira",
        profession: "Manicure",
        category: "Manicure",
        location: "Imbiribeira",
        rating: 4.9,
        reviews: 112,
        initials: "MO",
        description:
            "Manicure, pedicure, esmaltação e cuidados com as unhas."
    },

    {
        id: 4,
        name: "Roberto Lima",
        profession: "Mecânico",
        category: "Mecânico",
        location: "Ipsep",
        rating: 4.7,
        reviews: 52,
        initials: "RL",
        description:
            "Manutenção preventiva e corretiva de automóveis."
    },

    {
        id: 5,
        name: "André Ferreira",
        profession: "Pintor",
        category: "Pintor",
        location: "Várzea",
        rating: 4.8,
        reviews: 43,
        initials: "AF",
        description:
            "Pintura residencial, comercial e acabamento."
    },

    {
        id: 6,
        name: "Pedro Costa",
        profession: "Encanador",
        category: "Encanador",
        location: "Madalena",
        rating: 4.6,
        reviews: 31,
        initials: "PC",
        description:
            "Manutenção hidráulica, vazamentos e instalações."
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
   INICIALIZAÇÃO
========================================= */

renderProfessionals(professionals);
