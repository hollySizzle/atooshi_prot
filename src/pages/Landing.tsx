import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import MoneyOffIcon from '@mui/icons-material/MoneyOff'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import BuildIcon from '@mui/icons-material/Build'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import FolderIcon from '@mui/icons-material/Folder'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import GroupIcon from '@mui/icons-material/Group'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const problemIcons = [MoneyOffIcon, VisibilityOffIcon, VolunteerActivismIcon]

export default function Landing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">
              アイデアを、実行力でカタチにする
            </h1>
            <p className="text-xl text-brand-gray">
              クラウドファンディング × 実務マッチングプラットフォーム
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Link to="/projects" className="btn btn--primary flex items-center gap-2">
                <VisibilityIcon fontSize="small" />
                プロジェクトを見る
              </Link>
              <a href="#howto" className="btn btn--secondary flex items-center gap-2">
                <PlayArrowIcon fontSize="small" />
                始め方を知る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            <h2 className="text-2xl font-bold text-center text-brand-dark">既存CFの課題</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: '資金だけでは成功しない', desc: 'CFで資金を集めても、実行で躓くケースが多い' },
                { title: '実行力が見えない', desc: '支援者はプロジェクトの実行体制を評価できない' },
                { title: '善意の搾取構造', desc: '「手伝います」が無償労働になりがち' },
              ].map((item, i) => {
                const IconComponent = problemIcons[i]
                return (
                  <div key={i} className="card p-6 text-center">
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-center">
                        <IconComponent className="text-brand-gray" sx={{ fontSize: 40 }} />
                      </div>
                      <h3 className="font-bold text-lg text-brand-dark">{item.title}</h3>
                      <p className="text-brand-gray">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            <h2 className="text-2xl font-bold text-center text-brand-dark">3つのユーザータイプ</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card p-6 border-t-4 border-brand-teal">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <LightbulbIcon className="text-brand-teal" />
                    <span className="badge badge--innovator">イノベーター</span>
                  </div>
                  <h3 className="font-bold text-lg text-brand-dark">プロジェクトを立ち上げる</h3>
                  <p className="text-brand-gray">アイデアを持ち、実行チームを組成する</p>
                  <Link to="/projects/create" className="btn btn--primary w-full flex items-center justify-center gap-1">
                    始める <ArrowForwardIcon fontSize="small" />
                  </Link>
                </div>
              </div>
              <div className="card p-6 border-t-4 border-brand-green">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <BuildIcon className="text-brand-green" />
                    <span className="badge badge--committer">コミッター</span>
                  </div>
                  <h3 className="font-bold text-lg text-brand-dark">スキルを活かして参画する</h3>
                  <p className="text-brand-gray">専門スキルでプロジェクトに貢献する</p>
                  <Link to="/match" className="btn btn--committer w-full flex items-center justify-center gap-1">
                    参画する <ArrowForwardIcon fontSize="small" />
                  </Link>
                </div>
              </div>
              <div className="card p-6 border-t-4 border-brand-dark">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <TrendingUpIcon className="text-brand-dark" />
                    <span className="badge badge--investor">インベスター</span>
                  </div>
                  <h3 className="font-bold text-lg text-brand-dark">実行力のあるPJを支援する</h3>
                  <p className="text-brand-gray">実行体制が見えるプロジェクトを支援</p>
                  <Link to="/projects" className="btn btn--investor w-full flex items-center justify-center gap-1">
                    支援する <ArrowForwardIcon fontSize="small" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            <h2 className="text-2xl font-bold text-center text-brand-dark">数字で見るAtooshi</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <FolderIcon className="text-brand-teal" sx={{ fontSize: 40 }} />
                <p className="text-4xl font-bold text-brand-teal">123</p>
                <p className="text-brand-gray">累計プロジェクト</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <AttachMoneyIcon className="text-brand-green" sx={{ fontSize: 40 }} />
                <p className="text-4xl font-bold text-brand-green">¥45,000,000</p>
                <p className="text-brand-gray">累計調達額</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <GroupIcon className="text-brand-dark" sx={{ fontSize: 40 }} />
                <p className="text-4xl font-bold text-brand-dark">456</p>
                <p className="text-brand-gray">登録コミッター</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
