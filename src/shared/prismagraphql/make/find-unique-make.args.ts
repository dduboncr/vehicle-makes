import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MakeWhereUniqueInput } from './make-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMakeArgs {

    @Field(() => MakeWhereUniqueInput, {nullable:false})
    @Type(() => MakeWhereUniqueInput)
    where!: Prisma.AtLeast<MakeWhereUniqueInput, 'id' | 'makeId'>;
}
