import type { Metadata } from 'next'

import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'sonner'
import { ModalProvider } from '@/providers/modal-provider'
import { QueryProvider } from '@/providers/query-provider'



export default function PlatformLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <QueryProvider>
                <Toaster />
                <ModalProvider />
                {children}
            </QueryProvider>

        </ClerkProvider>
    )
}
