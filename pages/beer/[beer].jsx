import { ProductDetails } from '../../components';

const Beer = () => {
  const placeholder = {
    name: 'Fortunate Islands',
    imgSrc: '../images/beer/sm/FortunateIslands4Pack_480x.webp',
    imgDesc: 'beer product',
    style: 'Beer Style: Hoppy Pale Ale',
    styleInfo: '5.0% ABV • 16 FL OZ',
    notes: 'Notes: Mango - Tangerine - Passionfruit',
    qty: 'Quantity : 4 Pack',
    price: '$12',
    description:
      'Fortunate Islands combines the bangin hop aroma of an über-tropical IPA with the crisp, deeply quenching drinkability of a killer pale ale. We achieve this magical result by starting with a mild, nutty malt backbone, then dry-hopping the bejesus out of it with Citra and Amarillo hops. Restrained bitterness and vibrant notes of mango, tangerine, and passionfruit combine to form a sessionable crusher of mind-bending proportions. It tastes like wizards.',
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

export default Beer;
