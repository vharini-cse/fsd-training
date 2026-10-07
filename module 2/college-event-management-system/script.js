// =========================================
// CAMPUS CONNECT
// COLLEGE EVENT MANAGEMENT SYSTEM
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // EVENT BUTTONS
    // =========================================

    const eventButtons = document.querySelectorAll(".event-button");

    eventButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const eventCard = button.closest(".event-card");

            if (!eventCard) {
                return;
            }

            const eventNameElement = eventCard.querySelector("h3");

            if (!eventNameElement) {
                return;
            }

            const eventName = eventNameElement.textContent.trim();

            const eventSelect = document.getElementById("eventSelect");

            if (eventSelect) {
                eventSelect.value = eventName;
            }

            const registerSection =
                document.getElementById("register");

            if (registerSection) {
                registerSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


    // =========================================
    // REGISTRATION FORM
    // =========================================

    const eventForm =
        document.getElementById("eventForm");

    const successMessage =
        document.getElementById("successMessage");


    if (eventForm) {

        eventForm.addEventListener("submit", async function (event) {

            // Stop the browser from refreshing the page
            event.preventDefault();


            // Get form fields
            const studentName =
                document.getElementById("studentName");

            const studentEmail =
                document.getElementById("studentEmail");

            const eventSelect =
                document.getElementById("eventSelect");


            // Make sure all fields exist
            if (!studentName || !studentEmail || !eventSelect) {

                if (successMessage) {
                    successMessage.textContent =
                        "Unable to process the form.";
                    successMessage.style.color = "#a33a3a";
                }

                return;
            }


            // Get entered values
            const name =
                studentName.value.trim();

            const email =
                studentEmail.value.trim();

            const selectedEvent =
                eventSelect.value;


            // =========================================
            // VALIDATION
            // =========================================

            if (
                name === "" ||
                email === "" ||
                selectedEvent === ""
            ) {

                if (successMessage) {
                    successMessage.textContent =
                        "Please complete all the fields.";
                    successMessage.style.color = "#a33a3a";
                }

                return;
            }


            // Basic email validation
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                if (successMessage) {
                    successMessage.textContent =
                        "Please enter a valid email address.";
                    successMessage.style.color = "#a33a3a";
                }

                return;
            }


            // =========================================
            // SEND DATA TO FLASK BACKEND
            // =========================================

            if (successMessage) {
                successMessage.textContent =
                    "Submitting your registration...";
                successMessage.style.color = "#6f263d";
            }


            try {

                const response = await fetch("/register", {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        studentName: name,
                        studentEmail: email,
                        eventSelect: selectedEvent
                    })

                });


                // Convert Flask response to JSON
                const result = await response.json();


                // =========================================
                // HANDLE FLASK RESPONSE
                // =========================================

                if (response.ok && result.success) {

                    if (successMessage) {

                        successMessage.textContent =
                            result.message;

                        successMessage.style.color =
                            "#39734a";
                    }


                    // Clear the form
                    eventForm.reset();

                } else {

                    if (successMessage) {

                        successMessage.textContent =
                            result.message ||
                            "Registration could not be completed.";

                        successMessage.style.color =
                            "#a33a3a";
                    }

                }

            } catch (error) {

                console.error(
                    "Registration error:",
                    error
                );


                if (successMessage) {

                    successMessage.textContent =
                        "Unable to connect to the server. Please try again.";

                    successMessage.style.color =
                        "#a33a3a";
                }

            }

        });

    }


    // =========================================
    // SMOOTH NAVIGATION
    // =========================================

    const navigationLinks =
        document.querySelectorAll('nav a[href^="#"]');


    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            const targetElement =
                document.querySelector(targetId);


            if (!targetElement) {
                return;
            }


            event.preventDefault();


            targetElement.scrollIntoView({
                behavior: "smooth"
            });

        });

    });

});