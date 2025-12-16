function getLawInfo() {
  const law = document.getElementById("lawType").value;
  const text = document.getElementById("userText").value.toLowerCase();
  const output = document.getElementById("output");
  const resultCard = document.getElementById("resultCard");

  output.textContent = "Analyzing input...";
  resultCard.classList.remove("hidden");

  const hasConflict =
    text.includes("fight") ||
    text.includes("violence") ||
    text.includes("abuse") ||
    text.includes("separation") ||
    text.includes("not living together");

  const isHappy =
    text.includes("happy") ||
    text.includes("no problem") ||
    text.includes("good relationship");

  if (law === "divorce") {

    if (isHappy) {
      output.textContent =
        "Analysis Result:\n" +
        "No legal dispute detected.\n\n" +
        "Legal Note:\n" +
        "Indian family law encourages preservation of marriage.\n\n" +
        "Suggestion:\n" +
        "No legal action required at this stage.";
    }
    else if (hasConflict) {
      output.textContent =
        "Applicable Law:\n" +
        "Hindu Marriage Act, 1955\n" +
        "Section 13 – Grounds for Divorce\n\n" +
        "Procedure:\n" +
        "1. File petition before Family Court\n" +
        "2. Mandatory mediation and counseling\n" +
        "3. Evidence and hearings\n" +
        "4. Final decree by court";
    }
    else {
      output.textContent =
        "Insufficient information.\n\n" +
        "Please describe the issue clearly for evaluation.";
    }
  }

  else if (law === "custody") {
    output.textContent =
      "Applicable Law:\n" +
      "Guardians and Wards Act, 1890\n\n" +
      "Key Principle:\n" +
      "Welfare of the child is paramount.\n\n" +
      "Procedure:\n" +
      "Family Court evaluates custody after assessment.";
  }

  else if (law === "maintenance") {
    output.textContent =
      "Applicable Law:\n" +
      "Section 125, CrPC\n\n" +
      "Purpose:\n" +
      "Prevent financial hardship of dependents.\n\n" +
      "Procedure:\n" +
      "Maintenance petition before the court.";
  }
}
