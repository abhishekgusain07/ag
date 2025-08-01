"use client";
import React from "react";
import { I_Heading } from "@/types/project";
import { bricolage_grotesque } from "@/lib/fonts";

const Title = ({ title }: I_Heading) => {
  return (
    <div className="px-10">
      <h1
        className={`text-[1.6rem] max-sm:text-2xl font-semibold tracking-tight text-start max-sm:text-center ${bricolage_grotesque}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
