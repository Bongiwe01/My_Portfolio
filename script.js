document.addEventListener("DOMContentLoaded", () => {
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");
    const backToTopButton = document.getElementById("back-to-top-icon");

    // Init EmailJS with your Public Key
    emailjs.init("boMjjit3BL-OTpXOn");

    // Menu toggle
    menu.onclick = () => {
        menu.classList.toggle("fa-bars");
        menu.classList.toggle("fa-xmark");
        navbar.classList.toggle("active");
    };

    // Close menu on scroll
    window.onscroll = () => {
        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");
        navbar.classList.remove("active");
    };

    // Show/hide back to top button on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Scroll to top
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Contact form submission
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const formObject = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        console.log("Sending form data:", formObject); // Debug log

        emailjs.send("service_ga3wx9i", "template_0omgw9i", formObject)
            .then(() => {
                alert("Message sent successfully!");
                form.reset();
            })
            .catch((error) => {
                alert("There was an error sending the message. Please try again later.");
                console.error("EmailJS error:", error);
            });
    });
});
