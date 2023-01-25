import Link from "next/link";
import { StyledHeader } from ".";

type HeaderTypes = {
   href: string
}

export const Header = ({ href }: HeaderTypes) => {
   return (
      <StyledHeader>
         <Link href={href}>
            <h1>Get( )</h1>
         </Link>
      </StyledHeader>
   )
}