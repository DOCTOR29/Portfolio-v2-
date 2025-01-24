import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

type Props = {}

function Grid({}: Props) {
  return (
    <section id='about'>
          <BentoGrid>
              {gridItems.map(({ id, img, imgClassName, className, spareImg, title,description,titleClassName }) => (
                  <BentoGridItem
                      id={id}
                      key={id}
                      title={title}
                  description={description}
                  className={className}
                  img={img}
                  imgClassName={imgClassName}
                  titleClassName={titleClassName}
                  spareImg={spareImg}

                  
                  />
              ))}
        </BentoGrid>
          
    </section>
  )
}

export default Grid