import { useState } from 'react'
import { Link } from 'react-router-dom'
import BuildIcon from '@mui/icons-material/Build'
import CodeIcon from '@mui/icons-material/Code'
import PaletteIcon from '@mui/icons-material/Palette'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'
import WorkIcon from '@mui/icons-material/Work'
import PaidIcon from '@mui/icons-material/Paid'
import ScheduleIcon from '@mui/icons-material/Schedule'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import AssignmentIcon from '@mui/icons-material/Assignment'
import GroupsIcon from '@mui/icons-material/Groups'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SendIcon from '@mui/icons-material/Send'

const opportunities = [
  {
    id: 1,
    project: 'エコバッグ製造プロジェクト',
    role: '物流管理',
    skills: ['物流', '在庫管理'],
    bounty: 50000,
    deadline: '2024/02/28',
    timebox: 15,
  },
  {
    id: 2,
    project: 'エコバッグ製造プロジェクト',
    role: 'カスタマーサポート',
    skills: ['CS', 'コミュニケーション'],
    bounty: 30000,
    deadline: '2024/03/15',
    timebox: 10,
  },
  {
    id: 3,
    project: 'スマート農業IoTデバイス開発',
    role: 'ファームウェアエンジニア',
    skills: ['組み込み', 'C言語', 'IoT'],
    bounty: 80000,
    deadline: '2024/02/20',
    timebox: 20,
  },
]

const skillIcons: Record<string, React.ElementType> = {
  'すべて': BuildIcon,
  'エンジニア': CodeIcon,
  'デザイン': PaletteIcon,
  '製造': PrecisionManufacturingIcon,
  '物流': LocalShippingIcon,
  'マーケ': TrendingUpIcon,
  'CS': HeadsetMicIcon,
}

