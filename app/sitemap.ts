import { MetadataRoute } from 'next';
import { ObjectConfig, NAV_LINKS } from '@/content/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV_LINKS.map((link) => ({
    url: `${ObjectConfig.url}${link.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: link.href === '/' ? 1 : 0.8,
  }));
}
