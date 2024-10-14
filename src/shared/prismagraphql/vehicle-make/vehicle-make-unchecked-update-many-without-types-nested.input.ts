import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleMakeCreateWithoutTypesInput } from './vehicle-make-create-without-types.input';
import { Type } from 'class-transformer';
import { VehicleMakeCreateOrConnectWithoutTypesInput } from './vehicle-make-create-or-connect-without-types.input';
import { VehicleMakeUpsertWithWhereUniqueWithoutTypesInput } from './vehicle-make-upsert-with-where-unique-without-types.input';
import { Prisma } from '@prisma/client';
import { VehicleMakeWhereUniqueInput } from './vehicle-make-where-unique.input';
import { VehicleMakeUpdateWithWhereUniqueWithoutTypesInput } from './vehicle-make-update-with-where-unique-without-types.input';
import { VehicleMakeUpdateManyWithWhereWithoutTypesInput } from './vehicle-make-update-many-with-where-without-types.input';
import { VehicleMakeScalarWhereInput } from './vehicle-make-scalar-where.input';

@InputType()
export class VehicleMakeUncheckedUpdateManyWithoutTypesNestedInput {

    @Field(() => [VehicleMakeCreateWithoutTypesInput], {nullable:true})
    @Type(() => VehicleMakeCreateWithoutTypesInput)
    create?: Array<VehicleMakeCreateWithoutTypesInput>;

    @Field(() => [VehicleMakeCreateOrConnectWithoutTypesInput], {nullable:true})
    @Type(() => VehicleMakeCreateOrConnectWithoutTypesInput)
    connectOrCreate?: Array<VehicleMakeCreateOrConnectWithoutTypesInput>;

    @Field(() => [VehicleMakeUpsertWithWhereUniqueWithoutTypesInput], {nullable:true})
    @Type(() => VehicleMakeUpsertWithWhereUniqueWithoutTypesInput)
    upsert?: Array<VehicleMakeUpsertWithWhereUniqueWithoutTypesInput>;

    @Field(() => [VehicleMakeWhereUniqueInput], {nullable:true})
    @Type(() => VehicleMakeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VehicleMakeWhereUniqueInput, 'id' | 'makeId'>>;

    @Field(() => [VehicleMakeWhereUniqueInput], {nullable:true})
    @Type(() => VehicleMakeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VehicleMakeWhereUniqueInput, 'id' | 'makeId'>>;

    @Field(() => [VehicleMakeWhereUniqueInput], {nullable:true})
    @Type(() => VehicleMakeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VehicleMakeWhereUniqueInput, 'id' | 'makeId'>>;

    @Field(() => [VehicleMakeWhereUniqueInput], {nullable:true})
    @Type(() => VehicleMakeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VehicleMakeWhereUniqueInput, 'id' | 'makeId'>>;

    @Field(() => [VehicleMakeUpdateWithWhereUniqueWithoutTypesInput], {nullable:true})
    @Type(() => VehicleMakeUpdateWithWhereUniqueWithoutTypesInput)
    update?: Array<VehicleMakeUpdateWithWhereUniqueWithoutTypesInput>;

    @Field(() => [VehicleMakeUpdateManyWithWhereWithoutTypesInput], {nullable:true})
    @Type(() => VehicleMakeUpdateManyWithWhereWithoutTypesInput)
    updateMany?: Array<VehicleMakeUpdateManyWithWhereWithoutTypesInput>;

    @Field(() => [VehicleMakeScalarWhereInput], {nullable:true})
    @Type(() => VehicleMakeScalarWhereInput)
    deleteMany?: Array<VehicleMakeScalarWhereInput>;
}
