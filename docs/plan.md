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

- [ ] HeroSection
- [ ] FeatureGrid
- [ ] PricingTable / PricingCard
- [ ] CTASection
- [ ] FAQSection

## Phase 4: レイアウトコンポーネント

- [ ] MarketingHeader
- [ ] MarketingFooter
- [ ] PageLayout

## Phase 5: セクションコンポーネント Tier 2

- [ ] FeatureShowcase
- [ ] ComparisonTable
- [ ] TestimonialSection
- [ ] LogoCloud
- [ ] StatsSection
- [ ] BentoGrid
- [ ] CodeBlock

## Phase 6: プロダクト固有 + テンプレート

- [ ] ModuleOverview
- [ ] MigrationComparison
- [ ] AirPocketFeature
- [ ] LP構成例（Storybook examples）

## Phase 7: 品質仕上げ

- [ ] axe-core a11y テスト全コンポーネント
- [ ] キーボードナビゲーション検証
- [ ] バンドルサイズ最適化
- [ ] README.md（日英併記）
