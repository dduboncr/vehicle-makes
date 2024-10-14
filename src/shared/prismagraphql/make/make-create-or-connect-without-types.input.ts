import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MakeWhereUniqueInput } from './make-where-unique.input';
import { Type } from 'class-transformer';
import { MakeCreateWithoutTypesInput } from './make-create-without-types.input';

@InputType()
export class MakeCreateOrConnectWithoutTypesInput {

    @Field(() => MakeWhereUniqueInput, {nullable:false})
    @Type(() => MakeWhereUniqueInput)
    where!: Prisma.AtLeast<MakeWhereUniqueInput, 'id' | 'makeId'>;

    @Field(() => MakeCreateWithoutTypesInput, {nullable:false})
    @Type(() => MakeCreateWithoutTypesInput)
    create!: MakeCreateWithoutTypesInput;
}
