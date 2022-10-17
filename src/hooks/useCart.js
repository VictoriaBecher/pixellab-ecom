// import { useEffect, useState } from 'react';
// import { baseUrl } from '..';

// export const useCart = (cardId = 2) => {
//   const [cart, setCart] = useState(null);

//   useEffect(() => {
//     fetch(`${baseUrl}/carts/${cardId}`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((result) => {
//         setCart(result);
//       });
//   }, []);

//   return cart;
// };
