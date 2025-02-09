document.addEventListener("DOMContentLoaded", () => {
    const events = document.querySelectorAll(".timeline-event");
    
    events.forEach(event => {
        event.addEventListener("click", () => {
            const details = event.querySelector(".event-details");
            // Toggle visibility of the event details
            details.classList.toggle("show-details");
        });
    });
});
