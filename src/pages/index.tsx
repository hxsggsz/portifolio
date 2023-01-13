import { useRouter } from 'next/router'
import { Language } from '../components/Language'

export default function Home() {
  function randomNumber() {
    return Math.floor(Math.random() * 2)
  }

  const router = useRouter()

  function handleClick() {
    //redireciona o usuário com base no número que vem dessa função
    let value = randomNumber()
    value == 0 && router.push('/teste')
    value == 1 && router.push('/opcao')
  }

  return (
    <>
      <h1 onClick={handleClick}>home</h1>
      <Language />
    </>
  )
}
