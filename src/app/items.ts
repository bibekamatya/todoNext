// import { useState, useEffect } from 'react';

// interface Item {
//   image: string;
// }

//  function useItems() {
//   const [items, setItems] = useState<Item[]>([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const response = await fetch(`https://fakestoreapi.com/products`);
//     const data = await response.json();
//     setItems(data);
//   };

//   return {items}
// }
// export default useItems