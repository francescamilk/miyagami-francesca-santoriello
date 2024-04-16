"use client"

import { Button } from "./button";
import { Input } from "./input";

import { useSearchParams } from "next/navigation";

export function InputWithButton() {
  const params = new URLSearchParams();
  const searchParams = useSearchParams().get('tags');

  if (typeof searchParams === 'string' && searchParams.length >= 1) {
    params.append('tags', searchParams);
  }

  return (
    <form className="flex w-full max-w-2xl mt-4 items-center space-x-2">
      <Input 
        type="text" 
        id="tags" 
        name="tags"
        placeholder='Search multiple tags separating by comma...'
        className="rounded-lg shadow-lg grow py-2 pl-4" 
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
