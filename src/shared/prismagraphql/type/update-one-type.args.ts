import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypeUpdateInput } from './type-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TypeWhereUniqueInput } from './type-where-unique.input';

@ArgsType()
export class UpdateOneTypeArgs {

    @Field(() => TypeUpdateInput, {nullable:false})
    @Type(() => TypeUpdateInput)
    data!: TypeUpdateInput;

    @Field(() => TypeWhereUniqueInput, {nullable:false})
    @Type(() => TypeWhereUniqueInput)
    where!: Prisma.AtLeast<TypeWhereUniqueInput, 'id'>;
}
