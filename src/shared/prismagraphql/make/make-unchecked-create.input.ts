import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TypeUncheckedCreateNestedManyWithoutMakeInput } from '../type/type-unchecked-create-nested-many-without-make.input';

@InputType()
export class MakeUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    makeId!: string;

    @Field(() => String, {nullable:false})
    makeName!: string;

    @Field(() => TypeUncheckedCreateNestedManyWithoutMakeInput, {nullable:true})
    types?: TypeUncheckedCreateNestedManyWithoutMakeInput;
}
