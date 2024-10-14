import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypeWhereUniqueInput } from './type-where-unique.input';
import { Type } from 'class-transformer';
import { TypeCreateInput } from './type-create.input';
import { TypeUpdateInput } from './type-update.input';

@ArgsType()
export class UpsertOneTypeArgs {

    @Field(() => TypeWhereUniqueInput, {nullable:false})
    @Type(() => TypeWhereUniqueInput)
    where!: Prisma.AtLeast<TypeWhereUniqueInput, 'id'>;

    @Field(() => TypeCreateInput, {nullable:false})
    @Type(() => TypeCreateInput)
    create!: TypeCreateInput;

    @Field(() => TypeUpdateInput, {nullable:false})
    @Type(() => TypeUpdateInput)
    update!: TypeUpdateInput;
}
