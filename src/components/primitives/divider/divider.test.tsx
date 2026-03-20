import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Divider } from './divider';

describe('Divider', () => {
  it('hr要素としてレンダリングする', () => {
    const { container } = render(<Divider />);
    expect(container.querySelector('hr')).toBeInTheDocument();
  });

  it('variantを適用する', () => {
    const { container } = render(<Divider variant="brand" />);
    expect(container.firstChild).toHaveClass('via-primary-500');
  });

  it('spacingを適用する', () => {
    const { container } = render(<Divider spacing="lg" />);
    expect(container.firstChild).toHaveClass('my-12');
  });
});
