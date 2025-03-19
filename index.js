document.querySelectorAll("details").forEach((detail) => {
    detail.addEventListener("click", () => {
        document.querySelectorAll("details").forEach((otherDetail) => {
            if (otherDetail !== detail) {
                otherDetail.removeAttribute("open");
            }
        });
    });
});