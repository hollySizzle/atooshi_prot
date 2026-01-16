# Atooshi Prototype

## 概要
プロジェクトマッチングサービスのプロトタイプアプリケーション

## 技術スタック
- React 18 + TypeScript
- Vite (ビルドツール)
- Tailwind CSS + SCSS (styles.scss)
- MUI (Material UI) + Material Icons
- React Router DOM

## ディレクトリ構造
```
src/
├── components/   # UIコンポーネント
│   ├── common/   # 共通コンポーネント(Header, Footer)
│   ├── landing/  # ランディング用
│   ├── project/  # プロジェクト関連
│   ├── dashboard/# ダッシュボード
│   └── committer/# コミッター関連
├── pages/        # ページコンポーネント
├── data/         # モックデータ
└── styles/       # スタイル(styles.scss)

doc/
├── rules/        # 開発規約
├── logics/       # 仕様書
└── temps/        # 画面仕様テンプレート
```
