import { useSetRecoilState } from 'recoil'
import { participantsState } from '../atom'

export const useAddParticipant = () => {
  const setList = useSetRecoilState(participantsState)
  return (name: string) => {
    return setList((actualList) => [...actualList, name])
  }
}
