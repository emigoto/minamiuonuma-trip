# 南魚沼キャンピングカー旅 2026/11/7–8

元の `index.html` の内容、時刻、写真、Google マップリンクを保ったまま、v0でPreviewできるNext.js App Router構成へ変換したプロジェクトです。

## v0へ読み込む方法

1. このフォルダの中身をGitHubリポジトリのルートへアップロードします。
2. v0でそのGitHubリポジトリをImportします。
3. Base Branchは `main`、Root Directoryは `./` を選びます。

## ローカルで確認する方法

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## 主なファイル

- `app/page.tsx` — 旅行工程、写真、地図リンク
- `app/globals.css` — 元ページのデザイン
- `public/images/` — 元HTMLに含まれていた写真8枚（外部参照分も同梱）
