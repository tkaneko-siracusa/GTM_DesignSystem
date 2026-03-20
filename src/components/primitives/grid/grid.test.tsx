import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Grid } from './grid';

describe('Grid', () => {
  it('子要素をレンダリングする', () => {
    render(
      <Grid>
        <div>アイテム1</div>
        <div>アイテム2</div>
      </Grid>,
    );
    expect(screen.getByText('アイテム1')).toBeInTheDocument();
    expect(screen.getByText('アイテム2')).toBeInTheDocument();
  });

  it('columnsバリアントを適用する', () => {
    const { container } = render(<Grid columns={4}>内容</Grid>);
    expect(container.firstChild).toHaveClass('lg:grid-cols-4');
  });

  it('gapバリアントを適用する', () => {
    const { container } = render(<Grid gap="lg">内容</Grid>);
    expect(container.firstChild).toHaveClass('gap-8');
  });
});
