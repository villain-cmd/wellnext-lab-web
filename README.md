# WellNext Nursing Lab — Landing Page

医療コーチングサービス「WellNext Nursing Lab」のランディングページです。

## フォルダ構成

```
/
├── index.html          # メインHTML
├── css/
│   ├── style.css       # 変数・リセット・共通コンポーネント
│   └── sections.css    # セクション別スタイル
├── js/
│   └── main.js         # FAQ アコーディオン・スクロール・ハンバーガーメニュー
├── netlify.toml        # Netlify 設定
└── README.md
```

## セクション構成

| セクション | ID |
|---|---|
| ヒーロー | `#home` |
| サービス紹介 | `#service` |
| 導入実績 | `#results` |
| 選ばれる理由 | `#strength` |
| 料金プラン | `#price` |
| よくある質問 | `#faq` |
| 無料相談CTA | `#contact` |

## 写真の差し替え方法

各セクションの `.photo-placeholder` 要素を `<img>` タグに置き換えてください。

```html
<!-- Before (プレースホルダー) -->
<div class="photo-placeholder photo-nurse-main">看護師メイン写真</div>

<!-- After (実写真) -->
<img src="assets/images/nurse-hero.jpg" alt="看護師メイン写真">
```

## Netlify デプロイ手順

1. このリポジトリを GitHub に push する
2. [Netlify](https://app.netlify.com) にログイン → **Add new site** → **Import an existing project**
3. GitHub を連携してリポジトリを選択
4. **Build settings** はデフォルトのまま（静的サイトのため不要）
5. **Deploy site** をクリック

## ローカル確認

```bash
# npx serve などで静的サーバーを起動
npx serve .
# → http://localhost:3000
```

## カスタマイズ

`css/style.css` の `:root` ブロックでブランドカラーを一括変更できます。

```css
:root {
  --pink:  #FF4EA3;  /* メインアクセント */
  --teal:  #00C9A7;  /* サブアクセント   */
  --dark:  #1a1a2e;  /* テキスト         */
}
```