export default function CommitterMatch() {
  const [selectedOpportunity, setSelectedOpportunity] = useState<typeof opportunities[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [availableHours, setAvailableHours] = useState('10-15')

  const openModal = (opportunity: typeof opportunities[0]) => {
    setSelectedOpportunity(opportunity)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedOpportunity(null)
    setMessage('')
  }

  const handleSubmit = () => {
    // TODO: 応募処理
    alert(`「${selectedOpportunity?.project}」の「${selectedOpportunity?.role}」に応募しました！`)
    closeModal()
  }

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="page-header">
            <h1 className="page-header__title flex items-center gap-2">
              <BuildIcon />
              スキルを活かして参画
            </h1>
            <p className="page-header__description">あなたのスキルを求めているプロジェクトを見つけましょう</p>
          </div>

          {/* Skills Filter */}
          <div className="flex flex-wrap gap-2">
            {['すべて', 'エンジニア', 'デザイン', '製造', '物流', 'マーケ', 'CS'].map((skill) => {
              const SkillIcon = skillIcons[skill]
              return (
                <button
                  key={skill}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                    skill === 'すべて'
                      ? 'bg-brand-green text-white'
                      : 'bg-gray-100 text-brand-gray hover:bg-gray-200'
                  }`}
                >
                  <SkillIcon fontSize="small" />
                  {skill}
                </button>
              )
            })}
          </div>

          {/* Opportunities */}
          <div className="flex flex-col gap-4">
            {opportunities.map((opp) => (
              <div key={opp.id} className="card p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1 flex flex-col gap-2">
                    <p className="text-sm text-brand-gray">{opp.project}</p>
                    <h3 className="text-xl font-bold text-brand-dark flex items-center gap-2">
                      <WorkIcon className="text-brand-green" />
                      {opp.role}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {opp.skills.map((skill) => (
                        <span key={skill} className="badge badge--committer">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-brand-gray flex items-center gap-1">
                      <ScheduleIcon fontSize="small" />
                      応募期限: {opp.deadline}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-right">
                    <p className="text-sm text-brand-gray flex items-center justify-end gap-1">
                      <PaidIcon fontSize="small" />
                      報酬（Bounty）
                    </p>
                    <p className="text-2xl font-bold text-brand-green">
                      ¥{opp.bounty.toLocaleString()}
                    </p>
                    <div className="flex gap-2 justify-end">
                      <Link
                        to={`/projects/pj-001`}
                        className="btn btn--secondary inline-flex items-center gap-1"
                      >
                        詳細を見る
                      </Link>
                      <button
                        onClick={() => openModal(opp)}
                        className="btn btn--committer inline-flex items-center gap-1"
                      >
                        応募する
                        <ArrowForwardIcon fontSize="small" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Boarding Track Info */}
          <div className="card p-8 bg-emerald-50 border-emerald-200">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2">
                <RocketLaunchIcon className="text-brand-green" />
                Boarding Track とは？
              </h2>
              <p className="text-brand-gray">
                単発タスクから始めて、継続的なプロジェクトメンバーへ昇格できる仕組みです。
              </p>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center text-brand-dark">
                    <AssignmentIcon />
                  </div>
                  <p className="text-sm text-brand-gray">単発タスク</p>
                </div>
                <ArrowForwardIcon className="text-brand-green" />
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-emerald-300 rounded-full flex items-center justify-center text-brand-dark">
                    <GroupsIcon />
                  </div>
                  <p className="text-sm text-brand-gray">継続参画</p>
                </div>
                <ArrowForwardIcon className="text-brand-green" />
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center">
                    <EmojiEventsIcon />
                  </div>
                  <p className="text-sm text-brand-gray">ボーディング</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 応募モーダル */}
      {isModalOpen && selectedOpportunity && (
        <div className="modal__overlay" onClick={closeModal}>
          <div className="modal__container" onClick={(e) => e.stopPropagation()}>
            <div className="modal__header">
              <h2 className="modal__header-title">プロジェクトに応募</h2>
              <button className="modal__close" onClick={closeModal}>
                <CloseIcon />
              </button>
            </div>

            <div className="modal__body">
              <div className="flex flex-col gap-4">
                {/* プロジェクト情報 */}
                <div className="application-summary">
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold text-brand-dark">{selectedOpportunity.project}</p>
                    <div className="application-summary__item">
                      <WorkIcon fontSize="small" />
                      <span>応募役割:</span>
                      <span className="application-summary__item-value">{selectedOpportunity.role}</span>
                    </div>
                    <div className="application-summary__item">
                      <PaidIcon fontSize="small" />
                      <span>報酬:</span>
                      <span className="application-summary__item-value">¥{selectedOpportunity.bounty.toLocaleString()}</span>
                    </div>
                    <div className="application-summary__item">
                      <ScheduleIcon fontSize="small" />
                      <span>タイムボックス:</span>
                      <span className="application-summary__item-value">{selectedOpportunity.timebox}時間</span>
                    </div>
                  </div>
                </div>

                {/* 自己PR */}
                <div className="form__group">
                  <label className="form__label flex items-center gap-1">
                    <EditIcon fontSize="small" className="text-brand-gray" />
                    自己PR / 応募メッセージ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className="form__textarea"
                    rows={4}
                    placeholder="これまでの経験やスキル、このプロジェクトへの意気込みなどをお書きください"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {/* 希望条件 */}
                <div className="form__group">
                  <label className="form__label flex items-center gap-1">
                    <AccessTimeIcon fontSize="small" className="text-brand-gray" />
                    対応可能時間（週あたり）
                  </label>
                  <select
                    className="form__select"
                    value={availableHours}
                    onChange={(e) => setAvailableHours(e.target.value)}
                  >
                    <option value="5-10">週5〜10時間</option>
                    <option value="10-15">週10〜15時間</option>
                    <option value="15-20">週15〜20時間</option>
                    <option value="20+">週20時間以上</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="modal__footer">
              <button className="btn btn--secondary" onClick={closeModal}>
                キャンセル
              </button>
              <button
                className="btn btn--committer flex items-center gap-1"
                onClick={handleSubmit}
                disabled={!message.trim()}
              >
                <SendIcon fontSize="small" />
                応募する
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
