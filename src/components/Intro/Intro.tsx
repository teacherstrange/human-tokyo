import React, { useEffect, useRef } from 'react';
import * as styles from './Intro.module.scss';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, translateY: -30 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: { ease: 'easeOut', duration: 0.6 },
  },
};

const letters = 'abcdefghijklmnopqrstuvwxyz';
const japaneseLetters =
  'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';

const Item: React.FC<{ text: string; lang: 'en' | 'jap'; delay: number }> = ({
  text,
  lang,
  delay,
}) => {
  const el = useRef(null);

  useEffect(() => {
    const element = el.current as unknown as HTMLElement;

    if (!element) {
      return;
    }

    let iteration = 0;

    setTimeout(() => {
      const interval = setInterval(() => {
        element.innerText = element.innerText
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return (element.dataset.value as string)[index];
            }

            return lang === 'en'
              ? letters[Math.floor(Math.random() * 26)]
              : japaneseLetters[Math.floor(Math.random() * 26)];
          })
          .join('');

        if (iteration >= (element.dataset.value as string).length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 20);
    }, delay);
  }, []);

  return (
    <motion.p data-value={text} variants={itemVariants} ref={el}>
      {text}
    </motion.p>
  );
};

export default function Intro() {
  return (
    <header className={styles.intro}>
      <div className={styles.intro__content}>
        <motion.div
          className={styles.intro__eng}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {[
            'Tomorrow is today',
            'We come apart',
            'We come together',
            'Technology is human',
            'Human is technology',
            'Cities are connected',
            'Cities are one',
            'Human Tokyo',
          ].map((text, index) => (
            <Item key={text} lang="en" text={text} delay={100 * index} />
          ))}
        </motion.div>

        <motion.div
          className={[styles.intro__jap, 'jap'].join(' ')}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {[
            '明日は今日',
            '私たちはバラバラになります',
            '私たちは一緒に来ます',
            '技術は人間',
            '人間はテクノロジー',
            '都市はつながっている',
            '都市はひとつ',
            'ヒューマン東京',
          ].map((text, index) => (
            <Item key={text} lang="jap" text={text} delay={100 * index} />
          ))}
        </motion.div>
      </div>
    </header>
  );
}
