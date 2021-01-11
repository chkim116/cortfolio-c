import Link from "next/link";

export default function Home() {
    return (
        <>
            <Link
                href={`https://github.com/login/oauth/authorize?client_id=16e55bcb353c5ebe989c&redirect_uri=http://localhost:3000/auth/github/callback`}
            >
                GitHub 아이디로 로그인
            </Link>
        </>
    );
}
