import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypeWhereUniqueInput } from './type-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTypeOrThrowArgs {

    @Field(() => TypeWhereUniqueInput, {nullable:false})
    @Type(() => TypeWhereUniqueInput)
    where!: Prisma.AtLeast<TypeWhereUniqueInput, 'id'>;
}
