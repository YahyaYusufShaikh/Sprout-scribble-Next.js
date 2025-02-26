import Link from "next/link";

export default function About(){
    return (
        <div>
            <h1>About</h1>
            <h2>This is About page</h2>
            <Link href="/">Go back home</Link>
        </div>
    )
}