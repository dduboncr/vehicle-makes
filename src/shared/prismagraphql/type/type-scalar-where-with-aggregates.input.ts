import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class TypeScalarWhereWithAggregatesInput {

    @Field(() => [TypeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TypeScalarWhereWithAggregatesInput>;

    @Field(() => [TypeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TypeScalarWhereWithAggregatesInput>;

    @Field(() => [TypeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TypeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    typeId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    makeId?: StringWithAggregatesFilter;
}
