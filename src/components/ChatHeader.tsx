import { FC } from 'react'

interface ChatHeaderProps {
  
}

const ChatHeader: FC<ChatHeaderProps> = ({}) => {
  return <div className='w-full flex gap-3 justify-start items-center text-zinc-800'> 
    <div className='flex flex-col items-start text-sm'>
        <p className='test-xs'>
            Chat With
        </p>
        <div className='flex gap-1.5 items-center'>
            <p className='w-2 h-2 rounded-full bg-green-500'></p>
            <p className='font-medium'>BookBuddy Support</p>
        </div>
    </div>
  </div>

}

export default ChatHeader