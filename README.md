# @polastack/gtm-design-system

> [日本語](#日本語) | [English](#english)

---

## 日本語

[Polastack](https://github.com/tkaneko-siracusa) のマーケティングコミュニケーション向けデザインシステムです。Webサイト、ランディングページ、営業資料、講演資料のための統一されたコンポーネントとデザイントークンを提供します。

> **注意:** 本パッケージは**マーケティング用 GTM デザインシステム**です。プロダクトUI用のデザインシステムは [@polastack/design-system](https://github.com/tkaneko-siracusa/DesignSystem) を参照してください。

### インストール

```bash
pnpm add @polastack/gtm-design-system
```

### 使い方

```tsx
// コンポーネントのインポート
import { cn } from '@polastack/gtm-design-system';

// トークンのインポート
import { colors, gradients, fontSize } from '@polastack/gtm-design-system/tokens';

// グローバルスタイルの読み込み（アプリのエントリポイントで）
import '@polastack/gtm-design-system/globals.css';
```

### デザイントークン

`@polastack/design-system` と共通のブランドアイデンティティを継承しつつ、マーケティング向けに拡張しています。

| トークン | 説明 |
|---|---|
| **Colors** | ブランドティール `#1BA491` + ニュートラル + セマンティック |
| **Typography** | Display 72px 〜 Caption 12px（基準 16px） |
| **Spacing** | セクション間余白 80–160px、コンテナ幅 640–1280px |
| **Gradients** | ブランドグラデーション、グロー効果、テキストグラデーション |
| **Elevation** | シャドウ + プライマリグロー |
| **Animation** | フェードイン、スライド、スケールトランジション |
| **Breakpoints** | モバイル / タブレット / デスクトップ / ワイド |

#### プロダクトUI用DSとのタイポグラフィ比較

| | プロダクトUI (`@polastack/design-system`) | GTM（本パッケージ） |
|---|---|---|
| 基準サイズ | 14px | 16px |
| 最大サイズ | 24px | 72px (display-2xl) |
| Display系 | なし | 30 / 36 / 48 / 60 / 72px |

### コンポーネント一覧

#### プリミティブ（12）
Container, Section, Grid, Heading, Text, MarketingButton, Logo, GradientText, Divider, Link, Badge, AnimatedCounter

#### セクション — Tier 1（6）
HeroSection, FeatureGrid, PricingTable, PricingCard, CTASection, FAQSection

#### セクション — Tier 2（7）
FeatureShowcase, ComparisonTable, TestimonialSection, LogoCloud, StatsSection, BentoGrid, CodeBlock

#### プロダクト固有（3）
ModuleOverview, MigrationComparison, AirPocketFeature

#### レイアウト（3）
MarketingHeader, MarketingFooter, PageLayout

### 技術スタック

- **React** 18/19
- **Tailwind CSS** v4（`@theme` ディレクティブ）
- **TypeScript**（strict mode）
- **CVA**（class-variance-authority）によるバリアント管理
- **Storybook** 8（ドキュメント・カタログ）
- **Vitest** + Testing Library + axe-core（テスト・a11y検証）
- **tsup**（ESMビルド）

### 開発コマンド

```bash
pnpm install      # 依存関係インストール
pnpm storybook    # Storybook 起動
pnpm build        # ビルド
pnpm test         # テスト実行
pnpm typecheck    # 型チェック
```

### Storybook 機能

- **テーマ切替**: ライト / ダークモード
- **言語切替**: 日本語 / English
- **a11y アドオン**: アクセシビリティ監査パネル

### プロジェクト構成

```
src/
├── tokens/          # デザイントークン
├── styles/          # グローバルCSS（@theme）
├── lib/             # ユーティリティ（cn）
├── components/
│   ├── primitives/  # Container, Heading, Button 等
│   ├── sections/    # Hero, Feature, Pricing, CTA, FAQ 等
│   └── layout/      # Header, Footer, PageLayout
├── hooks/           # カスタムフック
├── stories/         # Storybook ストーリー
└── test/            # テストセットアップ
```

---

## English

Marketing design system for [Polastack](https://github.com/tkaneko-siracusa) — components and design tokens for websites, landing pages, and sales materials.

> **Note:** This is the **GTM (Go-To-Market) Design System** for marketing use. For the product UI design system, see [@polastack/design-system](https://github.com/tkaneko-siracusa/DesignSystem).

### Install

```bash
pnpm add @polastack/gtm-design-system
```

### Usage

```tsx
// Import components
import { cn } from '@polastack/gtm-design-system';

// Import tokens
import { colors, gradients, fontSize } from '@polastack/gtm-design-system/tokens';

// Import global styles (in your app entry point)
import '@polastack/gtm-design-system/globals.css';
```

### Design Tokens

Shared brand identity with `@polastack/design-system`, extended for marketing:

| Token | Description |
|---|---|
| **Colors** | Brand teal `#1BA491` + neutral + semantic |
| **Typography** | Display 72px → Caption 12px (base 16px) |
| **Spacing** | Section spacing 80–160px, container widths 640–1280px |
| **Gradients** | Brand gradients, glow effects, text gradients |
| **Elevation** | Shadows + primary glow effects |
| **Animation** | Fade-in, slide, scale transitions |
| **Breakpoints** | Mobile / Tablet / Desktop / Wide |

#### Typography comparison with Product UI

| | Product UI (`@polastack/design-system`) | GTM (this package) |
|---|---|---|
| Base size | 14px | 16px |
| Max size | 24px | 72px (display-2xl) |
| Display sizes | — | 30 / 36 / 48 / 60 / 72px |

### Components

#### Primitives (12)
Container, Section, Grid, Heading, Text, MarketingButton, Logo, GradientText, Divider, Link, Badge, AnimatedCounter

#### Sections — Tier 1 (6)
HeroSection, FeatureGrid, PricingTable, PricingCard, CTASection, FAQSection

#### Sections — Tier 2 (7)
FeatureShowcase, ComparisonTable, TestimonialSection, LogoCloud, StatsSection, BentoGrid, CodeBlock

#### Product-specific (3)
ModuleOverview, MigrationComparison, AirPocketFeature

#### Layout (3)
MarketingHeader, MarketingFooter, PageLayout

### Tech Stack

- **React** 18/19
- **Tailwind CSS** v4 (`@theme` directive)
- **TypeScript** (strict mode)
- **CVA** (class-variance-authority) for variant management
- **Storybook** 8 for documentation
- **Vitest** + Testing Library + axe-core for testing
- **tsup** for ESM builds

### Development

```bash
pnpm install      # Install dependencies
pnpm storybook    # Start Storybook
pnpm build        # Build
pnpm test         # Run tests
pnpm typecheck    # Type check
```

### Storybook Features

- **Theme toggle**: Light / Dark mode switching
- **Locale toggle**: Japanese / English switching
- **A11y addon**: Accessibility audit panel

### Project Structure

```
src/
├── tokens/          # Design tokens
├── styles/          # Global CSS (@theme)
├── lib/             # Utilities (cn)
├── components/
│   ├── primitives/  # Container, Heading, Button, etc.
│   ├── sections/    # Hero, Feature, Pricing, CTA, FAQ, etc.
│   └── layout/      # Header, Footer, PageLayout
├── hooks/           # Custom hooks
├── stories/         # Storybook stories
└── test/            # Test setup
```

---

## License

MIT
