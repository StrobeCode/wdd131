document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");
    const aboutImg = document.querySelector(".about-img");

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    const projects = [
        {
            title: "Scheme Interpreter",
            year: 2023,
            category: "school",
            image: "img/scheme-lambda.png",
            alt: "Scheme Language Logo",
            link: "https://github.com/StrobeCode/scheme-interpreter",
            description: "A Python-based interpreter project focused on parsing and evaluating Scheme expressions."
        },
        {
            title: "Ants Tower Defense",
            year: 2023,
            category: "school",
            image: "img/ants.png",
            alt: "Ants Vs SomeBees default screen",
            link: "https://github.com/StrobeCode/ants-td",
            description: "A tower defense game project built as part of coursework."
        },
        {
            title: "AWS Hosted Portfolio",
            year: 2024,
            category: "web",
            image: "img/aws.png",
            alt: "AWS logo",
            link: "https://github.com/StrobeCode",
            description: "A personal portfolio project hosted online and designed to showcase my skills and experience."
        },
        {
            title: "Dynamic Frequency Harmonizer",
            year: 2024,
            category: "personal",
            image: "img/music.png",
            alt: "Music icon",
            link: "https://github.com/StrobeCode/dynamic-frequency-harmonizer",
            description: "A personal programming project involving audio and frequency-based processing."
        }
    ];

    const projectList = document.querySelector("#project-list");
    const filterButtons = document.querySelectorAll(".filter-btn");

    function displayProjects(projectArray) {
        projectList.innerHTML = "";

        projectArray.forEach(project => {
            const card = document.createElement("div");
            card.classList.add("project-card");

            card.innerHTML = `
                <a href="${project.link}" target="_blank" rel="noopener noreferrer">
                    <img src="${project.image}" alt="${project.alt}" class="project-image">
                </a>
                <h3>${project.title}</h3>
                <p class="project-year">${project.year}</p>
                <p class="project-description">${project.description}</p>
            `;

            projectList.appendChild(card);
        });
    }

    function filterProjects(category) {
        if (category === "all") {
            displayProjects(projects);
        } else {
            const filteredProjects = projects.filter(project => project.category === category);
            displayProjects(filteredProjects);
        }
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active-filter"));
            button.classList.add("active-filter");

            const category = button.dataset.category;
            filterProjects(category);
        });
    });

    displayProjects(projects);

    const aboutText = document.querySelector("#about-text");
    const readMoreBtn = document.querySelector("#read-more-btn");

    const shortText = "I am a Computer Science student at Brigham Young University with a strong passion for software development and engineering.";
    const fullText = "I am a Computer Science student at Brigham Young University with a strong passion for software development and engineering. My goal is to combine my academic knowledge and technical skills with practical, real-world applications, focusing on software engineering, mobile app development, and system design. I am eager to engage in innovative projects where I can collaborate with diverse teams, learn from experienced professionals, and contribute to meaningful technological advancements. I am open to opportunities that allow me to apply my skills in problem-solving, coding, and development while continuing to grow and evolve as a professional in the tech industry.";

    readMoreBtn.addEventListener("click", event => {
        event.preventDefault();

        if (aboutText.textContent.trim() === shortText) {
            aboutText.textContent = fullText;
            readMoreBtn.textContent = "Read less";
            aboutImg.style.display = "none";
            
        } else {
            aboutText.textContent = shortText;
            readMoreBtn.textContent = "Read more";
            aboutImg.style.display = "block";
        }
    });

    const themeToggle = document.querySelector("#theme-toggle");

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "Light Mode";
        } else {
            themeToggle.textContent = "Dark Mode";
        }
    });
});