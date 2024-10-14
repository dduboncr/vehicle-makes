import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleTypeWhereInput } from './vehicle-type-where.input';
import { Type } from 'class-transformer';
import { VehicleTypeOrderByWithAggregationInput } from './vehicle-type-order-by-with-aggregation.input';
import { VehicleTypeScalarFieldEnum } from './vehicle-type-scalar-field.enum';
import { VehicleTypeScalarWhereWithAggregatesInput } from './vehicle-type-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { VehicleTypeCountAggregateInput } from './vehicle-type-count-aggregate.input';
import { VehicleTypeAvgAggregateInput } from './vehicle-type-avg-aggregate.input';
import { VehicleTypeSumAggregateInput } from './vehicle-type-sum-aggregate.input';
import { VehicleTypeMinAggregateInput } from './vehicle-type-min-aggregate.input';
import { VehicleTypeMaxAggregateInput } from './vehicle-type-max-aggregate.input';

@ArgsType()
export class VehicleTypeGroupByArgs {

    @Field(() => VehicleTypeWhereInput, {nullable:true})
    @Type(() => VehicleTypeWhereInput)
    where?: VehicleTypeWhereInput;

    @Field(() => [VehicleTypeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VehicleTypeOrderByWithAggregationInput>;

    @Field(() => [VehicleTypeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof VehicleTypeScalarFieldEnum>;

    @Field(() => VehicleTypeScalarWhereWithAggregatesInput, {nullable:true})
    having?: VehicleTypeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VehicleTypeCountAggregateInput, {nullable:true})
    _count?: VehicleTypeCountAggregateInput;

    @Field(() => VehicleTypeAvgAggregateInput, {nullable:true})
    _avg?: VehicleTypeAvgAggregateInput;

    @Field(() => VehicleTypeSumAggregateInput, {nullable:true})
    _sum?: VehicleTypeSumAggregateInput;

    @Field(() => VehicleTypeMinAggregateInput, {nullable:true})
    _min?: VehicleTypeMinAggregateInput;

    @Field(() => VehicleTypeMaxAggregateInput, {nullable:true})
    _max?: VehicleTypeMaxAggregateInput;
}
