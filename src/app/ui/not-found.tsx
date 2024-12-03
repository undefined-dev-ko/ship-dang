'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  const { back: routerBack } = useRouter();

  return (
    <div className="mx-auto flex h-full max-w-screen-sm flex-col items-center justify-center gap-4 bg-slate-50 px-2">
      <div className="flex flex-col items-center justify-center">
        <p className="font-paytoneOne text-lg tracking-wide text-zinc-300">OOPS! PAGE NOT FOUND</p>

        <strong className="font-paytoneOne text-6xl tracking-widest text-zinc-700">404</strong>
      </div>

      <Button
        variant="outline"
        className="font-notoSansKR text-xs text-zinc-600"
        onClick={routerBack}>
        Go Back
      </Button>
    </div>
  );
}
