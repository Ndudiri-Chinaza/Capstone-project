import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";


const Landing = () => {
  const [longUrl, setLongUrl] = useState<string>("");
  const navigate =useNavigate();

  const handleShorten = (e : any) => {
    e.preventDefault();
    if(longUrl) navigate(`/auth?createNew=${longUrl}`)
  }


  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-yellow-300 text-center">
        Short links. Great connections.
      </h2>

      <form onSubmit={handleShorten} className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2">
        <Input 
        type="url" 
        value={longUrl}
        placeholder="Enter your long URL" 
        onChange={(e) => setLongUrl(e.target.value)}
        className="h-full flex-1 py-4 px-4"/>
        <Button type="submit" className="h-full" variant="destructive">Shorten</Button>
      </form>

      {/* <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
         Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
        </AccordionItem>
      </Accordion> */}

      
    </div>
  )
}

export default Landing;
