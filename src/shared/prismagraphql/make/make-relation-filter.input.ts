import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakeWhereInput } from './make-where.input';

@InputType()
export class MakeRelationFilter {

    @Field(() => MakeWhereInput, {nullable:true})
    is?: MakeWhereInput;

    @Field(() => MakeWhereInput, {nullable:true})
    isNot?: MakeWhereInput;
}
