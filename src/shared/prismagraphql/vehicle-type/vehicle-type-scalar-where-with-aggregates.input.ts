import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class VehicleTypeScalarWhereWithAggregatesInput {

    @Field(() => [VehicleTypeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VehicleTypeScalarWhereWithAggregatesInput>;

    @Field(() => [VehicleTypeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VehicleTypeScalarWhereWithAggregatesInput>;

    @Field(() => [VehicleTypeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VehicleTypeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    typeId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
