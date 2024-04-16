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
            <CardTitle>
              {title.substring(0, 50).toUpperCase()}
            </CardTitle>
            <CardContent 
              style={{backgroundImage: `url(${media})`}} 
            />
          </CardHeader>
          <CardFooter>
            <p>
              <i>{author.substring(0, 28)}</i>
            </p>
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
