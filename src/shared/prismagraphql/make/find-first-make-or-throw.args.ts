import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakeWhereInput } from './make-where.input';
import { Type } from 'class-transformer';
import { MakeOrderByWithRelationInput } from './make-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MakeWhereUniqueInput } from './make-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MakeScalarFieldEnum } from './make-scalar-field.enum';

@ArgsType()
export class FindFirstMakeOrThrowArgs {

    @Field(() => MakeWhereInput, {nullable:true})
    @Type(() => MakeWhereInput)
    where?: MakeWhereInput;

    @Field(() => [MakeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MakeOrderByWithRelationInput>;

    @Field(() => MakeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MakeWhereUniqueInput, 'id' | 'makeId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MakeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MakeScalarFieldEnum>;
}
