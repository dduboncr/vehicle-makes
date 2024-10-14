import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MakeWhereInput } from './make-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { TypeListRelationFilter } from '../type/type-list-relation-filter.input';

@InputType()
export class MakeWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    makeId?: string;

    @Field(() => [MakeWhereInput], {nullable:true})
    AND?: Array<MakeWhereInput>;

    @Field(() => [MakeWhereInput], {nullable:true})
    OR?: Array<MakeWhereInput>;

    @Field(() => [MakeWhereInput], {nullable:true})
    NOT?: Array<MakeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    makeName?: StringFilter;

    @Field(() => TypeListRelationFilter, {nullable:true})
    types?: TypeListRelationFilter;
}
