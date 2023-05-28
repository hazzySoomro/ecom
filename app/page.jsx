'use client';

import Image from 'next/image';
import Link from 'next/link';
import img from '../public/images/pp1.png';

export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-48">
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className="text-5xl font-bold text-center">Deal </h1>
        <div
          className="grid grid-cols-1 gap-y-10 gapx6
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          {' '}
          {products.map((product) => (
            <Link
              href={`/product/${product.id}`}
              className="h-96 flex  flex-col roounded border group hover:scale-105 transition-transform ease-out duration-200"
            >
              <div>
                <Image
                  src={img}
                  alt={product.title}
                  width={200}
                  height={150}
                  className="object-contain duration-700 ease-in-out group-hover:opacity-75"
                />
                <div className="font-semibold flex items-center justify-between mt-4 mb-1">
                  <p className="  truncate w-44">{product.title}</p>
                  <p className="font-medium text-cyan-800">$ {product.price}</p>
                </div>
                <p className="text-xm w-64 line-clamp-2 text-gray-400 italic ">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
