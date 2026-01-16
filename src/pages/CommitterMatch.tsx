import { Link } from 'react-router-dom'

const opportunities = [
  {
    id: 1,
    project: 'エコバッグ製造プロジェクト',
    role: '物流管理',
    skills: ['物流', '在庫管理'],
    bounty: 50000,
    deadline: '2024/02/28',
  },
  {
    id: 2,
    project: 'エコバッグ製造プロジェクト',
    role: 'カスタマーサポート',
    skills: ['CS', 'コミュニケーション'],
    bounty: 30000,
    deadline: '2024/03/15',
  },
  {
    id: 3,
    project: 'スマート農業IoTデバイス開発',
    role: 'ファームウェアエンジニア',
    skills: ['組み込み', 'C言語', 'IoT'],
    bounty: 80000,
    deadline: '2024/02/20',
  },
]

export default function CommitterMatch() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">スキルを活かして参画</h1>
          <p className="text-gray-600">あなたのスキルを求めているプロジェクトを見つけましょう</p>
        </div>

        {/* Skills Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {['すべて', 'エンジニア', 'デザイン', '製造', '物流', 'マーケ', 'CS'].map((skill) => (
              <button
                key={skill}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  skill === 'すべて'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Opportunities */}
        <div className="space-y-4">
          {opportunities.map((opp) => (
            <div key={opp.id} className="card p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">{opp.project}</p>
                  <h3 className="text-xl font-bold mb-2">{opp.role}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {opp.skills.map((skill) => (
                      <span key={skill} className="badge badge--committer">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">応募期限: {opp.deadline}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">報酬（Bounty）</p>
                  <p className="text-2xl font-bold text-emerald-600">
                    ¥{opp.bounty.toLocaleString()}
                  </p>
                  <Link
                    to={`/projects/pj-001`}
                    className="btn btn--committer mt-4 inline-block"
                  >
                    詳細を見る
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Boarding Track Info */}
        <div className="mt-12 card p-8 bg-emerald-50 border-emerald-200">
          <h2 className="text-xl font-bold mb-4">Boarding Track とは？</h2>
          <p className="text-gray-700 mb-4">
            単発タスクから始めて、継続的なプロジェクトメンバーへ昇格できる仕組みです。
          </p>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mb-2">1</div>
              <p className="text-sm">単発タスク</p>
            </div>
            <div className="text-emerald-500">→</div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-300 rounded-full flex items-center justify-center mb-2">2</div>
              <p className="text-sm">継続参画</p>
            </div>
            <div className="text-emerald-500">→</div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-2">3</div>
              <p className="text-sm">ボーディング</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
