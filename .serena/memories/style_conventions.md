# スタイル規約

## コンポーネント規約
### 必須
- アイコンはGoogle Material Icons(@mui/icons-material)使用
- カラー指定はbrand-*クラスのみ(text-brand-dark, bg-brand-teal等)
- 再利用UIはstyles.scssのコンポーネントクラスを使用

### 禁止
- Tailwindの直接カラー指定（bg-emerald-500等）
- インラインstyle属性
- 独自SVGアイコン
- CSS Modules / styled-components

### Tailwind許可
- レイアウト: flex, grid, items-*, justify-*, gap-*
- スペーシング: p-*, px-*, py-*, pt-*, pb-*, pl-*, pr-*
- サイズ: w-*, h-*, max-w-*, min-h-*
- レスポンシブ: sm:*, md:*, lg:*, xl:*
- インタラクション: hover:*, transition-*, duration-*

## スタイル規約
### 必須
- styles.scssに全スタイルを統合
- BEM形式でネスト構造を使用
- カラーはCSS変数(--brand-*)で定義

### 禁止
- px直書き（CSS変数経由は可）
- marginプロパティ（gap/paddingで代替）

## 利用可能コンポーネント
- buttons: .btn, .btn--primary, .btn--secondary, .btn--committer, .btn--investor
- cards: .card, .card__image, .card__content
- badges: .badge, .badge--innovator, .badge--committer, .badge--investor, .badge--phase
- forms: .form__group, .form__label, .form__input, .form__select, .form__textarea
- layout: .section, .page-header, .grid-layout, .stack, .flex-layout
