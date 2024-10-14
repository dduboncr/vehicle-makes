import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { VehicleTypeUncheckedUpdateManyWithoutVehicleMakeNestedInput } from '../vehicle-type/vehicle-type-unchecked-update-many-without-vehicle-make-nested.input';

@InputType()
export class VehicleMakeUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    makeId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    makeName?: StringFieldUpdateOperationsInput;

    @Field(() => VehicleTypeUncheckedUpdateManyWithoutVehicleMakeNestedInput, {nullable:true})
    types?: VehicleTypeUncheckedUpdateManyWithoutVehicleMakeNestedInput;
}
