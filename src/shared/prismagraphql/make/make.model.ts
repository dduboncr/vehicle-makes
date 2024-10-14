import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Type } from '../type/type.model';
import { MakeCount } from './make-count.output';

@ObjectType()
export class Make {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    makeId!: string;

    @Field(() => String, {nullable:false})
    makeName!: string;

    @Field(() => [Type], {nullable:true})
    types?: Array<Type>;

    @Field(() => MakeCount, {nullable:false})
    _count?: MakeCount;
}
