import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakeUpdateInput } from './make-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MakeWhereUniqueInput } from './make-where-unique.input';

@ArgsType()
export class UpdateOneMakeArgs {

    @Field(() => MakeUpdateInput, {nullable:false})
    @Type(() => MakeUpdateInput)
    data!: MakeUpdateInput;

    @Field(() => MakeWhereUniqueInput, {nullable:false})
    @Type(() => MakeWhereUniqueInput)
    where!: Prisma.AtLeast<MakeWhereUniqueInput, 'id' | 'makeId'>;
}
