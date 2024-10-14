import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { VehicleTypeUpdateManyWithoutVehicleMakeNestedInput } from '../vehicle-type/vehicle-type-update-many-without-vehicle-make-nested.input';

@InputType()
export class VehicleMakeUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    makeId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    makeName?: StringFieldUpdateOperationsInput;

    @Field(() => VehicleTypeUpdateManyWithoutVehicleMakeNestedInput, {nullable:true})
    types?: VehicleTypeUpdateManyWithoutVehicleMakeNestedInput;
}
