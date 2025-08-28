document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("birthday-text");
  const clickBtn = document.getElementById("clickBtn");
  const overlay = document.getElementById("letterOverlay");
  const container = document.querySelector(".floating-container");
  const emojis = ["💖", "✨", "🌟", "💗", "🎈", "🎀", "💫", "🌷"];

  // Generate floating emojis
  const createEmoji = () => {
    const emoji = document.createElement("div");
    emoji.classList.add("floating-emoji");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const left = Math.random() * 100;
    emoji.style.left = `${left}%`;

    const size = 0.8 + Math.random() * 0.7;
    emoji.style.fontSize = `${1.5 * size}em`;

    const duration = 10 + Math.random() * 10;
    emoji.style.animationDuration = `${duration}s`;

    container.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, duration * 1000);
  };

  // Initial batch
  for (let i = 0; i < 20; i++) {
    setTimeout(createEmoji, i * 1500);
  }

  // Continuous spawn
  setInterval(createEmoji, 2000);

  // Show letter on click
  clickBtn.addEventListener("click", () => {
    overlay.classList.add("active");
  });

  // Animate "HAPPY BIRTHDAY" letter by letter
  const originalText = text.textContent;
  text.textContent = " ";
  let index = 0;

  const typeText = setInterval(() => {
    if (index < originalText.length) {
      const span = document.createElement("span");
      span.textContent = originalText[index] === " " ? "\u00A0" : originalText[index];
      span.classList.add("letter-show");
      text.appendChild(span);
      index++;
    } else {
      clearInterval(typeText);
      console.log("Animation finished.");
    }
  }, 200);

  

  // Show button after animations
  setTimeout(() => {
    clickBtn.style.opacity = 1;
  }, 8000);

  // Show letter on button click
  clickBtn.addEventListener("click", () => {
    overlay.classList.add("active");
  });
});
