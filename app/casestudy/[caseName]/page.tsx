
type Props = {
   params:{ caseName: string}
}
import { StickyScrollRevealDemo } from '@/components/StickyScroll';
import { projects } from '@/data'
import { useState } from 'react';

type Project = {
  link: string;
  title: string;
  // Add other properties of the project if necessary
};

function page({ params }: Props) {

  const caseStudyName = params.caseName
  let p: Project | undefined;

  projects.forEach(project => {
   
    if (project.link === `/${caseStudyName}`) {
      console.log(`${project.link} and /${caseStudyName}`)
      // setCaseStudy(project);
      p = project;
      
    }
    
    
  })
  return p ? <div>
   < StickyScrollRevealDemo/>
    {p.title}</div> : <>Not Found</>
}
export default page