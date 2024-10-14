import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypeWhereInput } from './type-where.input';
import { Type } from 'class-transformer';
import { TypeOrderByWithRelationInput } from './type-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TypeWhereUniqueInput } from './type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TypeScalarFieldEnum } from './type-scalar-field.enum';

@ArgsType()
export class FindManyTypeArgs {

    @Field(() => TypeWhereInput, {nullable:true})
    @Type(() => TypeWhereInput)
    where?: TypeWhereInput;

    @Field(() => [TypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TypeOrderByWithRelationInput>;

    @Field(() => TypeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TypeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TypeScalarFieldEnum>;
}
