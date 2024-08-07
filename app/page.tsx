import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <div className="text-4xl font-black">From sketch to art</div>
      <div className="text-xl">Using generative AI</div>
      <div className="xs:flex-col lg:flex justify-center gap-4 font-black">
        <Image
          src="/eztia01.png"
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <Image
          src="/ezty.png"
          width={300}
          height={300}
          alt="Picture of the author"
        />

        <Image
          src="/eztia02.png"
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </div>
    </main>
  );
}
