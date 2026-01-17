import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import ProjectCreate from './ProjectCreate'

const mockNavigate = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

describe('ProjectCreate', () => {
  beforeEach(() => {
    localStorage.clear()
    mockNavigate.mockClear()
  })

  it('フォーム送信でlocalStorageに保存して遷移', async () => {
    const user = userEvent.setup()
    
    render(
      <MemoryRouter>
        <ProjectCreate />
      </MemoryRouter>
    )

    // フォーム入力
    await user.type(screen.getByPlaceholderText('例：エコバッグ製造プロジェクト'), 'テストプロジェクト')
    await user.type(screen.getByPlaceholderText('例：廃棄素材を使った環境配慮型バッグを製造'), 'テストキャッチコピー')
    
    // 送信
    await user.click(screen.getByRole('button', { name: /次へ/ }))

    // localStorageに保存されている
    const saved = JSON.parse(localStorage.getItem('projectCreate_basic') || '{}')
    expect(saved.name).toBe('テストプロジェクト')
    expect(saved.catchphrase).toBe('テストキャッチコピー')
    
    // 遷移が呼ばれる
    expect(mockNavigate).toHaveBeenCalledWith('/projects/create/team')
  })

  it('localStorageから初期値を復元', () => {
    const savedData = {
      name: '保存済みプロジェクト',
      catchphrase: '保存済みキャッチコピー',
      category: 'テクノロジー',
      targetAmount: '500000',
      description: '保存済み説明'
    }
    localStorage.setItem('projectCreate_basic', JSON.stringify(savedData))

    render(
      <MemoryRouter>
        <ProjectCreate />
      </MemoryRouter>
    )

    expect(screen.getByDisplayValue('保存済みプロジェクト')).toBeInTheDocument()
    expect(screen.getByDisplayValue('保存済みキャッチコピー')).toBeInTheDocument()
  })
})
