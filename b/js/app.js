document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll(".minifyImg").forEach((e) => {
      const t = e.getAttribute("data-src");
      if (!t) return;
      const n = new Image();
      (n.src = t),
        (n.onload = () => {
          (e.src = t), e.classList.remove("blur-up");
        }),
        (n.onerror = () => {
          console.warn("Rasm yuklanmadi:", t);
        });
    });
  }, 1e3);
});


(function () {
    const elDays = document.getElementById("days");
    const elHours = document.getElementById("hours");
    const elMinutes = document.getElementById("minutes");
    const elSeconds = document.getElementById("seconds");

    // Start from 2 minutes = 120 seconds
    let remaining = 2 * 60;

    // Fixed parts
    elDays.textContent = "00";
    elHours.textContent = "00";

    function pad(n) {
      return n.toString().padStart(2, "0");
    }

    function tick() {
      if (remaining <= 0) {
        // lock at 00:00
        elMinutes.textContent = "00";
        elSeconds.textContent = "00";
        clearInterval(timerId);
        return;
      }

      remaining--;

      const minutes = Math.floor(remaining / 60);
      const seconds = remaining % 60;

      elMinutes.textContent = pad(minutes);
      elSeconds.textContent = pad(seconds);
    }

    // Initialize visible state to 02:00, then start ticking down
    elMinutes.textContent = "02";
    elSeconds.textContent = "00";

    const timerId = setInterval(tick, 1000);
  })();
