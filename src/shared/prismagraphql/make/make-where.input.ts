import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { TypeListRelationFilter } from '../type/type-list-relation-filter.input';

@InputType()
export class MakeWhereInput {

    @Field(() => [MakeWhereInput], {nullable:true})
    AND?: Array<MakeWhereInput>;

    @Field(() => [MakeWhereInput], {nullable:true})
    OR?: Array<MakeWhereInput>;

    @Field(() => [MakeWhereInput], {nullable:true})
    NOT?: Array<MakeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    makeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    makeName?: StringFilter;

    @Field(() => TypeListRelationFilter, {nullable:true})
    types?: TypeListRelationFilter;
}
