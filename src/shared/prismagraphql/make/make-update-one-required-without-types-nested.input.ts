import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakeCreateWithoutTypesInput } from './make-create-without-types.input';
import { Type } from 'class-transformer';
import { MakeCreateOrConnectWithoutTypesInput } from './make-create-or-connect-without-types.input';
import { MakeUpsertWithoutTypesInput } from './make-upsert-without-types.input';
import { Prisma } from '@prisma/client';
import { MakeWhereUniqueInput } from './make-where-unique.input';
import { MakeUpdateToOneWithWhereWithoutTypesInput } from './make-update-to-one-with-where-without-types.input';

@InputType()
export class MakeUpdateOneRequiredWithoutTypesNestedInput {

    @Field(() => MakeCreateWithoutTypesInput, {nullable:true})
    @Type(() => MakeCreateWithoutTypesInput)
    create?: MakeCreateWithoutTypesInput;

    @Field(() => MakeCreateOrConnectWithoutTypesInput, {nullable:true})
    @Type(() => MakeCreateOrConnectWithoutTypesInput)
    connectOrCreate?: MakeCreateOrConnectWithoutTypesInput;

    @Field(() => MakeUpsertWithoutTypesInput, {nullable:true})
    @Type(() => MakeUpsertWithoutTypesInput)
    upsert?: MakeUpsertWithoutTypesInput;

    @Field(() => MakeWhereUniqueInput, {nullable:true})
    @Type(() => MakeWhereUniqueInput)
    connect?: Prisma.AtLeast<MakeWhereUniqueInput, 'id' | 'makeId'>;

    @Field(() => MakeUpdateToOneWithWhereWithoutTypesInput, {nullable:true})
    @Type(() => MakeUpdateToOneWithWhereWithoutTypesInput)
    update?: MakeUpdateToOneWithWhereWithoutTypesInput;
}
