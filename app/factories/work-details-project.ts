import { faker } from '@faker-js/faker';
import type { Project } from '../components/types';

export const createWorkDetailsProject = (overrides?: Partial<Project>) => {
  return {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    href: faker.internet.url(),
    src: faker.image.url(),
    alt: faker.commerce.department(),
    caption: faker.music.genre(),
    subtitle: faker.music.songName(),
    ...overrides,
  };
};
