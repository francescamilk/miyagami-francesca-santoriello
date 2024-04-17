'use client'

// import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { 
  ModeToggle,
  InputWithButton,
  FeedCard
} from '@miyagami-francesca-santoriello/ui-components';

// libs/shared/types.ts
import type { Photo } from '@shared/types';

export default function Index() {
  // access search params from url
  const searchParams = useSearchParams().get('tags');
  // state hook to manage fetched photos
  const [photos, setPhotos] = useState<Photo[]>([]);

  const fetchPhotos = async () => {
    try {
      // if there is a query, use it to construct req url
      const query = typeof searchParams === 'string' ? `?tags=${searchParams}` : '';
      const response = await fetch(`https://miyagami-fs-api.vercel.app/api/v1/photos${query}`);

      const photosData: Photo[] = await response.json();
      setPhotos(photosData);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  }

  // effect hook to trigger fetching when search params change
  useEffect(() => {
    fetchPhotos();
  }, [searchParams]);

  return (
    <main className='h-screen w-full'>
      <div className='container px-24'>
        <header className='flex items-center justify-between pt-10'>
          <div>
            <h1 className='text-4xl font-bold tracking-tighter mr-4'>The Miyagami Flickr Finder</h1>
            {/* <Image src='/flickr.png' alt='Flickr logo' width='50' height='50' /> */}
          </div>
          <ModeToggle />
        </header>
        <InputWithButton
          // send appropriate props depending on search params state
          placeholder={searchParams ? searchParams : 'Search multiple tags separating by comma...'}
          buttonText={searchParams ? 'Reset' : 'Search'}
        />
        <section id='feed' className='h-[76vh] w-full mt-8 overflow-x-hidden overflow-y-scroll'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {photos.map((photo) => (
              <FeedCard 
                key={photo.id}
                title={photo.title}
                author={photo.author}
                media={photo.media}
                link={photo.link}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}