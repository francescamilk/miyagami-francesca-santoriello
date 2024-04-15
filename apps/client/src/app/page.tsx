// import Image from 'next/image'
import { ModeToggle } from '@miyagami-francesca-santoriello/ui-components';

export default async function Index() {
  return (
    <main className='bg-slate-50 dark:bg-black h-screen w-full'>
      <div className='container'>
        <section id='header' className='flex items-center justify-between pt-10'>
          <div>
            <h1 className='text-4xl font-bold tracking-tighter text-black dark:text-slate-50 mr-4'>The Miyagami Flickr Finder</h1>
            {/* <Image src='/flickr.png' alt='Flickr logo' width='50' height='50' /> */}
          </div>
          <ModeToggle />
        </section>
        <section id='feed' className='h-[85vh] w-full mt-4 overflow-x-hidden overflow-y-scroll'>
        </section>
      </div>
    </main>
  );
}