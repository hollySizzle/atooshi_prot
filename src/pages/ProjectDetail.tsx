import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/mockData'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id) || projects[0]

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/projects" className="text-blue-500 hover:underline mb-4 inline-block">
          ← プロジェクト一覧に戻る
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="h-64 md:h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-6">
              <span className="text-gray-500">メイン画像</span>
            </div>

            <div className="flex gap-2 mb-4">
              <span className={`badge badge--phase ${project.phase}`}>
                {project.phase === 'light' ? 'Light' : project.phase === 'middle' ? 'Middle' : 'Pre-Light'}
              </span>
              <span className="badge">{project.category}</span>
            </div>

            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-gray-600 mb-6">{project.tagline}</p>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex gap-8">
                {['概要', '実行体制', '資金使途', 'リターン', '活動報告'].map((tab, i) => (
                  <button
                    key={tab}
                    className={`py-3 border-b-2 font-medium text-sm ${
                      i === 0
                        ? 'border-blue-500 text-blue-500'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="prose max-w-none">
              <h2>このプロジェクトについて</h2>
              <p>
                廃棄予定の素材を活用し、環境に配慮したエコバッグを製造・販売するプロジェクトです。
                私たちは環境問題という課題を解決するために、このプロジェクトを立ち上げました。
              </p>
              <h2>解決したい課題</h2>
              <ul>
                <li>年間XX万トンの廃棄素材が生まれている</li>
                <li>環境負荷を減らしながら、実用的な製品を作りたい</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-8">
              <div className="mb-6">
                <div className="progress-bar mb-2">
                  <div
                    className="progress-bar__fill"
                    style={{ width: `${Math.min((project.currentAmount / project.goalAmount) * 100, 100)}%` }}
                  />
                </div>
                <p className="text-3xl font-bold">¥{project.currentAmount.toLocaleString()}</p>
                <p className="text-gray-500">目標 ¥{project.goalAmount.toLocaleString()}</p>
                <div className="flex gap-4 mt-4 text-sm text-gray-600">
                  <span>支援者 {project.backerCount}名</span>
                  <span>残り {project.daysLeft ?? '-'}日</span>
                </div>
              </div>

              <button className="btn btn--primary w-full mb-3">
                支援する
              </button>
              <p className="text-sm text-gray-500 text-center mb-6">¥3,000 から支援可能</p>

              <hr className="mb-6" />

              <button className="btn btn--committer w-full">
                スキルで参画する
              </button>
              <p className="text-sm text-gray-500 text-center mt-2">
                コミッターとして参画
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
