import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { VehicleMakeUpdateManyWithoutTypesNestedInput } from '../vehicle-make/vehicle-make-update-many-without-types-nested.input';

@InputType()
export class VehicleTypeUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    typeId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => VehicleMakeUpdateManyWithoutTypesNestedInput, {nullable:true})
    VehicleMake?: VehicleMakeUpdateManyWithoutTypesNestedInput;
}
