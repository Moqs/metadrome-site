import React from 'react'
import Link from 'gatsby-link'

const AboutPage = () => (
  <div>
    <div className="block block1">
      <h1>About “Metadrome”</h1>
      <p>Metadrome（メタドローム）は静的サイトジェネレータ「Gatsby」によって生成され、管理者「<Link to="/about/">もくさい（もく）</Link>」によって実験的に運用されています。</p>
      <p>Metadrome is a website generated with a static site generator “Gatsby”, and operated experimentally by owner, Mokusai.</p>
    </div>
    <div className="block block2">
      <h1>About Me</h1>
      <h2>もくさい（もく）・めたどろ</h2>
      <p>アニメや映画を観て音楽を聴きつつときどき海外ゲームをやりながら家のなかで生きています。<br/>口癖は「家から一歩も出たくない」。</p>
    </div>
    <div className="block block3">
      <h4>好きなもの</h4>
      <dl>
        <dt>映画</dt>
          <dd>たとえば「ジュラシック・パーク」「インセプション」「レゴ・ムービー」「たまこラブストーリー」……劇場もたまに行きますが、わりとおウチ映画に偏っています。</dd>
        <dt>アニメ</dt>
          <dd>たとえば「ゆゆ式」「氷菓」「ヤマノススメ」「宇宙よりも遠い場所」「『アイカツ！』シリーズ」……</dd>
        <dt>音楽</dt>
          <dd>ほとんどジャンルを意識しませんが、アニソン以外ではポップ、エレクトロニック、ポスト・ロックを聴くことが多いです。<br/>
          アニソンではフライングドッグのアーティストをよく聴きます。バンドなら「jizue」「Balmorhea」「Kyte」「きのこ帝国」「JYOCHO (ex-宇宙コンビニ)」……</dd>
      </dl>
    </div>
    <div className="block block4">
      <h1>Contact</h1>
      <p>Email: moku@metadro.me</p>
        <Link to="/">Go back to the homepage</Link>
    </div>
  </div>
)

export default AboutPage
