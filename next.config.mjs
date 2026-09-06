import { createMDX } from 'fumadocs-mdx/next';

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGithubPages ? '/watchtower-website' : '';
const devOrigins = ['127.0.0.1', 'localhost'];
if (process.env.REPLIT_DEV_DOMAIN) devOrigins.push(process.env.REPLIT_DEV_DOMAIN);

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: devOrigins,
  reactStrictMode: true,
};

const withMDX = createMDX();

export default withMDX(config);