"use client";
import React, { useEffect, useState } from "react";
import { IBookData } from "@/Types/TBookData";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import Swal from "sweetalert2";


const BookDetail = () => {
  const [book, setBook] = useState<IBookData | null>(null);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/books/${id}`)
        .then((response) => {
          setBook(response.data);
        })
        .catch((error) => {
          console.error("Kitab yüklənmədi:", error);
        });
    }
  }, [id]);

  const addToBasket = () => {
    if(book) {
      const basket = JSON.parse(localStorage.getItem("basket") || "[]")

      const upteadBasket = [...basket, book]

      localStorage.setItem("basket", JSON.stringify(upteadBasket))

      Swal.fire({
        icon: "success",
        title: "Uğurlu!",
        text: "Kitab səbətə əlavə olundu",
        showConfirmButton: false,
        timer: 2000,
        toast: true,
        position: "top-end",
      }).then(() => {
        router.push("/basket"); 
      });
    }
  }


  



  if (!book) {
    return <div>Kitab tapılmadı və ya yüklənir...</div>;
  }

  return (
    <div className="flex">
    <div className="mx-3 my-5 p-3 gap-3 border border-1 w-[300px] flex flex-col justify-center items-center">
      <Image
        src={book?.bookPhoto}
        width={300}
        height={300}
        alt="Book photo"
      />
     
      <button onClick={addToBasket} className="bg-red-800 text-white rounded w-full p-2 border">Səbətə əlavə et</button>
      
      
        
      
    </div>
    <div className="mx-3 my-5 p-3 border border-1 flex flex-col w-full gap-3">
      <h1 className="text-3xl font-bold">{book?.bookName}</h1>
      <h4 className="text-xl text-gray-500 font-bold">{book?.bookAuthor}</h4>
      <h5 className="flex">
        <p className="font-bold">Janr</p>: {Array.isArray(book?.bookGenre)
                ? book?.bookGenre.join(" | ")
                : book?.bookGenre}
      </h5>
      <h5 className="flex">
        <p className="font-bold">İl</p>: {book?.bookYear}
      </h5>
      <h5 className="flex">
        <p className="font-bold">Səhifə sayı</p>: {book?.bookPage}
      </h5>
      <h5 className="flex">
        <p className="font-bold">Qiymət</p>: {book?.bookPrice} AZN
      </h5>
      <div>
        <p className="font-bold">Qısa məzmun:</p>
        <h6>{book?.bookDescription}</h6>
      </div>
      <div className="flex gap-1">
      <p className="font-bold">Mövcud:</p>
      <h6>{book?.bookCount} ədəd</h6>
      </div>
    </div>
  </div>
  );
};

export default BookDetail;
