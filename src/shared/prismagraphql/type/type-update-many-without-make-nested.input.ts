import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeCreateWithoutMakeInput } from './type-create-without-make.input';
import { Type } from 'class-transformer';
import { TypeCreateOrConnectWithoutMakeInput } from './type-create-or-connect-without-make.input';
import { TypeUpsertWithWhereUniqueWithoutMakeInput } from './type-upsert-with-where-unique-without-make.input';
import { TypeCreateManyMakeInputEnvelope } from './type-create-many-make-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TypeWhereUniqueInput } from './type-where-unique.input';
import { TypeUpdateWithWhereUniqueWithoutMakeInput } from './type-update-with-where-unique-without-make.input';
import { TypeUpdateManyWithWhereWithoutMakeInput } from './type-update-many-with-where-without-make.input';
import { TypeScalarWhereInput } from './type-scalar-where.input';

@InputType()
export class TypeUpdateManyWithoutMakeNestedInput {

    @Field(() => [TypeCreateWithoutMakeInput], {nullable:true})
    @Type(() => TypeCreateWithoutMakeInput)
    create?: Array<TypeCreateWithoutMakeInput>;

    @Field(() => [TypeCreateOrConnectWithoutMakeInput], {nullable:true})
    @Type(() => TypeCreateOrConnectWithoutMakeInput)
    connectOrCreate?: Array<TypeCreateOrConnectWithoutMakeInput>;

    @Field(() => [TypeUpsertWithWhereUniqueWithoutMakeInput], {nullable:true})
    @Type(() => TypeUpsertWithWhereUniqueWithoutMakeInput)
    upsert?: Array<TypeUpsertWithWhereUniqueWithoutMakeInput>;

    @Field(() => TypeCreateManyMakeInputEnvelope, {nullable:true})
    @Type(() => TypeCreateManyMakeInputEnvelope)
    createMany?: TypeCreateManyMakeInputEnvelope;

    @Field(() => [TypeWhereUniqueInput], {nullable:true})
    @Type(() => TypeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TypeWhereUniqueInput, 'id'>>;

    @Field(() => [TypeWhereUniqueInput], {nullable:true})
    @Type(() => TypeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TypeWhereUniqueInput, 'id'>>;

    @Field(() => [TypeWhereUniqueInput], {nullable:true})
    @Type(() => TypeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TypeWhereUniqueInput, 'id'>>;

    @Field(() => [TypeWhereUniqueInput], {nullable:true})
    @Type(() => TypeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TypeWhereUniqueInput, 'id'>>;

    @Field(() => [TypeUpdateWithWhereUniqueWithoutMakeInput], {nullable:true})
    @Type(() => TypeUpdateWithWhereUniqueWithoutMakeInput)
    update?: Array<TypeUpdateWithWhereUniqueWithoutMakeInput>;

    @Field(() => [TypeUpdateManyWithWhereWithoutMakeInput], {nullable:true})
    @Type(() => TypeUpdateManyWithWhereWithoutMakeInput)
    updateMany?: Array<TypeUpdateManyWithWhereWithoutMakeInput>;

    @Field(() => [TypeScalarWhereInput], {nullable:true})
    @Type(() => TypeScalarWhereInput)
    deleteMany?: Array<TypeScalarWhereInput>;
}
