import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeScalarWhereInput } from './type-scalar-where.input';
import { Type } from 'class-transformer';
import { TypeUpdateManyMutationInput } from './type-update-many-mutation.input';

@InputType()
export class TypeUpdateManyWithWhereWithoutMakeInput {

    @Field(() => TypeScalarWhereInput, {nullable:false})
    @Type(() => TypeScalarWhereInput)
    where!: TypeScalarWhereInput;

    @Field(() => TypeUpdateManyMutationInput, {nullable:false})
    @Type(() => TypeUpdateManyMutationInput)
    data!: TypeUpdateManyMutationInput;
}
