import { ProductDetails } from '../../components';

const Coffee = () => {
  const placeholder = {
    name: 'Steady Hand Decaf',
    imgSrc: '../images/coffee/sm/SteadyHandDecaf_12oz_480x.webp',
    imgDesc: 'coffee product',
    style: 'Process Style: Swiss Water Process',
    styleInfo: 'Rotating Single Origin',
    notes: 'Notes: Cherry Cobbler - Raisin - Lemon Bar',
    qty: 'Size: 12 oz',
    price: '$12',
    description:
      'This caffeinated gem hails from the villages of Ethiopia Guji by smallholder producers. These natural process beans produce a delightful cup with notes of plum, dried blueberries, & bakers chocolate. In terms of starting your day off on the right foot, you’d be hard pressed to find a better one than this.',
  };
  return (
    <ProductDetails
      name={placeholder.name}
      imgSrc={placeholder.imgSrc}
      imgDesc={placeholder.imgDesc}
      style={placeholder.style}
      styleInfo={placeholder.styleInfo}
      notes={placeholder.notes}
      qty={placeholder.qty}
      price={placeholder.price}
      description={placeholder.description}
    />
  );
};

export default Coffee;
