import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects, users, teamMembers, activityReports, projectMilestones } from '../data/mockData'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import FavoriteIcon from '@mui/icons-material/Favorite'
import BuildIcon from '@mui/icons-material/Build'
import PeopleIcon from '@mui/icons-material/People'
import ScheduleIcon from '@mui/icons-material/Schedule'
import InfoIcon from '@mui/icons-material/Info'
import GroupsIcon from '@mui/icons-material/Groups'
import TimelineIcon from '@mui/icons-material/Timeline'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import CampaignIcon from '@mui/icons-material/Campaign'
import PersonIcon from '@mui/icons-material/Person'
import WorkIcon from '@mui/icons-material/Work'
import HistoryIcon from '@mui/icons-material/History'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'

const tabIcons = [InfoIcon, GroupsIcon, TimelineIcon, AccountBalanceWalletIcon, CardGiftcardIcon, CampaignIcon]

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id) || projects[0]
  const [activeTab, setActiveTab] = useState(0)

  // プロジェクトに関連するデータを取得
  const team = teamMembers.filter((m) => m.projectId === project.id)
  const reports = activityReports.filter((r) => r.projectId === project.id)
  const milestones = projectMilestones.filter((m) => m.projectId === project.id)

  const tabs = ['概要', '実行体制', 'プロジェクト進捗', '資金使途', 'リターン', '活動報告']

  const renderTabContent = () => {
    switch (activeTab) {
      case 0: // 概要
        return (
          <div className="prose max-w-none text-brand-dark">
            <h2>このプロジェクトについて</h2>
            <p className="text-brand-gray whitespace-pre-line">{project.description}</p>
          </div>
        )

      case 1: // 実行体制
        return (
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-brand-dark">プロジェクトチーム</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {team.map((member) => {
                const user = users.find((u) => u.id === member.userId)
                if (!user) return null
                return (
                  <div key={member.userId} className="card p-4 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center">
                        <PersonIcon className="text-brand-teal" />
                      </div>
                      <div>
                        <p className="font-bold text-brand-dark">{user.name}</p>
                        <p className="text-sm text-brand-gray">{member.position}</p>
                      </div>
                      {member.role === 'innovator' ? (
                        <span className="ml-auto badge badge--phase light">イノベーター</span>
                      ) : (
                        <span className="ml-auto badge badge--committer">{member.track || 'コミッター'}</span>
                      )}
                    </div>
                    {user.bio && <p className="text-sm text-brand-gray">{user.bio}</p>}
                    {user.skills && (
                      <div className="flex flex-wrap gap-1">
                        {user.skills.map((skill) => (
                          <span key={skill} className="text-xs px-2 py-1 bg-brand-light rounded">{skill}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            {/* 募集中ポジション */}
            <h3 className="text-lg font-bold text-brand-dark mt-4">募集中のポジション</h3>
            <div className="grid md:grid-cols-3 gap-3">
              {Object.entries(project.executionTeam)
                .filter(([, status]) => status === 'recruiting')
                .map(([position]) => (
                  <div key={position} className="card p-3 border-2 border-dashed border-brand-coral/50 flex items-center gap-2">
                    <WorkIcon className="text-brand-coral" fontSize="small" />
                    <span className="text-brand-dark capitalize">{position}</span>
                    <span className="ml-auto text-xs text-brand-coral">募集中</span>
                  </div>
                ))}
            </div>
          </div>
        )

      case 2: { // プロジェクト進捗
        const currentStep = milestones.findIndex((m) => m.status === 'in_progress')
        return (
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-brand-dark">プロジェクト進捗</h2>
            <Stepper activeStep={currentStep} orientation="vertical">
              {milestones.map((milestone) => (
                <Step key={milestone.id} completed={milestone.status === 'completed'}>
                  <StepLabel
                    optional={
                      <span className="text-sm text-brand-gray">
                        目標: {milestone.targetDate}
                      </span>
                    }
                  >
                    <span className="font-bold">{milestone.title}</span>
                  </StepLabel>
                  <StepContent>
                    <p className="text-brand-gray">{milestone.description}</p>
                    {milestone.status === 'in_progress' && (
                      <span className="inline-block mt-2 text-xs px-2 py-1 bg-brand-teal/20 text-brand-teal rounded">
                        進行中
                      </span>
                    )}
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </div>
        )
      }

      case 3: // 資金使途
        return (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-brand-dark">資金使途</h2>
            <div className="card p-4">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center py-2 border-b border-brand-light">
                  <span className="text-brand-dark">製造設備費</span><span className="font-bold text-brand-dark">40万円</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-brand-light">
                  <span className="text-brand-dark">素材調達費</span><span className="font-bold text-brand-dark">30万円</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-brand-light">
                  <span className="text-brand-dark">人件費（Bounty Pool）</span><span className="font-bold text-brand-dark">20万円</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-brand-dark">広報費</span><span className="font-bold text-brand-dark">10万円</span>
                </div>
              </div>
            </div>
          </div>
        )

      case 4: // リターン
        return (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-brand-dark">リターン</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { price: 3000, title: '応援コース', desc: 'お礼のメール + 活動報告', backers: 15 },
                { price: 5000, title: 'エコバッグ1個', desc: 'オリジナルエコバッグ1個', backers: 20 },
                { price: 10000, title: 'エコバッグ3個セット', desc: '色違い3個セット + 名入れ', backers: 8 },
                { price: 30000, title: 'スポンサーコース', desc: '製品10個 + ロゴ掲載', backers: 2 },
              ].map((item) => (
                <div key={item.price} className="card p-4 flex flex-col gap-2">
                  <p className="text-2xl font-bold text-brand-teal">¥{item.price.toLocaleString()}</p>
                  <p className="font-bold text-brand-dark">{item.title}</p>
                  <p className="text-sm text-brand-gray">{item.desc}</p>
                  <p className="text-xs text-brand-gray mt-auto">{item.backers}人が支援</p>
                </div>
              ))}
            </div>
          </div>
        )

      case 5: // 活動報告
        return (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-brand-dark">活動報告</h2>
            <div className="flex flex-col gap-4">
              {reports.length === 0 ? (
                <p className="text-brand-gray">まだ活動報告はありません。</p>
              ) : (
                reports.slice().reverse().map((report) => (
                  <div key={report.id} className="card p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm text-brand-gray">
                      <HistoryIcon fontSize="small" />
                      <span>{report.createdAt}</span>
                      <span>by {report.author}</span>
                    </div>
                    <h3 className="font-bold text-brand-dark">{report.title}</h3>
                    <p className="text-brand-gray">{report.content}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )

      default:
        return null
    }
  }

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
                <div className="border-b border-brand-light overflow-x-auto">
                  <nav className="flex gap-4 md:gap-8 min-w-max">
                    {tabs.map((tab, i) => {
                      const TabIcon = tabIcons[i]
                      return (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(i)}
                          className={`py-3 border-b-2 font-medium text-sm transition-colors flex items-center gap-1 whitespace-nowrap ${
                            i === activeTab
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
                {renderTabContent()}
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

                  <hr className="border-brand-light" />

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
