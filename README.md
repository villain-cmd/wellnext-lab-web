WellNext Lab Webサイト プロジェクト
プロジェクト概要
このプロジェクトは、看護職向けの予防・教育ウェルネス事業「WellNext Lab」のWebサイト（ランディングページ）です。
HTML/CSS/Vanilla JSのみで構築された静的サイトであり、フレームワークを使用していないため、環境構築の手間なく即座に編集・公開が可能です。
ディレクトリ構成
.
├── index.html   # メインのHTMLファイル
├── styles.css   # スタイルシート（CSS変数による色管理）
├── script.js    # ヘッダー制御、スムーススクロール用JS
└── README.md    # 本ドキュメント


ローカルでの確認方法
このリポジトリをクローンまたはダウンロードします。
フォルダ内の index.html をChromeやSafariなどのWebブラウザにドラッグ＆ドロップしてください。
ローカルサーバー（Live Server等）は必須ではありませんが、使うと開発がスムーズです。
GitHubへのPush手順（簡易）
GitHubアカウント作成とリポジトリ作成が完了している前提の手順です。
ターミナルを開き、プロジェクトフォルダへ移動
cd path/to/project


Gitの初期化とファイル追加
git init
git add .
git commit -m "Initial commit: WellNext Lab website structure"


リモートリポジトリへPush
（[YOUR_REPO_URL] は作成したGitHubリポジトリのURLに置き換えてください）
git branch -M main
git remote add origin [YOUR_REPO_URL]
git push -u origin main


Netlifyへのデプロイ手順
サーバー管理不要で、GitHubと連携して自動公開します。
Netlify にアクセスし、アカウント作成/ログイン。
"Add new site" > "Import an existing project" を選択。
"GitHub" を選択し、先ほどアップロードした「WellNext Lab」のリポジトリを選択。
設定画面（Build settings）が表示されますが、変更不要です。
Build command: （空欄でOK）
Publish directory: （空欄または / でOK）
"Deploy site" をクリック。
数秒〜数分で公開用URLが発行されます。（例: wellnext-lab.netlify.app）
以降は、PCでコードを編集しGitHubへPushするだけで、Netlify上のサイトも自動更新されます。
