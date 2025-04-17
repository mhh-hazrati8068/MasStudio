// src/components/__tests__/Hello.test.tsx

import { render, screen } from '@testing-library/react';

const Hello = () => <div>Hello, Jest!</div>;

describe('Hello component', () => {
  it('renders correctly', () => {
    render(<Hello />);
    expect(screen.getByText('Hello, Jest!')).toBeInTheDocument();
  });
});
