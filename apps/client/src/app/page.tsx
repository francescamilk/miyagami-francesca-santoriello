import Image from 'next/image'

export default async function Index() {
  return (
    <main className='bg-slate-600 h-screen w-full'>
      <div className='container'>
        <section id='header' className='flex items-center pt-10'>
          <h1 className='text-4xl font-bold tracking-tighter text-slate-50 mr-4'>The Miyagami Flickr Finder</h1>
          <Image src='/flickr.png' alt='Flickr logo' width='50' height='50' />
        </section>
        <section id='feed' className='h-[85vh] w-full mt-4 overflow-x-hidden overflow-y-scroll'>
        </section>
      </div>
    </main>
  );
}