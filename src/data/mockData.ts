export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  phase: 'pre_light' | 'light' | 'middle'
  category: string
  coverImage: string
  goalAmount: number
  currentAmount: number
  backerCount: number
  daysLeft: number | null
  executionTeam: Record<string, 'filled' | 'recruiting'>
  committerCount: number
}

export const projects: Project[] = [
  {
    id: 'pj-001',
    title: 'エコバッグ製造プロジェクト',
    tagline: '廃棄素材を使った環境配慮型バッグを製造',
    description: `【プロジェクト概要】
年間約50万トンもの繊維廃棄物が発生する日本。私たちは、アパレル工場で廃棄される端材や規格外生地を回収し、職人の手で丁寧に縫製した高品質なエコバッグを製造します。

【なぜこのプロジェクトを始めたのか】
アパレル業界で10年働く中で、毎日大量の生地が捨てられる現実を目の当たりにしてきました。「この素材、まだ使えるのに…」という思いから、廃棄素材に新しい命を吹き込むプロジェクトを立ち上げました。

【製品の特徴】
・国内アパレル工場から回収した高品質な端材を使用
・熟練職人による丁寧な縫製（耐荷重20kg）
・一点一点異なるユニークなデザイン
・洗濯可能で長く使える耐久性

【資金の使い道】
製造設備費：40万円 / 素材調達費：30万円 / 人件費：20万円 / 広報費：10万円`,
    phase: 'light',
    category: 'ものづくり',
    coverImage: '/images/eco-bag.jpg',
    goalAmount: 1000000,
    currentAmount: 750000,
    backerCount: 45,
    daysLeft: 12,
    executionTeam: {
      manufacturing: 'filled',
      design: 'filled',
      logistics: 'recruiting',
      cs: 'recruiting',
    },
    committerCount: 3,
  },
  {
    id: 'pj-002',
    title: '地域特産品ECプラットフォーム',
    tagline: '地方の隠れた名産品を全国へ届ける',
    description: `【プロジェクト概要】
日本各地には、地元でしか手に入らない絶品の特産品が眠っています。私たちは、そんな「知る人ぞ知る」名産品を生産者から直接消費者へ届けるECプラットフォームを構築します。

【解決したい課題】
地方の小規模生産者は、販路開拓やEC運営のノウハウ不足により、素晴らしい商品を全国に届けることができていません。一方で消費者は、旅先でしか出会えない美味しいものを日常的に楽しみたいと思っています。

【サービスの特徴】
・生産者の出品手数料を業界最安の8%に設定
・商品撮影・説明文作成を運営がサポート
・生産者のストーリーを伝える動画コンテンツ
・定期便サービスで継続的な売上を支援

【これまでの実績】
テスト運用で既に47都道府県から156の生産者が参加。月間流通額は500万円を突破しました。

【資金の使い道】
システム開発費：80万円 / 生産者開拓費：60万円 / マーケティング費：40万円 / 運営費：20万円`,
    phase: 'middle',
    category: 'サービス',
    coverImage: '/images/local-ec.jpg',
    goalAmount: 2000000,
    currentAmount: 2100000,
    backerCount: 89,
    daysLeft: 0,
    executionTeam: {
      engineering: 'filled',
      design: 'filled',
      marketing: 'filled',
      cs: 'filled',
    },
    committerCount: 5,
  },
  {
    id: 'pj-003',
    title: 'スマート農業IoTデバイス開発',
    tagline: '小規模農家向けの低コスト環境モニタリング',
    description: `【プロジェクト概要】
農業のスマート化は大規模農家だけのものではありません。私たちは、個人農家や家庭菜園でも手軽に導入できる、低価格な環境モニタリングIoTデバイスを開発します。

【開発の背景】
既存のスマート農業ソリューションは、導入コストが数十万円〜数百万円と高額で、小規模農家には手が届きません。また、設定が複雑で専門知識が必要なものがほとんどです。

【製品の特徴】
・本体価格9,800円（税込）の低価格を実現
・土壌水分・温度・湿度・照度を24時間計測
・スマートフォンアプリで簡単にデータ確認
・異常値検知時にプッシュ通知でお知らせ
・電池駆動で約1年間メンテナンスフリー

【技術的な強み】
独自開発の省電力チップにより、ソーラーパネル不要で長期間稼働。Wi-Fi/LTE両対応で設置場所を選びません。

【今後のスケジュール】
プロトタイプ完成済み → 量産設計（3ヶ月）→ 金型製作（2ヶ月）→ 量産開始`,
    phase: 'pre_light',
    category: 'テクノロジー',
    coverImage: '/images/smart-agri.jpg',
    goalAmount: 3000000,
    currentAmount: 0,
    backerCount: 0,
    daysLeft: null,
    executionTeam: {
      hardware: 'filled',
      firmware: 'recruiting',
      manufacturing: 'recruiting',
      sales: 'recruiting',
    },
    committerCount: 1,
  },
  {
    id: 'pj-004',
    title: 'オンライン学習プラットフォーム',
    tagline: '誰でもどこでも学べる教育の民主化',
    description: `【プロジェクト概要】
「学びたい」という気持ちがあれば、誰でも質の高い教育にアクセスできる世界を作りたい。私たちは、プロフェッショナルの知識を手頃な価格で届けるオンライン学習プラットフォームを構築します。

【なぜ今、このサービスが必要なのか】
専門スキルを身につけたいけれど、スクールに通う時間やお金がない。そんな人が日本には何百万人もいます。既存のオンライン学習サービスは、月額料金が高かったり、コンテンツの質にばらつきがあったりと、課題が残っています。

【サービスの特徴】
・現役プロフェッショナルによる実践的なカリキュラム
・1講座980円〜の手頃な価格設定
・スマートフォン完全対応で通勤時間も学習時間に
・受講者同士のコミュニティ機能で継続をサポート
・修了証発行で就職・転職にも活用可能

【開講予定のコース】
Webデザイン入門 / プログラミング基礎 / デジタルマーケティング / 動画編集 / 簿記・会計

【資金の使い道】
プラットフォーム開発費：70万円 / コンテンツ制作費：50万円 / 講師謝礼：20万円 / 運営費：10万円`,
    phase: 'light',
    category: 'サービス',
    coverImage: '/images/online-learning.jpg',
    goalAmount: 1500000,
    currentAmount: 900000,
    backerCount: 62,
    daysLeft: 8,
    executionTeam: {
      engineering: 'filled',
      content: 'recruiting',
      marketing: 'recruiting',
      design: 'filled',
    },
    committerCount: 2,
  },
  {
    id: 'pj-005',
    title: 'サステナブルファッションブランド',
    tagline: 'リサイクル素材で作るおしゃれな日常着',
    description: `【プロジェクト概要】
ファッションを楽しみながら、地球環境にも配慮したい。そんな想いを叶えるサステナブルファッションブランド「Re:WEAR」を立ち上げます。

【ファッション業界の課題】
アパレル産業は世界で2番目に環境負荷の高い産業と言われています。日本だけでも年間約48万トンの衣類が廃棄されており、その多くがまだ着られる状態のものです。

【ブランドコンセプト】
・ペットボトルを再生した高機能ポリエステル素材
・オーガニックコットン100%使用のベーシックライン
・シンプルで長く着られるタイムレスなデザイン
・修理サービス付きで「買って終わり」にしない

【第1弾ラインナップ】
ユニセックスTシャツ（5色展開）/ リラックスパンツ / オーバーサイズパーカー / トートバッグ

【環境への取り組み】
・売上の3%を海洋プラスチック回収活動に寄付
・パッケージは全て再生紙・生分解性素材を使用
・カーボンオフセット配送を標準採用

【資金の使い道】
素材調達費：100万円 / 製造費：80万円 / ブランディング費：40万円 / EC構築費：30万円`,
    phase: 'pre_light',
    category: 'ものづくり',
    coverImage: '/images/sustainable-fashion.jpg',
    goalAmount: 2500000,
    currentAmount: 0,
    backerCount: 0,
    daysLeft: null,
    executionTeam: {
      design: 'filled',
      manufacturing: 'recruiting',
      marketing: 'recruiting',
      logistics: 'recruiting',
    },
    committerCount: 1,
  },
  {
    id: 'pj-006',
    title: 'ペット見守りAIカメラ',
    tagline: 'AIが愛するペットの健康を24時間見守る',
    description: `【プロジェクト概要】
お留守番中のペットが心配…そんな飼い主さんの不安を解消する、AI搭載の見守りカメラ「PetWatch AI」を開発しました。単なる監視カメラではなく、AIがペットの行動を分析し、健康状態の変化をいち早くお知らせします。

【開発のきっかけ】
愛犬が留守番中に体調を崩し、帰宅後に慌てて病院へ駆け込んだ経験があります。「もっと早く気づけていれば…」という後悔から、このプロジェクトが始まりました。

【製品の特徴】
・独自AIが食事量・水分摂取・活動量・睡眠パターンを自動記録
・普段と異なる行動を検知すると即座にスマホへ通知
・暗視機能付き高画質カメラ（1080p）
・双方向音声で外出先からも声かけ可能
・獣医師監修の健康レポートを週次で自動生成

【対応ペット】
犬・猫に対応（今後、小動物への対応も予定）

【達成済みマイルストーン】
✓ プロトタイプ開発完了 ✓ ベータテスト（100世帯）完了 ✓ 量産設計完了 → 現在：量産準備中

【リターン】
早割価格 14,800円（一般販売予定価格 19,800円）`,
    phase: 'middle',
    category: 'テクノロジー',
    coverImage: '/images/pet-camera.jpg',
    goalAmount: 1800000,
    currentAmount: 2200000,
    backerCount: 156,
    daysLeft: 0,
    executionTeam: {
      hardware: 'filled',
      software: 'filled',
      manufacturing: 'filled',
      cs: 'filled',
    },
    committerCount: 4,
  },
  {
    id: 'pj-007',
    title: 'コミュニティカフェ開業支援',
    tagline: '地域のつながりを生む居場所づくり',
    description: `【プロジェクト概要】
東京都世田谷区の住宅街に、子どもからお年寄りまで誰もが気軽に立ち寄れるコミュニティカフェ「まちのリビング」をオープンします。

【このカフェが生まれる理由】
核家族化や地域のつながりの希薄化により、孤独を感じる人が増えています。子育て中のママが気軽に相談できる場所、一人暮らしのお年寄りが会話を楽しめる場所、学生が放課後に安心して過ごせる場所。そんな「第三の居場所」を作りたいと思いました。

【カフェの特徴】
・地元農家から仕入れる新鮮野菜を使ったランチ
・コーヒー1杯で何時間でも滞在OK
・子ども連れ歓迎のキッズスペース完備
・地域の方による趣味の教室を定期開催
・高齢者向けスマホ相談会を毎週実施

【運営方針】
・カフェの売上だけでなく、イベントスペース貸出で収益を確保
・地域のボランティアスタッフと協働運営
・食品ロス削減のため、閉店前の割引販売を実施

【オープン予定】
2025年4月（資金調達完了後、3ヶ月で内装工事・準備）

【資金の使い道】
内装工事費：40万円 / 厨房設備費：25万円 / 家具・備品費：10万円 / 運転資金：5万円`,
    phase: 'light',
    category: 'コミュニティ',
    coverImage: '/images/community-cafe.jpg',
    goalAmount: 800000,
    currentAmount: 520000,
    backerCount: 38,
    daysLeft: 20,
    executionTeam: {
      operations: 'filled',
      marketing: 'recruiting',
      design: 'recruiting',
    },
    committerCount: 1,
  },
  {
    id: 'pj-008',
    title: 'フードロス削減マッチングアプリ',
    tagline: '余った食材と必要な人をつなぐ',
    description: `【プロジェクト概要】
日本では年間約523万トンの食品が廃棄されています。一方で、食料支援を必要とする人々も多く存在します。私たちは、飲食店・スーパーで余った食品と、それを必要とする人をマッチングするアプリ「TASUKERU」を開発します。

【フードロス問題の現状】
・コンビニ・スーパーの売れ残り弁当や惣菜
・飲食店の閉店間際に余る料理
・賞味期限が近い在庫商品
これらの多くが、まだ十分食べられる状態で廃棄されています。

【アプリの仕組み】
1. 店舗が余剰食品を出品（通常価格の50〜70%OFF）
2. ユーザーがアプリで近くの出品を検索
3. アプリ内で決済し、指定時間に店舗で受け取り
4. 受け取り完了で店舗に売上が入金

【他サービスとの違い】
・個人間のシェアにも対応（家庭の余剰食材も出品可能）
・子ども食堂やフードバンクへの寄付機能
・食品を受け取るとポイントが貯まり、寄付に変換可能

【開発ロードマップ】
MVP開発（4ヶ月）→ テスト運用（2ヶ月）→ 正式リリース

【資金の使い道】
アプリ開発費：70万円 / サーバー費：20万円 / 加盟店開拓費：20万円 / 広報費：10万円`,
    phase: 'pre_light',
    category: 'サービス',
    coverImage: '/images/food-matching.jpg',
    goalAmount: 1200000,
    currentAmount: 0,
    backerCount: 0,
    daysLeft: null,
    executionTeam: {
      engineering: 'recruiting',
      design: 'recruiting',
      operations: 'filled',
      marketing: 'recruiting',
    },
    committerCount: 1,
  },
]

export interface User {
  id: string
  name: string
  role: 'innovator' | 'committer' | 'investor'
  title: string
  avatar?: string
}

export const users: User[] = [
  {
    id: 'user-001',
    name: '田中太郎',
    role: 'innovator',
    title: 'スタートアップ創業者',
  },
  {
    id: 'user-002',
    name: '山田花子',
    role: 'committer',
    title: '元大手メーカー製造管理',
  },
  {
    id: 'user-003',
    name: '佐藤一郎',
    role: 'committer',
    title: 'フリーランスエンジニア',
  },
  {
    id: 'user-004',
    name: '鈴木商事株式会社',
    role: 'investor',
    title: '事業投資部門',
  },
]
