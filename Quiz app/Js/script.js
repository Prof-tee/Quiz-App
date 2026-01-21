    var  languages = [
      { name: "JavaScript", clue: "This language is mainly used for web development and runs in the browser." },
      { name: "Python", clue: "This language is popular for data science, AI, and automation." },
      { name: "CSS", clue: "This language is used to style a website" },
      { name: "Java", clue: "This language follows the principle 'Write once, run anywhere'." },
      { name: "C++", clue: "This language is commonly used for game engines and system programming." },
      { name: "HTML", clue: "This language is used to build the structure of a website" },
      { name: "PHP", clue: "This language is widely used for server-side web development." },
    ];

    let currentlanguage = {};
    let score = 0;

    function loadQuestion() {
      var randomIndex = Math.floor(Math.random() * languages.length);
      currentlanguage = languages[randomIndex];
      document.getElementById("clue").textContent = currentlanguage.clue;
      document.getElementById("answer").value = "";
      document.getElementById("feedback").textContent = "";
    }

    function checkAnswer() {
      var userAnswer = document.getElementById("answer").value.trim();
      var feedback = document.getElementById("feedback");

      if (userAnswer === "") {
        feedback.textContent = "Please enter an answer.";
        feedback.style.color = "orange";
        return;
      }

      if (userAnswer.toLowerCase() === currentlanguage.name.toLowerCase()) {
        feedback.textContent = "Correct! 🎉";
        feedback.style.color = "green";
        score++;
        document.getElementById("score").textContent = score;
      } else {
        feedback.textContent = `Wrong! ❌ The correct answer was ${currentlanguage.name}.`;
        feedback.style.color = "red";
      }

      setTimeout(loadQuestion, 2000);
    }

    // Load first question when page loads
    loadQuestion();