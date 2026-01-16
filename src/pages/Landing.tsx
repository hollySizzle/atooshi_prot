import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            アイデアを、実行力でカタチにする
          </h1>
          <p className="text-xl text-brand-gray mb-8">
            クラウドファンディング × 実務マッチングプラットフォーム
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/projects" className="btn btn--primary">
              プロジェクトを見る
            </Link>
            <a href="#howto" className="btn btn--secondary">
              始め方を知る
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-brand-dark mb-12">既存CFの課題</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '資金だけでは成功しない', desc: 'CFで資金を集めても、実行で躓くケースが多い' },
              { title: '実行力が見えない', desc: '支援者はプロジェクトの実行体制を評価できない' },
              { title: '善意の搾取構造', desc: '「手伝います」が無償労働になりがち' },
            ].map((item, i) => (
              <div key={i} className="card p-6 text-center">
                <h3 className="font-bold text-lg text-brand-dark mb-2">{item.title}</h3>
                <p className="text-brand-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-brand-dark mb-12">3つのユーザータイプ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 border-t-4 border-brand-teal">
              <span className="badge badge--innovator mb-4">イノベーター</span>
              <h3 className="font-bold text-lg text-brand-dark mb-2">プロジェクトを立ち上げる</h3>
              <p className="text-brand-gray mb-4">アイデアを持ち、実行チームを組成する</p>
              <Link to="/projects/create" className="btn btn--primary w-full">
                始める →
              </Link>
            </div>
            <div className="card p-6 border-t-4 border-brand-green">
              <span className="badge badge--committer mb-4">コミッター</span>
              <h3 className="font-bold text-lg text-brand-dark mb-2">スキルを活かして参画する</h3>
              <p className="text-brand-gray mb-4">専門スキルでプロジェクトに貢献する</p>
              <Link to="/match" className="btn btn--committer w-full">
                参画する →
              </Link>
            </div>
            <div className="card p-6 border-t-4 border-brand-dark">
              <span className="badge badge--investor mb-4">インベスター</span>
              <h3 className="font-bold text-lg text-brand-dark mb-2">実行力のあるPJを支援する</h3>
              <p className="text-brand-gray mb-4">実行体制が見えるプロジェクトを支援</p>
              <Link to="/projects" className="btn btn--investor w-full">
                支援する →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-brand-dark mb-12">数字で見るAtooshi</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-brand-teal">123</p>
              <p className="text-brand-gray">累計プロジェクト</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-green">¥45,000,000</p>
              <p className="text-brand-gray">累計調達額</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-dark">456</p>
              <p className="text-brand-gray">登録コミッター</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
