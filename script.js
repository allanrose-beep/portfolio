// ========== SKILLS SECTION FUNCTIONALITY ========== //
const skillData = {
  business: [
    "Product Ownership",
    "Data-driven Decision Making",
    "Stakeholder Management",
    "Process Development",
    "Client Journey",
    "KPI Definition & Tracking",
    "B2B/B2C"
  ],
  tech: [
    "JIRA - Issue tracking",
    "ASANA - Task management",
    "Bolt - AI based Development",
    "Notion - Documentation",
    "Figma - UI design",
    "Tableau - Visualization",
    "N8N - Automation"
  ],
  strategy: [
    "Product Roadmaps",
    "Competitor Analysis",
    "Agile/Scrum",
    "Go-to-Market Strategy",
    "Prioritization Frameworks",
    "Product Lifecycle Management",
    "A/B Testing"
  ],
  design: [
    "Design Thinking",
    "User Experience",
    "User Interface",
    "Wireframes",
    "Prototyping",
    "Usability Testing",
    "Customer Journey Mapping"
  ]
};

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".skill-btn");
  const skillList = document.getElementById("skills-list");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove 'active' from all buttons
      buttons.forEach((b) => b.classList.remove("active"));
      // Add 'active' to the clicked button
      btn.classList.add("active");

      // Get skill type from data attribute
      const selectedSkill = btn.getAttribute("data-skill");

      // Generate list items
      const listItems = skillData[selectedSkill]
        .map((item) => `<li>${item}</li>`)
        .join("");

      // Update the skill list
      skillList.innerHTML = `<ul>${listItems}</ul>`;
    });
  });
});
