import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class VehicleMakeUncheckedCreateWithoutTypesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    makeId!: string;

    @Field(() => String, {nullable:false})
    makeName!: string;
}
