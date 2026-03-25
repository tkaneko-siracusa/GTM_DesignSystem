import type { Meta, StoryObj } from '@storybook/react';
import {
  SlideDeck,
  TitleSlide,
  ContentSlide,
  SplitSlide,
  StatSlide,
  QuoteSlide,
  AgendaSlide,
  SectionDividerSlide,
  EndSlide,
  TeamSlide,
  BulletSlide,
  ComparisonSlide,
  ThreeColumnSlide,
  PricingSlide,
  TableSlide,
  ImageSlide,
  ImageTextSlide,
  FlowSlide,
  DiagramSlide,
  IconGridSlide,
  TimelineSlide,
  ChartSlide,
  MetricHighlightSlide,
  BeforeAfterMetricSlide,
  LogoGridSlide,
  CaseStudySlide,
  AwardSlide,
  SecurityComplianceSlide,
  SupportStructureSlide,
  ImplementationPlanSlide,
  ROICalculationSlide,
  QASlide,
  SlideText,
  Box,
} from '../../slides';
import { colors } from '../../tokens/colors';

const meta: Meta<typeof SlideDeck> = {
  title: 'Slides/All Layouts',
  component: SlideDeck,
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof SlideDeck>;

/**
 * 全27種のスライドレイアウトを1つのデッキで確認
 */
export const AllLayouts: Story = {
  render: (_, { globals }) => {
    const isJa = globals.locale === 'ja';
    return (
      <SlideDeck dark>
        {/* === Structure === */}
        <TitleSlide
          badge="Structure"
          title="1. TitleSlide"
          subtitle={isJa ? '表紙・セクション区切り' : 'Cover & section divider'}
        />

        <AgendaSlide
          title={isJa ? '2. AgendaSlide — 目次' : '2. AgendaSlide — Agenda'}
          items={[
            { number: '01', label: isJa ? '課題' : 'Problem' },
            { number: '02', label: isJa ? '解決策' : 'Solution' },
            { number: '03', label: isJa ? '実績' : 'Traction' },
            { number: '04', label: isJa ? '料金' : 'Pricing' },
          ]}
          activeIndex={1}
        />

        <SectionDividerSlide
          sectionNumber="03"
          title={isJa ? '3. SectionDividerSlide' : '3. SectionDividerSlide'}
          subtitle={isJa ? 'セクション区切り' : 'Section divider'}
        />

        <EndSlide
          title={isJa ? '4. EndSlide — お問い合わせ' : '4. EndSlide — Contact'}
          subtitle={isJa ? 'ご質問があればお気軽にどうぞ' : 'Feel free to reach out'}
          ctaLabel={isJa ? '無料トライアル開始' : 'Start Free Trial'}
          contactItems={[
            { label: 'Email', value: 'contact@polastack.io' },
            { label: 'Web', value: 'polastack.io' },
          ]}
        />

        <TeamSlide
          title={isJa ? '5. TeamSlide — チーム' : '5. TeamSlide — Team'}
          members={[
            { name: isJa ? '田中太郎' : 'Taro Tanaka', role: 'CEO', description: isJa ? 'GTM戦略' : 'GTM Strategy' },
            { name: isJa ? '鈴木花子' : 'Hanako Suzuki', role: 'CTO', description: isJa ? 'アーキテクチャ' : 'Architecture' },
            { name: isJa ? '佐藤一郎' : 'Ichiro Sato', role: 'VP Eng', description: isJa ? 'プロダクト開発' : 'Product Dev' },
          ]}
        />

        {/* === Content === */}
        <ContentSlide
          title={isJa ? '6. ContentSlide — 汎用' : '6. ContentSlide — General'}
          subtitle={isJa ? '見出し + 自由なコンテンツ' : 'Heading + free content'}
        >
          <SlideText fontSize="20px" color={colors.neutral[300]}>
            {isJa ? 'このエリアにReactコンポーネントを配置可能' : 'Place any React components here'}
          </SlideText>
        </ContentSlide>

        <SplitSlide
          title={isJa ? '7. SplitSlide — 2カラム' : '7. SplitSlide — 2 columns'}
          left={<SlideText fontSize="20px" color={colors.neutral[300]}>{isJa ? '左カラム' : 'Left column'}</SlideText>}
          right={<SlideText fontSize="20px" color={colors.neutral[300]}>{isJa ? '右カラム' : 'Right column'}</SlideText>}
        />

        <BulletSlide
          title={isJa ? '8. BulletSlide — 箇条書き' : '8. BulletSlide — Bullet list'}
          items={[
            { text: isJa ? '認証基盤の構築が不要' : 'No auth infrastructure needed' },
            { text: isJa ? 'SDK自動生成' : 'Auto SDK generation' },
            { text: isJa ? '全文検索が標準搭載' : 'Full-text search built-in' },
            { text: isJa ? 'ゼロDevOps' : 'Zero DevOps' },
          ]}
        />

        <ComparisonSlide
          title={isJa ? '9. ComparisonSlide — 比較' : '9. ComparisonSlide — Comparison'}
          leftHeader={isJa ? '従来' : 'Before'}
          rightHeader="Polastack"
          leftItems={[isJa ? '認証実装3週間' : 'Auth: 3 weeks', isJa ? '検索同期コード' : 'Search sync code', isJa ? '13-26週でデプロイ' : '13-26 weeks to deploy']}
          rightItems={[isJa ? '認証コード0行' : 'Auth: 0 lines', isJa ? 'CDC自動同期' : 'CDC auto-sync', isJa ? '3-5週でデプロイ' : '3-5 weeks to deploy']}
        />

        <ThreeColumnSlide
          title={isJa ? '10. ThreeColumnSlide — 3カラム' : '10. ThreeColumnSlide — 3 columns'}
          columns={[
            { title: isJa ? '高速' : 'Fast', description: isJa ? '50ms以下のレスポンス' : 'Sub-50ms response' },
            { title: isJa ? '安全' : 'Secure', description: isJa ? 'エンタープライズセキュリティ' : 'Enterprise security' },
            { title: isJa ? '統合' : 'Integrated', description: isJa ? '8モジュール一体型' : '8 modules unified' },
          ]}
        />

        <PricingSlide
          title={isJa ? '11. PricingSlide — 料金' : '11. PricingSlide — Pricing'}
          plans={[
            { name: 'Starter', price: isJa ? '¥0' : '$0', period: isJa ? '/ 月' : '/ mo', features: ['3 projects', '1,000 MAU', 'Community support'] },
            { name: 'Pro', price: isJa ? '¥30,000' : '$300', period: isJa ? '/ 月' : '/ mo', features: ['Unlimited projects', '10,000 MAU', 'Priority support'], recommended: true },
            { name: 'Enterprise', price: isJa ? 'お問い合わせ' : 'Contact us', features: ['Custom SLA', 'Dedicated support', 'On-premise option'] },
          ]}
        />

        <TableSlide
          title={isJa ? '12. TableSlide — テーブル' : '12. TableSlide — Table'}
          headers={[isJa ? '機能' : 'Feature', 'Starter', 'Pro', 'Enterprise']}
          rows={[
            [isJa ? '認証' : 'Auth', '✓', '✓', '✓'],
            ['SSO/SAML', '—', '✓', '✓'],
            [isJa ? '専用サポート' : 'Dedicated support', '—', '—', '✓'],
          ]}
          highlightColumn={2}
        />

        {/* === Visual === */}
        <ImageSlide
          title={isJa ? '13. ImageSlide — 画像' : '13. ImageSlide — Image'}
          image={
            <Box style={{ width: '600px', height: '300px', borderRadius: '16px', background: `linear-gradient(135deg, ${colors.primary[900]}, ${colors.primary[950]})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SlideText fontSize="20px" color={colors.primary[400]} margin="0">Product Screenshot</SlideText>
            </Box>
          }
          caption={isJa ? 'プロダクト画面のキャプチャ' : 'Product screenshot capture'}
        />

        <ImageTextSlide
          title={isJa ? '14. ImageTextSlide' : '14. ImageTextSlide'}
          description={isJa ? '画像とテキストの横並びレイアウト' : 'Side-by-side image and text layout'}
          image={
            <Box style={{ width: '100%', height: '300px', borderRadius: '16px', background: `linear-gradient(135deg, ${colors.primary[900]}, ${colors.neutral[900]})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SlideText fontSize="18px" color={colors.primary[400]} margin="0">Demo</SlideText>
            </Box>
          }
          bullets={[isJa ? '型安全なAPI' : 'Type-safe API', isJa ? '自動生成SDK' : 'Auto-gen SDK']}
        />

        <FlowSlide
          title={isJa ? '15. FlowSlide — フロー' : '15. FlowSlide — Flow'}
          steps={[
            { title: isJa ? 'スキーマ定義' : 'Define Schema' },
            { title: isJa ? 'SDK生成' : 'Generate SDK' },
            { title: isJa ? '開発' : 'Develop' },
            { title: isJa ? 'デプロイ' : 'Deploy' },
          ]}
        />

        <DiagramSlide
          title={isJa ? '16. DiagramSlide — 図' : '16. DiagramSlide — Diagram'}
          subtitle={isJa ? 'カスタムReactコンポーネントを配置' : 'Place custom React components'}
          footnote={isJa ? '※概念図' : '* Conceptual diagram'}
        >
          <Box style={{ width: '500px', height: '250px', borderRadius: '16px', border: `1px dashed ${colors.neutral[700]}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SlideText fontSize="18px" color={colors.neutral[500]} margin="0">{isJa ? 'アーキテクチャ図' : 'Architecture Diagram'}</SlideText>
          </Box>
        </DiagramSlide>

        <IconGridSlide
          title={isJa ? '17. IconGridSlide — アイコングリッド' : '17. IconGridSlide — Icon Grid'}
          items={Array.from({ length: 8 }).map((_, i) => ({
            icon: <Box style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: colors.primary[900], display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SlideText fontSize="16px" color={colors.primary[400]} margin="0">{i + 1}</SlideText></Box>,
            label: `Module ${i + 1}`,
          }))}
        />

        {/* === Data === */}
        <StatSlide
          title={isJa ? '18. StatSlide — 数値' : '18. StatSlide — Stats'}
          stats={[
            { value: '70%', label: isJa ? '時間短縮' : 'Time saved' },
            { value: '8', label: isJa ? 'モジュール' : 'Modules' },
            { value: '99.9%', label: 'SLA' },
          ]}
        />

        <TimelineSlide
          title={isJa ? '19. TimelineSlide — タイムライン' : '19. TimelineSlide — Timeline'}
          items={[
            { date: 'Q1', title: isJa ? 'ベータ版' : 'Beta', description: isJa ? '初期顧客獲得' : 'Early adopters' },
            { date: 'Q2', title: isJa ? 'GA' : 'GA', isCurrent: true, description: isJa ? '一般公開' : 'General availability' },
            { date: 'Q3', title: isJa ? 'エンタープライズ' : 'Enterprise', description: isJa ? '大企業向け展開' : 'Enterprise rollout' },
            { date: 'Q4', title: isJa ? 'グローバル' : 'Global', description: isJa ? '海外展開' : 'International expansion' },
          ]}
        />

        <ChartSlide
          title={isJa ? '20. ChartSlide — グラフ' : '20. ChartSlide — Chart'}
          subtitle={isJa ? '外部チャートライブラリを配置' : 'Place external chart library components'}
          footnote={isJa ? '出典: 社内データ' : 'Source: Internal data'}
        >
          <Box style={{ width: '500px', height: '250px', borderRadius: '16px', border: `1px dashed ${colors.neutral[700]}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SlideText fontSize="18px" color={colors.neutral[500]} margin="0">{isJa ? 'グラフエリア' : 'Chart Area'}</SlideText>
          </Box>
        </ChartSlide>

        <MetricHighlightSlide
          context={isJa ? '開発時間を' : 'Development time'}
          value="70"
          suffix="%"
          description={isJa ? '非機能要件の実装時間を削減' : 'reduction in non-functional implementation time'}
        />

        <BeforeAfterMetricSlide
          title={isJa ? '22. BeforeAfterMetricSlide' : '22. BeforeAfterMetricSlide'}
          beforeValue="26週"
          beforeLabel={isJa ? '従来の開発期間' : 'Traditional dev time'}
          afterValue="5週"
          afterLabel={isJa ? 'Polastackで' : 'With Polastack'}
          improvement={isJa ? '80% 短縮' : '80% reduction'}
        />

        {/* === Social Proof === */}
        <QuoteSlide
          quote={isJa ? '23. QuoteSlide — テスティモニアル引用スライドです。' : '23. QuoteSlide — Testimonial quote slide.'}
          author={isJa ? '田中太郎' : 'Taro Tanaka'}
          role="CTO"
          company="Example Inc."
        />

        <LogoGridSlide
          title={isJa ? '24. LogoGridSlide — 導入企業' : '24. LogoGridSlide — Trusted by'}
          logos={Array.from({ length: 8 }).map((_, i) => ({
            logo: <Box style={{ width: '100px', height: '40px', borderRadius: '8px', backgroundColor: colors.neutral[800], display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SlideText fontSize="12px" color={colors.neutral[400]} margin="0">Logo {i + 1}</SlideText></Box>,
            alt: `Company ${i + 1}`,
          }))}
        />

        <CaseStudySlide
          companyName={isJa ? 'テックスタートアップ株式会社' : 'Tech Startup Inc.'}
          industry={isJa ? 'SaaS / スタートアップ' : 'SaaS / Startup'}
          challenge={isJa ? '認証基盤の構築に3ヶ月かかり、プロダクト開発が遅延。' : 'Auth infrastructure took 3 months, delaying product development.'}
          result={isJa ? 'PolaAuthで初日から本番レベルの認証を実現。開発期間を80%短縮。' : 'Production-grade auth from day one with PolaAuth. 80% faster development.'}
          metrics={[{ value: '80%', label: isJa ? '開発時間短縮' : 'Dev time saved' }, { value: '0', label: isJa ? '認証コード行数' : 'Auth code lines' }]}
          quote={isJa ? '3週間で本番環境が完成した。' : 'Production ready in 3 weeks.'}
          quoteName={isJa ? '鈴木一郎' : 'Ichiro Suzuki'}
          quoteRole="CTO"
        />

        <AwardSlide
          title={isJa ? '26. AwardSlide — 受賞' : '26. AwardSlide — Awards'}
          items={[
            { title: 'Best SaaS 2025', year: '2025' },
            { title: isJa ? 'グッドデザイン賞' : 'Good Design Award', year: '2025' },
            { title: 'TechCrunch Disrupt', year: '2024' },
          ]}
        />

        {/* === Japan-specific === */}
        <SecurityComplianceSlide
          title={isJa ? '27. SecurityComplianceSlide' : '27. SecurityComplianceSlide'}
          certifications={[
            { name: 'ISO 27001' },
            { name: 'SOC 2 Type II' },
            { name: isJa ? 'プライバシーマーク' : 'Privacy Mark' },
            { name: 'ISMAP' },
          ]}
          additionalMeasures={[isJa ? 'AES-256暗号化' : 'AES-256 encryption', isJa ? '24/7監視' : '24/7 monitoring']}
        />

        <SupportStructureSlide
          title={isJa ? '28. SupportStructureSlide' : '28. SupportStructureSlide'}
          tiers={[
            { name: 'Community', description: isJa ? '無料' : 'Free', responseTime: '48h', features: [isJa ? 'ドキュメント' : 'Docs', isJa ? 'コミュニティ' : 'Community'] },
            { name: 'Business', description: isJa ? '有料' : 'Paid', responseTime: '4h', features: [isJa ? 'チャットサポート' : 'Chat support', isJa ? '専任CS' : 'Dedicated CS'] },
            { name: 'Enterprise', description: isJa ? 'カスタム' : 'Custom', responseTime: '1h', features: [isJa ? '24/7電話' : '24/7 phone', isJa ? 'SLA保証' : 'SLA guaranteed', isJa ? 'オンサイト' : 'On-site'] },
          ]}
        />

        <ImplementationPlanSlide
          title={isJa ? '29. ImplementationPlanSlide' : '29. ImplementationPlanSlide'}
          totalDuration={isJa ? '約3ヶ月' : 'Approx. 3 months'}
          phases={[
            { phase: 'Phase 1', title: isJa ? '要件定義' : 'Requirements', duration: isJa ? '2週間' : '2 weeks', tasks: [isJa ? 'ヒアリング' : 'Interview', isJa ? '設計' : 'Design'] },
            { phase: 'Phase 2', title: isJa ? '開発' : 'Development', duration: isJa ? '6週間' : '6 weeks', tasks: [isJa ? '実装' : 'Implementation', isJa ? 'テスト' : 'Testing'], highlight: true },
            { phase: 'Phase 3', title: isJa ? '本番移行' : 'Go-live', duration: isJa ? '2週間' : '2 weeks', tasks: [isJa ? '移行' : 'Migration', isJa ? '運用開始' : 'Launch'] },
          ]}
        />

        <ROICalculationSlide
          title={isJa ? '30. ROICalculationSlide' : '30. ROICalculationSlide'}
          items={[
            { category: isJa ? 'エンジニア人件費' : 'Engineer cost', before: isJa ? '¥12,000,000' : '$120,000', after: isJa ? '¥3,600,000' : '$36,000', savings: isJa ? '¥8,400,000' : '$84,000' },
            { category: isJa ? 'SaaS連携費' : 'SaaS integration', before: isJa ? '¥3,000,000' : '$30,000', after: isJa ? '¥0' : '$0', savings: isJa ? '¥3,000,000' : '$30,000' },
          ]}
          totalROI={isJa ? '¥11,400,000' : '$114,000'}
          paybackPeriod={isJa ? '3ヶ月' : '3 months'}
        />

        <QASlide
          title={isJa ? '31. QASlide — よくある質問' : '31. QASlide — FAQ'}
          items={[
            { question: isJa ? '無料プランはありますか？' : 'Is there a free plan?', answer: isJa ? 'はい。Starterプランは無料です。' : 'Yes. The Starter plan is free.' },
            { question: isJa ? 'オンプレミスに対応していますか？' : 'Do you support on-premise?', answer: isJa ? 'Enterpriseプランで対応可能です。' : 'Available on the Enterprise plan.' },
          ]}
        />
      </SlideDeck>
    );
  },
};
