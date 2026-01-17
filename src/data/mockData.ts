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
    coverImage: `${import.meta.env.BASE_URL}images/pj-001.webp`,
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
    coverImage: `${import.meta.env.BASE_URL}images/pj-002.webp`,
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
    coverImage: `${import.meta.env.BASE_URL}images/pj-003.webp`,
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
    coverImage: `${import.meta.env.BASE_URL}images/pj-004.webp`,
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
    coverImage: `${import.meta.env.BASE_URL}images/pj-005.webp`,
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
    coverImage: `${import.meta.env.BASE_URL}images/pj-006.webp`,
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
    coverImage: `${import.meta.env.BASE_URL}images/community-cafe.jpg`,
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
    coverImage: `${import.meta.env.BASE_URL}images/food-matching.jpg`,
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
  skills?: string[]
  bio?: string
}

export const users: User[] = [
  {
    id: 'user-001',
    name: '田中太郎',
    role: 'innovator',
    title: 'スタートアップ創業者',
    bio: '環境問題に関心を持ち、サステナブルビジネスを10年以上経験。前職は大手商社で新規事業開発を担当。',
    skills: ['事業開発', 'プロジェクト管理', '資金調達'],
  },
  {
    id: 'user-002',
    name: '山田花子',
    role: 'committer',
    title: '元大手メーカー製造管理',
    bio: '大手アパレルメーカーで20年間製造管理を担当。品質管理と生産効率化のスペシャリスト。',
    skills: ['製造管理', '品質管理', 'サプライチェーン'],
  },
  {
    id: 'user-003',
    name: '佐藤一郎',
    role: 'committer',
    title: 'フリーランスデザイナー',
    bio: 'プロダクトデザイン歴15年。環境配慮型製品のデザインを得意とする。',
    skills: ['プロダクトデザイン', 'UI/UX', 'ブランディング'],
  },
  {
    id: 'user-004',
    name: '鈴木商事株式会社',
    role: 'investor',
    title: '事業投資部門',
  },
  // pj-002 用
  {
    id: 'user-005',
    name: '高橋誠',
    role: 'innovator',
    title: '地方創生コンサルタント',
    bio: '地方自治体との連携事業を15年以上手がける。全国47都道府県の生産者ネットワークを持つ。',
    skills: ['地方創生', '事業開発', 'ネットワーキング'],
  },
  {
    id: 'user-006',
    name: '中村美咲',
    role: 'committer',
    title: 'フルスタックエンジニア',
    bio: '大手ECサイトで7年間開発リーダーを務めた後、フリーランスに転身。決済・物流システムに精通。',
    skills: ['React', 'Node.js', 'AWS', 'EC開発'],
  },
  {
    id: 'user-007',
    name: '木村健太',
    role: 'committer',
    title: 'Webデザイナー',
    bio: '食品・農業関連のブランディングを専門とするデザイナー。生産者の想いを伝えるデザインが得意。',
    skills: ['Webデザイン', 'ブランディング', '写真撮影'],
  },
  {
    id: 'user-008',
    name: '小林由香',
    role: 'committer',
    title: 'マーケティングマネージャー',
    bio: '食品メーカーでデジタルマーケティングを10年担当。SNS運用とコンテンツマーケティングの専門家。',
    skills: ['デジタルマーケティング', 'SNS運用', 'コンテンツ制作'],
  },
  {
    id: 'user-009',
    name: '渡辺翔',
    role: 'committer',
    title: 'カスタマーサクセス',
    bio: 'SaaS企業でCS部門を立ち上げた経験を持つ。生産者と消費者の橋渡し役として活躍中。',
    skills: ['カスタマーサポート', '業務設計', 'コミュニケーション'],
  },
  // pj-003 用（スマート農業IoT）
  {
    id: 'user-010',
    name: '井上智也',
    role: 'innovator',
    title: '組込みエンジニア',
    bio: '大手電機メーカーでIoT製品開発に従事した後、農業IoTスタートアップを創業。実家は兼業農家。',
    skills: ['組込み開発', 'ハードウェア設計', '農業知識'],
  },
  {
    id: 'user-011',
    name: '松本大輔',
    role: 'committer',
    title: 'ファームウェアエンジニア',
    bio: '省電力デバイスのファームウェア開発が専門。IoTセンサー製品の開発実績多数。',
    skills: ['C/C++', 'RTOS', 'BLE/LoRa'],
  },
  // pj-004 用（オンライン学習）
  {
    id: 'user-012',
    name: '森田恵子',
    role: 'innovator',
    title: '教育事業家',
    bio: '教育系スタートアップを2社創業。「学びの機会を全ての人に」をミッションに活動中。',
    skills: ['教育設計', '事業開発', 'コミュニティ運営'],
  },
  {
    id: 'user-013',
    name: '岡田隆',
    role: 'committer',
    title: 'バックエンドエンジニア',
    bio: '動画配信プラットフォームの開発経験を持つ。スケーラブルなシステム設計が得意。',
    skills: ['Go', 'Kubernetes', '動画配信'],
  },
  {
    id: 'user-014',
    name: '藤井真理',
    role: 'committer',
    title: 'UIデザイナー',
    bio: '教育アプリのUI/UX設計を多数担当。ユーザーの学習継続を促すデザインを追求。',
    skills: ['UI設計', 'Figma', 'ユーザーリサーチ'],
  },
  // pj-005 用（サステナブルファッション）
  {
    id: 'user-015',
    name: '加藤美穂',
    role: 'innovator',
    title: 'ファッションデザイナー',
    bio: '海外ラグジュアリーブランドで10年経験後、サステナブルファッションの道へ。環境配慮素材の知識が豊富。',
    skills: ['ファッションデザイン', 'サステナビリティ', 'ブランド構築'],
  },
  // pj-006 用（ペット見守りAI）
  {
    id: 'user-016',
    name: '吉田康弘',
    role: 'innovator',
    title: 'AIエンジニア',
    bio: '画像認識AIの研究開発に10年従事。愛犬家で、ペットの健康管理に情熱を持つ。',
    skills: ['機械学習', 'コンピュータビジョン', 'Python'],
  },
  {
    id: 'user-017',
    name: '石川純',
    role: 'committer',
    title: 'ハードウェアエンジニア',
    bio: 'カメラモジュールの設計開発が専門。民生品からセキュリティカメラまで幅広い経験。',
    skills: ['カメラ設計', '電子回路', '量産設計'],
  },
  {
    id: 'user-018',
    name: '前田愛',
    role: 'committer',
    title: 'モバイルエンジニア',
    bio: 'iOS/Androidアプリ開発歴8年。ペット関連アプリの開発実績あり。',
    skills: ['Swift', 'Kotlin', 'Flutter'],
  },
  {
    id: 'user-019',
    name: '山口健二',
    role: 'committer',
    title: '製造コンサルタント',
    bio: '家電メーカーで量産立ち上げを20年担当。中国工場との連携に精通。',
    skills: ['製造管理', '品質管理', '海外工場管理'],
  },
  {
    id: 'user-020',
    name: '清水さやか',
    role: 'committer',
    title: 'カスタマーサポート',
    bio: 'ペット用品ECでCS責任者を経験。ペットオーナーの気持ちに寄り添う対応が得意。',
    skills: ['CS運営', 'FAQ設計', 'ユーザー対応'],
  },
  // pj-007 用（コミュニティカフェ）
  {
    id: 'user-021',
    name: '川村洋子',
    role: 'innovator',
    title: 'コミュニティデザイナー',
    bio: '地域活性化NPOで10年活動後、コミュニティカフェ開業を決意。地域の繋がりづくりがライフワーク。',
    skills: ['コミュニティ運営', 'イベント企画', '地域連携'],
  },
  // pj-008 用（フードロス削減アプリ）
  {
    id: 'user-022',
    name: '長谷川健',
    role: 'innovator',
    title: '社会起業家',
    bio: 'フードバンク運営を5年経験。テクノロジーでフードロス問題を解決したいと起業。',
    skills: ['NPO運営', '食品流通', '社会課題解決'],
  },
]

