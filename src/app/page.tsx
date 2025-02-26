import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Welcom to Next.js</h1>
          <Image
            aria-hidden
            src="/vercel.svg"
            alt="File icon"
            width={72}
            height={16}
          />
    </main>
  );
}
