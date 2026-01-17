import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import TitleIcon from '@mui/icons-material/Title'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import CategoryIcon from '@mui/icons-material/Category'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import DescriptionIcon from '@mui/icons-material/Description'
import BadgeIcon from '@mui/icons-material/Badge'
import WorkIcon from '@mui/icons-material/Work'
import GroupsIcon from '@mui/icons-material/Groups'
import PersonIcon from '@mui/icons-material/Person'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import SendIcon from '@mui/icons-material/Send'
import EditIcon from '@mui/icons-material/Edit'

interface BasicData {
  name: string
  catchphrase: string
  category: string
  targetAmount: string
  description: string
}

interface TeamData {
  ownerName: string
  organization: string
  teamDescription: string
}

interface Role {
  id: number
  name: string
  count: string
}

export default function ProjectCreateConfirm() {
  const navigate = useNavigate()
  const [basicData, setBasicData] = useState<BasicData | null>(null)
  const [teamData, setTeamData] = useState<TeamData | null>(null)
  const [roles, setRoles] = useState<Role[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const basic = localStorage.getItem('projectCreate_basic')
    const team = localStorage.getItem('projectCreate_team')
    const rolesData = localStorage.getItem('projectCreate_roles')

    if (basic) setBasicData(JSON.parse(basic))
    if (team) setTeamData(JSON.parse(team))
    if (rolesData) setRoles(JSON.parse(rolesData))
  }, [])

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // 送信処理をシミュレート
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // localStorage をクリア
    localStorage.removeItem('projectCreate_basic')
    localStorage.removeItem('projectCreate_team')
    localStorage.removeItem('projectCreate_roles')
    
    // 完了後、プロジェクト一覧へ遷移
    navigate('/projects', { state: { created: true } })
  }

  const formatAmount = (amount: string) => {
    if (!amount) return '未設定'
    return `¥${Number(amount).toLocaleString()}`
  }

  if (!basicData || !teamData) {
    return (
      <div className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gray">データが見つかりません</p>
          <Link to="/projects/create" className="text-brand-teal hover:underline">
            最初からやり直す
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="page-header">
            <h1 className="page-header__title flex items-center gap-2">
              <CheckCircleIcon />
              入力内容の確認
            </h1>
            <p className="page-header__description">内容を確認して、プロジェクトを作成しましょう</p>
          </div>

          {/* ステップインジケーター */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center text-sm font-bold">✓</div>
              <span className="text-sm text-brand-gray">基本情報</span>
            </div>
            <div className="w-8 h-px bg-brand-teal"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center text-sm font-bold">✓</div>
              <span className="text-sm text-brand-gray">実行体制</span>
            </div>
            <div className="w-8 h-px bg-brand-teal"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center text-sm font-bold">3</div>
              <span className="text-sm font-medium text-brand-dark">確認</span>
            </div>
          </div>

          {/* 基本情報 */}
          <div className="card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-brand-dark">基本情報</h2>
              <Link
                to="/projects/create"
                className="text-brand-teal text-sm flex items-center gap-1 hover:underline"
              >
                <EditIcon fontSize="small" />
                編集
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <TitleIcon fontSize="small" className="text-brand-teal mt-0.5" />
                <div>
                  <p className="text-sm text-brand-gray">プロジェクト名</p>
                  <p className="text-brand-dark font-medium">{basicData.name || '未設定'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FormatQuoteIcon fontSize="small" className="text-brand-teal mt-0.5" />
                <div>
                  <p className="text-sm text-brand-gray">キャッチコピー</p>
                  <p className="text-brand-dark">{basicData.catchphrase || '未設定'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CategoryIcon fontSize="small" className="text-brand-teal mt-0.5" />
                <div>
                  <p className="text-sm text-brand-gray">カテゴリ</p>
                  <p className="text-brand-dark">{basicData.category}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AttachMoneyIcon fontSize="small" className="text-brand-teal mt-0.5" />
                <div>
                  <p className="text-sm text-brand-gray">目標金額</p>
                  <p className="text-brand-dark font-medium">{formatAmount(basicData.targetAmount)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <DescriptionIcon fontSize="small" className="text-brand-teal mt-0.5" />
                <div>
                  <p className="text-sm text-brand-gray">プロジェクト概要</p>
                  <p className="text-brand-dark whitespace-pre-wrap">{basicData.description || '未設定'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 実行体制 */}
          <div className="card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-brand-dark">実行体制</h2>
              <Link
                to="/projects/create/team"
                className="text-brand-teal text-sm flex items-center gap-1 hover:underline"
              >
                <EditIcon fontSize="small" />
                編集
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <BadgeIcon fontSize="small" className="text-brand-teal mt-0.5" />
                <div>
                  <p className="text-sm text-brand-gray">プロジェクトオーナー</p>
                  <p className="text-brand-dark font-medium">{teamData.ownerName || '未設定'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <WorkIcon fontSize="small" className="text-brand-teal mt-0.5" />
                <div>
                  <p className="text-sm text-brand-gray">所属組織</p>
                  <p className="text-brand-dark">{teamData.organization || '未設定'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PersonIcon fontSize="small" className="text-brand-teal mt-0.5" />
                <div>
                  <p className="text-sm text-brand-gray">募集するコミッター</p>
                  {roles.filter(r => r.name).length > 0 ? (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {roles.filter(r => r.name).map(role => (
                        <span
                          key={role.id}
                          className="px-3 py-1 bg-brand-teal/10 text-brand-dark rounded-full text-sm"
                        >
                          {role.name}: {role.count || 1}名
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-brand-dark">未設定</p>
                  )}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GroupsIcon fontSize="small" className="text-brand-teal mt-0.5" />
                <div>
                  <p className="text-sm text-brand-gray">チーム体制の説明</p>
                  <p className="text-brand-dark whitespace-pre-wrap">{teamData.teamDescription || '未設定'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ボタン */}
          <div className="flex gap-3">
            <Link
              to="/projects/create/team"
              className="btn btn--secondary flex-1 flex items-center justify-center gap-2"
            >
              <ArrowBackIcon fontSize="small" />
              戻る
            </Link>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn btn--primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                '送信中...'
              ) : (
                <>
                  プロジェクトを作成
                  <SendIcon fontSize="small" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
