import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto flex h-full max-w-screen-sm flex-col bg-slate-50 px-2">
      <span className="font-notoSansKR text-xl text-zinc-800">Home</span>

      <ul>
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index}>
            <Link key={index} href={`/detail/${index + 1}`} className="text-zinc-700">
              Detail {index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
