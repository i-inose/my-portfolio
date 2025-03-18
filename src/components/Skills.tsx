import React from 'react';
import styles from './Skills.module.scss';

interface Skill {
  name: string;
}

const skills: Skill[] = [
	{ name: 'Python'},
  { name: 'TypeScript' },
  { name: 'React' },
];

const Skills: React.FC = () => {
  return (
    <section className={styles.skills}>
      <h2>Programming Skill</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;