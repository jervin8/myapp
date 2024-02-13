import Link from "next/link";

function Links() {

    return (
        <div>
             <Link href="landing_page">Home</Link>
            <Link href="about">About</Link>
            <Link href="login">Login</Link>
            <Link href="support">Support</Link>
        </div>
    );
}

export default Links