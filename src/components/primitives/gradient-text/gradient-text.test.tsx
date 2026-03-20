import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GradientText } from './gradient-text';

describe('GradientText', () => {
  it('テキストをレンダリングする', () => {
    render(<GradientText>Polastack</GradientText>);
    expect(screen.getByText('Polastack')).toBeInTheDocument();
  });

  it('bg-clip-textクラスが適用される', () => {
    const { container } = render(<GradientText>テキスト</GradientText>);
    expect(container.firstChild).toHaveClass('bg-clip-text');
    expect(container.firstChild).toHaveClass('text-transparent');
  });

  it('as propでタグを変更できる', () => {
    render(<GradientText as="h1">見出し</GradientText>);
    const el = screen.getByText('見出し');
    expect(el.tagName).toBe('H1');
  });
});
