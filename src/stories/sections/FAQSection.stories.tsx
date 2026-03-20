import type { Meta, StoryObj } from '@storybook/react';
import { FAQSection } from '../../components/sections/faq-section';

const meta: Meta<typeof FAQSection> = {
  title: 'Sections/FAQSection',
  component: FAQSection,
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof FAQSection>;

const faqItemsJa = [
  {
    question: 'Polastackとは何ですか？',
    answer:
      'Polastackは、エンタープライズ要件を網羅した8つのヘッドレス・バックエンドモジュール（認証・DB・ゲートウェイ・検索・分析・連携・監視・ホスティング）を統合したEnterprise Agent Stackです。AIコーディングで作成したフロントエンドに、エンタープライズグレードのバックエンドを直結できます。',
  },
  {
    question: 'kintoneからの乗り換えは可能ですか？',
    answer:
      'はい。データ移行支援プログラムを提供しています。Polastackはkintoneより大規模なデータ量（100万件超）に対応し、typo tolerant検索・FLS・監査ログも標準搭載です。',
  },
  {
    question: 'Supabaseとの違いは何ですか？',
    answer:
      'Polastackは8モジュール統合で、SSO・FLS・監査ログ・分析基盤・全文検索が標準に含まれます。Supabaseはこれらを個別に組み合わせる必要があり、統合コストが発生します。',
  },
  {
    question: 'Free Planから有料プランへの移行時にデータは引き継がれますか？',
    answer:
      'はい。Free Planのデータと設定は有料プランに完全に引き継がれます。環境変更の工数はほぼゼロです。',
  },
  {
    question: 'フロントエンド技術スタックを変更する必要はありますか？',
    answer:
      'いいえ。Polastackはヘッドレスアーキテクチャなので、React / Next.js / Vue等の好きなフレームワークで開発できます。',
  },
  {
    question: '開発から本番デプロイまでの期間はどれくらいですか？',
    answer:
      'Polastackを使用した場合、従来の13-26週間から3-5週間に短縮できます。開発者はビジネスロジックだけに集中できるためです。',
  },
];

const faqItemsEn = [
  {
    question: 'What is Polastack?',
    answer:
      'Polastack is an Enterprise Agent Stack that integrates 8 headless backend modules (auth, DB, gateway, search, analytics, integrations, monitoring, hosting) covering all enterprise requirements. Connect enterprise-grade backends directly to AI-coded frontends.',
  },
  {
    question: 'Can I migrate from kintone?',
    answer:
      'Yes. We provide a data migration support program. Polastack handles larger data volumes (1M+ records) than kintone, with typo-tolerant search, FLS, and audit logs built-in.',
  },
  {
    question: 'How is Polastack different from Supabase?',
    answer:
      'Polastack includes SSO, FLS, audit logs, analytics, and full-text search as integrated features across 8 modules. With Supabase, these must be assembled individually, incurring integration costs.',
  },
  {
    question: 'Is data preserved when upgrading from Free to a paid plan?',
    answer:
      'Yes. All Free Plan data and configurations are fully preserved when upgrading. Migration effort is virtually zero.',
  },
  {
    question: 'Do I need to change my frontend tech stack?',
    answer:
      'No. Polastack is headless, so you can develop with any framework you prefer — React, Next.js, Vue, and more.',
  },
  {
    question: 'How long from development to production deployment?',
    answer:
      'With Polastack, the timeline shrinks from 13-26 weeks to 3-5 weeks. Developers can focus solely on business logic.',
  },
];

export const Default: Story = {
  render: (_, { globals }) => {
    const isJa = globals.locale === 'ja';
    return (
      <FAQSection
        eyebrow="FAQ"
        title={isJa ? 'よくある質問' : 'Frequently Asked Questions'}
        subtitle={
          isJa
            ? 'Polastackについてよく寄せられる質問にお答えします。'
            : 'Answers to common questions about Polastack.'
        }
        items={isJa ? faqItemsJa : faqItemsEn}
      />
    );
  },
};

export const DarkBackground: Story = {
  render: (_, { globals }) => {
    const isJa = globals.locale === 'ja';
    return (
      <FAQSection
        title={isJa ? 'よくある質問' : 'FAQ'}
        items={(isJa ? faqItemsJa : faqItemsEn).slice(0, 3)}
        background="dark"
      />
    );
  },
};
