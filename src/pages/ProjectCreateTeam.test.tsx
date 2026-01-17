import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import ProjectCreateTeam from './ProjectCreateTeam'

const mockNavigate = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

describe('ProjectCreateTeam', () => {
  beforeEach(() => {
    localStorage.clear()
    mockNavigate.mockClear()
  })

  it('フォーム送信でlocalStorageに保存して遷移', async () => {
    const user = userEvent.setup()
    
    render(
      <MemoryRouter>
        <ProjectCreateTeam />
      </MemoryRouter>
    )

    // フォーム入力
    await user.type(screen.getByPlaceholderText('例：山田太郎'), 'テストオーナー')
    await user.type(screen.getByPlaceholderText('例：株式会社エコテック'), 'テスト組織')
    
    // 送信
    await user.click(screen.getByRole('button', { name: /次へ/ }))

    // localStorageに保存されている
    const savedTeam = JSON.parse(localStorage.getItem('projectCreate_team') || '{}')
    expect(savedTeam.ownerName).toBe('テストオーナー')
    expect(savedTeam.organization).toBe('テスト組織')
    
    // 遷移が呼ばれる
    expect(mockNavigate).toHaveBeenCalledWith('/projects/create/confirm')
  })

  it('役割を追加できる', async () => {
    const user = userEvent.setup()
    
    render(
      <MemoryRouter>
        <ProjectCreateTeam />
      </MemoryRouter>
    )

    // 初期状態では1つの役割入力欄
    const roleInputs = screen.getAllByPlaceholderText('役割（例：デザイナー）')
    expect(roleInputs).toHaveLength(1)

    // 役割を追加
    await user.click(screen.getByText('役割を追加'))

    // 2つになる
    const updatedRoleInputs = screen.getAllByPlaceholderText('役割（例：デザイナー）')
    expect(updatedRoleInputs).toHaveLength(2)
  })

  it('役割を削除できる', async () => {
    const user = userEvent.setup()
    
    render(
      <MemoryRouter>
        <ProjectCreateTeam />
      </MemoryRouter>
    )

    // 役割を追加
    await user.click(screen.getByText('役割を追加'))
    expect(screen.getAllByPlaceholderText('役割（例：デザイナー）')).toHaveLength(2)

    // 削除ボタンをクリック（最初のもの）
    const deleteButtons = screen.getAllByRole('button').filter(
      btn => btn.querySelector('svg[data-testid="CloseIcon"]')
    )
    await user.click(deleteButtons[0])

    // 1つに戻る
    expect(screen.getAllByPlaceholderText('役割（例：デザイナー）')).toHaveLength(1)
  })

  it('localStorageから初期値を復元', () => {
    const savedTeam = {
      ownerName: '保存済みオーナー',
      organization: '保存済み組織',
      teamDescription: '保存済み説明'
    }
    const savedRoles = [
      { id: 1, name: 'エンジニア', count: '2' },
      { id: 2, name: 'デザイナー', count: '1' }
    ]
    localStorage.setItem('projectCreate_team', JSON.stringify(savedTeam))
    localStorage.setItem('projectCreate_roles', JSON.stringify(savedRoles))

    render(
      <MemoryRouter>
        <ProjectCreateTeam />
      </MemoryRouter>
    )

    expect(screen.getByDisplayValue('保存済みオーナー')).toBeInTheDocument()
    expect(screen.getByDisplayValue('保存済み組織')).toBeInTheDocument()
    expect(screen.getByDisplayValue('エンジニア')).toBeInTheDocument()
    expect(screen.getByDisplayValue('デザイナー')).toBeInTheDocument()
  })

  it('役割名を入力できる', async () => {
    const user = userEvent.setup()
    
    render(
      <MemoryRouter>
        <ProjectCreateTeam />
      </MemoryRouter>
    )

    const roleInput = screen.getByPlaceholderText('役割（例：デザイナー）')
    await user.type(roleInput, 'プロジェクトマネージャー')

    expect(screen.getByDisplayValue('プロジェクトマネージャー')).toBeInTheDocument()
  })

  it('人数を入力できる', async () => {
    const user = userEvent.setup()
    
    render(
      <MemoryRouter>
        <ProjectCreateTeam />
      </MemoryRouter>
    )

    const countInput = screen.getByPlaceholderText('人数')
    await user.type(countInput, '5')

    expect(screen.getByDisplayValue('5')).toBeInTheDocument()
  })

  it('役割と人数がlocalStorageに保存される', async () => {
    const user = userEvent.setup()
    
    render(
      <MemoryRouter>
        <ProjectCreateTeam />
      </MemoryRouter>
    )

    // 役割名と人数を入力
    await user.type(screen.getByPlaceholderText('役割（例：デザイナー）'), 'エンジニア')
    await user.type(screen.getByPlaceholderText('人数'), '3')

    // 送信
    await user.click(screen.getByRole('button', { name: /次へ/ }))

    // localStorageに保存されている
    const savedRoles = JSON.parse(localStorage.getItem('projectCreate_roles') || '[]')
    expect(savedRoles[0].name).toBe('エンジニア')
    expect(savedRoles[0].count).toBe('3')
  })
})
