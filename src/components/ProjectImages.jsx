"use client";
import Image from "next/image";
import React from "react";
import { FrontSide } from "three";

export default function ProjectImages(props) {
  return (
    <div className="project-images">
      <Image
        src="/test.png"
        alt="fsdf"
        width={500}
        height={500}
        className="project-images__img"
      />
    </div>
  );
}
