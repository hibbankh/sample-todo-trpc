/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input($Schema.TodoInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).todo.aggregate(input as any))),

        createMany: procedure.input($Schema.TodoInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).todo.createMany(input as any))),

        create: procedure.input($Schema.TodoInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).todo.create(input as any))),

        deleteMany: procedure.input($Schema.TodoInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).todo.deleteMany(input as any))),

        delete: procedure.input($Schema.TodoInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).todo.delete(input as any))),

        findFirst: procedure.input($Schema.TodoInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).todo.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.TodoInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).todo.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.TodoInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).todo.findMany(input as any))),

        findUnique: procedure.input($Schema.TodoInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).todo.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.TodoInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).todo.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.TodoInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).todo.groupBy(input as any))),

        updateMany: procedure.input($Schema.TodoInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).todo.updateMany(input as any))),

        update: procedure.input($Schema.TodoInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).todo.update(input as any))),

        upsert: procedure.input($Schema.TodoInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).todo.upsert(input as any))),

        count: procedure.input($Schema.TodoInputSchema.count).query(({ ctx, input }) => checkRead(db(ctx).todo.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {

        useQuery: <T extends Prisma.TodoAggregateArgs, TData = Prisma.GetTodoAggregateType<T>>(
            input: Prisma.Subset<T, Prisma.TodoAggregateArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GetTodoAggregateType<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TodoAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.TodoAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetTodoAggregateType<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GetTodoAggregateType<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    createMany: {

        useMutation: <T extends Prisma.TodoCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TodoCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TodoCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TodoCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TodoCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TodoGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TodoGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TodoCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TodoGetPayload<T>, Context>) => Promise<Prisma.TodoGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TodoDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TodoDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TodoDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TodoDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TodoDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TodoGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TodoGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TodoDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TodoGetPayload<T>, Context>) => Promise<Prisma.TodoGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TodoFindFirstArgs, TData = Prisma.TodoGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TodoFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TodoGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TodoFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TodoFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TodoGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TodoGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findFirstOrThrow: {

        useQuery: <T extends Prisma.TodoFindFirstOrThrowArgs, TData = Prisma.TodoGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TodoFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TodoGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TodoFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TodoFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TodoGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TodoGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TodoFindManyArgs, TData = Array<Prisma.TodoGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.TodoFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TodoGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TodoFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TodoFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TodoGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TodoGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TodoFindUniqueArgs, TData = Prisma.TodoGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TodoFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TodoGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TodoFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TodoFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TodoGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TodoGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUniqueOrThrow: {

        useQuery: <T extends Prisma.TodoFindUniqueOrThrowArgs, TData = Prisma.TodoGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TodoFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TodoGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TodoFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TodoFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TodoGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TodoGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    groupBy: {

        useQuery: <T extends Prisma.TodoGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.TodoGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.TodoGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
            ? `Error: "by" must not be empty.`
            : HavingValid extends Prisma.False
            ? {
                [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                : [
                    Error,
                    'Field ',
                    P,
                    ` in "having" needs to be provided in "by"`,
                ]
            }[HavingFields]
            : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            , TData = {} extends InputErrors ? Prisma.GetTodoGroupByPayload<T> : InputErrors>(
                input: Prisma.SubsetIntersection<T, Prisma.TodoGroupByArgs, OrderByArg> & InputErrors,
                opts?: UseTRPCQueryOptions<string, T, {} extends InputErrors ? Prisma.GetTodoGroupByPayload<T> : InputErrors, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.TodoGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.TodoGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.TodoGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
            ? `Error: "by" must not be empty.`
            : HavingValid extends Prisma.False
            ? {
                [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                : [
                    Error,
                    'Field ',
                    P,
                    ` in "having" needs to be provided in "by"`,
                ]
            }[HavingFields]
            : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        >(
            input: Omit<Prisma.SubsetIntersection<T, Prisma.TodoGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, {} extends InputErrors ? Prisma.GetTodoGroupByPayload<T> : InputErrors, Error>
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetTodoGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TodoUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TodoUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TodoUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TodoUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TodoUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TodoGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TodoGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TodoUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TodoGetPayload<T>, Context>) => Promise<Prisma.TodoGetPayload<T>>
            };

    };
    upsert: {

        useMutation: <T extends Prisma.TodoUpsertArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TodoUpsertArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TodoGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TodoGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoUpsertArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TodoUpsertArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TodoGetPayload<T>, Context>) => Promise<Prisma.TodoGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.TodoCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.TodoCountAggregateOutputType>
            : number>(
                input: Prisma.Subset<T, Prisma.TodoCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.TodoCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.TodoCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.TodoCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TodoCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.TodoCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
