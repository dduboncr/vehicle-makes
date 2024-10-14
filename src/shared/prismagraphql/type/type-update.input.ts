import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MakeUpdateOneRequiredWithoutTypesNestedInput } from '../make/make-update-one-required-without-types-nested.input';

@InputType()
export class TypeUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    typeId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => MakeUpdateOneRequiredWithoutTypesNestedInput, {nullable:true})
    make?: MakeUpdateOneRequiredWithoutTypesNestedInput;
}
