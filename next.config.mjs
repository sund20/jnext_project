/** @type {import('next').NextConfig} 
const nextConfig = {};

export default nextConfig;*/
/** @type {import('next').NextConfig} 
const nextConfig = {
  output: 'export',
};

export default nextConfig;*/
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
