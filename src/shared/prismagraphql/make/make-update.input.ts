import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TypeUpdateManyWithoutMakeNestedInput } from '../type/type-update-many-without-make-nested.input';

@InputType()
export class MakeUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    makeId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    makeName?: StringFieldUpdateOperationsInput;

    @Field(() => TypeUpdateManyWithoutMakeNestedInput, {nullable:true})
    types?: TypeUpdateManyWithoutMakeNestedInput;
}
