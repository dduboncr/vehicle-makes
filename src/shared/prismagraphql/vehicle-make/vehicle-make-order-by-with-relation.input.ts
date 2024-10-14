import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VehicleTypeOrderByRelationAggregateInput } from '../vehicle-type/vehicle-type-order-by-relation-aggregate.input';

@InputType()
export class VehicleMakeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    makeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    makeName?: keyof typeof SortOrder;

    @Field(() => VehicleTypeOrderByRelationAggregateInput, {nullable:true})
    types?: VehicleTypeOrderByRelationAggregateInput;
}
