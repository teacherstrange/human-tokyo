import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import IconExternal from '../IconExternal';
import Wordmark from '../Wordmark';
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
            <StaticImage src="./ht-press-1.jpg" alt="" placeholder="blurred" />
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
            <StaticImage src="./ht-press-2.jpg" alt="" placeholder="blurred" />
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
            <StaticImage src="./ht-press-3.jpg" alt="" placeholder="blurred" />
            <a href="#">
              Visit exhibition <IconExternal />
            </a>
          </div>
        </>
      );
      break;
    case 2:
      content = (
        <>
          <h3>
            <Wordmark />
          </h3>
          <div>
            <p>
              Human Tokyo is a forward-looking initiative that sees a future in
              which technology and humanity are inseparable. As technology
              advances, it will play a larger role in shaping our lives and the
              world around us. The potential for technology to improve our lives
              is enormous. Integrating technology into our daily lives could
              lead to a technologically advanced metropolis where humans and
              cities merge, erasing the divide between technology and humanity.
              This raises important questions about the relationship between
              technology and humanity, and how it will impact our daily lives
              and sense of self.
            </p>
            <p>
              The exhibition of the Human Tokyo poster marks the launch of
              ID—C’s first experimental project, a collaborative space for
              individuals from diverse professional backgrounds to come together
              and create something new and innovative under the umbrella of the
              "Human Tokyo" theme. This project represents our vision for a
              future where technology and humanity are more closely intertwined.
            </p>
          </div>
          <div className="jap">
            <p>
              Human Tokyo
              は、テクノロジーと人間性が切り離せない未来を見据えた前向きな取り組みです。
              テクノロジーが進歩するにつれて、私たちの生活や私たちの周りの世界を形作る上で、テクノロジーが果たす役割はますます大きくなります。
              テクノロジーが私たちの生活を改善する可能性は計り知れません。
              テクノロジーを私たちの日常生活に統合することで、人間と都市が融合し、テクノロジーと人類の間の隔たりがなくなる、技術的に高度な大都市につながる可能性があります。
              これは、テクノロジーと人類の関係、そしてそれが私たちの日常生活や自己意識にどのように影響するかについての重要な問題を提起します.
              Human Tokyo ポスターの展示は、ID-C
              の最初の実験的プロジェクトの開始を記念するものです。これは、さまざまな専門的背景を持つ個人が集まり、「Human
              Tokyo」のテーマの下で新しい革新的なものを作成するためのコラボレーション
              スペースです。
              このプロジェクトは、テクノロジーと人類がより密接に絡み合う未来への私たちのビジョンを表しています。
            </p>
          </div>
        </>
      );
      break;
    case 3:
      content = <h3>© 2023</h3>;
  }

  return <section className={styles.root}>{content}</section>;
};

export default Section;
