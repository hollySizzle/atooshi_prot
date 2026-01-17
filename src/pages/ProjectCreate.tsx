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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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

          <div className="card p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark flex items-center gap-1">
                  <TitleIcon fontSize="small" className="text-brand-teal" />
                  プロジェクト名
                </label>
                <input
                  type="text"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  placeholder="例：廃棄素材を使った環境配慮型バッグを製造"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark flex items-center gap-1">
                  <CategoryIcon fontSize="small" className="text-brand-teal" />
                  カテゴリ
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent">
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
