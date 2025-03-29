# Todo-List

## プロジェクト紹介
このプロジェクトは、**TypeScript**と**React**を用いてフロントエンド開発スキルを向上させることを目的としたTodo-Listアプリケーションです。多言語対応機能やタスク管理機能を備え、ユーザーフレンドリーな体験を提供します。

## 主な機能
1. タスクの追加、編集、削除、完了状態の切り替え
2. **多言語対応**: 英語、日本語、韓国語
3. ローカルストレージを使用したタスクデータの保存
4. **レスポンシブUI**とアクセシビリティ (ARIA属性対応)

## 技術スタック
- **言語**: TypeScript, JavaScript
- **フレームワーク**: React
- **ビルドツール**: Vite
- **状態管理**: React Hooks (`useState`, カスタムフック `useLocalStorage`)
- **多言語対応**: `i18next`

## インストールと実行
1. このリポジトリをクローンします:
   ```bash
   git clone https://github.com/kwanmo7/type-todo
   cd type-todo/todo-app

2. パッケージをインストール
   ```bash
   npm install

3. 開発サーバを起動
   ```bash
   npm run dev

## プロジェクト構造
todo-app/
├── src/
│   ├── components/
│   │   ├── TodoForm.tsx
│   │   ├── TodoList.tsx
│   │   ├── TodoItem.tsx
│   ├── hooks/
│   │   ├── useLocalStorage.ts
│   ├── types/
│   │   ├── Todo.ts
│   ├── i18n/
│   │   ├── en.json
│   │   ├── ko.json
│   │   ├── ja.json
│   │   ├── i18n.ts
│   ├── App.tsx
│   ├── main.tsx
├── public/
├── package.json
├── vite.config.ts
└── README.md