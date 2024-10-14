import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MakeWhereUniqueInput } from './make-where-unique.input';
import { Type } from 'class-transformer';
import { MakeCreateInput } from './make-create.input';
import { MakeUpdateInput } from './make-update.input';

@ArgsType()
export class UpsertOneMakeArgs {

    @Field(() => MakeWhereUniqueInput, {nullable:false})
    @Type(() => MakeWhereUniqueInput)
    where!: Prisma.AtLeast<MakeWhereUniqueInput, 'id' | 'makeId'>;

    @Field(() => MakeCreateInput, {nullable:false})
    @Type(() => MakeCreateInput)
    create!: MakeCreateInput;

    @Field(() => MakeUpdateInput, {nullable:false})
    @Type(() => MakeUpdateInput)
    update!: MakeUpdateInput;
}
