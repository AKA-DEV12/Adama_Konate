// Portfolio JavaScript for Adama Konaté

// Data
const awardsData = [
    { title: 'Participation à l\'édition 46 du Concours de droit international Humanitaire Jean Pictet', location: 'Antalya, Türkiye', category: 'international', icon: 'fas fa-globe', year: '2024' },
    { title: 'Participation à l\'édition 2024 du concours de Procès Simulé Charles Rousseau', location: 'Bruxelles, Belgique', category: 'international', icon: 'fas fa-globe', year: '2024' },
    { title: 'Participation à la 11ème édition du concours de DIH organisé par le CICR et le CIDH', location: '', category: 'international', icon: 'fas fa-globe', year: '2024' },
    { title: 'Participation à la 5e édition du Regional Youth Forum', location: '', category: 'international', icon: 'fas fa-users', year: '2024' },
    { title: 'Finaliste GÉNIE IUA 2024', location: '', category: 'national', icon: 'fas fa-star', year: '2024' },
    { title: 'Vainqueur du concours le grand débat des leaders 2024', location: '', category: 'national', icon: 'fas fa-trophy', year: '2024' },
    { title: 'Champion du concours de débat national JCI Côte d\'Ivoire 2024', location: '', category: 'national', icon: 'fas fa-trophy', year: '2024' },
    { title: 'Champion du concours de débat JCI RÉGIONAL ZONE A 2024', location: '', category: 'regional', icon: 'fas fa-trophy', year: '2024' },
    { title: 'Champion du concours de débat de ELUMA 2024 et 2025', location: '', category: 'institutional', icon: 'fas fa-trophy', year: '2024-2025' },
    { title: 'Champion du concours de débat JCI U COCODY 2024', location: '', category: 'local', icon: 'fas fa-trophy', year: '2024' },
    { title: 'Meilleur plaideur 2023 de l\'Institut Universitaire d\'Abidjan', location: '', category: 'institutional', icon: 'fas fa-award', year: '2023' },
    { title: 'Prix du meilleur mentor IUA 2023', location: '', category: 'institutional', icon: 'fas fa-award', year: '2023' },
    { title: 'Vainqueur du concours Crack Macaci Golden Days 2023', location: '', category: 'institutional', icon: 'fas fa-trophy', year: '2023' },
    { title: 'Vice-champion au concours de plaidoirie Job 2023', location: '', category: 'national', icon: 'fas fa-medal', year: '2023' },
    { title: 'Vice-champion au concours de plaidoirie de CEJUMA 2023', location: '', category: 'national', icon: 'fas fa-medal', year: '2023' },
    { title: '3ème meilleur débatteur 2023 de l\'Institut Universitaire d\'Abidjan', location: '', category: 'institutional', icon: 'fas fa-medal', year: '2023' },
    { title: 'Troisième meilleur débatteur 2023 à la JCI', location: '', category: 'national', icon: 'fas fa-medal', year: '2023' },
    { title: 'Demi-finaliste au concours de débat de la flamme linguistique 2023', location: '', category: 'national', icon: 'fas fa-star', year: '2023' },
    { title: 'Quart de finaliste au concours de débat 2023 du CNJCI', location: '', category: 'national', icon: 'fas fa-star', year: '2023' },
    { title: 'Vainqueur du concours Face à la Nation 2022', location: '', category: 'national', icon: 'fas fa-trophy', year: '2022' },
    { title: 'Finaliste du concours Génie en Herbe Crack Ohada 2022', location: '', category: 'regional', icon: 'fas fa-star', year: '2022' },
    { title: 'Finaliste du concours de discours intra-droit 2022', location: '', category: 'institutional', icon: 'fas fa-star', year: '2022' }
];

const universityExperiences = [
    'Sous-délégué d\'amphi en première année (L1)',
    'Délégué d\'amphi de la Licence 2 au Master 2',
    'Initiateur du programme spécial des vacances (PSV)',
    'Club de Plaidoirie et d\'Art Oratoire : chargé de l\'organisation et vice-président',
    'Plume Juvénile : porte-parole, chargé des affaires intérieures puis vice-président',
    'Président de l\'Association des Étudiants Juristes de l\'Institut Universitaire d\'Abidjan',
    'Vice coordinateur de l\'Association des Étudiants de l\'Institut Universitaire d\'Abidjan',
    'Coordinateur de l\'Association des Étudiants de l\'Institut Universitaire d\'Abidjan',
    'Ambassadeur de l\'IUA'
];

const externalExperiences = [
    'Secrétaire général du Conseil National de Côte d\'Ivoire département d\'Adjamé',
    'Délégué de l\'équipe de plaidoyers Abidjan 03',
    'Secrétaire général de l\'association Action Africaines pour l\'Éducation des Enfants et des Jeunes (AAYCE)',
    'Secrétaire général adjoint puis Secrétaire général du réseau des jeunes étudiants actifs de Côte d\'Ivoire (RJEA-CI)',
    'Secrétaire général de l\'association des jeunes d\'Adjamé Latin',
    'Conseiller spécial du président de l\'association Éveil',
    'Directeur des affaires juridiques du réseau des organisations de jeunesse pour la nutrition, l\'alimentation et le développement durable en Côte d\'Ivoire (ROJNAD-CI)',
    'Bénévole à SOCIAL CHANGE FACTORY Côte d\'Ivoire',
    'Chargé des débats à NOFA ACADEMY',
    'Pairs éducateurs en compétences de vie courante à l\'UNICEF'
];

