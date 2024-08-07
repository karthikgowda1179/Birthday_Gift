document.addEventListener("DOMContentLoaded", () => {
    const lines = document.querySelectorAll(".intro span");
    let currentLine = 0;
    let animating = false;

    const animateLine = () => {
        if (currentLine < lines.length) {
            animating = true;
            const line = lines[currentLine];
            line.style.visibility = "visible";
            line.classList.add("typing");
            line.addEventListener("animationend", () => {
                line.style.borderRight = "none";
                line.classList.remove("typing");
                currentLine++;
                animateLine();
            }, { once: true });
        } else {
            animating = false;
        }
    };

    const startAnimation = () => {
        if (!animating) {
            currentLine = 0;
            lines.forEach(line => {
                line.style.visibility = "hidden";
                line.style.borderRight = "0.15rem solid orange";
            });
            animateLine();
        }
    };

    document.querySelector(".intro").addEventListener("mouseover", startAnimation);

    animateLine();
});
