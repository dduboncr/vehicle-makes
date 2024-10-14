import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleMakeWhereInput } from './vehicle-make-where.input';
import { Type } from 'class-transformer';
import { VehicleMakeOrderByWithAggregationInput } from './vehicle-make-order-by-with-aggregation.input';
import { VehicleMakeScalarFieldEnum } from './vehicle-make-scalar-field.enum';
import { VehicleMakeScalarWhereWithAggregatesInput } from './vehicle-make-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { VehicleMakeCountAggregateInput } from './vehicle-make-count-aggregate.input';
import { VehicleMakeAvgAggregateInput } from './vehicle-make-avg-aggregate.input';
import { VehicleMakeSumAggregateInput } from './vehicle-make-sum-aggregate.input';
import { VehicleMakeMinAggregateInput } from './vehicle-make-min-aggregate.input';
import { VehicleMakeMaxAggregateInput } from './vehicle-make-max-aggregate.input';

@ArgsType()
export class VehicleMakeGroupByArgs {

    @Field(() => VehicleMakeWhereInput, {nullable:true})
    @Type(() => VehicleMakeWhereInput)
    where?: VehicleMakeWhereInput;

    @Field(() => [VehicleMakeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VehicleMakeOrderByWithAggregationInput>;

    @Field(() => [VehicleMakeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof VehicleMakeScalarFieldEnum>;

    @Field(() => VehicleMakeScalarWhereWithAggregatesInput, {nullable:true})
    having?: VehicleMakeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VehicleMakeCountAggregateInput, {nullable:true})
    _count?: VehicleMakeCountAggregateInput;

    @Field(() => VehicleMakeAvgAggregateInput, {nullable:true})
    _avg?: VehicleMakeAvgAggregateInput;

    @Field(() => VehicleMakeSumAggregateInput, {nullable:true})
    _sum?: VehicleMakeSumAggregateInput;

    @Field(() => VehicleMakeMinAggregateInput, {nullable:true})
    _min?: VehicleMakeMinAggregateInput;

    @Field(() => VehicleMakeMaxAggregateInput, {nullable:true})
    _max?: VehicleMakeMaxAggregateInput;
}