const trainingsData = [
    { title: 'Formation en développement personnel', icon: 'fas fa-award', category: 'Personnel' },
    { title: 'Formation en plaidoirie et art oratoire', icon: 'fas fa-book-open', category: 'Juridique' },
    { title: 'Formation en plaidoyer et mobilisation des ressources des jeunes et adolescents', icon: 'fas fa-award', category: 'Social' },
    { title: 'Certificat de participation à l\'université d\'été 2023 sur la bonne gouvernance', icon: 'fas fa-certificate', category: 'Gouvernance' },
    { title: 'Formation en Word, Excel et PowerPoint', icon: 'fas fa-desktop', category: 'Informatique' },
    { title: 'Formation sur les Outils Colaboratifs', icon: 'fas fa-desktop', category: 'Informatique' }
];

const skillsData = [
    { title: 'Maîtrise de cérémonie', icon: 'fas fa-microphone', category: 'Communication' },
    { title: 'Rédaction de discours', icon: 'fas fa-file-alt', category: 'Écriture' },
    { title: 'Rédaction administrative', icon: 'fas fa-file-alt', category: 'Écriture' },
    { title: 'Rédaction de business plan', icon: 'fas fa-building', category: 'Business' },
    { title: 'Rédaction d\'actes juridiques', icon: 'fas fa-file-alt', category: 'Juridique' },
    { title: 'Création d\'entreprise', icon: 'fas fa-building', category: 'Business' },
    { title: 'Community Manager', icon: 'fas fa-desktop', category: 'Digital' },
    { title: 'Coach en art oratoire et en débat', icon: 'fas fa-comments', category: 'Formation' },
    { title: 'Formateur en Leadership, Entrepreneuriat et gestion de projet', icon: 'fas fa-users', category: 'Formation' }
];

const categoryColors = {
    'Communication': 'gradient-purple',
    'Écriture': 'gradient-blue',
    'Business': 'gradient-green',
    'Juridique': 'gradient-red',
    'Digital': 'gradient-cyan',
    'Formation': 'gradient-yellow',
    'Personnel': 'gradient-purple',
    'Social': 'gradient-green',
    'Gouvernance': 'gradient-yellow',
    'Informatique': 'gradient-gray'
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    initializePortfolio();
});

// Initialize Portfolio
function initializePortfolio() {
    setupNavigation();
    setupScrollAnimations();
    renderAwards();
    renderAssociations();
    renderTrainings();
    renderSkills();
    setupFilters();
    setupTabs();
}

// Navigation Setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);

            // Update active nav link
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            // Close mobile menu
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });

    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
}

