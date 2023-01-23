import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { StyledGet } from "../../components/Get";
import { MagnifyingGlass } from "phosphor-react";
import { yupResolver } from '@hookform/resolvers/yup';

type InputTypes = {
   search: string;
}

const schema = yup.object({
   search: yup
      .string()
      .required('acho que você deixou o campo em branco!')
      .min(5, 'elabore um pouco mais a sua busca')
      .max(100, 'você não pode ter mais de 100 caracteres')
})

export default function Teste() {
   const { register, handleSubmit, formState: { errors } } = useForm<InputTypes>({
      resolver: yupResolver(schema),
   });

   const onSubmit: SubmitHandler<InputTypes> = ({ search }) => {
      console.log(search);
   }

   return (
      <StyledGet>
         <h1>Get( )</h1>

         <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='search'>
               <input {...register("search")} />
               <MagnifyingGlass size={24} />
            </label>
            <span>{errors.search?.message}</span>

            <div className='buttons'>
               <button >help</button>
               <button type="submit">Search</button>
            </div>
         </form>
      </StyledGet>
   )
}