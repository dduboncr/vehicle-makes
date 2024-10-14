import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { VehicleType } from '../vehicle-type/vehicle-type.model';
import { VehicleMakeCount } from './vehicle-make-count.output';

@ObjectType()
export class VehicleMake {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    makeId!: string;

    @Field(() => String, {nullable:false})
    makeName!: string;

    @Field(() => [VehicleType], {nullable:true})
    types?: Array<VehicleType>;

    @Field(() => VehicleMakeCount, {nullable:false})
    _count?: VehicleMakeCount;
}
