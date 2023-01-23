import { MagnifyingGlass } from 'phosphor-react';
import { StyledGet } from './index';
import { Dispatch, FormEvent, FormEventHandler, MouseEventHandler, SetStateAction } from 'react';

type SearchTypes = {
   onSubmitForm: (event: FormEvent<HTMLFormElement>) => void;
   info: MouseEventHandler<HTMLButtonElement> | undefined;
   search: string;
   setSearch: Dispatch<SetStateAction<string>>
}

export const Search = ({ onSubmitForm, info, search, setSearch }: SearchTypes) => {
   return (
      <StyledGet>
         <h1>Get( )</h1>

         <form onSubmit={onSubmitForm}>
            <label htmlFor='search'>
               <input value={search} onChange={(ev) => setSearch(ev.currentTarget.value)} type="text" name="search" />
               <MagnifyingGlass size={24} />
            </label>

            <div className='buttons'>
               <button onClick={info}>help</button>
               <button type="submit">Search</button>
            </div>
         </form>
      </StyledGet>
   )
}