import { MetadataRoute } from 'next';
import { ObjectConfig } from '@/content/siteConfig';

export const dynamic = 'force-static'; 

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${ObjectConfig.url}/sitemap.xml`,
  };
}
