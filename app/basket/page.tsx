"use client"
import React, { useEffect, useState } from 'react'
import { IBookData } from '@/Types/TBookData'
import { MdDelete } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/common/Button'

const Basket = () => {

  const [basket, setBasket] = useState<{book: IBookData, count: number}[]>([])

  useEffect(() => {
   
    const bookToBasket: IBookData[] = JSON.parse(localStorage.getItem("basket") || "[]");

    // Əgər səbət boşdursa, onu sıfırlayırıq
    if (bookToBasket.length === 0) {
      localStorage.setItem("basket", JSON.stringify([])); 
      setBasket([]); 
      return;
    }

    const newBook: {book: IBookData, count: number}[] = [];

    bookToBasket.forEach((book) => {
      const updatedBook = newBook.find((item) => item.book.bookID === book.bookID);

      if (updatedBook) {
        updatedBook.count += 1; // Əgər kitab artıq varsa, onun sayını artırırıq
      } else {
        newBook.push({book, count: 1}); // Əgər kitab yeni əlavə olunubsa, onu əlavə edirik
      }
    });

    setBasket(newBook); // Yeni kitablar siyahısını state-ə yükləyirik
  }, [])

  const updateCount = (index: number, amount: number) => {
    setBasket(prevBasket =>
      prevBasket.map((item, i) =>
        i === index ? { ...item, count: Math.max(item.count + amount, 1) } : item
      )
    )
  }

  const removeBookFromBasket = (index: number) => {
    setBasket(prev => prev.filter((_, i) => i !== index))
  }

  const totalPrice = basket.reduce((total, item) => total + item.book.bookPrice * item.count, 0)

  const countBook = basket.length;

  return (
    <div>
      {
        // Səbət boşdursa, bu yazı göstərilir
        countBook === 0 &&
        <div className='flex flex-col gap-10 justify-center items-center min-h-screen'>
          <p className='text-4xl'>Səbətiniz boşdur</p>
          <Link href="/books">
            <Button text='Kitablar siyahısına get'/>
          </Link>
        </div>
      }

      {basket.map((item, index) => (
        <div key={index} className='flex justify-between items-center w-full border border-1 rounded-lg my-5 p-3'>
          <Image src={item.book.bookPhoto} width={80} height={80} alt='Book Photo' />
          <p className='text-xl'>{item.book.bookName}</p>
          <div className='flex justify-center gap-10'>
            <div>
              <button onClick={() => updateCount(index, -1)} className='border border-1 p-2 text-xl'>-</button>
              <span className='p-2 text-xl'>{item.count}</span>
              <button onClick={() => updateCount(index, 1)} className='border border-1 p-2 text-xl'>+</button>
            </div>
            <button onClick={() => removeBookFromBasket(index)} className='bg-red-900 font-semibold text-2xl flex justify-center items-center text-white rounded-lg p-2'>
              <MdDelete />
            </button>
          </div>
        </div>
      ))}

      {countBook > 0 && <p>Ümumi qiymət: {totalPrice.toFixed(2)} AZN</p>}
    </div>
  )
}

export default Basket;
