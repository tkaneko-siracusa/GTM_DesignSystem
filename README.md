# @polastack/gtm-design-system

Marketing design system for [Polastack](https://github.com/tkaneko-siracusa) — components and design tokens for websites, landing pages, and sales materials.

[Polastack](https://github.com/tkaneko-siracusa) のマーケティングコミュニケーション向けデザインシステム。Webサイト、ランディングページ、営業資料、講演資料のための統一されたコンポーネントとデザイントークンを提供します。

> **Note:** This is the **GTM (Go-To-Market) Design System** for marketing use. For the product UI design system, see [@polastack/design-system](https://github.com/tkaneko-siracusa/DesignSystem).
>
> **注意:** 本パッケージは**マーケティング用 GTM デザインシステム**です。プロダクトUI用のデザインシステムは [@polastack/design-system](https://github.com/tkaneko-siracusa/DesignSystem) を参照してください。

## Install / インストール

```bash
pnpm add @polastack/gtm-design-system
```

## Usage / 使い方

```tsx
// Import components
import { cn } from '@polastack/gtm-design-system';

// Import tokens
import { colors, gradients, fontSize } from '@polastack/gtm-design-system/tokens';

// Import global styles (in your app entry point)
import '@polastack/gtm-design-system/globals.css';
```

## Design Tokens / デザイントークン

Shared brand identity with `@polastack/design-system`, extended for marketing:

`@polastack/design-system` と共通のブランドアイデンティティを継承しつつ、マーケティング向けに拡張:

| Token | Description | 説明 |
|---|---|---|
| **Colors** | Brand teal `#1BA491` + neutral + semantic | ブランドティール + ニュートラル + セマンティック |
| **Typography** | Display 72px → Caption 12px (base 16px) | Display 72px 〜 Caption 12px（基準 16px） |
| **Spacing** | Section spacing 80–160px, container widths 640–1280px | セクション間余白、コンテナ幅 |
| **Gradients** | Brand gradients, glow effects, text gradients | ブランドグラデーション、グロー効果 |
| **Elevation** | Shadows + primary glow effects | シャドウ + プライマリグロー |
| **Animation** | Fade-in, slide, scale transitions | フェードイン、スライド、スケール |
| **Breakpoints** | Mobile / Tablet / Desktop / Wide | モバイル / タブレット / デスクトップ / ワイド |

### Typography comparison / タイポグラフィ比較

| | Product UI (`@polastack/design-system`) | GTM (this package) |
|---|---|---|
| Base size | 14px | 16px |
| Max size | 24px | 72px (display-2xl) |
| Display sizes | — | 30 / 36 / 48 / 60 / 72px |

## Tech Stack / 技術スタック

- **React** 18/19
- **Tailwind CSS** v4 (`@theme` directive)
- **TypeScript** (strict mode)
- **CVA** (class-variance-authority) for variant management
- **Storybook** 8 for documentation
- **Vitest** + Testing Library + axe-core for testing
- **tsup** for ESM builds

## Development / 開発

```bash
# Install dependencies / 依存関係インストール
pnpm install

# Start Storybook / Storybook 起動
pnpm storybook

# Build / ビルド
pnpm build

# Run tests / テスト実行
pnpm test

# Type check / 型チェック
pnpm typecheck
```

## Storybook Features / Storybook 機能

- **Theme toggle**: Light / Dark mode switching
- **Locale toggle**: Japanese (日本語) / English switching
- **A11y addon**: Accessibility audit panel

## Project Structure / プロジェクト構成

```
src/
├── tokens/          # Design tokens / デザイントークン
├── styles/          # Global CSS (@theme) / グローバルCSS
├── lib/             # Utilities (cn) / ユーティリティ
├── components/
│   ├── primitives/  # Container, Heading, Button, etc.
│   ├── sections/    # Hero, Feature, Pricing, CTA, FAQ, etc.
│   └── layout/      # Header, Footer, PageLayout
├── hooks/           # Custom hooks / カスタムフック
├── stories/         # Storybook stories
└── test/            # Test setup / テストセットアップ
```

## License / ライセンス

MIT
