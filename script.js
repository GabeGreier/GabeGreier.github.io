let interval;

function scrollToProjects() {
    var section = document.getElementById('projects');
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToHeroSection() {
    var section = document.getElementById('hero-section');
    section.scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll(".name").forEach(h1Element => {
    h1Element.addEventListener("mouseover", event => {
        if (event.target.dataset.value) {
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let iteration = 0;
            clearInterval(interval);

            interval = setInterval(() => {
                event.target.innerText = event.target.dataset.value
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return letter;
                        }

                        return alphabet[Math.floor(Math.random() * alphabet.length)];
                    })
                    .join("");

                if (iteration >= event.target.dataset.value.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        } else {
            console.error("data-value attribute is not defined on the target element.");
        }
    });
});

