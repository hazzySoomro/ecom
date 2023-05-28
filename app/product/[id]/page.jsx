import React from 'react';
import { useRouter } from 'next/router';

async function ProductPage() {
  const router = useRouter();
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return (
    <div>
      <div>
        <div>
          <p>Post: {router.query.id}</p>
          <h1>{product.title}</h1>
          <h2>${product.price}</h2>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
