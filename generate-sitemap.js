const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://www.aonetutions.com' });

sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });
sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.8 });

sitemap.end();

streamToPromise(sitemap).then((data) =>
  createWriteStream('./public/sitemap.xml').write(data)
);
