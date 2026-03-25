import type { Meta, StoryObj } from '@storybook/react';
import {
  SlideDeck,
  TitleSlide,
  ContentSlide,
  StatSlide,
  QuoteSlide,
  AgendaSlide,
  SectionDividerSlide,
  ComparisonSlide,
  EndSlide,
  MetricHighlightSlide,
  BulletSlide,
  LogoGridSlide,
  CaseStudySlide,
  SecurityComplianceSlide,
  ImplementationPlanSlide,
  FlowSlide,
  ROICalculationSlide,
  SlideText,
  Box,
  Appear,
} from '../../slides';
import { colors } from '../../tokens/colors';

const meta: Meta<typeof SlideDeck> = {
  title: 'Slides/SalesKit',
  component: SlideDeck,
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof SlideDeck>;

export const PolastackPitchDeck: Story = {
  render: (_, { globals }) => {
    const isJa = globals.locale === 'ja';
    return (
      <SlideDeck dark>
        {/* 1. 表紙 */}
        <TitleSlide
          badge="Enterprise Agent Stack"
          title="Polastack"
          subtitle={
            isJa
              ? 'Agent Coding時代の、消えない複雑性を解決する。'
              : 'Solve the unsolvable complexity of the Agent Coding era.'
          }
        />

        {/* 2. アジェンダ */}
        <AgendaSlide
          title={isJa ? '本日の流れ' : 'Agenda'}
          items={[
            { number: '01', label: isJa ? '課題' : 'Problem' },
            { number: '02', label: isJa ? '解決策' : 'Solution' },
            { number: '03', label: isJa ? '導入事例' : 'Case Studies' },
            { number: '04', label: isJa ? '料金・次のステップ' : 'Pricing & Next Steps' },
          ]}
        />

        {/* 3. 課題提起 — インパクト数値 */}
        <SectionDividerSlide
          sectionNumber="01"
          title={isJa ? '課題' : 'Problem'}
        />

        <MetricHighlightSlide
          context={isJa ? '開発時間の' : 'Of development time'}
          value="60-70"
          suffix="%"
          description={isJa ? 'は認証・検索・API・監視などの非機能要件に消えている。' : 'is lost to non-functional requirements like auth, search, APIs, and monitoring.'}
        />

        <BulletSlide
          title={isJa ? 'エンタープライズ開発の現実' : 'Enterprise dev reality'}
          items={[
            { text: isJa ? '認証実装に3-6週間' : 'Auth implementation: 3-6 weeks' },
            { text: isJa ? '検索同期コードの保守コスト' : 'Search sync code maintenance cost' },
            { text: isJa ? 'SaaS連携の複雑性が増大' : 'Growing SaaS integration complexity' },
            { text: isJa ? 'デプロイまで13-26週間' : '13-26 weeks to production' },
          ]}
        />

        {/* 4. 解決策 */}
        <SectionDividerSlide
          sectionNumber="02"
          title={isJa ? '解決策' : 'Solution'}
        />

        <ContentSlide
          title={isJa ? '8モジュール統合プラットフォーム' : '8-Module Integrated Platform'}
          subtitle={isJa ? '認証からホスティングまで、すべてを統合。' : 'From auth to hosting, everything integrated.'}
        >
          <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
            {['PolaAuth', 'PolaStore', 'PolaGate', 'PolaFind', 'PolaLens', 'PolaCast', 'PolaWatch', 'PolaNest'].map((mod) => (
              <Appear key={mod} activeStyle={{ opacity: 1 }} inactiveStyle={{ opacity: 0 }}>
                <Box
                  padding="16px 24px"
                  backgroundColor={colors.primary[950]}
                  style={{ borderRadius: '12px', border: `1px solid ${colors.primary[800]}` }}
                >
                  <SlideText fontSize="18px" fontWeight="600" color={colors.primary[400]} margin="0">
                    {mod}
                  </SlideText>
                </Box>
              </Appear>
            ))}
          </Box>
        </ContentSlide>

        <ComparisonSlide
          title={isJa ? '従来のアプローチとの違い' : 'How we differ'}
          leftHeader={isJa ? '従来' : 'Before'}
          rightHeader="Polastack"
          leftItems={[
            isJa ? '認証実装3週間' : 'Auth: 3 weeks implementation',
            isJa ? '検索同期コードの保守' : 'Search sync code maintenance',
            isJa ? '手動OpenAPI定義' : 'Manual OpenAPI specification',
            isJa ? 'デプロイまで13-26週間' : '13-26 weeks to deploy',
          ]}
          rightItems={[
            isJa ? '認証コード0行' : 'Auth: 0 lines of code',
            isJa ? 'CDC自動同期' : 'CDC auto-sync',
            isJa ? 'SDK自動生成' : 'Auto SDK generation',
            isJa ? '3-5週間でデプロイ' : '3-5 weeks to deploy',
          ]}
        />

        <FlowSlide
          title={isJa ? '導入の流れ' : 'How it works'}
          steps={[
            { title: isJa ? 'スキーマ定義' : 'Define Schema', description: isJa ? 'データモデルを定義' : 'Define data model' },
            { title: isJa ? 'SDK生成' : 'Generate SDK', description: isJa ? '型安全なSDKを自動生成' : 'Auto-gen type-safe SDK' },
            { title: isJa ? '開発' : 'Develop', description: isJa ? 'ビジネスロジックに集中' : 'Focus on business logic' },
            { title: isJa ? 'デプロイ' : 'Deploy', description: isJa ? 'PolaNestで即座に公開' : 'Instant deploy via PolaNest' },
          ]}
        />

        {/* 5. 導入事例 */}
        <SectionDividerSlide
          sectionNumber="03"
          title={isJa ? '導入事例' : 'Case Studies'}
        />

        <StatSlide
          title={isJa ? '導入実績' : 'By the numbers'}
          stats={[
            { value: '70%', label: isJa ? '開発時間短縮' : 'Dev time saved' },
            { value: '8', label: isJa ? '統合モジュール' : 'Modules' },
            { value: '99.9%', label: 'SLA' },
            { value: '<50ms', label: isJa ? '検索レスポンス' : 'Search response' },
          ]}
        />

        <CaseStudySlide
          companyName={isJa ? 'テックスタートアップ株式会社' : 'Tech Startup Inc.'}
          industry={isJa ? 'SaaS / スタートアップ' : 'SaaS / Startup'}
          challenge={isJa ? '認証基盤の構築に3ヶ月かかり、プロダクト開発が遅延。' : 'Auth infrastructure took 3 months, delaying product development.'}
          result={isJa ? 'PolaAuthで初日から本番レベルの認証を実現。開発期間を80%短縮。' : 'Production-grade auth from day one. 80% faster.'}
          metrics={[{ value: '80%', label: isJa ? '開発時間短縮' : 'Time saved' }, { value: '0', label: isJa ? '認証コード行数' : 'Auth lines' }]}
          quote={isJa ? '3週間で本番環境が完成した。信じられない速さだ。' : 'Production ready in 3 weeks. Unbelievable speed.'}
          quoteName={isJa ? '鈴木一郎' : 'Ichiro Suzuki'}
          quoteRole="CTO"
        />

        <QuoteSlide
          quote={isJa
            ? 'kintoneでは10万件を超えると検索が使い物にならなかったが、PolaFindなら100万件でもミリ秒。'
            : 'Search was unusable with kintone past 100K records. PolaFind handles 1M+ in milliseconds.'}
          author={isJa ? '佐藤花子' : 'Hanako Sato'}
          role={isJa ? '開発リード' : 'Dev Lead'}
          company={isJa ? '人材サービス株式会社' : 'HR Services Inc.'}
        />

        <LogoGridSlide
          title={isJa ? '導入企業' : 'Trusted by'}
          logos={Array.from({ length: 8 }).map((_, i) => ({
            logo: <Box style={{ width: '120px', height: '40px', borderRadius: '8px', backgroundColor: colors.neutral[800], display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SlideText fontSize="12px" color={colors.neutral[400]} margin="0">{isJa ? `企業 ${i + 1}` : `Company ${i + 1}`}</SlideText></Box>,
            alt: `Company ${i + 1}`,
          }))}
        />

        {/* 6. セキュリティ */}
        <SecurityComplianceSlide
          title={isJa ? 'セキュリティ・コンプライアンス' : 'Security & Compliance'}
          certifications={[
            { name: 'ISO 27001', description: isJa ? '情報セキュリティ' : 'InfoSec' },
            { name: 'SOC 2 Type II', description: isJa ? '監査済み' : 'Audited' },
            { name: isJa ? 'プライバシーマーク' : 'Privacy Mark', description: isJa ? '個人情報保護' : 'Data protection' },
            { name: 'ISMAP', description: isJa ? '政府クラウド' : 'Gov cloud' },
          ]}
          additionalMeasures={[
            isJa ? 'データ暗号化（AES-256）' : 'AES-256 encryption',
            isJa ? '24/7 SOC監視' : '24/7 SOC monitoring',
            isJa ? 'ペネトレーションテスト年2回' : 'Bi-annual pen testing',
          ]}
        />

        {/* 7. 料金・次のステップ */}
        <SectionDividerSlide
          sectionNumber="04"
          title={isJa ? '料金・次のステップ' : 'Pricing & Next Steps'}
        />

        <ROICalculationSlide
          title={isJa ? '導入効果シミュレーション' : 'ROI Calculation'}
          items={[
            { category: isJa ? 'エンジニア人件費' : 'Engineer cost', before: isJa ? '¥12,000,000/年' : '$120,000/yr', after: isJa ? '¥3,600,000/年' : '$36,000/yr', savings: isJa ? '¥8,400,000' : '$84,000' },
            { category: isJa ? 'SaaS連携費用' : 'SaaS integration', before: isJa ? '¥3,000,000/年' : '$30,000/yr', after: isJa ? '¥0' : '$0', savings: isJa ? '¥3,000,000' : '$30,000' },
            { category: isJa ? '運用保守費用' : 'Operations', before: isJa ? '¥2,400,000/年' : '$24,000/yr', after: isJa ? '¥600,000/年' : '$6,000/yr', savings: isJa ? '¥1,800,000' : '$18,000' },
          ]}
          totalROI={isJa ? '¥13,200,000/年' : '$132,000/yr'}
          paybackPeriod={isJa ? '2ヶ月' : '2 months'}
        />

        <ImplementationPlanSlide
          title={isJa ? '導入スケジュール' : 'Implementation Plan'}
          totalDuration={isJa ? '約10週間' : 'Approx. 10 weeks'}
          phases={[
            { phase: 'Phase 1', title: isJa ? '要件定義' : 'Requirements', duration: isJa ? '2週間' : '2 weeks', tasks: [isJa ? 'ヒアリング' : 'Interview', isJa ? 'アーキテクチャ設計' : 'Architecture'] },
            { phase: 'Phase 2', title: isJa ? '開発・移行' : 'Development', duration: isJa ? '6週間' : '6 weeks', tasks: [isJa ? '実装' : 'Build', isJa ? 'データ移行' : 'Data migration'], highlight: true },
            { phase: 'Phase 3', title: isJa ? '本番稼働' : 'Go-live', duration: isJa ? '2週間' : '2 weeks', tasks: [isJa ? 'テスト' : 'Testing', isJa ? '運用開始' : 'Launch'] },
          ]}
        />

        {/* 8. CTA */}
        <EndSlide
          title={isJa ? 'まずは無料で始めましょう' : "Let's get started"}
          subtitle={isJa ? 'クレジットカード不要。全8モジュールを今すぐ試せます。' : 'No credit card required. Try all 8 modules instantly.'}
          ctaLabel={isJa ? '無料トライアル開始' : 'Start Free Trial'}
          ctaUrl="https://polastack.io/signup"
          contactItems={[
            { label: 'Email', value: 'sales@polastack.io' },
            { label: 'Web', value: 'polastack.io' },
          ]}
        />
      </SlideDeck>
    );
  },
};
