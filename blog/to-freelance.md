---
title: 'web未経験から2年で独立するまでに拘ってきた3つのこと'
date: '2017-03-28'
category: '読み物'
---

今月末で、2年間勤めた会社を退職することにした。C, C++ の経験はあったが、web については「HTTPって何？GETリクエストって何？」という程度には未経験だった。

退職の挨拶として、在職中こだわってきたことに3つのこと(生産性、時間の使い方、ブランディング)について軽く話したので、ブログにもまとめることにする。正確には完全な独立ではないし、始まるのはこれからなので頓挫するかもしれないが、未経験から2年間で独立を考えるまでに至れたモデルケースとして誰かの参考になれば良いと思う。

## 1. 生産性

ソフトウェアエンジニアがぶち当たる問題の9割は、生産性の暴力で解決する(と思っている)。生産性を上げるために最も効果的なことは、仕事を自動化することだ。自動化する仕事の中で、最も費用対効果が高いのはテストだと思う。まずは、テストを自動化することから始めると良い。

私がお世話になった顧客がテストに関して厳しい方々だったので、半ば強制的にテストを書くことを習慣化されたが、コードレビューやヘルプで他のプロジェクトに呼ばれてみると、ほとんどのプロジェクトでテストが書かれていないのだ。ただ、「テストを書く」という当たり前の習慣が身に付いているだけで、多くのプロジェクトで無双状態になれることに気が付いた。

また、テストを書かない人々を見ていると、テストを書かない理由はテストを書くのに時間がかかるからだということが分かった。時間がかかる理由は、普段からテストを書かないからだ。鶏が先か、卵が先か、のように思えるが、そうではない。テストを書くのに時間がかかるからテストが書けないのではなく、テストを書かないからテストを早く書けるようにならないのだ。

テストを書く練習をすることは、一種の投資になる。最初のうちは、テストを書くのに時間を取られてテストを書く恩恵が受け辛い。ここを投資だと思ってトレーニングする必要がある。投資の余裕がなくなるので残業なんて論外だ。個人的には残業して技術投資するのも論外だが、少なくとも残業で何とかプロジェクトが進んでいるようでは、技術投資は難しいので、残業をしないという最低限のスタートラインには立つ必要がある。そして、1秒でも早くテストを書いた方が開発効率が高くなると言えるようになるまで慣れていく。

例えば、webアプリケーションでCSVファイルからデータベースにインポートする処理を書く場合、普通のエンジニアは、まずテストを書く。対して生産性の低いエンジニアは、まず実装から入り、動作確認は web サーバーを立ち上げて、ブラウザーからファイルを選択して、インポートボタンを押して、データベースの中身を覗いて...という長い作業を繰り返しながら完成度を高めていく。

ここだけで、生産性に数倍の差が生まれる。大げさではなく数倍だ。生産性の低いエンジニアがブラウザーでぽちぽちやっている間に、普通のエンジニアはテストを自動化して、永続化して今後の改修にも強くしているわけだ。

テストの話ばかりになったが、生産性を高めるためのスタートラインには丁度良いと思う。

## 2. 時間の使い方

昔、自己啓発をこじらせた頃に身に付いた感覚だが、自分の時間を増やすことについて強くこだわることにしていた。そして不当に自分の時間を奪われることに抵抗を示すようにしていた。

自分の時間を増やすにあたって、最も効果があったのは在宅勤務だ。在宅勤務であること故の仕事効率の向上は勿論だが、移動時間や、髭剃りや寝癖を直す時間を考えると馬鹿にならない時間が手に入った。先ほどのように生産性を上げることや、無駄な会議や仕事の回避も時間の増加に繋がる。タスク管理の方法から、ポモドーロテクニック等による集中力のコントロール等、時間の増加にあたって改善できることは無数にあるはずだ。

ただ、毎日定時に上がる余裕ができたから、技術的な投資が将来の役に立つから、という理由でハードワークするのは避けてきた。HUNTER × HUNTER のウイング師匠の言葉に「修行と息抜きと睡眠の時間は等しくとるようにね」というものがある。私もこの言葉に従うようにしていて、息抜き(プライベートの趣味等)の時間を多く取るように心がけている。プログラミングは割とテンションに左右されるのでプライベートの充実度は馬鹿にできないし、技術力が上がってもその期間がつまらないんじゃ意味がない。プログラミングそのものが喜びだ、という考えもなくはないが、やはり別の趣味を持った方が人生な幅が広がって良いと思う。

まとまらなくなったが、まあそんな感じだ。

## 3. 社内外へのブランディング
社内に閉じ籠っていると、いつまで経っても自分の名前が有名にならないので、何かしらの方法で人目に付く必要がある。最も簡単なのは、ブログや Qiita に記事を書くことだ。効果が出るかは内容や継続期間等に左右されるが、今すぐ始められるのが魅力だ。

効果が高いのは、社外の人に自分を紹介してもらうことだが、そのためにはまず社内である程度地位を獲得する必要がある。昇格を急ぐという訳ではなく、カンファレンス等の技術イベントに快く送り出してもらえ、それらのスポンサーや顧客に上司から自信を持って紹介してもらえる程度の地位だ。

私も社内政治は苦手な方なので、社内の人たちの技術的な質問や、コードレビュー等に積極的に参加する姿勢を見せるようにして、在宅でもある程度の存在感を示すようにしていた。やりすぎたせいか、従業員代表に抜擢されたりもしてしまったが、社内の信頼は長い目で見ると社外の信頼にも繋がるので無視できない。

私が紹介してもらう立場から紹介する立場になって気付いたのは、技術イベントのスポンサーの多くは、優秀なエンジニアに唾を付けておこうと考えている場合が多いということだ。独立する時に既存の顧客ごと攫うのは倫理的に体裁が良くない場合が多いので (特に Ruby 界隈のように横の繋がりが強くて狭いコミュニティ内で仕事を続ける場合は)、このチャンスを是非活用すると良いと思う。

## まとめ

以上が、この2年間でやってきたことで効果が高かったと感じている、3つのこだわりだ。

1つ目に、生産性にこだわること。まずは仕事の自動化、特にテストの自動化がコスパが良い。2つ目に自分の時間にこだわること。自分の時間を増やすためにできることは無数にあるので、できる限り自分の時間の使い方と向き合うことだ。3つ目に社内外へのブランディングにこだわること。転職や独立によるステップアップを狙うなら、社内政治をうまくやって社外にアピールしてもらって自身の名前を売っていくことだ。

偉そうには書いたが、私が退職に踏み切ることができたのは、未経験でポンコツな私を1年以上に渡って育ててくれた顧客や、これから一緒に仕事をしていく方々と仕事を紹介してくださった方々、在宅勤務や副業や社外活動を就業規則を変えてでも認めてくれた会社や上司、いつも生活を支えてくれる妻、その他にも大勢の人々の支えや、それらに巡り会えた幸運によるものが大きい。これからの社会活動の中で、少しでも恩を返せたらと思う。