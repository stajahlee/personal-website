import '@testing-library/jest-dom';
import { render, within } from '@testing-library/react';
import WorkDetailsPage from './work-details';
import type { Project } from './work-details';
import { createWorkDetailsProject } from '@/app/factories/work-details-project';

describe('WorkDetailsPage', () => {
  const baseImage = {
    href: '',
    src: '/image.png',
    alt: '',
    caption: '',
  };

  const baseProject: Project = {
    title: '',
    description: '',
    image: baseImage,
    subtitle: '',
  };
  const subject = (project?: Project) => {
    return render(
      <WorkDetailsPage project={project || createWorkDetailsProject()}>
        <h2>I am a child</h2>
      </WorkDetailsPage>,
    );
  };

  it('renders the header', async () => {
    const { getByRole } = subject({ ...baseProject, title: 'The best header' });

    expect(getByRole('heading', { level: 1 })).toHaveTextContent(
      'The best header',
    );
  });

  it('renders a link to the outside resource for the project', async () => {
    const { container } = subject({
      ...baseProject,
      image: { ...baseImage, href: 'https://www.link-to-the.resource' },
    });
    const article = container.querySelector('article') as HTMLElement;

    expect(within(article).getByRole('link')).toHaveAttribute(
      'href',
      'https://www.link-to-the.resource',
    );
  });

  it('renders an image to capture a visual of the project', async () => {
    const { getByRole } = subject({
      ...baseProject,
      image: { ...baseImage, src: '/images/cool-pic.png' },
    });

    expect(getByRole('presentation').getAttribute('src')).toContain(
      'cool-pic.png',
    );
  });

  it('renders the project subtitle for details below the image link', async () => {
    const { getByRole } = subject({
      ...baseProject,
      subtitle: 'Some deets go here',
    });

    expect(getByRole('heading', { level: 4 })).toHaveTextContent(
      'Some deets go here',
    );
  });

  it('renders any children', async () => {
    const { getByRole } = subject();

    expect(getByRole('heading', { level: 2 })).toHaveTextContent(
      'I am a child',
    );
  });
});
