import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

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
    </>
  )
}
