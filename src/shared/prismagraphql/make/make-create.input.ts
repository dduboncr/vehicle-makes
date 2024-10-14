import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeCreateNestedManyWithoutMakeInput } from '../type/type-create-nested-many-without-make.input';

@InputType()
export class MakeCreateInput {

    @Field(() => String, {nullable:false})
    makeId!: string;

    @Field(() => String, {nullable:false})
    makeName!: string;

    @Field(() => TypeCreateNestedManyWithoutMakeInput, {nullable:true})
    types?: TypeCreateNestedManyWithoutMakeInput;
}
