import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class MakeScalarWhereWithAggregatesInput {

    @Field(() => [MakeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MakeScalarWhereWithAggregatesInput>;

    @Field(() => [MakeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MakeScalarWhereWithAggregatesInput>;

    @Field(() => [MakeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MakeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    makeId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    makeName?: StringWithAggregatesFilter;
}
