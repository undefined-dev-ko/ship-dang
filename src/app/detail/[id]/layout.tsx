export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="mx-auto h-full max-w-screen-sm bg-slate-50 px-2">{children}</div>;
}
