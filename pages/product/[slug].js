import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'
import data from '../../utils/data'

export default function ProductScreen() {
  const { query } = useRouter()
  const { slug } = query
  const product = data.products.find((x) => x.slug === slug)
  if (!product) {
    return <div>Product Not Found</div>
  }
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">첫 화면으로 돌아가기</Link>
      </div>

      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={900}
            layout="responsive"
          ></Image>
        </div>

        <div>
          <ul>
            <li>
              <h1 className="text-lg ">{product.name}</h1>
            </li>
            <li>카테고리: {product.category}</li>
            <li>출판사: {product.brand}</li>
          </ul>
        </div>

        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>{product.price}원</div>
            </div>

            <div className="mb-2 flex justify-between"></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
