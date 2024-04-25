// import Link from "next/link";
// import Image from "next/image";

const dummyImages = [
    'https://utfs.io/f/49f0ecf1-4026-46f2-b5fa-80bd1bf5a26c-iaentp.png',
    'https://utfs.io/f/de0f2f72-ea65-47e7-8643-1ae5ba37970b-8vcn62.png',
    'https://utfs.io/f/ce991f7d-87c2-4247-b110-8e0989409acb-8ecaqx.png',
    'https://utfs.io/f/7e4b015f-9dce-447e-a556-8ac3e8fd3e75-b46776.png',
]

const mockImages = dummyImages.map((image, index) => {
    return {
        id: index,
        imageURL: image
    }
});
export default function HomePage() {
  return (
    <div>
      <div className={"flex flex-wrap gap-4"}>
          {
              mockImages.map((image) => {
                    return (
                        <div key={image.id} className={"flex flex-col"}>
                            <img src={image.imageURL} alt={"image"} className={"w-64 h-64"} />
                        </div>
                    )
                })
          }
      </div>
    </div>
  );
}
