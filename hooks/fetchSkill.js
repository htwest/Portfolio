let skills = ["Node", "Javascript", "HTML", "CSS", "React"];

export default function fetchSkill() {
  const min = 0;
  const max = skills.length;

  const index = Math.floor(Math.random() * (max - min)) + min;
  let skill = skills[index];
  skills.splice(index, 1);

  return skill;
}
