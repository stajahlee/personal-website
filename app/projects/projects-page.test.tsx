import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ProjectsPage from './page';

describe('ContactPage', () => {
  const subject = () => {
    return render(<ProjectsPage />);
  };

  it('renders general message', () => {
    const { getByText } = subject();

    expect(getByText(/Check back soon/)).toBeInTheDocument();
  });
});
