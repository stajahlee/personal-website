const matchers = require('jest-extended');
const nextRouterMock = require('next-router-mock');

expect.extend(matchers);

afterEach(() => {
  jest.useRealTimers();
});

jest.mock('next/router', () => nextRouterMock);

jest.mock('next/navigation', () => {
  const { useRouter } = nextRouterMock
  const usePathname = () => {
    const router = useRouter()
    return router.pathname
  }

  const useSearchParams = () => {
    const router = useRouter()
    return new URLSearchParams(router.query)
  }

  return {
    useRouter,
    usePathname,
    useSearchParams
  }
});

export class IntersectionObserver {
  root = null;
  rootMargin = '';
  thresholds = [];
 
  disconnect() {
    return null;
  }
 
  observe() {
    return null;
  }
 
  takeRecords() {
    return [];
  }
 
  unobserve() {
    return null;
  }
}
window.IntersectionObserver = IntersectionObserver;
global.IntersectionObserver = IntersectionObserver;