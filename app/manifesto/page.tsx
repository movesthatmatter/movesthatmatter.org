import Image from 'next/image';
import Header from '../_components/Header/Header';
import Content from './content.mdx';

export default function Manifesto() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-mono p-6">
      <Header />
      <main className="mx-auto min-h-screen w-full py-8 text-black">
        <div
          className="prose sdark:prose-invert
            prose-h1:font-bold prose-h1:text-xl
            prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl
            prose-headings:underline"
        >
          <Content />
        </div>
      </main>
    </div>
  );
}
