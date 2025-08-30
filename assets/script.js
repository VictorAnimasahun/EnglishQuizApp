  let current = 1;
  const total = 5;

  function showSection(n) {
    document.querySelectorAll('.section').forEach((sec, i) => {
      sec.classList.remove('active');
      if (i === n-1) sec.classList.add('active');
    });

    // Toggle submit button
    if (n === total) {
      document.getElementById("submitBtn").style.display = "inline-block";
    } else {
      document.getElementById("submitBtn").style.display = "none";
    }
  }

  function nextSection() {
    if (current < total) {
      current++;
      showSection(current);
    }
  }

  function prevSection() {
    if (current > 1) {
      current--;
      showSection(current);
    }
  }

  function submitQuiz() {
    alert("Quiz submitted! Thank you.");
  }

  function toggleScript() {
  const script = document.getElementById("listening-script");
  script.style.display = script.style.display === "none" ? "block" : "none";
}