import React from 'react';
import { Send } from 'lucide-react';

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from './card';

import type { Photo } from '@shared/types';

const FeedCard = ({ title, author, media, link }: Photo) => {
  const handleSharing = () => {
    const encodedLink = encodeURIComponent(link);
    const message = `Check out this photo: ${encodedLink}`;

    window.open(`https://api.whatsapp.com/send?text=${message}`);
  }

  return (
    <div>
        <Card className='cursor-default'>
          <CardHeader>
            <CardTitle className='h-12'>
              {title}
            </CardTitle>
            <CardContent 
              style={{backgroundImage: `url(${media})`}}
              className='bg-cover bg-center bg-no-repeat w-full h-48 rounded-md'
            >
            </CardContent>
          </CardHeader>
          <CardFooter className='flex justify-between'>
            <p><i>{author}</i></p>
            <Send 
              className='h-[1.2rem] w-[1.2rem] cursor-pointer'
              onClick={handleSharing}
            />
          </CardFooter>
        </Card>
    </div>
  );
}

export { FeedCard };
