import { TRPCClientError, httpBatchLink } from '@trpc/client';
// the generated `createTRPCNext` creates a client with typing that mimics PrismaClient
import { createTRPCNext } from 'server/routers/generated/client/next';
import superjson from 'superjson';
import type { AppRouter } from '../server/routers/_app';

function getBaseUrl() {
    if (typeof window !== 'undefined') return '';

    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    } else {
        return `http://localhost:${process.env.PORT ?? 3000}`;
    }
}

export const trpc = createTRPCNext<AppRouter>({
    config({ ctx }) {
        return {
            links: [
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                    transformer: superjson,
                }),
            ],
        };
    },
    ssr: false,
});

export function isTRPCClientError(
    error: unknown
): error is TRPCClientError<AppRouter> {
    return error instanceof TRPCClientError;
}
