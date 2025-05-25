document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // Reset animasi agar bisa dimainkan ulang
          }
        });
      },
      { threshold: 0.2 }
    );
  
    document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
  });