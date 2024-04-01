import { useZustandStore } from '../store/form-store'
import { useEffect } from 'react'

export function Redirect() {
  const { zustandState, nameUser } = useZustandStore()

  useEffect(() => {
    if (!zustandState) {
      window.location.href = '/en'
    }
  }, [zustandState])

  return <>{nameUser}</>
}
