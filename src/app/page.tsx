// import Image from "next/image";


export const revalidate = 5;

export default async function Home() {
  return (
    <main>
      {/* <h1>Welcom to Next.js</h1>
          <Image
            aria-hidden
            src="/vercel.svg"
            alt="File icon"
            width={72}
            height={16}
          /> */}


      <div>{Date.now()}</div>    
        
    </main>
  );
}
