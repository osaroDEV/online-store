import React from 'react';
import Image from 'next/image';
import data from '../productGalleryData';

const ProductGallery = () => {
  const products = data.map((product) => {
    return (
      <section key={product.product} className='m-6 border-black bottom-2'>
        <div className='relative w-full h-[350px]'>
          <Image
            src={product.src}
            fill={true}
            alt={product.product}
            className='absolute top-0 left-0 rounded-md'
          />
          <button className='absolute left-3 bottom-5 block bg-black text-white p-[10px_20px] rounded-md'>
            {product.product}
          </button>
        </div>
      </section>
    );
  });

  return <>{products}</>;
};

export default ProductGallery;
