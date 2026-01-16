import { useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import GroupIcon from '@mui/icons-material/Group'
import FolderIcon from '@mui/icons-material/Folder'
import AssignmentIcon from '@mui/icons-material/Assignment'
import PaidIcon from '@mui/icons-material/Paid'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ScheduleIcon from '@mui/icons-material/Schedule'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

export default function Dashboard() {
  const [role, setRole] = useState<'innovator' | 'committer'>('innovator')

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-brand-dark flex items-center gap-2">
              <DashboardIcon />
              ダッシュボード
            </h1>
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {role === 'innovator' ? (
              <>
                <div className="card p-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <TrendingUpIcon fontSize="small" className="text-brand-teal" />
                      <p className="text-sm text-brand-gray">CF進捗</p>
                    </div>
                    <p className="text-2xl font-bold text-brand-dark">75%</p>
                    <p className="text-sm text-brand-gray">¥750,000</p>
                  </div>
                </div>
                <div className="card p-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <PlayCircleIcon fontSize="small" className="text-brand-green" />
                      <p className="text-sm text-brand-gray">実行進捗</p>
                    </div>
                    <p className="text-2xl font-bold text-brand-dark">50%</p>
                    <p className="text-sm text-brand-gray">2/4完了</p>
                  </div>
                </div>
                <div className="card p-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <AccountBalanceWalletIcon fontSize="small" className="text-yellow-500" />
                      <p className="text-sm text-brand-gray">Bounty Pool</p>
                    </div>
                    <p className="text-2xl font-bold text-brand-dark">¥120,000</p>
                    <p className="text-sm text-brand-gray">/¥300,000</p>
                  </div>
                </div>
                <div className="card p-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <GroupIcon fontSize="small" className="text-brand-dark" />
                      <p className="text-sm text-brand-gray">チーム</p>
                    </div>
                    <p className="text-2xl font-bold text-brand-dark">3/4名</p>
                    <p className="text-sm text-brand-gray">参画中</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="card p-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <FolderIcon fontSize="small" className="text-brand-teal" />
                      <p className="text-sm text-brand-gray">参画PJ</p>
                    </div>
                    <p className="text-2xl font-bold text-brand-dark">2</p>
                    <p className="text-sm text-brand-gray">件</p>
                  </div>
                </div>
                <div className="card p-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <AssignmentIcon fontSize="small" className="text-brand-green" />
                      <p className="text-sm text-brand-gray">担当タスク</p>
                    </div>
                    <p className="text-2xl font-bold text-brand-dark">3</p>
                    <p className="text-sm text-brand-gray">件進行中</p>
                  </div>
                </div>
                <div className="card p-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <PaidIcon fontSize="small" className="text-brand-green" />
                      <p className="text-sm text-brand-gray">獲得報酬</p>
                    </div>
                    <p className="text-2xl font-bold text-brand-green">¥80,000</p>
                    <p className="text-sm text-brand-gray">累計</p>
                  </div>
                </div>
                <div className="card p-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <RocketLaunchIcon fontSize="small" className="text-brand-dark" />
                      <p className="text-sm text-brand-gray">Boarding</p>
                    </div>
                    <p className="text-2xl font-bold text-brand-dark">1</p>
                    <p className="text-sm text-brand-gray">件昇格中</p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Critical Path */}
          {role === 'innovator' && (
            <div className="card p-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2">
                  <AssignmentIcon />
                  クリティカルパス（実行進捗）
                </h2>
                <div className="flex flex-col gap-4">
                  {[
                    { phase: 'Phase 1: 素材調達・試作', status: 'completed', task: '試作品3種類', assignee: '田中太郎(オーナー)' },
                    { phase: 'Phase 2: デザイン確定', status: 'in_progress', task: '最終デザイン', assignee: '佐藤一郎' },
                    { phase: 'Phase 3: 量産準備', status: 'pending', task: '製造ライン確定', assignee: '山田花子' },
                    { phase: 'Phase 4: 配送・CS体制構築', status: 'recruiting', task: '配送フロー', assignee: '未定' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      {item.status === 'completed' ? (
                        <CheckCircleIcon className="text-brand-green flex-shrink-0" fontSize="small" style={{ marginTop: '0.125rem' }} />
                      ) : item.status === 'in_progress' ? (
                        <ScheduleIcon className="text-brand-teal flex-shrink-0" fontSize="small" style={{ marginTop: '0.125rem' }} />
                      ) : item.status === 'recruiting' ? (
                        <PersonAddIcon className="text-yellow-500 flex-shrink-0" fontSize="small" style={{ marginTop: '0.125rem' }} />
                      ) : (
                        <FiberManualRecordIcon className="text-gray-300 flex-shrink-0" fontSize="small" style={{ marginTop: '0.125rem' }} />
                      )}
                      <div className="flex-1">
                        <p className="font-medium text-brand-dark">{item.phase}</p>
                        <p className="text-sm text-brand-gray"><span className="font-medium">タスク:</span> {item.task}</p>
                        <p className="text-sm text-brand-gray"><span className="font-medium">担当:</span> {item.assignee}</p>
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
            </div>
          )}

          {/* Committer View */}
          {role === 'committer' && (
            <div className="card p-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2">
                  <AssignmentIcon />
                  担当タスク
                </h2>
                <div className="flex flex-col gap-4">
                  {[
                    { project: 'エコバッグ製造プロジェクト', task: '最終デザイン', status: '提出済', deadline: '2024/02/01', reward: 50000 },
                    { project: 'エコバッグ製造プロジェクト', task: 'パッケージデザイン', status: '作業中', deadline: '2024/02/10', reward: 30000 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start gap-3">
                        {item.status === '提出済' ? (
                          <CheckCircleIcon className="text-brand-green flex-shrink-0" style={{ marginTop: '0.125rem' }} />
                        ) : (
                          <ScheduleIcon className="text-brand-teal flex-shrink-0" style={{ marginTop: '0.125rem' }} />
                        )}
                        <div className="flex flex-col gap-1">
                          <p className="text-sm text-brand-gray">{item.project}</p>
                          <p className="font-medium text-brand-dark">{item.task}</p>
                          <p className="text-sm text-brand-gray flex items-center gap-1">
                            <ScheduleIcon sx={{ fontSize: 14 }} />
                            期限: {item.deadline}
                          </p>
                        </div>
                      </div>
                      <div className="text-right flex flex-col gap-2">
                        <span className={`badge ${item.status === '提出済' ? 'badge--committer' : 'badge--innovator'}`}>
                          {item.status}
                        </span>
                        <p className="text-lg font-bold text-brand-green flex items-center justify-end gap-1">
                          <PaidIcon fontSize="small" />
                          ¥{item.reward.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