// Scroll to Section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.navbar').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight - 20;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Update Active Navigation
function updateActiveNav() {
    const sections = ['hero', 'personal', 'awards', 'associations', 'training', 'skills', 'about'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${section}`) {
                        link.classList.add('active');
                    }
                });
                break;
            }
        }
    }
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.info-card, .award-card, .association-card, .training-card, .skill-card, .timeline-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Render Awards
function renderAwards() {
    const container = document.getElementById('awards-container');
    if (!container) return;

    container.innerHTML = '';

    awardsData.forEach((award, index) => {
        const awardCard = document.createElement('div');
        awardCard.className = `col-lg-4 col-md-6 mb-4 award-item`;
        awardCard.setAttribute('data-category', award.category);

        awardCard.innerHTML = `
            <div class="award-card">
                <div class="award-icon">
                    <i class="${award.icon}"></i>
                </div>
                <div class="award-content">
                    <span class="award-year">${award.year}</span>
                    <h5 class="award-title">${award.title}</h5>
                    ${award.location ? `<p class="award-location">${award.location}</p>` : ''}
                </div>
            </div>
        `;

        container.appendChild(awardCard);
    });
}

// Render Associations
function renderAssociations() {
    const container = document.getElementById('associations-container');
    if (!container) return;

    renderAssociationTab('university');
}

function renderAssociationTab(tab) {
    const container = document.getElementById('associations-container');
    const experiences = tab === 'university' ? universityExperiences : externalExperiences;

    container.innerHTML = '';

    experiences.forEach((experience, index) => {
        const associationCard = document.createElement('div');
        associationCard.className = 'col-md-6 mb-4';

        associationCard.innerHTML = `
            <div class="association-card">
                <div class="association-icon">
                    <i class="fas fa-users"></i>
                </div>
                <p class="association-text">${experience}</p>
                <i class="fas fa-chevron-right association-arrow"></i>
            </div>
        `;

        container.appendChild(associationCard);
    });
}

// Render Trainings
function renderTrainings() {
    const container = document.getElementById('training-container');
    const categoriesContainer = document.getElementById('training-categories');

    if (!container || !categoriesContainer) return;

    // Render training cards
    container.innerHTML = '';
    trainingsData.forEach((training, index) => {
        const trainingCard = document.createElement('div');
        trainingCard.className = 'col-lg-4 col-md-6 mb-4';

        const gradientClass = categoryColors[training.category] || 'gradient-blue';

        trainingCard.innerHTML = `
            <div class="training-card">
                <div class="training-icon ${gradientClass}">
                    <i class="${training.icon}"></i>
                </div>
                <span class="training-category">${training.category}</span>
                <h5 class="training-title">${training.title}</h5>
            </div>
        `;

        container.appendChild(trainingCard);
    });

    // Render categories summary
    const categories = [...new Set(trainingsData.map(t => t.category))];
    categoriesContainer.innerHTML = '';

    categories.forEach(category => {
        const count = trainingsData.filter(t => t.category === category).length;
        const gradientClass = categoryColors[category] || 'gradient-blue';

        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'col-md-2 col-4 mb-3';

        categoryDiv.innerHTML = `
            <div class="text-center">
                <div class="category-circle ${gradientClass}">${count}</div>
                <p class="category-label">${category}</p>
            </div>
        `;

        categoriesContainer.appendChild(categoryDiv);
    });
}

// Render Skills
// function renderSkills() {
//     const container = document.getElementById('skills-container');
//     const categoriesContainer = document.getElementById('skills-categories');

//     if (!container || !categoriesContainer) return;

//     // Render skill categories overview
//     const categories = [...new Set(skillsData.map(s => s.category))];
//     categoriesContainer.innerHTML = '';

//     categories.forEach(category => {
//         const count = skillsData.filter(s => s.category === category).length;
//         const gradientClass = categoryColors[category] || 'gradient-blue';

//         const categoryDiv = document.createElement('div');
//         categoryDiv.className = 'col-lg-2 col-md-4 col-6 mb-4';

//         categoryDiv.innerHTML = `
//             <div class="skill-category">
//                 <div class="category-icon ${gradientClass}">
//                     <i class="fas fa-star"></i>
//                 </div>
//                 <h6 class="category-title">${category}</h6>
//             </div>
//         `;

//         categoriesContainer.appendChild(categoryDiv);
//     });

//     // Render skill cards
//     container.innerHTML = '';
//     skillsData.forEach((skill, index) => {
//         const skillCard = document.createElement('div');
//         skillCard.className = 'col-lg-4 col-md-6 mb-4';

//         const gradientClass = categoryColors[skill.category] || 'gradient-blue';

//         skillCard.innerHTML = `
//             <div class="skill-card">
//                 <div class="skill-icon ${gradientClass}">
//                     <i class="${skill.icon}"></i>
//                 </div>
//                 <span class="skill-category-tag">${skill.category}</span>
//                 <h5 class="skill-title">${skill.title}</h5>
//             </div>
//         `;

//         container.appendChild(skillCard);
//     });
// }
function renderSkills() {
    const container = document.getElementById('skills-container');
    const categoriesContainer = document.getElementById('skills-categories');

    if (!container || !categoriesContainer) return;

    // Associe chaque catégorie à son image PNG
    const categoryImages = {
        "Communication": "media/communication.PNG",
        "Écriture": "media/ecriture.PNG",
        "Business": "media/business.PNG",
        "Juridique": "media/juridique.JPG",
        "Digital": "media/digital.PNG",
        "Formation": "media/formation.JPG",
        // Ajoute ici toutes tes autres catégories
    };

    // Récupère les catégories uniques
    const categories = [...new Set(skillsData.map(s => s.category))];
    categoriesContainer.innerHTML = '';

    categories.forEach(category => {
        const count = skillsData.filter(s => s.category === category).length;
        const gradientClass = 'null';

        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'col-lg-2 col-md-4 col-6 mb-4';

        // Récupère l'image correspondante, sinon image par défaut
        const imageSrc = categoryImages[category] || 'images/default.png';

        categoryDiv.innerHTML = `
            <div class=" text-center">
                <div class="category-icon ${gradientClass} d-flex align-items-center justify-content-center">
                    <img src="${imageSrc}" alt="${category}" class="img-fluid" style="width:50px; height:50px; object-fit:cover;">
                </div>
                <h6 class="category-title mt-2">${category}</h6>
            </div>
        `;

        categoriesContainer.appendChild(categoryDiv);
    });
}

// Setup Filters
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter awards
            filterAwards(filter);
        });
    });
}

// Filter Awards
function filterAwards(category) {
    const awardItems = document.querySelectorAll('.award-item');

    awardItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        const card = item.querySelector('.award-card');

        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
            card.classList.remove('hidden');
        } else {
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
            card.classList.add('hidden');
        }
    });
}

// Setup Tabs
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tab = this.getAttribute('data-tab');

            // Update active button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Render tab content
            renderAssociationTab(tab);
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth scrolling for all internal links
document.addEventListener('click', function (e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        scrollToSection(targetId);
    }
});

// Add loading animation
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// Performance optimization
const debouncedUpdateNav = debounce(updateActiveNav, 10);
window.addEventListener('scroll', debouncedUpdateNav);


/*--Initialize Swiper */
var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});