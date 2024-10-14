import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TypeUncheckedUpdateManyWithoutMakeNestedInput } from '../type/type-unchecked-update-many-without-make-nested.input';

@InputType()
export class MakeUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    makeId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    makeName?: StringFieldUpdateOperationsInput;

    @Field(() => TypeUncheckedUpdateManyWithoutMakeNestedInput, {nullable:true})
    types?: TypeUncheckedUpdateManyWithoutMakeNestedInput;
}
