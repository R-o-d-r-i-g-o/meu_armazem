"use client";

import { FC } from "react";

import Header from "@/components/common/Header";
import MainButton from "@/components/common/MainButton";
import NavBar from "@/components/common/NavBar";
import { useRouter } from "next/navigation";
import { MenuElementProps } from "./types";
import data from "./data.json";

const Menu = () => {
  const router = useRouter();
  return (
    <>
      <NavBar />
      <section className="mt-[3rem]">
        <Header title="Utilitários" subtitle="Conheça nossas ferramentas" />
        <div className="mt-24 md:32 lg:mt-8 px-4 md:px-[9rem] md:pt-6">
          {data.map((el) => (
            <MenuItem
              key={el.text}
              action={() => router.push(el.href)}
              {...el}
            />
          ))}
        </div>
      </section>
    </>
  );
};

const MenuItem: FC<MenuElementProps> = ({ action, text, title }) => (
  <div className="flex gap-4 md:gap-8 items-center">
    <MainButton text="Explorar" action={action} />
    <div>
      <p className="text-lightBlue font-bold text-2xl ">{title}</p>
      <p className="text-customLightGray text-[1.2rem] mt-4 mb-4 md:mb-8">
        {text}
      </p>
      <hr />
    </div>
  </div>
);

export default Menu;
