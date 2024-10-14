import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakeCreateNestedOneWithoutTypesInput } from '../make/make-create-nested-one-without-types.input';

@InputType()
export class TypeCreateInput {

    @Field(() => String, {nullable:false})
    typeId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => MakeCreateNestedOneWithoutTypesInput, {nullable:false})
    make!: MakeCreateNestedOneWithoutTypesInput;
}
