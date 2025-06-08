"use client";

import { useState } from "react";
import designer from "@/app/assets/designer.svg";
import photo from "@/app/assets/photo.svg";
import publisher from "@/app/assets/publisher.svg";
import wdos from "@/app/assets/wdos.svg";
import aplos from "@/app/assets/aplos.svg";
import Image from "next/image";

const crd = [
  {
    id: 1,
    img: designer,
    title1: "Affinity",
    title2: "Designer 2",
  },
  {
    id: 2,
    img: photo,
    title1: "Affinity",
    title2: "Photo 2",
  },
  {
    id: 3,
    img: publisher,
    title1: "Affinity",
    title2: "Publisher 2",
  },
];

export default function ProductsDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <li className="flex items-center gap-1 hover:text-black transition cursor-pointer">
        Products <span>⌄</span>
      </li>

      {/* Dropdown */}
      {open && (
        <div className="absolute p-4 bg-white shadow-lg rounded-md border flex gap-4 z-50">
          {/* Left column – Individual apps */}
          <div className="flex flex-col gap-3">
            {crd.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 border rounded-md bg-white w-[220px] hover:bg-gray-50 hover:scale-[1.03] cursor-pointer transition duration-400 ease-in-out"
              >
                <Image
                  src={item.img}
                  alt={item.title1}
                  width={50}
                  height={50}
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-md">{item.title1}</span>
                  <span className="text-sm text-gray-600">{item.title2}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right column – Bundle & Platforms */}
          <div className="flex flex-col justify-between gap-4 p-4 border rounded-md bg-gray-100 w-[250px] hover:scale-[1.03] cursor-pointer transition duration-400 ease-in-out">
            {/* All apps bundle */}
            <div>
              <div className="flex gap-2 mb-2">
                <Image src={designer} alt="designer" width={50} height={50} />
                <Image src={photo} alt="photo" width={50} height={50} />
                <Image src={publisher} alt="publisher" width={50} height={50} />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-md">All Apps Bundle</span>
                <span className="text-sm text-gray-600">Designer 2, Photo 2, Publisher 2</span>
              </div>
            </div>

            {/* All platforms */}
            <div>
              <div className="flex gap-2 mb-2">
                <Image src={wdos} alt="apple" width={30} height={30} />
                <Image src={aplos} alt="windows" width={30} height={30} />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-md">All Platforms</span>
                <span className="text-sm text-gray-600">Windows, MacOS, iPadOS</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
