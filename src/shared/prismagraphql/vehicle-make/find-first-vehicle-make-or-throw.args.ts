import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleMakeWhereInput } from './vehicle-make-where.input';
import { Type } from 'class-transformer';
import { VehicleMakeOrderByWithRelationInput } from './vehicle-make-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VehicleMakeWhereUniqueInput } from './vehicle-make-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VehicleMakeScalarFieldEnum } from './vehicle-make-scalar-field.enum';

@ArgsType()
export class FindFirstVehicleMakeOrThrowArgs {

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

    @Field(() => [VehicleMakeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VehicleMakeScalarFieldEnum>;
}
