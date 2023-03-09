import React from 'react';
import './intro.css';
import { motion } from 'framer-motion';

// make the items animate in sequence, but reverse the order so they show from the bottom up.
// the items should animate in from the bottom up, but the order of the items should be reversed.

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

export default function Intro() {
  return (
    <header className="intro">
      <motion.div
        className="intro__eng"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={item}>Tomorrow is today</motion.p>
        <motion.p variants={item}>We come apart</motion.p>
        <motion.p variants={item}>We come together</motion.p>
        <motion.p variants={item}>Technology is human</motion.p>
        <motion.p variants={item}>Human is technology</motion.p>
        <motion.p variants={item}>Cities are connected</motion.p>
        <motion.p variants={item}>Cities are one</motion.p>
        <motion.p variants={item}>Human Tokyo</motion.p>
      </motion.div>

      <motion.div
        className="intro__jap jap"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={item}>明日は今日</motion.p>
        <motion.p variants={item}>私たちはバラバラになります</motion.p>
        <motion.p variants={item}>私たちは一緒に来ます</motion.p>
        <motion.p variants={item}>技術は人間</motion.p>
        <motion.p variants={item}>人間はテクノロジー</motion.p>
        <motion.p variants={item}>都市はつながっている</motion.p>
        <motion.p variants={item}>都市はひとつ</motion.p>
        <motion.p variants={item}>ヒューマン東京</motion.p>
      </motion.div>
    </header>
  );
}
