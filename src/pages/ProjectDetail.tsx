import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/mockData'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import FavoriteIcon from '@mui/icons-material/Favorite'
import BuildIcon from '@mui/icons-material/Build'
import PeopleIcon from '@mui/icons-material/People'
import ScheduleIcon from '@mui/icons-material/Schedule'
import InfoIcon from '@mui/icons-material/Info'
import GroupsIcon from '@mui/icons-material/Groups'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import CampaignIcon from '@mui/icons-material/Campaign'

const tabIcons = [InfoIcon, GroupsIcon, AccountBalanceWalletIcon, CardGiftcardIcon, CampaignIcon]

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id) || projects[0]

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <Link to="/projects" className="text-brand-teal hover:underline inline-flex items-center gap-1">
            <ArrowBackIcon fontSize="small" />
            プロジェクト一覧に戻る
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-6">
                <div className="h-64 md:h-96 rounded-lg overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex gap-2">
                  <span className={`badge badge--phase ${project.phase}`}>
                    {project.phase === 'light' ? 'Light' : project.phase === 'middle' ? 'Middle' : 'Pre-Light'}
                  </span>
                  <span className="badge">{project.category}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl font-bold text-brand-dark">{project.title}</h1>
                  <p className="text-brand-gray">{project.tagline}</p>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200">
                  <nav className="flex gap-8">
                    {['概要', '実行体制', '資金使途', 'リターン', '活動報告'].map((tab, i) => {
                      const TabIcon = tabIcons[i]
                      return (
                        <button
                          key={tab}
                          className={`py-3 border-b-2 font-medium text-sm transition-colors flex items-center gap-1 ${
                            i === 0
                              ? 'border-brand-teal text-brand-teal'
                              : 'border-transparent text-brand-gray hover:text-brand-dark'
                          }`}
                        >
                          <TabIcon fontSize="small" />
                          {tab}
                        </button>
                      )
                    })}
                  </nav>
                </div>

                {/* Content */}
                <div className="prose max-w-none text-brand-dark">
                  <h2>このプロジェクトについて</h2>
                  <p className="text-brand-gray">
                    廃棄予定の素材を活用し、環境に配慮したエコバッグを製造・販売するプロジェクトです。
                    私たちは環境問題という課題を解決するために、このプロジェクトを立ち上げました。
                  </p>
                  <h2>解決したい課題</h2>
                  <ul className="text-brand-gray">
                    <li>年間XX万トンの廃棄素材が生まれている</li>
                    <li>環境負荷を減らしながら、実用的な製品を作りたい</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="progress-bar">
                      <div
                        className="progress-bar__fill"
                        style={{ width: `${Math.min((project.currentAmount / project.goalAmount) * 100, 100)}%` }}
                      />
                    </div>
                    <p className="text-3xl font-bold text-brand-dark">¥{project.currentAmount.toLocaleString()}</p>
                    <p className="text-brand-gray">目標 ¥{project.goalAmount.toLocaleString()}</p>
                    <div className="flex gap-4 text-sm text-brand-gray">
                      <span className="flex items-center gap-1">
                        <PeopleIcon fontSize="small" />
                        支援者 {project.backerCount}名
                      </span>
                      <span className="flex items-center gap-1">
                        <ScheduleIcon fontSize="small" />
                        残り {project.daysLeft ?? '-'}日
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button className="btn btn--primary w-full flex items-center justify-center gap-2">
                      <FavoriteIcon fontSize="small" />
                      支援する
                    </button>
                    <p className="text-sm text-brand-gray text-center">¥3,000 から支援可能</p>
                  </div>

                  <hr />

                  <div className="flex flex-col gap-2">
                    <Link to="/match" className="btn btn--committer w-full flex items-center justify-center gap-2">
                      <BuildIcon fontSize="small" />
                      スキルで参画する
                    </Link>
                    <p className="text-sm text-brand-gray text-center">
                      コミッターとして参画
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
