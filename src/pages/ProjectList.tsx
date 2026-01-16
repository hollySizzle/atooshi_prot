import { Link } from 'react-router-dom'
import { projects } from '../data/mockData'
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList'
import GroupIcon from '@mui/icons-material/Group'
import ImageIcon from '@mui/icons-material/Image'

export default function ProjectList() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="page-header">
            <h1 className="page-header__title flex items-center gap-2">
              <SearchIcon />
              プロジェクトを探す
            </h1>
            <p className="page-header__description">実行体制が見える、新しいクラウドファンディング</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 items-center">
            <FilterListIcon className="text-brand-gray mr-2" />
            {['すべて', 'Pre-Light', 'Light', 'Middle'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  tab === 'すべて'
                    ? 'bg-brand-teal text-white'
                    : 'bg-gray-100 text-brand-gray hover:bg-gray-200'
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
                  <ImageIcon className="text-brand-gray" sx={{ fontSize: 48 }} />
                </div>
                <div className="p-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-2">
                      <span className={`badge badge--phase ${project.phase}`}>
                        {project.phase === 'light' ? 'Light' : project.phase === 'middle' ? 'Middle' : 'Pre-Light'}
                      </span>
                      <span className="badge">{project.category}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-lg text-brand-dark">{project.title}</h3>
                      <p className="text-brand-gray text-sm line-clamp-2">{project.tagline}</p>
                    </div>

                    {/* Progress */}
                    <div className="flex flex-col gap-1">
                      <div className="progress-bar">
                        <div
                          className="progress-bar__fill"
                          style={{ width: `${Math.min((project.currentAmount / project.goalAmount) * 100, 100)}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-brand-dark">
                          {Math.round((project.currentAmount / project.goalAmount) * 100)}%
                        </span>
                        <span className="text-brand-gray">
                          ¥{project.currentAmount.toLocaleString()} / ¥{project.goalAmount.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Execution Team */}
                    <div className="flex items-center gap-1 text-sm text-brand-gray">
                      <GroupIcon fontSize="small" />
                      <span>コミッター {project.committerCount}名参画中</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
