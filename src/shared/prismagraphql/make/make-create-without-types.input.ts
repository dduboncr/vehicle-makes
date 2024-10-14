import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MakeCreateWithoutTypesInput {

    @Field(() => String, {nullable:false})
    makeId!: string;

    @Field(() => String, {nullable:false})
    makeName!: string;
}
