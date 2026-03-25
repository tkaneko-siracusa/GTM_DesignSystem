import type { Meta, StoryObj } from '@storybook/react';
import {
  SlideDeck,
  TitleSlide,
  ContentSlide,
  SplitSlide,
  StatSlide,
  QuoteSlide,
} from '../../components/slides';
import {
  Slide,
  SlideHeading,
  SlideText,
  FlexBox,
  Box,
  UnorderedList,
  ListItem,
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
        {/* 表紙 */}
        <TitleSlide
          badge="Enterprise Agent Stack"
          title="Polastack"
          subtitle={
            isJa
              ? 'Agent Coding時代の、消えない複雑性を解決する。'
              : 'Solve the unsolvable complexity of the Agent Coding era.'
          }
        />

        {/* 課題提起 */}
        <StatSlide
          title={isJa ? '開発時間の内訳' : 'Where dev time goes'}
          stats={[
            { value: '60-70%', label: isJa ? '非機能要件' : 'Non-functional' },
            { value: '30-40%', label: isJa ? 'ビジネスロジック' : 'Business logic' },
          ]}
        />

        {/* 解決策 */}
        <ContentSlide
          title={isJa ? '8モジュール統合プラットフォーム' : '8-Module Integrated Platform'}
          subtitle={isJa ? '認証からホスティングまで、すべてを統合。' : 'From auth to hosting, everything integrated.'}
        >
          <FlexBox flexWrap="wrap" justifyContent="center">
            {['PolaAuth', 'PolaStore', 'PolaGate', 'PolaFind', 'PolaLens', 'PolaCast', 'PolaWatch', 'PolaNest'].map((mod, i) => (
              <Appear key={mod} activeStyle={{ opacity: 1 }} inactiveStyle={{ opacity: 0 }}>
                <Box
                  margin="8px"
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
          </FlexBox>
        </ContentSlide>

        {/* 差別化 */}
        <SplitSlide
          title={isJa ? '従来のアプローチとの違い' : 'How we differ'}
          left={
            <Box>
              <SlideHeading fontSize="24px" fontWeight="600" color={colors.neutral[500]} margin="0 0 16px 0">
                {isJa ? '従来' : 'Before'}
              </SlideHeading>
              <UnorderedList>
                <ListItem><SlideText fontSize="18px" margin="0">{isJa ? '認証: Auth0 + 実装3週間' : 'Auth: Auth0 + 3 weeks impl'}</SlideText></ListItem>
                <ListItem><SlideText fontSize="18px" margin="0">{isJa ? '検索: Algolia + 同期コード' : 'Search: Algolia + sync code'}</SlideText></ListItem>
                <ListItem><SlideText fontSize="18px" margin="0">{isJa ? 'API: 手動OpenAPI定義' : 'API: Manual OpenAPI spec'}</SlideText></ListItem>
                <ListItem><SlideText fontSize="18px" margin="0">{isJa ? 'デプロイ: 13-26週間' : 'Deploy: 13-26 weeks'}</SlideText></ListItem>
              </UnorderedList>
            </Box>
          }
          right={
            <Box>
              <SlideHeading fontSize="24px" fontWeight="600" color={colors.primary[400]} margin="0 0 16px 0">
                Polastack
              </SlideHeading>
              <UnorderedList>
                <ListItem><SlideText fontSize="18px" margin="0">{isJa ? '認証: PolaAuth — コード0行' : 'Auth: PolaAuth — 0 lines'}</SlideText></ListItem>
                <ListItem><SlideText fontSize="18px" margin="0">{isJa ? '検索: PolaFind — CDC自動同期' : 'Search: PolaFind — CDC auto-sync'}</SlideText></ListItem>
                <ListItem><SlideText fontSize="18px" margin="0">{isJa ? 'API: PolaGate — SDK自動生成' : 'API: PolaGate — Auto SDK gen'}</SlideText></ListItem>
                <ListItem><SlideText fontSize="18px" margin="0">{isJa ? 'デプロイ: 3-5週間' : 'Deploy: 3-5 weeks'}</SlideText></ListItem>
              </UnorderedList>
            </Box>
          }
        />

        {/* 実績 */}
        <StatSlide
          title={isJa ? '導入実績' : 'By the numbers'}
          stats={[
            { value: '70%', label: isJa ? '開発時間短縮' : 'Dev time saved' },
            { value: '8', label: isJa ? '統合モジュール' : 'Modules' },
            { value: '99.9%', label: 'SLA' },
            { value: '<50ms', label: isJa ? '検索レスポンス' : 'Search response' },
          ]}
        />

        {/* テスティモニアル */}
        <QuoteSlide
          quote={
            isJa
              ? '認証実装に3週間かけていたのが、PolaAuthで初日から本番レベルのSSO/SAMLが使えるようになった。'
              : 'Authentication that used to take 3 weeks now works from day one with PolaAuth — production-grade SSO/SAML.'
          }
          author={isJa ? '鈴木一郎' : 'Ichiro Suzuki'}
          role="CTO"
          company={isJa ? 'テックスタートアップ株式会社' : 'Tech Startup Inc.'}
        />

        {/* CTA */}
        <TitleSlide
          badge={isJa ? 'まずは無料で' : 'Start Free'}
          title={isJa ? '今すぐ始めましょう' : "Let's get started"}
          subtitle="polastack.io/signup"
        />
      </SlideDeck>
    );
  },
};

export const SlideLayouts: Story = {
  render: (_, { globals }) => {
    const isJa = globals.locale === 'ja';
    return (
      <SlideDeck dark>
        <TitleSlide
          title={isJa ? 'タイトルスライド' : 'Title Slide'}
          subtitle={isJa ? 'badge・タイトル・サブタイトルの構成' : 'Badge, title, and subtitle layout'}
          badge="Badge"
        />
        <ContentSlide
          title={isJa ? 'コンテンツスライド' : 'Content Slide'}
          subtitle={isJa ? '見出し + 自由なコンテンツ' : 'Heading + free-form content'}
        >
          <SlideText fontSize="20px" color={colors.neutral[300]}>
            {isJa
              ? 'このエリアにはReactコンポーネント、リスト、画像、コードなど何でも配置できます。'
              : 'This area can contain any React components, lists, images, code, etc.'}
          </SlideText>
        </ContentSlide>
        <SplitSlide
          title={isJa ? 'スプリットスライド' : 'Split Slide'}
          left={
            <Box>
              <SlideText fontSize="20px" color={colors.neutral[300]}>
                {isJa ? '左カラム' : 'Left column'}
              </SlideText>
            </Box>
          }
          right={
            <Box>
              <SlideText fontSize="20px" color={colors.neutral[300]}>
                {isJa ? '右カラム' : 'Right column'}
              </SlideText>
            </Box>
          }
        />
        <StatSlide
          title={isJa ? 'スタットスライド' : 'Stat Slide'}
          stats={[
            { value: '100%', label: isJa ? '指標A' : 'Metric A' },
            { value: '50x', label: isJa ? '指標B' : 'Metric B' },
            { value: '24/7', label: isJa ? '指標C' : 'Metric C' },
          ]}
        />
        <QuoteSlide
          quote={isJa ? 'これは引用スライドのサンプルです。' : 'This is a sample quote slide.'}
          author={isJa ? '田中太郎' : 'Taro Tanaka'}
          role="CEO"
          company="Example Inc."
        />
      </SlideDeck>
    );
  },
};
