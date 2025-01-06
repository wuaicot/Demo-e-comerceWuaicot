import { Carousel } from 'components/carousel';

import { ThreeItemGrid } from 'components/grid/three-items';

import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';


export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Collections />
      <ThreeItemGrid />
      <Carousel />
      <Footer />
      
      
    </>
  );
}
