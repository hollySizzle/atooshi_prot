import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GroupsIcon from '@mui/icons-material/Groups'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import BadgeIcon from '@mui/icons-material/Badge'
import WorkIcon from '@mui/icons-material/Work'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CloseIcon from '@mui/icons-material/Close'

export default function ProjectCreateTeam() {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('projectCreate_team')
    return saved ? JSON.parse(saved) : {
      ownerName: '',
      organization: '',
      teamDescription: ''
    }
  })

  const [roles, setRoles] = useState(() => {
    const saved = localStorage.getItem('projectCreate_roles')
    return saved ? JSON.parse(saved) : [{ id: 1, name: '', count: '' }]
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev: typeof formData) => ({ ...prev, [name]: value }))
  }

  const addRole = () => {
    setRoles([...roles, { id: Date.now(), name: '', count: '' }])
  }

  const removeRole = (id: number) => {
    if (roles.length > 1) {
      setRoles(roles.filter((role: { id: number }) => role.id !== id))
    }
  }

  const updateRole = (id: number, field: 'name' | 'count', value: string) => {
    setRoles(roles.map((role: { id: number; name: string; count: string }) => 
      role.id === id ? { ...role, [field]: value } : role
    ))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem('projectCreate_team', JSON.stringify(formData))
    localStorage.setItem('projectCreate_roles', JSON.stringify(roles))
    navigate('/projects/create/confirm')
  }

  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="page-header">
            <h1 className="page-header__title flex items-center gap-2">
              <GroupsIcon />
              実行体制を設定
            </h1>
            <p className="page-header__description">プロジェクトを実行するチーム構成を設定しましょう</p>
          </div>

          {/* ステップインジケーター */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center text-sm font-bold">✓</div>
              <span className="text-sm text-brand-gray">基本情報</span>
            </div>
            <div className="w-8 h-px bg-brand-teal"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center text-sm font-bold">2</div>
              <span className="text-sm font-medium text-brand-dark">実行体制</span>
            </div>
            <div className="w-8 h-px bg-brand-gray/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-gray/30 text-brand-gray flex items-center justify-center text-sm font-bold">3</div>
              <span className="text-sm text-brand-gray">確認</span>
            </div>
          </div>

          <div className="card p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark flex items-center gap-1">
                  <BadgeIcon fontSize="small" className="text-brand-teal" />
                  プロジェクトオーナー名
                </label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  placeholder="例：山田太郎"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark flex items-center gap-1">
                  <WorkIcon fontSize="small" className="text-brand-teal" />
                  所属組織
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  placeholder="例：株式会社エコテック"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark flex items-center gap-1">
                  <PersonAddIcon fontSize="small" className="text-brand-teal" />
                  募集するコミッター
                </label>
                <div className="flex flex-col gap-3">
                  {roles.map((role: { id: number; name: string; count: string }) => (
                    <div key={role.id} className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={role.name}
                        onChange={(e) => updateRole(role.id, 'name', e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                        placeholder="役割（例：デザイナー）"
                      />
                      <input
                        type="number"
                        value={role.count}
                        onChange={(e) => updateRole(role.id, 'count', e.target.value)}
                        className="w-24 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                        placeholder="人数"
                        min="1"
                      />
                      {roles.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeRole(role.id)}
                          className="p-2 text-brand-gray hover:text-brand-dark transition-colors"
                        >
                          <CloseIcon fontSize="small" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addRole}
                    className="text-brand-teal text-sm font-medium flex items-center gap-1 hover:underline"
                  >
                    <PersonAddIcon fontSize="small" />
                    役割を追加
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark flex items-center gap-1">
                  <GroupsIcon fontSize="small" className="text-brand-teal" />
                  チーム体制の説明
                </label>
                <textarea
                  name="teamDescription"
                  value={formData.teamDescription}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  placeholder="どのようなチーム体制でプロジェクトを進めるか説明してください..."
                />
              </div>

              <div className="pt-4 flex gap-3">
                <Link
                  to="/projects/create"
                  className="btn btn--secondary flex-1 flex items-center justify-center gap-2"
                >
                  <ArrowBackIcon fontSize="small" />
                  戻る
                </Link>
                <button type="submit" className="btn btn--primary flex-1 flex items-center justify-center gap-2">
                  次へ：確認画面へ
                  <ArrowForwardIcon fontSize="small" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
