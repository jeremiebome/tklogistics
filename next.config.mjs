/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // important : exporter en HTML statique
  basePath: '',            // si ton site est à la racine du repo
  images: {
    unoptimized: true,     // Next.js ne peut pas optimiser sur Github Pages
  },
};

export default nextConfig;
