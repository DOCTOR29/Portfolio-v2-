'use client'
import {ConfettiButton} from './confetti'

import { Button } from "@/components/ui/button";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
 
export function ConfettiBtn() {

    const [copied, setCopied] = useState(false);

  

    const handleClick = () => {
        navigator.clipboard.writeText('naveedislam545@gmail.com');
        setCopied(true);
    
  };
 
  return (
      <div  className="relative ">
          
          <ConfettiButton disabled={copied}>
              
              <MagicButton title={copied ? 'Email Copied' : 'Copy my email'} icon={<IoCopyOutline />}
                otherClasses="bg-[$161A31]  "
              handleClick={handleClick}
              position="left"
                  />
              </ConfettiButton>
              
      {/* <Button onClick={handleClick}>Trigger Fireworks</Button> */}
    </div>
  );
}