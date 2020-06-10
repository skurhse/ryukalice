---
title: 'テスト自動化概論'
date: '2016-10-11'
category: '読み物'
---

## 依頼内容

下記について話をしてほしい、との依頼を受けたので俺的テスト自動化概論をまとめる。

- なぜテストを書くのか
- どういう時にテストを書くのか
- コーディングとテストの流れ

## 「なぜテストを書くのか」の回答

### テスト自動化の目的

大きく下記の2つの効果がある。

- 開発効率向上
- 変更に強くする

手動テストと同様、品質検査、品質保証、ドキュメント化の側面もあり、単純に手動でやるより自動の方が早くて正確、という自動化ならではのメリットもあるが、開発だけにフォーカスすると、この2点が大きく「なぜテストを書くのか」の回答になる。

### 開発効率向上

Ruby on Rails の web アプリケーション開発においては、テストを書くことによって開発効率の向上になるか否かはフィードバックループが高速になるかがポイントになると思う。

コードを書いた後に、ブラウザーをリロードして必要な操作をして、期待の動きを確かめる、という1度のループに数秒といった時間を毎回必要とし、コードを書く手が止まってしまうのであれば、その内容をコードに起こして Guard でバックグラウンドで自動実行させた方が良い。

また、副次効果として悪いコードはテストを書きにくいので、設計やデザイン上の問題を放置し辛くなるため良いコードが残りやすい(はず)。さらに実装に比べてテストを書く時の方が仕様について考えやすいので、仕様上の欠陥や漏れを未然に発見しやすいというメリットもある。

### 変更に強くする

誰もが知っている通り、仕様は変わる。破壊的な変更は常に起きうる。だからこそ、テストコードが動かなくなって捨てる羽目になる可能性を危惧してテストを書くのは勿体ないと主張する人は多いが、私は逆の考えを持っている。

「テストコードが動かなくなった」ということは、「その仕様変更によって影響した範囲が明確になった」ということであって、むしろそれを検出するためにテストを書く。

当然、テスト書いて実装するスピードと仕様変更の割合次第で破綻する考えではあるがその場合は恐らくマネジメント側かディレクション側でカバーした方が良い。

## 「どういう時にテストを書くのか」の回答

上記の恩恵を受けられるかが基準になる。その他、下記の場合はテストを書くべき報せになる。

### 既存の不具合を改修する場合

既存の不具合はテストコードで不具合を再現させることからスタートし、そのテストをパスすることをゴールにコードを書く。

### リファクタリングを行う場合

リファクタリングを行う場合は十分なテストが書かれているかを確認し、書かれていなかった場合は追記してパスする状態にしてからリファクタリングを開始することによりデグレを防ぐ。

### コンソールでテストが使い捨てられている場合

開発していると、動きを確かめるために pry 等でデバッグしながら実装することがある。例えば、書いた正規表現が期待の文字列にマッチするかを、様々な文字列を食わせて確かめる場合等。その必要があるなら、それは結果をテストコードとして残しておいた方が良い。

## 「コーディングとテストの流れ」の回答

上記の「開発効率向上」を目的としたテストは当然実装の前にテストを書いた方が良い。

逆に「変更に強くする」を目的としたテストは、開発の足を止めることになるので、プロジェクトの状況によってはテストファーストを諦めた方が良い場合もある。後でテストを書いても良いし、テストコーダーに依頼しても良い。

つまり「テスト駆動開発(Test Driven Development)」の名前の通り、Test が Development を Driven してくれるか、をテストファーストか否かの判断基準にすれば良い。

厳密なテスト駆動開発はカバレッジが100%になるはずだ、と主張する人も多いし、ググるとそういった意見が散見されるが、私はカバレッジに拘らず、開発チームが幸せになれるか、に注力して取り組めば良いと思う。