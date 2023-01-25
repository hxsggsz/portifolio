import { StyledCard } from ".";
import Image from "next/image";

type CardTypes = {
   title: string;
   cards: {
      name: string;
      images: string;
      description?: string;
   }[]
}

export const CardGet = ({ title, cards }: CardTypes) => {
   return (
      <StyledCard>
         <h1>{title}</h1>
         {cards.map(card => (
            <div className="card">
               <div className="content">
                  <h1>{card.name}</h1>
                  <p>{card.description}</p>
               </div>
               <Image width={150} height={100} src={card.images} alt={card.name} />
            </div>
         ))}
      </StyledCard>
   )
}