import React from 'react';
import Image from 'next/image';
import data from '../app/productGalleryData';

const ProductGallery = () => {
  const products = data.map((product) => {
    return (
      <>
        <section key={product.product} className='m-6'>
          <div className='relative w-full'>
            <Image
              src={product.src}
              width={350}
              height={400}
              alt={product.product}
              className='rounded-md'
            />
            <button className='absolute left-3 bottom-5 bg-black text-white p-[10px_20px] rounded-md'>
              {product.product}
            </button>
          </div>
        </section>
      </>
    );
  });

  return (
    <section className='bg-white pt-[2rem]'>
      <h2 className='text-center font-bold'>Weekly Selection</h2>
      <div className='flex flex-wrap justify-center'>{products}</div>
    </section>
  );
};

export default ProductGallery;
