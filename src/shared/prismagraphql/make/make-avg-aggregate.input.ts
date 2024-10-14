import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MakeAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
