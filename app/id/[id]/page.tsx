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
    if (book) {
      const basket = JSON.parse(localStorage.getItem("basket") || "[]");
      const updatedBasket = [...basket, book];

      localStorage.setItem("basket", JSON.stringify(updatedBasket));

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
  };

  if (!book) {
    return <div>Kitab tapılmadı və ya yüklənir...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row md:items-start md:justify-center gap-5 p-5">
      <div className="mx-3 my-5 p-3 gap-3 border border-1 w-full md:w-[300px] flex flex-col justify-center items-center">
        <Image
          src={book?.bookPhoto}
          width={300}
          height={300}
          alt="Book photo"
          className="rounded-lg"
        />

        <button
          onClick={addToBasket}
          className="bg-red-800 text-white rounded w-full p-2 border hover:bg-red-700 transition duration-300"
        >
          Səbətə əlavə et
        </button>
      </div>

      <div className="mx-3 my-5 p-3 border border-1 flex flex-col w-full gap-3">
        <h1 className="text-2xl md:text-3xl font-bold">{book?.bookName}</h1>
        <h4 className="text-lg md:text-xl text-gray-500 font-bold">
          {book?.bookAuthor}
        </h4>

        <h5 className="flex">
          <p className="font-bold">Janr:&nbsp;</p>
          <span className="!font-normal">
            {Array.isArray(book?.bookGenre)
              ? book?.bookGenre.join(" | ")
              : book?.bookGenre}
          </span>
        </h5>

        <h5 className="flex">
          <p className="font-bold">İl:&nbsp;</p>
          <span className="!font-normal">{book?.bookYear}</span>
        </h5>

        <h5 className="flex">
          <p className="font-bold">Səhifə sayı:&nbsp;</p>
          <span className="!font-normal">{book?.bookPage}</span>
        </h5>

        <h5 className="flex">
          <p className="font-bold">Qiymət:&nbsp;</p>
          <span className="!font-normal">{book?.bookPrice}&nbsp;</span>
          <span className="ml-1">AZN</span>
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
