import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakeCreateWithoutTypesInput } from './make-create-without-types.input';
import { Type } from 'class-transformer';
import { MakeCreateOrConnectWithoutTypesInput } from './make-create-or-connect-without-types.input';
import { Prisma } from '@prisma/client';
import { MakeWhereUniqueInput } from './make-where-unique.input';

@InputType()
export class MakeCreateNestedOneWithoutTypesInput {

    @Field(() => MakeCreateWithoutTypesInput, {nullable:true})
    @Type(() => MakeCreateWithoutTypesInput)
    create?: MakeCreateWithoutTypesInput;

    @Field(() => MakeCreateOrConnectWithoutTypesInput, {nullable:true})
    @Type(() => MakeCreateOrConnectWithoutTypesInput)
    connectOrCreate?: MakeCreateOrConnectWithoutTypesInput;

    @Field(() => MakeWhereUniqueInput, {nullable:true})
    @Type(() => MakeWhereUniqueInput)
    connect?: Prisma.AtLeast<MakeWhereUniqueInput, 'id' | 'makeId'>;
}
