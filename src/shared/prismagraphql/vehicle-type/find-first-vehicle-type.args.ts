import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleTypeWhereInput } from './vehicle-type-where.input';
import { Type } from 'class-transformer';
import { VehicleTypeOrderByWithRelationInput } from './vehicle-type-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VehicleTypeWhereUniqueInput } from './vehicle-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VehicleTypeScalarFieldEnum } from './vehicle-type-scalar-field.enum';

@ArgsType()
export class FindFirstVehicleTypeArgs {

    @Field(() => VehicleTypeWhereInput, {nullable:true})
    @Type(() => VehicleTypeWhereInput)
    where?: VehicleTypeWhereInput;

    @Field(() => [VehicleTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VehicleTypeOrderByWithRelationInput>;

    @Field(() => VehicleTypeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VehicleTypeWhereUniqueInput, 'id' | 'typeId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [VehicleTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VehicleTypeScalarFieldEnum>;
}
