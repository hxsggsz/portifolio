import React from "react";
import * as yup from "yup";
import { useRouter } from "next/router";
import { MagnifyingGlass } from "phosphor-react";
import { StyledGet } from "../../../styles/index";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from "react-hook-form";

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

export default function Get() {
   const route = useRouter()

   const { register, handleSubmit, formState: { errors }, } = useForm<InputTypes>({
      resolver: yupResolver(schema),
   });

   const onSubmit: SubmitHandler<InputTypes> = ({ search }) => {

      if (search === "certificate" || search === "certificates") {
         route.push("/en/get/certificate")
      }
      if (search === "project" || search === "projetcts") {
         route.push("/en/get/projects")
      }
      if (search === "language" || search === "lkanguages") {
         route.push("/en/get/languages")
      }
      if (search === 'landing page') {
         route.push("/en/get/LandingPageEn")
      }
      else {
         route.push("/en/get/notFound")
      }
   }

   return (
      <StyledGet>
         <h1>Get( )</h1>

         <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='search'>
               <input autoComplete="off" {...register("search")} />
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