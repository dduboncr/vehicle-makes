import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MakeCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    makeId?: true;

    @Field(() => Boolean, {nullable:true})
    makeName?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
