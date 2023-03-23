'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section
    className={`${styles.paddings} relative
    z-10`}
  >
    <motion.div
      className={`${styles.innerWidth} mx-auto
      flex flex-col`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false', amount: 0.25}}
    >
      <TypingText
        title="| People on the world"
        textStyles="text-center"
      />
      <TitleText
        title={
          <>
            Track friends around you and invite
            them to play together in the same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        className="relative mt-[68px] flex
        w-full h-[550px]"
        variants={fadeIn('up', 'tween', 0.3, 1)}
      >
        <img
          className="w-ful h-full object-cover"
          src="/map.png"
          alt="map"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
