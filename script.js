const showSkillsButton = document.getElementById('showSkills');
const skillsSection = document.getElementById('skills');

showSkillsButton.addEventListener('click', () => {
    skillsSection.classList.toggle('hidden');
});