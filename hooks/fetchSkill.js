let skills = ["Node", "Javascript", "HTML", "CSS", "React"];
let allSkills = ["Node", "Javascript", "HTML", "CSS", "React"];
let totalSkills = skills.length;
let skillsIndex = 0;

export default function fetchSkill(x) {
  if (x === "reset") {
    skills = allSkills;
  } else {
    const min = 0;
    const max = skills.length;
    let lastSkill = false;
    let oneLeft = false;

    const index = Math.floor(Math.random() * (max - min)) + min;
    let currentSkill = skills[index];

    if (skillsIndex === totalSkills - 1) {
      lastSkill = true;
    }
    if (skillsIndex === totalSkills - 2) {
      oneLeft = true;
    }
    skillsIndex++;

    skills.splice(index, 1);

    return { currentSkill, oneLeft, lastSkill };
  }
}
