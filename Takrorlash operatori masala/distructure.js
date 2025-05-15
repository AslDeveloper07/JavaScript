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
  name,
  contact,
  isActive,
  skills,
  projects,
  loginHistory,
  getSkillNames,
  addSkill,
} = userProfile;
const {address,email,phone} = contact;
console.log(address);
