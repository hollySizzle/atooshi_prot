import PaidIcon from '@mui/icons-material/Paid'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SavingsIcon from '@mui/icons-material/Savings'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'
import ScheduleIcon from '@mui/icons-material/Schedule'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link } from 'react-router-dom'
import {
  timeboxRewards,
  shadowStockRewards,
  committerShadowStocks,
  committerTimeboxSummaries,
} from '../data/mockData'

// 現在のコミッター（デモ用: user-003 佐藤一郎）
const CURRENT_COMMITTER_ID = 'user-003'

export default function CommitterRewards() {
  // タイムボックス報酬データ
  const myTimeboxRewards = timeboxRewards.filter(r => r.committerId === CURRENT_COMMITTER_ID)
  const myTimeboxSummaries = committerTimeboxSummaries.filter(s => s.committerId === CURRENT_COMMITTER_ID)
  const totalTimeboxEarned = myTimeboxSummaries.reduce((sum, s) => sum + s.totalEarned, 0)
  const totalTimeboxHours = myTimeboxSummaries.reduce((sum, s) => sum + s.totalHours, 0)

  // シャドウストック報酬データ
  const myShadowStockRewards = shadowStockRewards.filter(r => r.committerId === CURRENT_COMMITTER_ID)
  const myShadowStocks = committerShadowStocks.filter(s => s.committerId === CURRENT_COMMITTER_ID)
  const totalShadowStockEarned = myShadowStocks.reduce((sum, s) => sum + s.totalEarned, 0)
  const totalShadowStockPending = myShadowStocks.reduce((sum, s) => sum + s.pending, 0)
  const totalShadowStockInProgress = myShadowStocks.reduce((sum, s) => sum + s.inProgress, 0)

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {/* ヘッダー */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="text-brand-gray hover:text-brand-dark transition-colors">
                <ArrowBackIcon />
              </Link>
              <h1 className="text-3xl font-bold text-brand-dark flex items-center gap-2">
                <PaidIcon />
                報酬管理
              </h1>
            </div>
          </div>

          {/* サマリーカード */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card p-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <AccessTimeIcon fontSize="small" className="text-brand-teal" />
                  <p className="text-sm text-brand-gray">タイムボックス報酬</p>
                </div>
                <p className="text-2xl font-bold text-brand-green">¥{totalTimeboxEarned.toLocaleString()}</p>
                <p className="text-sm text-brand-gray">{totalTimeboxHours}時間完了</p>
              </div>
            </div>
            <div className="card p-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <SavingsIcon fontSize="small" className="text-brand-teal" />
                  <p className="text-sm text-brand-gray">シャドウストック獲得</p>
                </div>
                <p className="text-2xl font-bold text-brand-green">¥{totalShadowStockEarned.toLocaleString()}</p>
                <p className="text-sm text-brand-gray">Bounty Poolより</p>
              </div>
            </div>
            <div className="card p-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <HourglassEmptyIcon fontSize="small" className="text-brand-teal" />
                  <p className="text-sm text-brand-gray">検収待ち</p>
                </div>
                <p className="text-2xl font-bold text-brand-teal">¥{totalShadowStockPending.toLocaleString()}</p>
                <p className="text-sm text-brand-gray">報酬予定</p>
              </div>
            </div>
            <div className="card p-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <ScheduleIcon fontSize="small" className="text-brand-dark" />
                  <p className="text-sm text-brand-gray">作業中</p>
                </div>
                <p className="text-2xl font-bold text-brand-dark">¥{totalShadowStockInProgress.toLocaleString()}</p>
                <p className="text-sm text-brand-gray">見込み報酬</p>
              </div>
            </div>
          </div>

          {/* タイムボックス報酬セクション */}
          <div className="card p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <AccessTimeIcon className="text-brand-teal" />
                <h2 className="text-xl font-bold text-brand-dark">タイムボックス報酬</h2>
                <span className="badge badge--phase">Phase 0</span>
              </div>
              <p className="text-sm text-brand-gray">
                Pre-Lightフェーズでの少額タスク報酬。イノベーターから直接支払われます。
              </p>

              {/* プロジェクト別サマリー */}
              {myTimeboxSummaries.map((summary, i) => (
                <div key={i} className="p-4 bg-brand-light rounded-lg">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-brand-dark">{summary.projectTitle}</p>
                      <span className="text-sm text-brand-gray">{summary.totalHours}時間</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-brand-gray">獲得済み</p>
                        <p className="text-lg font-bold text-brand-green">¥{summary.totalEarned.toLocaleString()}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-brand-gray">検収待ち</p>
                        <p className="text-lg font-bold text-brand-teal">¥{summary.pending.toLocaleString()}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-brand-gray">作業中</p>
                        <p className="text-lg font-bold text-brand-dark">¥{summary.inProgress.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* タイムボックス報酬一覧 */}
              <div className="flex flex-col gap-3">
                <p className="text-sm font-medium text-brand-gray">報酬履歴</p>
                {myTimeboxRewards.map((reward, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-brand-light rounded-lg">
                    <div className="flex items-start gap-3">
                      {reward.status === 'paid' ? (
                        <CheckCircleIcon className="text-brand-green flex-shrink-0" sx={{ marginTop: '0.125rem' }} fontSize="small" />
                      ) : reward.status === 'submitted' ? (
                        <HourglassEmptyIcon className="text-brand-teal flex-shrink-0" sx={{ marginTop: '0.125rem' }} fontSize="small" />
                      ) : (
                        <ScheduleIcon className="text-brand-gray flex-shrink-0" sx={{ marginTop: '0.125rem' }} fontSize="small" />
                      )}
                      <div className="flex flex-col gap-1">
                        <p className="font-medium text-brand-dark">{reward.deliverableTitle}</p>
                        <p className="text-sm text-brand-gray flex items-center gap-1">
                          <AccessTimeIcon sx={{ fontSize: 14 }} />
                          {reward.timeboxHours}時間
                        </p>
                        {reward.paidAt && (
                          <p className="text-sm text-brand-gray">支払日: {reward.paidAt}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right flex flex-col gap-2">
                      <span className={`badge ${
                        reward.status === 'paid' ? 'badge--committer' :
                        reward.status === 'submitted' ? 'badge--innovator' :
                        reward.status === 'in_progress' ? 'badge--phase' : ''
                      }`}>
                        {reward.status === 'paid' ? '支払済' :
                         reward.status === 'submitted' ? '検収待ち' :
                         reward.status === 'in_progress' ? '作業中' : '未着手'}
                      </span>
                      <p className={`text-lg font-bold ${reward.status === 'paid' ? 'text-brand-green' : 'text-brand-dark'}`}>
                        ¥{reward.rewardAmount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
                {myTimeboxRewards.length === 0 && (
                  <p className="text-sm text-brand-gray text-center py-4">タイムボックス報酬はありません</p>
                )}
              </div>
            </div>
          </div>

          {/* シャドウストックセクション */}
          <div className="card p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <SavingsIcon className="text-brand-teal" />
                <h2 className="text-xl font-bold text-brand-dark">シャドウストック</h2>
                <span className="badge badge--innovator">Phase 1+</span>
              </div>
              <p className="text-sm text-brand-gray">
                CFで調達したBounty Poolからの報酬。ファントムストックとも呼ばれます。
              </p>

              {/* プロジェクト別サマリー */}
              {myShadowStocks.map((stock, i) => (
                <div key={i} className="p-4 bg-brand-light rounded-lg">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-brand-dark">{stock.projectTitle}</p>
                      <span className="badge badge--innovator">参画中</span>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-brand-gray">割当総額</p>
                        <p className="text-lg font-bold text-brand-dark">¥{stock.totalAllocated.toLocaleString()}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-brand-gray">獲得済み</p>
                        <p className="text-lg font-bold text-brand-green">¥{stock.totalEarned.toLocaleString()}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-brand-gray">検収待ち</p>
                        <p className="text-lg font-bold text-brand-teal">¥{stock.pending.toLocaleString()}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-brand-gray">作業中</p>
                        <p className="text-lg font-bold text-brand-dark">¥{stock.inProgress.toLocaleString()}</p>
                      </div>
                    </div>
                    {/* 進捗バー */}
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between text-sm text-brand-gray">
                        <span>獲得進捗</span>
                        <span>{Math.round((stock.totalEarned / stock.totalAllocated) * 100)}%</span>
                      </div>
                      <div className="h-2 bg-brand-light-gray rounded-full overflow-hidden">
                        <div
                          className="h-full bg-brand-green rounded-full transition-all duration-300"
                          style={{ width: `${(stock.totalEarned / stock.totalAllocated) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {myShadowStocks.length === 0 && (
                <p className="text-sm text-brand-gray text-center py-4">シャドウストックの割当はありません</p>
              )}

              {/* シャドウストック報酬一覧 */}
              <div className="flex flex-col gap-3">
                <p className="text-sm font-medium text-brand-gray">報酬履歴</p>
                {myShadowStockRewards.map((reward, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-brand-light rounded-lg">
                    <div className="flex items-start gap-3">
                      {reward.status === 'paid' ? (
                        <CheckCircleIcon className="text-brand-green flex-shrink-0" sx={{ marginTop: '0.125rem' }} fontSize="small" />
                      ) : reward.status === 'submitted' ? (
                        <HourglassEmptyIcon className="text-brand-teal flex-shrink-0" sx={{ marginTop: '0.125rem' }} fontSize="small" />
                      ) : (
                        <ScheduleIcon className="text-brand-gray flex-shrink-0" sx={{ marginTop: '0.125rem' }} fontSize="small" />
                      )}
                      <div className="flex flex-col gap-1">
                        <p className="font-medium text-brand-dark">{reward.deliverableTitle}</p>
                        <p className="text-sm text-brand-gray">{reward.projectTitle}</p>
                        {reward.paidAt && (
                          <p className="text-sm text-brand-gray">支払日: {reward.paidAt}</p>
                        )}
                        {reward.status === 'submitted' && reward.submittedAt && (
                          <p className="text-sm text-brand-gray">提出日: {reward.submittedAt}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right flex flex-col gap-2">
                      <span className={`badge ${
                        reward.status === 'paid' ? 'badge--committer' :
                        reward.status === 'submitted' ? 'badge--innovator' :
                        reward.status === 'in_progress' ? 'badge--phase' : ''
                      }`}>
                        {reward.status === 'paid' ? '支払済' :
                         reward.status === 'submitted' ? '検収待ち' :
                         reward.status === 'in_progress' ? '作業中' : '未着手'}
                      </span>
                      <p className={`text-lg font-bold ${reward.status === 'paid' ? 'text-brand-green' : 'text-brand-dark'}`}>
                        ¥{reward.rewardAmount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
                {myShadowStockRewards.length === 0 && (
                  <p className="text-sm text-brand-gray text-center py-4">シャドウストック報酬はありません</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
