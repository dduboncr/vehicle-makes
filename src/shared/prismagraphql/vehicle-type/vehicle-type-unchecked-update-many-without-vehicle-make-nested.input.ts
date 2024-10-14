import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleTypeCreateWithoutVehicleMakeInput } from './vehicle-type-create-without-vehicle-make.input';
import { Type } from 'class-transformer';
import { VehicleTypeCreateOrConnectWithoutVehicleMakeInput } from './vehicle-type-create-or-connect-without-vehicle-make.input';
import { VehicleTypeUpsertWithWhereUniqueWithoutVehicleMakeInput } from './vehicle-type-upsert-with-where-unique-without-vehicle-make.input';
import { Prisma } from '@prisma/client';
import { VehicleTypeWhereUniqueInput } from './vehicle-type-where-unique.input';
import { VehicleTypeUpdateWithWhereUniqueWithoutVehicleMakeInput } from './vehicle-type-update-with-where-unique-without-vehicle-make.input';
import { VehicleTypeUpdateManyWithWhereWithoutVehicleMakeInput } from './vehicle-type-update-many-with-where-without-vehicle-make.input';
import { VehicleTypeScalarWhereInput } from './vehicle-type-scalar-where.input';

@InputType()
export class VehicleTypeUncheckedUpdateManyWithoutVehicleMakeNestedInput {

    @Field(() => [VehicleTypeCreateWithoutVehicleMakeInput], {nullable:true})
    @Type(() => VehicleTypeCreateWithoutVehicleMakeInput)
    create?: Array<VehicleTypeCreateWithoutVehicleMakeInput>;

    @Field(() => [VehicleTypeCreateOrConnectWithoutVehicleMakeInput], {nullable:true})
    @Type(() => VehicleTypeCreateOrConnectWithoutVehicleMakeInput)
    connectOrCreate?: Array<VehicleTypeCreateOrConnectWithoutVehicleMakeInput>;

    @Field(() => [VehicleTypeUpsertWithWhereUniqueWithoutVehicleMakeInput], {nullable:true})
    @Type(() => VehicleTypeUpsertWithWhereUniqueWithoutVehicleMakeInput)
    upsert?: Array<VehicleTypeUpsertWithWhereUniqueWithoutVehicleMakeInput>;

    @Field(() => [VehicleTypeWhereUniqueInput], {nullable:true})
    @Type(() => VehicleTypeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VehicleTypeWhereUniqueInput, 'id' | 'typeId'>>;

    @Field(() => [VehicleTypeWhereUniqueInput], {nullable:true})
    @Type(() => VehicleTypeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VehicleTypeWhereUniqueInput, 'id' | 'typeId'>>;

    @Field(() => [VehicleTypeWhereUniqueInput], {nullable:true})
    @Type(() => VehicleTypeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VehicleTypeWhereUniqueInput, 'id' | 'typeId'>>;

    @Field(() => [VehicleTypeWhereUniqueInput], {nullable:true})
    @Type(() => VehicleTypeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VehicleTypeWhereUniqueInput, 'id' | 'typeId'>>;

    @Field(() => [VehicleTypeUpdateWithWhereUniqueWithoutVehicleMakeInput], {nullable:true})
    @Type(() => VehicleTypeUpdateWithWhereUniqueWithoutVehicleMakeInput)
    update?: Array<VehicleTypeUpdateWithWhereUniqueWithoutVehicleMakeInput>;

    @Field(() => [VehicleTypeUpdateManyWithWhereWithoutVehicleMakeInput], {nullable:true})
    @Type(() => VehicleTypeUpdateManyWithWhereWithoutVehicleMakeInput)
    updateMany?: Array<VehicleTypeUpdateManyWithWhereWithoutVehicleMakeInput>;

    @Field(() => [VehicleTypeScalarWhereInput], {nullable:true})
    @Type(() => VehicleTypeScalarWhereInput)
    deleteMany?: Array<VehicleTypeScalarWhereInput>;
}
