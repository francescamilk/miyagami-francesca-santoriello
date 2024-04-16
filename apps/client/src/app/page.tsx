// import Image from 'next/image'

import { 
  ModeToggle,
  InputWithButton,
} from '@miyagami-francesca-santoriello/ui-components';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@miyagami-francesca-santoriello/ui-components';

import { Send } from "lucide-react"

import type { Photo } from '@shared/types';

export default async function Index() {
  const response = await fetch('http://localhost:3000/api/v1/photos');
  const photos: Photo[] = await response.json();

  return (
    <main className='bg-slate-50 dark:bg-black h-screen w-full'>
      <div className='container'>
        <header className='flex items-center justify-between pt-10'>
          <div>
            <h1 className='text-4xl font-bold tracking-tighter text-black dark:text-slate-50 mr-4'>The Miyagami Flickr Finder</h1>
            {/* <Image src='/flickr.png' alt='Flickr logo' width='50' height='50' /> */}
          </div>
          <ModeToggle />
        </header>
        <InputWithButton></InputWithButton>
        <section id='feed' className='h-[78vh] w-full mt-8 overflow-x-hidden overflow-y-scroll'>
          <div className="grid grid-cols-3 gap-4">
            {photos.map((photo) => (
              <Card key={photo.id} className='cursor-default'>
                <CardHeader>
                  <CardTitle className='h-12'>
                    {photo.title}
                  </CardTitle>
                  <CardContent 
                    style={{backgroundImage: `url(${photo.media})`}}
                    className='bg-cover bg-center bg-no-repeat w-full h-48 rounded-md'
                  >
                  </CardContent>
                </CardHeader>
                <CardFooter className='flex justify-between'>
                  <p><i>{photo.author}</i></p>
                  <Send className='h-[1.2rem] w-[1.2rem] cursor-pointer' />
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}