'use client'
import { useEffect, useState } from "react";

type SizeTypes = {
  width: number;
  height: number;
}

const useSizeScreen = () => {
  const initialState = {
    width: 0,
    height: 0
  }

  const [size, setSize] = useState<SizeTypes>(initialState)

  const ChangeSize = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth

      const height = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight

      setSize({ width, height })
    }
  }

  useEffect(() => {
    ChangeSize()

    window.addEventListener('resize', ChangeSize)

  }, [])


  return size
}

export default useSizeScreen