'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Children, FC, ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({children}) => {
    const queryClient = new QueryClient();
    return(
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}

export default Providers