import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MakeCount {

    @Field(() => Int, {nullable:false})
    types?: number;
}
