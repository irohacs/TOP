# irohaコンサルティング

## プロジェクト概要

栃木を拠点とした経営支援・WEBマーケティング・ポータル運営・コーディネート事業を展開する個人事業のコーポレートサイトです。

### コンセプト
「AIで栃木の経営の常識を変える」

## 実装済み機能

### Phase 1（✅ 完成）
- [x] トップページ（ヒーロー、4事業紹介、実績）
- [x] サービス詳細ページ（4事業の詳細説明）
- [x] 運営者情報ページ（プロフィール、想い、ミッション）
- [x] お問い合わせページ（フォームバリデーション付き）
- [x] レスポンシブデザイン対応（スマホ・タブレット・PC）
- [x] モバイルメニュー
- [x] スムーススクロール
- [x] アニメーション効果

## サイト構成

### ページ一覧
1. **トップページ** (`index.html`)
   - ヒーローセクション
   - 4つの事業紹介
   - 実績・数字
   - お問い合わせCTA

2. **サービス** (`services.html`)
   - 経営コンサル事業
   - WEBマーケティング事業
   - ポータル事業
   - 医療支援事業

3. **運営者情報** (`about.html`)
   - プロフィール（光通信 → EPARK → 独立）
   - ミッション・想い
   - なぜ栃木なのか
   - 提供価値

4. **お問い合わせ** (`contact.html`)
   - 無料相談受付フォーム
   - FAQ

## 4つの事業内容

### 1. 経営コンサル事業
- 経営課題の言語化
- マネジメント研修
- 中長期戦略づくり
- 社長室代行・プロジェクト推進

### 2. WEBマーケティング事業
- SEO/MEO対策
- Google広告（P-MAX）
- SNSマーケティング
- LP改善
- 自走できるマーケ組織づくり

### 3. ポータル事業
- 栃木プロスポーツ応援サイト
- 観光×マッチング企画
- 特定業界ポータル立ち上げ

### 4. 医療支援事業
- WEBマーケティング支援（ポータルサイト、Googleビジネスプロフィール、LINE公式アカウント）
- 予約・顧客管理システム導入
- 自動精算機導入支援
- コスト削減商品提案

## 技術スタック

- HTML5
- CSS3（カスタムプロパティ、Flexbox、Grid）
- JavaScript（バニラJS）
- Font Awesome（アイコン）
- Google Fonts



## ディレクトリ構造

```
/
├── index.html          # トップページ
├── services.html       # サービス一覧
├── about.html          # 運営者情報
├── contact.html        # お問い合わせ
├── css/
│   └── style.css      # メインスタイルシート
├── js/
│   └── main.js        # メインJavaScript
├── images/             # 画像フォルダ
└── README.md          # このファイル
```

## 今後の実装予定

### Phase 2（推奨）
- [ ] 料金・プランページ（サービスごとの料金表）
- [ ] ブログ・お知らせ機能（外部ブログ連携またはCMS導入）
- [ ] 実績・事例紹介ページ
- [ ] お問い合わせフォームのバックエンド連携（メール送信機能）
- [ ] SNSシェア機能
- [ ] サイトマップページ

### Phase 3（拡張機能）
- [ ] アクセス解析（Google Analytics連携）
- [ ] SEO最適化（構造化データ）
- [ ] お客様の声・レビューセクション
- [ ] プライバシーポリシー・利用規約ページ
- [ ] 各サービス専用のランディングページ

## 使い方

### ヒーロー背景画像の設定方法

各ページで**個別の背景画像**を設定できます。すべてCSS（`css/style.css`）で管理します。

#### ページごとの背景画像設定

**1. トップページ（index.html）**
```css
/* css/style.css の .hero:not([class*="-hero"]) セクション */
.hero:not([class*="-hero"]) {
  /* 画像を使用する場合はコメントを外す */
  background-image: url('../images/hero-bg.jpg');
}
.hero:not([class*="-hero"])::before {
  /* 画像使用時はコメントを外す */
  background: rgba(0, 0, 0, 0.4);
}
```

**2. サービスページ（services.html）**
```css
/* css/style.css の .service-hero セクション */
.service-hero {
  /* 画像を使用する場合はコメントを外す */
  background-image: url('../images/service-hero-bg.jpg');
}
.service-hero::before {
  /* 画像使用時はコメントを外す */
  background: rgba(0, 0, 0, 0.5);
}
```

**3. 会社概要ページ（about.html）**
```css
/* css/style.css の .about-hero セクション */
.about-hero {
  background-image: url('../images/about-hero-bg.jpg');
}
.about-hero::before {
  background: rgba(0, 0, 0, 0.5);
}
```

