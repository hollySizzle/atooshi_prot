import { Link } from 'react-router-dom'
import { projects } from '../data/mockData'

export default function ProjectList() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">プロジェクトを探す</h1>
          <p className="text-gray-600">実行体制が見える、新しいクラウドファンディング</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {['すべて', 'Pre-Light', 'Light', 'Middle'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                tab === 'すべて'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="card">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500">カバー画像</span>
              </div>
              <div className="p-4">
                <div className="flex gap-2 mb-2">
                  <span className={`badge badge--phase ${project.phase}`}>
                    {project.phase === 'light' ? 'Light' : project.phase === 'middle' ? 'Middle' : 'Pre-Light'}
                  </span>
                  <span className="badge">{project.category}</span>
                </div>
                <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.tagline}</p>

                {/* Progress */}
                <div className="mb-4">
                  <div className="progress-bar mb-1">
                    <div
                      className="progress-bar__fill"
                      style={{ width: `${Math.min((project.currentAmount / project.goalAmount) * 100, 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">
                      {Math.round((project.currentAmount / project.goalAmount) * 100)}%
                    </span>
                    <span className="text-gray-500">
                      ¥{project.currentAmount.toLocaleString()} / ¥{project.goalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Execution Team */}
                <div className="flex items-center text-sm text-gray-600">
                  <span>コミッター {project.committerCount}名参画中</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
