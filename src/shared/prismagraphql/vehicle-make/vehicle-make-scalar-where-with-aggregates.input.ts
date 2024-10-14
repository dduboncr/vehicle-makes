import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class VehicleMakeScalarWhereWithAggregatesInput {

    @Field(() => [VehicleMakeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VehicleMakeScalarWhereWithAggregatesInput>;

    @Field(() => [VehicleMakeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VehicleMakeScalarWhereWithAggregatesInput>;

    @Field(() => [VehicleMakeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VehicleMakeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    makeId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    makeName?: StringWithAggregatesFilter;
}
