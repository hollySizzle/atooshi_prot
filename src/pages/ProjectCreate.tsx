import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateIcon from '@mui/icons-material/Create'
import TitleIcon from '@mui/icons-material/Title'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import CategoryIcon from '@mui/icons-material/Category'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import DescriptionIcon from '@mui/icons-material/Description'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function ProjectCreate() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('projectCreate_basic')
    return saved ? JSON.parse(saved) : {
      name: '',
      catchphrase: '',
      category: 'ものづくり',
      targetAmount: '',
      description: ''
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev: typeof formData) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem('projectCreate_basic', JSON.stringify(formData))
    navigate('/projects/create/team')
  }

  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="page-header">
            <h1 className="page-header__title flex items-center gap-2">
              <CreateIcon />
              プロジェクトを作成
            </h1>
            <p className="page-header__description">あなたのアイデアを実現するプロジェクトを始めましょう</p>
          </div>

          {/* ステップインジケーター */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center text-sm font-bold">1</div>
              <span className="text-sm font-medium text-brand-dark">基本情報</span>
            </div>
            <div className="w-8 h-px bg-brand-gray/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-gray/30 text-brand-gray flex items-center justify-center text-sm font-bold">2</div>
              <span className="text-sm text-brand-gray">実行体制</span>
            </div>
            <div className="w-8 h-px bg-brand-gray/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-gray/30 text-brand-gray flex items-center justify-center text-sm font-bold">3</div>
              <span className="text-sm text-brand-gray">確認</span>
            </div>
          </div>

          <div className="card p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark flex items-center gap-1">
                  <TitleIcon fontSize="small" className="text-brand-teal" />
                  プロジェクト名
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  placeholder="例：エコバッグ製造プロジェクト"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark flex items-center gap-1">
                  <FormatQuoteIcon fontSize="small" className="text-brand-teal" />
                  キャッチコピー
                </label>
                <input
                  type="text"
                  name="catchphrase"
                  value={formData.catchphrase}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  placeholder="例：廃棄素材を使った環境配慮型バッグを製造"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark flex items-center gap-1">
                  <CategoryIcon fontSize="small" className="text-brand-teal" />
                  カテゴリ
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                >
                  <option>ものづくり</option>
                  <option>テクノロジー</option>
                  <option>食品</option>
                  <option>サービス</option>
                  <option>その他</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark flex items-center gap-1">
                  <AttachMoneyIcon fontSize="small" className="text-brand-teal" />
                  目標金額
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-2 text-brand-gray">¥</span>
                  <input
                    type="number"
                    name="targetAmount"
                    value={formData.targetAmount}
                    onChange={handleChange}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="1,000,000"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark flex items-center gap-1">
                  <DescriptionIcon fontSize="small" className="text-brand-teal" />
                  プロジェクト概要
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  placeholder="プロジェクトの詳細を記入してください..."
                />
              </div>

              <div className="pt-4">
                <button type="submit" className="btn btn--primary w-full flex items-center justify-center gap-2">
                  次へ：実行体制を設定
                  <ArrowForwardIcon fontSize="small" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
