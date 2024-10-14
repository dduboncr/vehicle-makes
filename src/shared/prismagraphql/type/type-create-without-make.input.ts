import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TypeCreateWithoutMakeInput {

    @Field(() => String, {nullable:false})
    typeId!: string;

    @Field(() => String, {nullable:false})
    name!: string;
}
