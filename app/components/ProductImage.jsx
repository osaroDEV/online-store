// 'use client'

// import React from 'react';
// import { Image, Transformation } from 'cloudinary-react';

// const ProductImage = ({ publicId }) => {
//   return (
//     <Image
//       publicId={publicId}
//       width='auto'
//       dpr='auto'
//       responsive
//       crop='scale'
//       breakpoints={[
//         { width: 400, dpr: 'auto' },
//         { width: 800, dpr: 'auto' },
//       ]}
//       alt=''
//     >
//       <Transformation quality='auto' fetchFormat='auto' />
//     </Image>
//   );
// };

// export default ProductImage;

import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

const ProductImage = () => {
  const publicId = 'dlahyjhur/image/upload/chair_tgee3u.jpg'; // Replace with your actual Cloudinary publicId

  try {
    return (
      <Image
        publicId={publicId}
        width="auto"
        dpr="auto"
        responsive
        crop="scale"
        breakpoints={[{ width: 400, dpr: 'auto' }, { width: 800, dpr: 'auto' }]}
        alt=''
      >
        <Transformation quality="auto" fetchFormat="auto" />
      </Image>
    );
  } catch (error) {
    console.error('Cloudinary Error:', error);
    return null; 
  }
};

export default ProductImage;
