import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypeWhereUniqueInput } from './type-where-unique.input';
import { Type } from 'class-transformer';
import { TypeUpdateWithoutMakeInput } from './type-update-without-make.input';

@InputType()
export class TypeUpdateWithWhereUniqueWithoutMakeInput {

    @Field(() => TypeWhereUniqueInput, {nullable:false})
    @Type(() => TypeWhereUniqueInput)
    where!: Prisma.AtLeast<TypeWhereUniqueInput, 'id'>;

    @Field(() => TypeUpdateWithoutMakeInput, {nullable:false})
    @Type(() => TypeUpdateWithoutMakeInput)
    data!: TypeUpdateWithoutMakeInput;
}
