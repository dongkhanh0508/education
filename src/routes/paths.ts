// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------
export const PATH_AUTH = {
  homePage: path('', '/'),
};
export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    pageOne: path(ROOTS_DASHBOARD, '/one'),
    pageTwo: path(ROOTS_DASHBOARD, '/two'),
    pageThree: path(ROOTS_DASHBOARD, '/three'),
    pageFour: path(ROOTS_DASHBOARD, '/three'),
  },
  app: {
    root: path(ROOTS_DASHBOARD, '/app'),
    pageFour: path(ROOTS_DASHBOARD, '/app/four'),
    pageFive: path(ROOTS_DASHBOARD, '/app/five'),
    pageSix: path(ROOTS_DASHBOARD, '/app/six'),
  },
  system: {
    root: path(ROOTS_DASHBOARD, '/settings'),
  },

  posts: {
    root: path(ROOTS_DASHBOARD, '/posts'),
    add: path(ROOTS_DASHBOARD, '/posts/add'),
    edit: path(ROOTS_DASHBOARD, '/posts/edit'),
    details: path(ROOTS_DASHBOARD, '/posts/details'),
  },
};
