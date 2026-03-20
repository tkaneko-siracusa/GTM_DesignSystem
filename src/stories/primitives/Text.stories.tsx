import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../components/primitives/text';

const meta: Meta<typeof Text> = {
  title: 'Primitives/Text',
  component: Text,
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const SizesAndTones: Story = {
  render: (_, { globals }) => {
    const isJa = globals.locale === 'ja';
    const bodyText = isJa
      ? '8モジュール統合のEnterprise Agent Stackで、エンタープライズグレードの業務アプリを高速に構築。'
      : 'Build enterprise-grade business applications rapidly with an 8-module integrated Enterprise Agent Stack.';

    return (
      <div className="space-y-6 p-8">
        <div className="space-y-2">
          <Text size="overline" tone="brand">OVERLINE</Text>
          <Text size="body-lg">{bodyText}</Text>
          <Text size="body-md" tone="secondary">{bodyText}</Text>
          <Text size="body-sm" tone="muted">{bodyText}</Text>
          <Text size="caption" tone="muted">Caption text / キャプションテキスト</Text>
        </div>
      </div>
    );
  },
};
