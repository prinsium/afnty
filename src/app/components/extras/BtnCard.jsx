import designer from "@/app/assets/designer.svg";
import photo from "@/app/assets/photo.svg";
import publisher from "@/app/assets/publisher.svg";
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

export default function BtnCard() {
  return (
    <div>
      {crd.map((item) => (
        <div key={item.id}>
          <div className="h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
          hover:bg-opacity-30">
            <div className="flex flex-row justify-start items-center gap-8">
              <Image
                src={item.img}
                alt={item.title1}
                width={100}
                height={100}
              />
              <div className="flex flex-col">
                <h3>{item.title1}</h3>
                <p>{item.title2}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
