import React from 'react';
import styles from './Hero.module.scss';

interface HeroProps {
  name: string;
  profession: string;
}

const Hero: React.FC<HeroProps> = ({ name, profession }) => {
  return (
    <section className={styles.hero}>
      <h1>{name}</h1>
      <p>{profession}</p>
    </section>
  );
};

export default Hero;