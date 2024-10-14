import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VehicleMakeWhereInput } from './vehicle-make-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { VehicleTypeListRelationFilter } from '../vehicle-type/vehicle-type-list-relation-filter.input';

@InputType()
export class VehicleMakeWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    makeId?: string;

    @Field(() => [VehicleMakeWhereInput], {nullable:true})
    AND?: Array<VehicleMakeWhereInput>;

    @Field(() => [VehicleMakeWhereInput], {nullable:true})
    OR?: Array<VehicleMakeWhereInput>;

    @Field(() => [VehicleMakeWhereInput], {nullable:true})
    NOT?: Array<VehicleMakeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    makeName?: StringFilter;

    @Field(() => VehicleTypeListRelationFilter, {nullable:true})
    types?: VehicleTypeListRelationFilter;
}
