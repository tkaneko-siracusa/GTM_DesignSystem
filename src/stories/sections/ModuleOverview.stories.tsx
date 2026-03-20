import type { Meta, StoryObj } from '@storybook/react';
import { ModuleOverview } from '../../components/sections/module-overview';

const meta: Meta<typeof ModuleOverview> = {
  title: 'Sections/ModuleOverview',
  component: ModuleOverview,
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof ModuleOverview>;

export const Default: Story = {
  render: (_, { globals }) => {
    const isJa = globals.locale === 'ja';
    return (
      <ModuleOverview
        eyebrow={isJa ? 'アーキテクチャ' : 'ARCHITECTURE'}
        title={isJa ? '6レイヤー × 10モジュール' : '6 Layers × 10 Modules'}
        subtitle={
          isJa
            ? 'エンタープライズ要件を網羅したヘッドレス・バックエンド群。Critical Path: PolaAuth → PolaStore → PolaGate'
            : 'Headless backends covering all enterprise requirements. Critical Path: PolaAuth → PolaStore → PolaGate'
        }
        background="dark"
        layers={
          isJa
            ? [
                {
                  name: 'L1: フロントエンド層',
                  modules: [
                    { name: 'PolaNest', label: 'ホスティング', description: 'GitOps・ゼロスケール・プレビュー環境' },
                  ],
                },
                {
                  name: 'L2: API & セキュリティ層',
                  modules: [
                    { name: 'PolaAuth', label: '認証', description: 'SSO/SAML/SCIM・デュアルアイデンティティ管理' },
                    { name: 'PolaGate', label: 'Gateway', description: 'SDK/MCP/OpenAPI自動生成' },
                  ],
                },
                {
                  name: 'L3: コア・データ層',
                  modules: [
                    { name: 'PolaStore', label: 'DB', description: 'メタデータ駆動DB・RLS/FLS・監査ログ・Zero-Downtimeマイグレーション' },
                  ],
                },
                {
                  name: 'L4: 拡張データ & 連携層',
                  modules: [
                    { name: 'PolaCast', label: '連携', description: 'CDC起点の非同期外部連携・Webhook・DLQ' },
                    { name: 'PolaLens', label: '分析', description: 'セマンティックレイヤー・Zero-ETL・Pre-aggregation' },
                    { name: 'PolaFind', label: '検索', description: 'typo tolerant全文検索・ファセット検索・日本語対応' },
                  ],
                },
                {
                  name: 'L5: 運用・可観測性層',
                  modules: [
                    { name: 'PolaWatch', label: '監視', description: '分散トレーシング・テナント別リソース監視・クォータ制御' },
                  ],
                },
              ]
            : [
                {
                  name: 'L1: Frontend Layer',
                  modules: [
                    { name: 'PolaNest', label: 'Hosting', description: 'GitOps, zero-scale, preview environments' },
                  ],
                },
                {
                  name: 'L2: API & Security Layer',
                  modules: [
                    { name: 'PolaAuth', label: 'Auth', description: 'SSO/SAML/SCIM, dual identity management' },
                    { name: 'PolaGate', label: 'Gateway', description: 'Auto-generate SDK/MCP/OpenAPI' },
                  ],
                },
                {
                  name: 'L3: Core Data Layer',
                  modules: [
                    { name: 'PolaStore', label: 'DB', description: 'Metadata-driven DB, RLS/FLS, audit logs, zero-downtime migration' },
                  ],
                },
                {
                  name: 'L4: Extended Data & Integration Layer',
                  modules: [
                    { name: 'PolaCast', label: 'Integration', description: 'CDC-based async integrations, Webhook, DLQ' },
                    { name: 'PolaLens', label: 'Analytics', description: 'Semantic layer, Zero-ETL, Pre-aggregation' },
                    { name: 'PolaFind', label: 'Search', description: 'Typo tolerant full-text search, faceted search, Japanese support' },
                  ],
                },
                {
                  name: 'L5: Operations & Observability Layer',
                  modules: [
                    { name: 'PolaWatch', label: 'Monitoring', description: 'Distributed tracing, per-tenant resource monitoring, quota control' },
                  ],
                },
              ]
        }
      />
    );
  },
};
