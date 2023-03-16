import React from 'react';
import IconExternal from '../IconExternal';
import * as styles from './Section.module.scss';

type Props = {
  step: 1 | 2 | 3;
};

const Section = ({ step }: Props) => {
  let content;
  switch (step) {
    case 1:
      content = (
        <>
          <h3>Post human exhibition</h3>
          <div>
            <p>
              The Post Human International Standard Poster Exhibition, hosted
              annually by the Faculty of Industrial Engineering and Design and
              the Visual Communication Design Study Program at the Institute of
              Technology Telkom Purwokerto, is a highly anticipated event for
              those interested in exploring the intersection of art, technology,
              and human experience. The event took take place at the Satria IT
              Telkom Purwokerto Gallery and the Hetero Space on Jalan Gatot
              Subroto Purwokerto Banyumas.
            </p>
            <p>
              The pandemic has caused a significant shift in our relationship
              with technology, transforming it from a mere tool to a fundamental
              part of our lives. Virtual communication through screens and
              virtual travel experiences have become essential in our daily
              routines, forcing us to adopt technology at an unprecedented pace.
              Responding to these changes, the Post Human International Standard
              Poster Exhibition explores the aftermath of the pandemic and its
              impact on society, with a focus on post-humanism.
            </p>
            <p>
              Post-humanism, a term originating from science fiction, is the
              idea of merging human existence with the technology we have
              created.
            </p>
          </div>
          <div className="jap">
            <p>
              この概念は、将来の可能性を垣間見せ、テクノロジーと人類の関係について重要な問題を提起します。
              この展覧会には、中国、フランス、香港、日本、メキシコ、スウェーデン、インドネシアを含む
              20 か国から 160 人のアーティストが集まり、その全員がポスト
              ヒューマニティの解釈を紹介するために選ばれました。
              この芸術は、ポスト
              ヒューマニズムという新たな分野に、示唆に富み、洞察に満ちたレンズを提供します。
            </p>
            <p>
              招待されたアーティストの中で、Gustav Nordebrink はポスト
              ヒューマンの未来に対する彼の見解を発表し、この急速に進化する分野について魅力的な視点を提供しました。
              展示会で展示された多様で示唆に富むアートを通じて、参加者はこの新たな研究分野への洞察を得ることができ、ポストヒューマニズムが社会全体に与える影響について熟考することができました。
              このイベントには、学生、アーティスト、学者、さまざまな業界の専門家など、世界中から参加者が集まりました。
            </p>
            <p>
              この展覧会は、アーティストが作品を展示するためのプラットフォームを提供し、参加者はテクノロジーが社会に与える影響について対話することができました。
            </p>
          </div>
          <div>
            <a href="#">
              Visit exhibition <IconExternal />
            </a>
          </div>
        </>
      );
      break;
    case 2:
      content = <div></div>;
      break;
    case 3:
      content = <h3>© 2023</h3>;
  }

  return <section className={styles.root}>{content}</section>;
};

export default Section;