// チームメンバー（プロジェクトごと）
export interface TeamMember {
  userId: string
  projectId: string
  role: 'innovator' | 'committer'
  position: string
  joinedAt: string
  track?: 'Entry' | 'Candidate' | 'Core' | 'Boarding'
}

export const teamMembers: TeamMember[] = [
  // pj-001
  { userId: 'user-001', projectId: 'pj-001', role: 'innovator', position: 'プロジェクトオーナー', joinedAt: '2024-10-01' },
  { userId: 'user-002', projectId: 'pj-001', role: 'committer', position: '製造管理', joinedAt: '2024-11-15', track: 'Core' },
  { userId: 'user-003', projectId: 'pj-001', role: 'committer', position: 'プロダクトデザイン', joinedAt: '2024-12-01', track: 'Candidate' },
  // pj-002
  { userId: 'user-005', projectId: 'pj-002', role: 'innovator', position: 'プロジェクトオーナー', joinedAt: '2024-06-01' },
  { userId: 'user-006', projectId: 'pj-002', role: 'committer', position: 'リードエンジニア', joinedAt: '2024-07-01', track: 'Boarding' },
  { userId: 'user-007', projectId: 'pj-002', role: 'committer', position: 'デザイナー', joinedAt: '2024-07-15', track: 'Core' },
  { userId: 'user-008', projectId: 'pj-002', role: 'committer', position: 'マーケティング', joinedAt: '2024-08-01', track: 'Core' },
  { userId: 'user-009', projectId: 'pj-002', role: 'committer', position: 'カスタマーサクセス', joinedAt: '2024-09-01', track: 'Candidate' },
  // pj-003（スマート農業IoT - pre_light）
  { userId: 'user-010', projectId: 'pj-003', role: 'innovator', position: 'プロジェクトオーナー', joinedAt: '2024-11-01' },
  { userId: 'user-011', projectId: 'pj-003', role: 'committer', position: 'ファームウェア開発', joinedAt: '2024-12-01', track: 'Entry' },
  // pj-004（オンライン学習 - light）
  { userId: 'user-012', projectId: 'pj-004', role: 'innovator', position: 'プロジェクトオーナー', joinedAt: '2024-09-01' },
  { userId: 'user-013', projectId: 'pj-004', role: 'committer', position: 'バックエンド開発', joinedAt: '2024-10-01', track: 'Core' },
  { userId: 'user-014', projectId: 'pj-004', role: 'committer', position: 'UIデザイン', joinedAt: '2024-10-15', track: 'Candidate' },
  // pj-005（サステナブルファッション - pre_light）
  { userId: 'user-015', projectId: 'pj-005', role: 'innovator', position: 'プロジェクトオーナー', joinedAt: '2024-12-01' },
  // pj-006（ペット見守りAI - middle）
  { userId: 'user-016', projectId: 'pj-006', role: 'innovator', position: 'プロジェクトオーナー', joinedAt: '2024-03-01' },
  { userId: 'user-017', projectId: 'pj-006', role: 'committer', position: 'ハードウェア設計', joinedAt: '2024-04-01', track: 'Boarding' },
  { userId: 'user-018', projectId: 'pj-006', role: 'committer', position: 'モバイルアプリ開発', joinedAt: '2024-05-01', track: 'Core' },
  { userId: 'user-019', projectId: 'pj-006', role: 'committer', position: '製造管理', joinedAt: '2024-06-01', track: 'Core' },
  { userId: 'user-020', projectId: 'pj-006', role: 'committer', position: 'カスタマーサポート', joinedAt: '2024-08-01', track: 'Candidate' },
  // pj-007（コミュニティカフェ - light）
  { userId: 'user-021', projectId: 'pj-007', role: 'innovator', position: 'プロジェクトオーナー', joinedAt: '2024-10-01' },
  // pj-008（フードロス削減アプリ - pre_light）
  { userId: 'user-022', projectId: 'pj-008', role: 'innovator', position: 'プロジェクトオーナー', joinedAt: '2024-12-15' },
]

