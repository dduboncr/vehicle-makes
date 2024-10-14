import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeWhereInput } from './type-where.input';

@InputType()
export class TypeListRelationFilter {

    @Field(() => TypeWhereInput, {nullable:true})
    every?: TypeWhereInput;

    @Field(() => TypeWhereInput, {nullable:true})
    some?: TypeWhereInput;

    @Field(() => TypeWhereInput, {nullable:true})
    none?: TypeWhereInput;
}
