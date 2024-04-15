import { Button } from "./button"
import { Input } from "./input"

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-2xl mt-4 items-center space-x-2">
      <Input 
        type="text" 
        id="tags" 
        name="tags"
        placeholder='Search multiple tags separeting by comma...'
        className="rounded-lg shadow-lg grow py-2 pl-4" 
      />
      <Button type="submit">Search</Button>
    </div>
  )
}
