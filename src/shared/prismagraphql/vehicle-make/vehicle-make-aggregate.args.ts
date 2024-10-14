import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleMakeWhereInput } from './vehicle-make-where.input';
import { Type } from 'class-transformer';
import { VehicleMakeOrderByWithRelationInput } from './vehicle-make-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VehicleMakeWhereUniqueInput } from './vehicle-make-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VehicleMakeCountAggregateInput } from './vehicle-make-count-aggregate.input';
import { VehicleMakeAvgAggregateInput } from './vehicle-make-avg-aggregate.input';
import { VehicleMakeSumAggregateInput } from './vehicle-make-sum-aggregate.input';
import { VehicleMakeMinAggregateInput } from './vehicle-make-min-aggregate.input';
import { VehicleMakeMaxAggregateInput } from './vehicle-make-max-aggregate.input';

@ArgsType()
export class VehicleMakeAggregateArgs {

    @Field(() => VehicleMakeWhereInput, {nullable:true})
    @Type(() => VehicleMakeWhereInput)
    where?: VehicleMakeWhereInput;

    @Field(() => [VehicleMakeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VehicleMakeOrderByWithRelationInput>;

    @Field(() => VehicleMakeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VehicleMakeWhereUniqueInput, 'id' | 'makeId'>;

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
