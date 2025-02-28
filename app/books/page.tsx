"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IBookData } from '@/Types/TBookData'
import Image from 'next/image'
import Button from '@/components/common/Button'
import Link from 'next/link'

const Books = () => {
  const url = "http://localhost:3000/books"

  const [books, setBooks] = useState<IBookData[]>([])

  useEffect(() => {
    axios.get(url).then((response) => {
      setBooks(response.data)
    }).catch((error) => {
      console.error("Xəta baş verdi!", error);
      
    })
  }, [])

  return (
    <div className='flex flex-wrap gap-5 justify-center'>
      {
        books.map((book : IBookData) => {
          return (
            <div key={book.id} className="border border-solid my-3 p-5 w-[300px] min-h-[450px] flex flex-col justify-between text-center rounded-lg shadow-lg"> 
              <Image src={book.bookPhoto} alt={book.bookName} width={250} height={250} className="mx-auto rounded object-cover aspect-[3/4]"></Image>
              <div>
                <h1>{book.bookName}</h1>
                <h4 className='text-gray-800'>{book.bookAuthor}</h4>
                <p>Qiymət: <span>{book.bookPrice}</span> AZN</p>
              </div>
              <div>
                <Link href={`/id/${book.id}`} className='w-full'><Button text='Ətraflı'/></Link>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Books