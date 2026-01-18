import { useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import GroupIcon from '@mui/icons-material/Group'
import AssignmentIcon from '@mui/icons-material/Assignment'
import PaidIcon from '@mui/icons-material/Paid'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ScheduleIcon from '@mui/icons-material/Schedule'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SavingsIcon from '@mui/icons-material/Savings'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { committerShadowStocks, committerTimeboxSummaries } from '../data/mockData'

export default function Dashboard() {
  const [role, setRole] = useState<'innovator' | 'committer'>('innovator')

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-3xl font-bold text-brand-dark flex items-center gap-2">
              <DashboardIcon />
              ダッシュボード
            </h1>
            <div className="flex items-center gap-3">
              {role === 'innovator' && (
                <button className="btn btn--primary flex items-center gap-2">
                  <AccountBalanceWalletIcon fontSize="small" />
                  調達申請
                </button>
              )}
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as 'innovator' | 'committer')}
                className="px-4 py-2 border border-gray-300 rounded-lg text-brand-dark"
              >
                <option value="innovator">イノベーター</option>
                <option value="committer">コミッター</option>
              </select>
            </div>
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
                      <HourglassEmptyIcon fontSize="small" className="text-brand-teal" />
                      <p className="text-sm text-brand-gray">検収待ち</p>
                    </div>
                    <p className="text-2xl font-bold text-brand-dark">2件</p>
                    <p className="text-sm text-brand-gray">要対応</p>
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
                      <AccessTimeIcon fontSize="small" className="text-brand-teal" />
                      <p className="text-sm text-brand-gray">タイムボックス報酬</p>
                    </div>
                    <p className="text-2xl font-bold text-brand-green">
                      ¥{committerTimeboxSummaries
                        .filter(s => s.committerId === 'user-003')
                        .reduce((sum, s) => sum + s.totalEarned, 0)
                        .toLocaleString()}
                    </p>
                    <p className="text-sm text-brand-gray">獲得済み</p>
                  </div>
                </div>
                <div className="card p-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <SavingsIcon fontSize="small" className="text-brand-green" />
                      <p className="text-sm text-brand-gray">シャドウストック</p>
                    </div>
                    <p className="text-2xl font-bold text-brand-green">
                      ¥{committerShadowStocks
                        .filter(s => s.committerId === 'user-003')
                        .reduce((sum, s) => sum + s.totalEarned, 0)
                        .toLocaleString()}
                    </p>
                    <p className="text-sm text-brand-gray">獲得済み</p>
                  </div>
                </div>
                <div className="card p-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <HourglassEmptyIcon fontSize="small" className="text-brand-teal" />
                      <p className="text-sm text-brand-gray">検収待ち</p>
                    </div>
                    <p className="text-2xl font-bold text-brand-teal">
                      ¥{committerShadowStocks
                        .filter(s => s.committerId === 'user-003')
                        .reduce((sum, s) => sum + s.pending, 0)
                        .toLocaleString()}
                    </p>
                    <p className="text-sm text-brand-gray">報酬予定</p>
                  </div>
                </div>
                <div className="card p-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <RocketLaunchIcon fontSize="small" className="text-brand-dark" />
                      <p className="text-sm text-brand-gray">Boarding</p>
                    </div>
                    <p className="text-2xl font-bold text-brand-dark">Candidate</p>
                    <p className="text-sm text-brand-gray">現在レベル</p>
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
            <>
              {/* 報酬管理へのリンク */}
              <Link to="/rewards" className="card p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-brand-light rounded-lg">
                      <PaidIcon className="text-brand-green" fontSize="large" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-xl font-bold text-brand-dark">報酬管理</h2>
                      <p className="text-sm text-brand-gray">タイムボックス報酬・シャドウストックの詳細を確認</p>
                    </div>
                  </div>
                  <ArrowForwardIcon className="text-brand-gray" />
                </div>
              </Link>

              {/* 担当タスク */}
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
                      <div key={i} className="flex items-center justify-between p-4 bg-brand-light rounded-lg">
                        <div className="flex items-start gap-3">
                          {item.status === '提出済' ? (
                            <CheckCircleIcon className="text-brand-green flex-shrink-0" sx={{ marginTop: '0.125rem' }} />
                          ) : (
                            <ScheduleIcon className="text-brand-teal flex-shrink-0" sx={{ marginTop: '0.125rem' }} />
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
            </>
          )}
        </div>
      </div>
    </div>
  )
}
