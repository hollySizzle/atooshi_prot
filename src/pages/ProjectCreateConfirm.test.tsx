import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import ProjectCreateConfirm from './ProjectCreateConfirm'

// useNavigate のモック
const mockNavigate = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

describe('ProjectCreateConfirm', () => {
  beforeEach(() => {
    localStorage.clear()
    mockNavigate.mockClear()
  })

  it('データがない場合はエラーメッセージを表示', () => {
    render(
      <MemoryRouter>
        <ProjectCreateConfirm />
      </MemoryRouter>
    )

    expect(screen.getByText('データが見つかりません')).toBeInTheDocument()
    expect(screen.getByText('最初からやり直す')).toBeInTheDocument()
  })

  it('localStorageにデータがある場合は内容を表示', () => {
    const basicData = {
      name: 'テストプロジェクト',
      catchphrase: 'テストキャッチコピー',
      category: 'テクノロジー',
      targetAmount: '1000000',
      description: 'テスト説明文'
    }
    const teamData = {
      ownerName: '山田太郎',
      organization: 'テスト株式会社',
      teamDescription: 'チーム説明'
    }
    const roles = [
      { id: 1, name: 'エンジニア', count: '3' }
    ]

    localStorage.setItem('projectCreate_basic', JSON.stringify(basicData))
    localStorage.setItem('projectCreate_team', JSON.stringify(teamData))
    localStorage.setItem('projectCreate_roles', JSON.stringify(roles))

    render(
      <MemoryRouter>
        <ProjectCreateConfirm />
      </MemoryRouter>
    )

    expect(screen.getByText('テストプロジェクト')).toBeInTheDocument()
    expect(screen.getByText('テストキャッチコピー')).toBeInTheDocument()
    expect(screen.getByText('テクノロジー')).toBeInTheDocument()
    expect(screen.getByText('¥1,000,000')).toBeInTheDocument()
    expect(screen.getByText('山田太郎')).toBeInTheDocument()
    expect(screen.getByText('テスト株式会社')).toBeInTheDocument()
    expect(screen.getByText('エンジニア: 3名')).toBeInTheDocument()
  })

  it('basicDataのみでteamDataがない場合はエラー表示', () => {
    const basicData = {
      name: 'テストプロジェクト',
      catchphrase: '',
      category: 'ものづくり',
      targetAmount: '',
      description: ''
    }

    localStorage.setItem('projectCreate_basic', JSON.stringify(basicData))

    render(
      <MemoryRouter>
        <ProjectCreateConfirm />
      </MemoryRouter>
    )

    expect(screen.getByText('データが見つかりません')).toBeInTheDocument()
  })

  it('未設定の項目は「未設定」と表示', () => {
    const basicData = {
      name: '',
      catchphrase: '',
      category: 'ものづくり',
      targetAmount: '',
      description: ''
    }
    const teamData = {
      ownerName: '',
      organization: '',
      teamDescription: ''
    }

    localStorage.setItem('projectCreate_basic', JSON.stringify(basicData))
    localStorage.setItem('projectCreate_team', JSON.stringify(teamData))
    localStorage.setItem('projectCreate_roles', JSON.stringify([]))

    render(
      <MemoryRouter>
        <ProjectCreateConfirm />
      </MemoryRouter>
    )

    // 複数の「未設定」が表示される
    const unsetTexts = screen.getAllByText('未設定')
    expect(unsetTexts.length).toBeGreaterThan(0)
  })

  it('送信ボタンをクリックするとlocalStorageがクリアされて遷移', async () => {
    const user = userEvent.setup()
    
    const basicData = {
      name: 'テストプロジェクト',
      catchphrase: 'テストキャッチコピー',
      category: 'テクノロジー',
      targetAmount: '1000000',
      description: 'テスト説明文'
    }
    const teamData = {
      ownerName: '山田太郎',
      organization: 'テスト株式会社',
      teamDescription: 'チーム説明'
    }

    localStorage.setItem('projectCreate_basic', JSON.stringify(basicData))
    localStorage.setItem('projectCreate_team', JSON.stringify(teamData))
    localStorage.setItem('projectCreate_roles', JSON.stringify([]))

    render(
      <MemoryRouter>
        <ProjectCreateConfirm />
      </MemoryRouter>
    )

    // 送信ボタンをクリック
    await user.click(screen.getByRole('button', { name: /プロジェクトを作成/ }))

    // 送信中の表示
    expect(screen.getByText('送信中...')).toBeInTheDocument()

    // 遷移とlocalStorageクリアを待つ
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/projects', { state: { created: true } })
    }, { timeout: 2000 })

    expect(localStorage.getItem('projectCreate_basic')).toBeNull()
    expect(localStorage.getItem('projectCreate_team')).toBeNull()
    expect(localStorage.getItem('projectCreate_roles')).toBeNull()
  })
})
