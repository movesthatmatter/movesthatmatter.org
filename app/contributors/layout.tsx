import Header from '@/app/_components/Header/Header';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-mono p-6">
      <Header />
      <main className="mx-auto min-h-screen w-full py-8 text-black">
        <div
          className="prose prose-lg sdark:prose-invert
              prose-h1:font-bold prose-h1:text-3xl
              sprose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl
              sprose-headings:underline"
        >
          {children}
        </div>
      </main>
    </div>
  );
}
