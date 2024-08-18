import { faker } from '@faker-js/faker';
import type { Project } from '../components/layout/work-details';

export const createWorkDetailsProject = (optionalProject?: Project) => {
  return {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: {
      href: faker.internet.url(),
      src: faker.image.url(),
      alt: faker.commerce.department(),
      caption: faker.music.genre(),
    },
    subtitle: faker.music.songName(),
    ...optionalProject,
  };
};
