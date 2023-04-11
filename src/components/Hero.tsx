/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi! My Name is Fadhilla Ilham Robbani",
      "Undergraduate Student in Universitas Bengkulu",
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircle />
      <img
        src="https://images.unsplash.com/photo-1520315342629-6ea920342047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVsdWdhJTIwY2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        alt="profil"
        className="relative mx-auto  h-32 w-32  rounded-full object-cover"
      />
      <h1 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
        Fullstack Developer
      </h1>
      <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
        <span>{text}</span>
        <Cursor cursorColor="#FFD93D" />
      </h1>
      <button>fdf</button>
      <button>fdfda</button>
      <button>fdf</button>
    </div>
  );
};

export default Hero;