// 活動報告
export interface ActivityReport {
  id: string
  projectId: string
  title: string
  content: string
  createdAt: string
  author: string
}

export const activityReports: ActivityReport[] = [
  // pj-001
  {
    id: 'report-001',
    projectId: 'pj-001',
    title: 'プロジェクト開始のご報告',
    content: 'このたびクラウドファンディングを開始しました。廃棄素材を活用したエコバッグで、環境問題解決に貢献します。',
    createdAt: '2024-12-01',
    author: '田中太郎',
  },
  {
    id: 'report-002',
    projectId: 'pj-001',
    title: '製造パートナーが決定しました',
    content: '熟練職人を擁する国内縫製工場との提携が決まりました。品質にこだわった製品をお届けできます。',
    createdAt: '2024-12-15',
    author: '田中太郎',
  },
  {
    id: 'report-003',
    projectId: 'pj-001',
    title: '目標金額50%達成！',
    content: '皆様のご支援により、目標金額の50%を達成しました。引き続きよろしくお願いいたします。',
    createdAt: '2025-01-05',
    author: '田中太郎',
  },
  {
    id: 'report-004',
    projectId: 'pj-001',
    title: 'サンプル完成のご報告',
    content: '最初のサンプルが完成しました。デザイン・品質ともに想定以上の仕上がりです。',
    createdAt: '2025-01-10',
    author: '山田花子',
  },
  // pj-002
  {
    id: 'report-005',
    projectId: 'pj-002',
    title: 'クラウドファンディング達成のお礼',
    content: '目標金額200万円を達成し、最終的に210万円のご支援をいただきました。89名の支援者の皆様、本当にありがとうございます！',
    createdAt: '2024-09-01',
    author: '高橋誠',
  },
  {
    id: 'report-006',
    projectId: 'pj-002',
    title: 'プラットフォーム開発進捗',
    content: 'ECサイトの基盤が完成しました。決済機能・配送連携のテストも順調に進んでいます。',
    createdAt: '2024-10-15',
    author: '中村美咲',
  },
  {
    id: 'report-007',
    projectId: 'pj-002',
    title: '生産者登録100名突破！',
    content: '全国から156名の生産者様にご登録いただきました。北海道から沖縄まで、各地の名産品が揃ってきています。',
    createdAt: '2024-11-20',
    author: '高橋誠',
  },
  {
    id: 'report-008',
    projectId: 'pj-002',
    title: 'テスト運用開始',
    content: '限定ユーザーへのテスト運用を開始しました。初月で50件の注文を達成。ユーザーからの評価も上々です。',
    createdAt: '2024-12-10',
    author: '渡辺翔',
  },
  {
    id: 'report-009',
    projectId: 'pj-002',
    title: '月間流通額500万円達成',
    content: '正式リリースから2ヶ月で月間流通額500万円を突破しました。リピーターも増えており、安定した成長を見せています。',
    createdAt: '2025-01-05',
    author: '小林由香',
  },
  // pj-003（スマート農業IoT - pre_light）
  {
    id: 'report-010',
    projectId: 'pj-003',
    title: 'プロトタイプ完成のお知らせ',
    content: '土壌水分・温度・湿度・照度を測定できるプロトタイプが完成しました。実家の畑でテスト中です。',
    createdAt: '2024-11-15',
    author: '井上智也',
  },
  {
    id: 'report-011',
    projectId: 'pj-003',
    title: 'ファームウェアエンジニア参画',
    content: '省電力設計のスペシャリストである松本さんがコミッターとして参画してくれました。電池寿命1年を目指します。',
    createdAt: '2024-12-01',
    author: '井上智也',
  },
  // pj-004（オンライン学習 - light）
  {
    id: 'report-012',
    projectId: 'pj-004',
    title: 'クラウドファンディング開始',
    content: '「誰でもどこでも学べる」をコンセプトに、オンライン学習プラットフォームのCFを開始しました。',
    createdAt: '2024-12-01',
    author: '森田恵子',
  },
  {
    id: 'report-013',
    projectId: 'pj-004',
    title: '開発チーム体制が整いました',
    content: 'バックエンドの岡田さん、UIデザインの藤井さんが参画。プラットフォーム開発を本格始動します。',
    createdAt: '2024-12-15',
    author: '森田恵子',
  },
  {
    id: 'report-014',
    projectId: 'pj-004',
    title: '60%達成！講師陣も決定',
    content: '目標金額の60%を達成しました。現役プロによる5コースの講師陣も確定し、カリキュラム作成中です。',
    createdAt: '2025-01-10',
    author: '森田恵子',
  },
  // pj-005（サステナブルファッション - pre_light）
  {
    id: 'report-015',
    projectId: 'pj-005',
    title: 'ブランド「Re:WEAR」始動',
    content: 'サステナブルファッションブランド「Re:WEAR」を立ち上げました。環境配慮とおしゃれを両立します。',
    createdAt: '2024-12-01',
    author: '加藤美穂',
  },
  {
    id: 'report-016',
    projectId: 'pj-005',
    title: '素材調達先との提携',
    content: 'ペットボトル再生繊維メーカー、オーガニックコットン農家との提携が決まりました。',
    createdAt: '2025-01-05',
    author: '加藤美穂',
  },
  // pj-006（ペット見守りAI - middle）
  {
    id: 'report-017',
    projectId: 'pj-006',
    title: 'CF目標達成のお礼',
    content: '目標180万円を大きく超える220万円のご支援をいただきました。156名の支援者の皆様、ありがとうございます！',
    createdAt: '2024-07-01',
    author: '吉田康弘',
  },
  {
    id: 'report-018',
    projectId: 'pj-006',
    title: 'ベータテスト完了',
    content: '100世帯でのベータテストが完了。AIの異常検知精度は95%を達成しました。',
    createdAt: '2024-09-15',
    author: '吉田康弘',
  },
  {
    id: 'report-019',
    projectId: 'pj-006',
    title: '量産開始',
    content: '金型製作が完了し、中国工場での量産を開始しました。来月から順次発送予定です。',
    createdAt: '2024-11-01',
    author: '山口健二',
  },
  {
    id: 'report-020',
    projectId: 'pj-006',
    title: 'リターン発送開始',
    content: '早割支援者様への発送を開始しました。初期ロットは品質チェックも万全です。',
    createdAt: '2024-12-15',
    author: '清水さやか',
  },
  {
    id: 'report-021',
    projectId: 'pj-006',
    title: 'ユーザーレビュー続々',
    content: '「留守中の愛犬の様子がわかって安心」「異常検知で早めに病院に行けた」など、嬉しい声をいただいています。',
    createdAt: '2025-01-10',
    author: '清水さやか',
  },
  // pj-007（コミュニティカフェ - light）
  {
    id: 'report-022',
    projectId: 'pj-007',
    title: '物件が決まりました',
    content: '世田谷区の住宅街に理想的な物件が見つかりました。駅から徒歩5分、路面店です。',
    createdAt: '2024-11-01',
    author: '川村洋子',
  },
  {
    id: 'report-023',
    projectId: 'pj-007',
    title: 'CF開始と地域の反応',
    content: '地域の方々から「こういう場所が欲しかった」という温かい声をいただいています。',
    createdAt: '2024-12-01',
    author: '川村洋子',
  },
  {
    id: 'report-024',
    projectId: 'pj-007',
    title: '65%達成・メニュー開発中',
    content: '地元農家さんと連携し、新鮮野菜を使ったランチメニューを開発中です。',
    createdAt: '2025-01-05',
    author: '川村洋子',
  },
  // pj-008（フードロス削減アプリ - pre_light）
  {
    id: 'report-025',
    projectId: 'pj-008',
    title: 'プロジェクト始動',
    content: 'フードロス問題をテクノロジーで解決するアプリ「TASUKERU」のプロジェクトを開始しました。',
    createdAt: '2024-12-15',
    author: '長谷川健',
  },
  {
    id: 'report-026',
    projectId: 'pj-008',
    title: '加盟店候補との面談開始',
    content: '地域のスーパーや飲食店との面談を開始。すでに10店舗から前向きな回答をいただいています。',
    createdAt: '2025-01-10',
    author: '長谷川健',
  },
]

