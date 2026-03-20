import type { Meta, StoryObj } from '@storybook/react';
import { FeatureGrid } from '../../components/sections/feature-grid';

const meta: Meta<typeof FeatureGrid> = {
  title: 'Sections/FeatureGrid',
  component: FeatureGrid,
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof FeatureGrid>;

const modulesJa = [
  { title: 'PolaAuth', description: '認証・アイデンティティ基盤。SSO/SAML、SCIMを標準搭載。' },
  { title: 'PolaStore', description: 'メタデータ駆動DB。RLS/FLS、監査ログをアーキテクチャレベルで保証。' },
  { title: 'PolaGate', description: 'Runtime Gateway。TypeScript SDK・OpenAPI・MCPサーバーを自動生成。' },
  { title: 'PolaFind', description: '超高速全文検索。typo tolerant、日本語完全対応。' },
  { title: 'PolaLens', description: '分析基盤。セマンティックレイヤーでBigQuery + Cubeを統合。' },
  { title: 'PolaCast', description: 'イベント駆動型外部連携。Webhook、CDCをリアルタイム処理。' },
  { title: 'PolaWatch', description: '可観測性・監視。分散トレーシング、クォータ制御を標準装備。' },
  { title: 'PolaNest', description: 'フロントエンド・ホスティング。Zero DevOps、GitOpsでデプロイ。' },
];

const modulesEn = [
  { title: 'PolaAuth', description: 'Authentication & identity. SSO/SAML, SCIM built-in.' },
  { title: 'PolaStore', description: 'Metadata-driven DB. RLS/FLS, audit logs guaranteed at architecture level.' },
  { title: 'PolaGate', description: 'Runtime Gateway. Auto-generates TypeScript SDK, OpenAPI, MCP server.' },
  { title: 'PolaFind', description: 'Ultra-fast full-text search. Typo tolerant, full Japanese support.' },
  { title: 'PolaLens', description: 'Analytics platform. Semantic layer integrating BigQuery + Cube.' },
  { title: 'PolaCast', description: 'Event-driven integrations. Real-time Webhook and CDC processing.' },
  { title: 'PolaWatch', description: 'Observability & monitoring. Distributed tracing, quota control built-in.' },
  { title: 'PolaNest', description: 'Frontend hosting. Zero DevOps, GitOps deployment.' },
];

export const EightModules: Story = {
  render: (_, { globals }) => {
    const isJa = globals.locale === 'ja';
    return (
      <FeatureGrid
        eyebrow={isJa ? 'モジュール' : 'MODULES'}
        title={isJa ? '8つの統合モジュール' : '8 Integrated Modules'}
        subtitle={
          isJa
            ? 'エンタープライズ要件を網羅したヘッドレス・バックエンド群。'
            : 'Headless backends covering all enterprise requirements.'
        }
        features={isJa ? modulesJa : modulesEn}
        columns={4}
      />
    );
  },
};

export const ThreeColumns: Story = {
  render: (_, { globals }) => {
    const isJa = globals.locale === 'ja';
    const features = (isJa ? modulesJa : modulesEn).slice(0, 3);
    return (
      <FeatureGrid
        title={isJa ? '主要機能' : 'Key Features'}
        features={features}
        columns={3}
        background="muted"
      />
    );
  },
};
