import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeCreateWithoutMakeInput } from './type-create-without-make.input';
import { Type } from 'class-transformer';
import { TypeCreateOrConnectWithoutMakeInput } from './type-create-or-connect-without-make.input';
import { TypeCreateManyMakeInputEnvelope } from './type-create-many-make-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TypeWhereUniqueInput } from './type-where-unique.input';

@InputType()
export class TypeUncheckedCreateNestedManyWithoutMakeInput {

    @Field(() => [TypeCreateWithoutMakeInput], {nullable:true})
    @Type(() => TypeCreateWithoutMakeInput)
    create?: Array<TypeCreateWithoutMakeInput>;

    @Field(() => [TypeCreateOrConnectWithoutMakeInput], {nullable:true})
    @Type(() => TypeCreateOrConnectWithoutMakeInput)
    connectOrCreate?: Array<TypeCreateOrConnectWithoutMakeInput>;

    @Field(() => TypeCreateManyMakeInputEnvelope, {nullable:true})
    @Type(() => TypeCreateManyMakeInputEnvelope)
    createMany?: TypeCreateManyMakeInputEnvelope;

    @Field(() => [TypeWhereUniqueInput], {nullable:true})
    @Type(() => TypeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TypeWhereUniqueInput, 'id'>>;
}
