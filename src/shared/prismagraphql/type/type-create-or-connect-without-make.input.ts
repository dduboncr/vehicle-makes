import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypeWhereUniqueInput } from './type-where-unique.input';
import { Type } from 'class-transformer';
import { TypeCreateWithoutMakeInput } from './type-create-without-make.input';

@InputType()
export class TypeCreateOrConnectWithoutMakeInput {

    @Field(() => TypeWhereUniqueInput, {nullable:false})
    @Type(() => TypeWhereUniqueInput)
    where!: Prisma.AtLeast<TypeWhereUniqueInput, 'id'>;

    @Field(() => TypeCreateWithoutMakeInput, {nullable:false})
    @Type(() => TypeCreateWithoutMakeInput)
    create!: TypeCreateWithoutMakeInput;
}