**4. お問い合わせページ（contact.html）**
```css
/* css/style.css の .contact-hero セクション */
.contact-hero {
  background-image: url('../images/contact-hero-bg.jpg');
}
.contact-hero::before {
  background: rgba(0, 0, 0, 0.5);
}
```

**5. コラム一覧ページ（column-simple.html）**
```css
/* css/style.css の .column-hero セクション */
.column-hero {
  background-image: url('../images/column-hero-bg.jpg');
}
.column-hero::before {
  background: rgba(0, 0, 0, 0.5);
}
```

**6. ニュース一覧ページ（news-simple.html）**
```css
/* css/style.css の .news-hero セクション */
.news-hero {
  background-image: url('../images/news-hero-bg.jpg');
}
.news-hero::before {
  background: rgba(0, 0, 0, 0.5);
}
```

**7. 記事詳細ページ（columns/内の各記事）**
```css
/* css/style.css の .article-hero セクション */
.article-hero {
  background-image: url('../images/article-hero-bg.jpg');
}
.article-hero::before {
  background: rgba(0, 0, 0, 0.5);
}
```

#### 推奨画像仕様
- **ファイル形式**: JPG（風景・写真）、PNG（イラスト・透過）
- **推奨サイズ**: 1920×1080px 以上
- **ファイルサイズ**: 500KB以下（読み込み速度のため）
- **内容**: 各ページのテーマに合った写真やイラスト

#### デフォルトのグラデーション色
各ページには異なるグラデーション色が設定されています：
- **トップページ**: 紫系（#667eea → #764ba2）
- **サービス**: 青系（#3b82f6 → #2563eb）
- **会社概要**: 緑系（#10b981 → #059669）
- **お問い合わせ**: オレンジ系（#f59e0b → #d97706）
- **コラム**: パープル系（#8b5cf6 → #7c3aed）
- **ニュース**: ピンク系（#ec4899 → #db2777）
- **記事詳細**: シアン系（#06b6d4 → #0891b2）

### コラム・ニュースの追加方法（シンプル版）

コラムとニュースは、HTMLファイルで管理します。

#

### ロゴ画像の設定方法

#### ヘッダーロゴ
1. ロゴ画像を準備（推奨サイズ: 高さ45px、横幅は自動調整）
2. `images/logo.png` に配置
3. 各HTMLファイルのヘッダー部分で画像を有効化:

```html
<!-- 現在（アイコン表示） -->
<a href="index.html" class="logo">
  <i class="fas fa-mountain logo-icon"></i>
  <span class="logo-text">栃木経営支援</span>
</a>

<!-- 画像を使用する場合 -->
<a href="index.html" class="logo">
  <img src="images/logo.png" alt="栃木経営支援" class="logo-image">
</a>
```

#### フッターロゴ
1. ロゴ画像を準備（推奨サイズ: 高さ40px、白色または明るい色推奨）
2. `images/logo-white.png` に配置
3. 各HTMLファイルのフッター部分で画像を有効化:

```html
<!-- 現在（アイコン表示） -->
<div class="footer-logo">
  <i class="fas fa-mountain footer-logo-icon"></i>
  <span class="footer-logo-text">栃木経営支援</span>
</div>

<!-- 画像を使用する場合 -->
<div class="footer-logo">
  <img src="images/logo-white.png" alt="栃木経営支援" class="footer-logo-image">
</div>
```

**Tips**: 
- ヘッダーとフッターで同じロゴを使う場合でも、フッターは背景が暗いため白色バージョンの使用を推奨
- 透過PNG形式がおすすめ

### サイトのカスタマイズ

#### カラーの変更
`css/style.css` の `:root` セクションで色を変更できます。

```css
:root {
  --primary-color: #2563eb;  /* メインカラー */
  --accent-color: #f59e0b;   /* アクセントカラー */
}
```

#### 連絡先情報の変更
各HTMLファイルのフッター部分で連絡先情報を編集してください。

## デプロイ方法

プロジェクト完成後、**Publishタブ**からワンクリックでデプロイできます。

## 主な機能

### 1. レスポンシブデザイン
- スマートフォン、タブレット、PCに最適化
- モバイルメニューの実装



### 3. ユーザビリティ
- スムーススクロール
- モバイルフレンドリー
- アクセシビリティ対応

### 4. SEO対策
- 適切なメタタグ設定
- セマンティックHTML
- 画像最適化対応

## ブラウザ対応

- Google Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Microsoft Edge（最新版）

## お問い合わせ

ご質問やご要望がありましたら、お気軽にお知らせください。

---

**制作完了日**: 2024年1月
**バージョン**: 1.0.0
