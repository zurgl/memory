import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <div className="text-4xl">From sketch to art, using generative AI</div>
      <div className="xs:flex-col lg:flex justify-center gap-4 font-black">
        <Image
          src="/ezty.png"
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <Image
          src="/eztia01.png"
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
