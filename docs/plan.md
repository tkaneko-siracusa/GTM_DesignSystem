# Polastack GTM Design System 構築計画

## Phase 0: プロジェクト初期化

- [x] package.json 作成（@polastack/gtm-design-system）
- [x] tsconfig.json / tsup.config.ts / vitest.config.ts 作成
- [x] .storybook/ 設定（main.ts / preview.ts / preview-head.html）
- [x] .github/workflows/ CI・Release 設定
- [x] src/lib/cn.ts ユーティリティ
- [x] src/test/setup.ts テストセットアップ
- [x] src/styles/globals.css デザイントークン CSS
- [x] src/index.ts / src/tokens/index.ts エントリポイント
- [x] CLAUDE.md バイリンガルルール追記
- [x] .gitignore / .npmignore / .prettierrc / .size-limit.json
- [x] pnpm install → ビルド・テスト確認

## Phase 1: デザイントークン

- [x] src/tokens/colors.ts
- [x] src/tokens/typography.ts
- [x] src/tokens/spacing.ts
- [x] src/tokens/gradients.ts
- [x] src/tokens/elevation.ts
- [x] src/tokens/animation.ts
- [x] src/tokens/breakpoints.ts
- [x] Storybook トークンカタログストーリー

## Phase 2: プリミティブコンポーネント

- [x] Container / Section / Grid
- [x] Heading / Text
- [x] MarketingButton
- [x] Logo
- [x] GradientText / Divider
- [x] Link / Badge
- [x] AnimatedCounter

## Phase 3: セクションコンポーネント Tier 1

- [x] HeroSection
- [x] FeatureGrid
- [x] PricingTable / PricingCard
- [x] CTASection
- [x] FAQSection

## Phase 4: レイアウトコンポーネント

- [x] MarketingHeader
- [x] MarketingFooter
- [x] PageLayout

## Phase 5: セクションコンポーネント Tier 2

- [x] FeatureShowcase
- [x] ComparisonTable
- [x] TestimonialSection
- [x] LogoCloud
- [x] StatsSection
- [x] BentoGrid
- [x] CodeBlock

## Phase 6: プロダクト固有 + テンプレート

- [x] ModuleOverview
- [x] MigrationComparison
- [x] AirPocketFeature
- [x] LP構成例（Storybook examples）

## Phase 7: 品質仕上げ

- [x] axe-core a11y テスト全コンポーネント
- [x] キーボードナビゲーション検証
- [x] バンドルサイズ最適化
- [x] README.md（日英併記）
