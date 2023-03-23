'use client';

import { motion } from 'framer-motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section
    className={`${styles.paddings} relative
    z-10`}
  >
    <motion.div
      className={`${styles.innerWidth} mx-auto
      flex lg:flex-row flex-col gap-8`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false', amount: 0.25}}
    >
      <motion.div
        className="flex-[0.75] flex justify-center
        flex-col"
        variants={fadeIn('right', 'tween', 0.2, 1)}
      >
        <TypingText
          title="| What's new"
        />
        <TitleText
          title={
            <>
              What's new about Metaversus?
            </>
          }
        />
        <div
          className="mt-[48px] flex flex-wrap
          justify-between gap-[24px]"
        >
          {newFeatures.map((feature) => (
            <NewFeatures
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        className={`flex-1 ${styles.flexCenter}`}
        variants={planetVariants('right')}
      >
        <img
          className="w-[9-%] h-[90%] object-contain"
          src="/whats-new.png"
          alt="whats new"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
