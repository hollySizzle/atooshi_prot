import { useState } from 'react'

export default function Dashboard() {
  const [role, setRole] = useState<'innovator' | 'committer'>('innovator')

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-brand-dark">ダッシュボード</h1>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as 'innovator' | 'committer')}
            className="px-4 py-2 border border-gray-300 rounded-lg text-brand-dark"
          >
            <option value="innovator">イノベーター</option>
            <option value="committer">コミッター</option>
          </select>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {role === 'innovator' ? (
            <>
              <div className="card p-4">
                <p className="text-sm text-brand-gray">CF進捗</p>
                <p className="text-2xl font-bold text-brand-dark">75%</p>
                <p className="text-sm text-brand-gray">¥750,000</p>
              </div>
              <div className="card p-4">
                <p className="text-sm text-brand-gray">実行進捗</p>
                <p className="text-2xl font-bold text-brand-dark">50%</p>
                <p className="text-sm text-brand-gray">2/4完了</p>
              </div>
              <div className="card p-4">
                <p className="text-sm text-brand-gray">Bounty Pool</p>
                <p className="text-2xl font-bold text-brand-dark">¥120,000</p>
                <p className="text-sm text-brand-gray">/¥300,000</p>
              </div>
              <div className="card p-4">
                <p className="text-sm text-brand-gray">チーム</p>
                <p className="text-2xl font-bold text-brand-dark">3/4名</p>
                <p className="text-sm text-brand-gray">参画中</p>
              </div>
            </>
          ) : (
            <>
              <div className="card p-4">
                <p className="text-sm text-brand-gray">参画PJ</p>
                <p className="text-2xl font-bold text-brand-dark">2</p>
                <p className="text-sm text-brand-gray">件</p>
              </div>
              <div className="card p-4">
                <p className="text-sm text-brand-gray">担当タスク</p>
                <p className="text-2xl font-bold text-brand-dark">3</p>
                <p className="text-sm text-brand-gray">件進行中</p>
              </div>
              <div className="card p-4">
                <p className="text-sm text-brand-gray">獲得報酬</p>
                <p className="text-2xl font-bold text-brand-green">¥80,000</p>
                <p className="text-sm text-brand-gray">累計</p>
              </div>
              <div className="card p-4">
                <p className="text-sm text-brand-gray">Boarding</p>
                <p className="text-2xl font-bold text-brand-dark">1</p>
                <p className="text-sm text-brand-gray">件昇格中</p>
              </div>
            </>
          )}
        </div>

        {/* Critical Path */}
        {role === 'innovator' && (
          <div className="card p-6 mb-8">
            <h2 className="text-xl font-bold text-brand-dark mb-4">クリティカルパス（実行進捗）</h2>
            <div className="space-y-4">
              {[
                { phase: 'Phase 1: 素材調達・試作', status: 'completed', task: '試作品3種類', assignee: '田中太郎(オーナー)' },
                { phase: 'Phase 2: デザイン確定', status: 'in_progress', task: '最終デザイン', assignee: '佐藤一郎' },
                { phase: 'Phase 3: 量産準備', status: 'pending', task: '製造ライン確定', assignee: '山田花子' },
                { phase: 'Phase 4: 配送・CS体制構築', status: 'recruiting', task: '配送フロー', assignee: '未定' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className={`w-3 h-3 mt-1.5 rounded-full ${
                    item.status === 'completed' ? 'bg-brand-green' :
                    item.status === 'in_progress' ? 'bg-brand-teal' :
                    item.status === 'recruiting' ? 'bg-yellow-500' : 'bg-gray-300'
                  }`} />
                  <div className="flex-1">
                    <p className="font-medium text-brand-dark">{item.phase}</p>
                    <p className="text-sm text-brand-gray">├─ {item.task}</p>
                    <p className="text-sm text-brand-gray">│  担当: {item.assignee}</p>
                  </div>
                  <span className={`badge ${
                    item.status === 'completed' ? 'badge--committer' :
                    item.status === 'in_progress' ? 'badge--innovator' :
                    item.status === 'recruiting' ? 'bg-yellow-100 text-yellow-800' : ''
                  }`}>
                    {item.status === 'completed' ? '完了' :
                     item.status === 'in_progress' ? '進行中' :
                     item.status === 'recruiting' ? '募集中' : '未着手'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Committer View */}
        {role === 'committer' && (
          <div className="card p-6">
            <h2 className="text-xl font-bold text-brand-dark mb-4">担当タスク</h2>
            <div className="space-y-4">
              {[
                { project: 'エコバッグ製造プロジェクト', task: '最終デザイン', status: '提出済', deadline: '2024/02/01', reward: 50000 },
                { project: 'エコバッグ製造プロジェクト', task: 'パッケージデザイン', status: '作業中', deadline: '2024/02/10', reward: 30000 },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm text-brand-gray">{item.project}</p>
                    <p className="font-medium text-brand-dark">{item.task}</p>
                    <p className="text-sm text-brand-gray">期限: {item.deadline}</p>
                  </div>
                  <div className="text-right">
                    <span className={`badge ${item.status === '提出済' ? 'badge--committer' : 'badge--innovator'}`}>
                      {item.status}
                    </span>
                    <p className="text-lg font-bold text-brand-green mt-2">¥{item.reward.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