// プロジェクト進捗（クリティカルパス）
export interface ProjectMilestone {
  id: string
  projectId: string
  phase: number
  title: string
  description: string
  status: 'completed' | 'in_progress' | 'pending'
  targetDate: string
}

export const projectMilestones: ProjectMilestone[] = [
  // pj-001
  { id: 'ms-001', projectId: 'pj-001', phase: 0, title: 'アイデア検証', description: '市場調査・ニーズ確認', status: 'completed', targetDate: '2024-10-31' },
  { id: 'ms-002', projectId: 'pj-001', phase: 1, title: 'チーム組成', description: 'コミッターとのマッチング', status: 'completed', targetDate: '2024-11-30' },
  { id: 'ms-003', projectId: 'pj-001', phase: 2, title: 'CF実施中', description: '資金調達・支援者獲得', status: 'in_progress', targetDate: '2025-01-31' },
  { id: 'ms-004', projectId: 'pj-001', phase: 3, title: '製造開始', description: '量産・品質管理', status: 'pending', targetDate: '2025-03-31' },
  { id: 'ms-005', projectId: 'pj-001', phase: 4, title: 'リターン発送', description: '支援者への製品配送', status: 'pending', targetDate: '2025-04-30' },
  // pj-002
  { id: 'ms-006', projectId: 'pj-002', phase: 0, title: 'アイデア検証', description: '生産者ヒアリング・市場調査', status: 'completed', targetDate: '2024-06-30' },
  { id: 'ms-007', projectId: 'pj-002', phase: 1, title: 'チーム組成', description: 'エンジニア・デザイナー採用', status: 'completed', targetDate: '2024-07-31' },
  { id: 'ms-008', projectId: 'pj-002', phase: 2, title: 'CF達成', description: '目標200万円達成（210万円調達）', status: 'completed', targetDate: '2024-08-31' },
  { id: 'ms-009', projectId: 'pj-002', phase: 3, title: 'プラットフォーム開発', description: 'EC基盤・決済・物流連携', status: 'completed', targetDate: '2024-10-31' },
  { id: 'ms-010', projectId: 'pj-002', phase: 4, title: 'テスト運用', description: '限定ユーザーでの検証', status: 'completed', targetDate: '2024-11-30' },
  { id: 'ms-011', projectId: 'pj-002', phase: 5, title: '正式リリース・運用中', description: '全国展開・生産者拡大', status: 'in_progress', targetDate: '2025-03-31' },
]
