export interface Project {
  id: string
  title: string
  tagline: string
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
