import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VehicleMakeOrderByRelationAggregateInput } from '../vehicle-make/vehicle-make-order-by-relation-aggregate.input';

@InputType()
export class VehicleTypeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    typeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => VehicleMakeOrderByRelationAggregateInput, {nullable:true})
    VehicleMake?: VehicleMakeOrderByRelationAggregateInput;
}
