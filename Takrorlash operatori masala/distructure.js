const userProfile = {
  id: 10245,
  name: {
    first: "Ali",
    last: "Karimov",
    getFullName() {
      return `${this.first} ${this.last}`;
    },
  },
  contact: {
    email: "ali.karimov@example.com",
    phone: "+998901234567",
    address: {
      country: "Uzbekistan",
      city: "Tashkent",
      street: "Buyuk Ipak Yo'li",
      zipCode: 100100,
    },
  },
  isActive: true,
  skills: [
    { name: "HTML", level: "advanced" },
    { name: "CSS", level: "advanced" },
    { name: "JavaScript", level: "intermediate" },
    { name: "Node.js", level: "beginner" },
  ],
  projects: [
    {
      title: "Portfolio Website",
      year: 2024,
      technologies: ["HTML", "CSS", "JavaScript"],
      completed: true,
    },
    {
      title: "To-Do App",
      year: 2025,
      technologies: ["React", "Tailwind CSS"],
      completed: false,
    },
  ],
  loginHistory: [
    { date: "2025-05-01", location: "Tashkent" },
    { date: "2025-05-10", location: "Samarkand" },
  ],
  getSkillNames() {
    return this.skills.map((skill) => skill.name).join(", ");
  },
  addSkill(skillName, level) {
    this.skills.push({ name: skillName, level });
  },
};

// Distructure in JavaScript
const {
  id,
  name: { first, last, getFullName },
  contact: {
    email,
    phone,
    address: { country, city, street, zipCode },
  },
  isActive,
  skills: [
    { name: html, level: advanced },
    { name: css, level: advanceds },
    { name: javaScript, level: beginner },
    { name: nodeJs, level: multiLevel },
  ],
  projects: [
    {
      title: titleName,
      year: yearOne,
      technologies: devLanguage,
      completed: complatedTrue,
    },
    {
      title: titleNames,
      year: yearTwo,
      technologies: programLanguage,
      completed: complatedFalse,
    },
  ],
  loginHistory: [
    { date: dateNumber, location: loginLocationOne },
    { date: dateNumbers, location: loginLocationTwo },
  ],
  getSkillNames,
  addSkill,
} = userProfile;