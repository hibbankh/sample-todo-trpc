/******************************************************************************
* This file was generated by ZenStack CLI 2.9.1.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { db } from ".";
import { createTRPCRouter } from "../../_app";
import { procedure } from "../../_app";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';

export default function createRouter() {
    return createTRPCRouter({

        aggregate: procedure.input($Schema.SpaceInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).space.aggregate(input as any))),

        createMany: procedure.input($Schema.SpaceInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).space.createMany(input as any))),

        create: procedure.input($Schema.SpaceInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).space.create(input as any))),

        deleteMany: procedure.input($Schema.SpaceInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).space.deleteMany(input as any))),

        delete: procedure.input($Schema.SpaceInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).space.delete(input as any))),

        findFirst: procedure.input($Schema.SpaceInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).space.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.SpaceInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).space.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.SpaceInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).space.findMany(input as any))),

        findUnique: procedure.input($Schema.SpaceInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).space.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.SpaceInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).space.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.SpaceInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).space.groupBy(input as any))),

        updateMany: procedure.input($Schema.SpaceInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).space.updateMany(input as any))),

        update: procedure.input($Schema.SpaceInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).space.update(input as any))),

        upsert: procedure.input($Schema.SpaceInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).space.upsert(input as any))),

        count: procedure.input($Schema.SpaceInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).space.count(input as any))),

    }
    );
}
