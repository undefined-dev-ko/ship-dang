import { MainDrawer } from './ui/main-drawer';

export default function Home() {
  return (
    <div className="mx-auto flex h-full max-w-screen-sm flex-col bg-slate-50 px-2">
      <span className="font-notoSansKR text-xl text-zinc-800">Home</span>
      <MainDrawer />
    </div>
  );
}
