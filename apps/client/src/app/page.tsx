// import Image from 'next/image'
import { 
  ModeToggle,
  InputWithButton
} from '@miyagami-francesca-santoriello/ui-components';

import type { Photo } from '@shared/types';

export default async function Index() {
  const response = await fetch('http://localhost:3000/api/v1/photos');
  const photos: Photo[] = await response.json();

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
        <InputWithButton></InputWithButton>
        <section id='feed' className='h-[80vh] w-full mt-4 overflow-x-hidden overflow-y-scroll'>
          <div className="grid grid-cols-3 gap-4">
            {photos.map((photo) => (
              <h1>{photo.title}</h1>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}