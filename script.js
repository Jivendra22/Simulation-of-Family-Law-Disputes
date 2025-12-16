document.getElementById("caseForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const caseType = document.getElementById("caseType").value;
  const details = document.getElementById("details").value;
  let response = "";

  if (caseType === "divorce") {
    response = `
Applicable Law:
• Hindu Marriage Act, 1955
  - Section 13: Divorce
  - Section 13B: Divorce by Mutual Consent

Legal Interpretation:
Based on the submitted details, the dispute may fall under grounds such as cruelty, desertion, or mutual consent, subject to evidence.

Further Legal Procedure:
1. Filing of divorce petition before the Family Court having jurisdiction.
2. Mandatory counseling and mediation under Section 9 of the Family Courts Act, 1984.
3. Submission of evidence and affidavits by both parties.
4. Final hearing and decree of divorce issued by the court.

Note:
Reconciliation is encouraged before proceeding with litigation.
    `;
  } 
  else if (caseType === "custody") {
    response = `
Applicable Law:
• Guardians and Wards Act, 1890
• Hindu Minority and Guardianship Act, 1956

Legal Interpretation:
Child custody decisions are governed by the principle of the "Welfare of the Child", considering education, emotional stability, and financial capacity of parents.

Further Legal Procedure:
1. Filing custody application in the Family Court.
2. Interim custody orders may be passed during proceedings.
3. Interaction of the child with the court or counselor, if required.
4. Final custody and visitation rights determined by the court.

Note:
Custody is not a parental right but a responsibility decided in the best interest of the child.
    `;
  } 
  else if (caseType === "maintenance") {
    response = `
Applicable Law:
• Section 125, Code of Criminal Procedure (CrPC)
• Hindu Marriage Act, 1955 – Section 24 & 25
• Protection of Women from Domestic Violence Act, 2005

Legal Interpretation:
Maintenance may be granted to a spouse or dependent based on income, employment status, and financial dependency.

Further Legal Procedure:
1. Filing of maintenance petition before the Family Court or Magistrate.
2. Submission of income affidavits by both parties.
3. Interim maintenance order may be passed.
4. Final maintenance amount determined after evidence evaluation.

Note:
Maintenance aims to prevent financial hardship and ensure dignity of life.
    `;
  }

  document.getElementById("outputText").innerText = response;
  document.getElementById("result").classList.remove("hidden");
});
