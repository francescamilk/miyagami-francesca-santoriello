'use client'

import { Button } from "./button";
import { Input } from "./input";

export function InputWithButton({ placeholder }: { placeholder: string }) {
  return (
    <form className="flex w-full max-w-2xl mt-4 items-center space-x-2">
      <Input 
        type="text" 
        id="tags" 
        name="tags"
        placeholder={placeholder}
        className="rounded-lg shadow-lg grow py-2 pl-4" 
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
