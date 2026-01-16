export default function ProjectCreate() {
  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-dark mb-2">プロジェクトを作成</h1>
        <p className="text-brand-gray mb-8">あなたのアイデアを実現するプロジェクトを始めましょう</p>

        <div className="card p-6">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-2">
                プロジェクト名
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                placeholder="例：エコバッグ製造プロジェクト"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-dark mb-2">
                キャッチコピー
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                placeholder="例：廃棄素材を使った環境配慮型バッグを製造"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-dark mb-2">
                カテゴリ
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent">
                <option>ものづくり</option>
                <option>テクノロジー</option>
                <option>食品</option>
                <option>サービス</option>
                <option>その他</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-dark mb-2">
                目標金額
              </label>
              <div className="relative">
                <span className="absolute left-4 top-2 text-brand-gray">¥</span>
                <input
                  type="number"
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  placeholder="1,000,000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-dark mb-2">
                プロジェクト概要
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                placeholder="プロジェクトの詳細を記入してください..."
              />
            </div>

            <div className="pt-4">
              <button type="submit" className="btn btn--primary w-full">
                次へ：実行体制を設定
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
