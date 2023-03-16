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

const Item: React.FC<{ text: string; lang: 'en' | 'jap' }> = ({
  text,
  lang,
}) => {
  const el = useRef(null);

  useEffect(() => {
    const element = el.current as unknown as HTMLElement;

    if (!element) {
      return;
    }

    let iteration = 0;

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
        <Item lang="en" text="Tomorrow is today" />
        <Item lang="en" text="We come apart" />
        <Item lang="en" text="We come together" />
        <Item lang="en" text="Technology is human" />
        <Item lang="en" text="Human is technology" />
        <Item lang="en" text="Cities are connected" />
        <Item lang="en" text="Cities are one" />
        <Item lang="en" text="Human Tokyo" />
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
        <Item lang="jap" text="明日は今日" />
        <Item lang="jap" text="私たちはバラバラになります" />
        <Item lang="jap" text="私たちは一緒に来ます" />
        <Item lang="jap" text="技術は人間" />
        <Item lang="jap" text="人間はテクノロジー" />
        <Item lang="jap" text="都市はつながっている" />
        <Item lang="jap" text="都市はひとつ" />
        <Item lang="jap" text="ヒューマン東京" />
      </motion.div>
    </header>
  );
}
