import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { VehicleTypeListRelationFilter } from '../vehicle-type/vehicle-type-list-relation-filter.input';

@InputType()
export class VehicleMakeWhereInput {

    @Field(() => [VehicleMakeWhereInput], {nullable:true})
    AND?: Array<VehicleMakeWhereInput>;

    @Field(() => [VehicleMakeWhereInput], {nullable:true})
    OR?: Array<VehicleMakeWhereInput>;

    @Field(() => [VehicleMakeWhereInput], {nullable:true})
    NOT?: Array<VehicleMakeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    makeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    makeName?: StringFilter;

    @Field(() => VehicleTypeListRelationFilter, {nullable:true})
    types?: VehicleTypeListRelationFilter;
}
