import React, { useRef } from 'react';
import './intro.css';
import { motion, useScroll } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Item: React.FC<{ text: string }> = ({ text }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end', '-50vh'],
  });

  return (
    <motion.p ref={ref} style={{ opacity: scrollYProgress }}>
      {text}
    </motion.p>
  );
};

export default function Intro() {
  return (
    <header className="intro">
      <motion.div
        className="intro__eng"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Item text="Tomorrow is today" />
        <Item text="We come apart" />
        <Item text="We come together" />
        <Item text="Technology is human" />
        <Item text="Human is technology" />
        <Item text="Cities are connected" />
        <Item text="Cities are one" />
        <Item text="Human Tokyo" />
      </motion.div>

      <motion.div
        className="intro__jap jap"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Item text="明日は今日" />
        <Item text="私たちはバラバラになります" />
        <Item text="私たちは一緒に来ます" />
        <Item text="技術は人間" />
        <Item text="人間はテクノロジー" />
        <Item text="都市はつながっている" />
        <Item text="都市はひとつ" />
        <Item text="ヒューマン東京" />
      </motion.div>
    </header>
  );
}
