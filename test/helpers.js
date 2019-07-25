const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Elias Homsi',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Elias Homsi',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Elias Homsi',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Elias Homsi',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Elias Homsi',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
