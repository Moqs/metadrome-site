import React from 'react'
import Link from 'gatsby-link'

const AboutPage = () => (
  <div 
  >
    <div className="block block1">
      <div className="main">
        <h1>About “Metadrome”</h1>
        <p>Metadrome（メタドローム）は静的サイトジェネレータ「Gatsby」によって生成され、管理者「<Link to="./#Me">もくさい（もく）</Link>」によって実験的に運用されています。</p>
        <p>Metadrome is a website generated with a static site generator “Gatsby”, and operated experimentally by owner, Mokusai.</p>
      </div>
    </div>
    <div id="Me" className="block block2">
      <div className="main">
        <h1>About Me</h1>
        <h2>もくさい（もく）・めたどろ</h2>
        <p>アニメや映画を観て音楽を聴きつつときどき海外ゲームをやりながら家のなかで生きています。<br/>口癖は「家から一歩も出たくない」。</p>
      </div>
    </div>
    <div className="block block3">
      <div className="main">
        <h4>好きなもの</h4>
        <dl>
          <dt>映画</dt>
            <dd>「ジュラシック・パーク」「インセプション」「レゴ・ムービー」「たまこラブストーリー」……</dd>
          <dt>アニメ</dt>
            <dd>「ゆゆ式」「氷菓」「ヤマノススメ」「宇宙よりも遠い場所」「『アイカツ！』シリーズ」……</dd>
          <dt>音楽</dt>
            <dd>アニソン、ポップ、エレクトロニック、ポスト・ロック……<br/>
            「jizue」「Balmorhea」「Kyte」「きのこ帝国」「JYOCHO (ex-宇宙コンビニ)」……</dd>
        </dl>
      </div>
    </div>
    <div className="block block4">
      <div className="main">
        <h1>Contact</h1>
        <p>Email: moku@metadro.me</p>
          <Link to="/">Go back to the homepage</Link>
        </div>
    </div>
  </div>
)

export default AboutPage
