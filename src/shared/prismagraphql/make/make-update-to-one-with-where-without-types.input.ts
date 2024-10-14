import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakeWhereInput } from './make-where.input';
import { Type } from 'class-transformer';
import { MakeUpdateWithoutTypesInput } from './make-update-without-types.input';

@InputType()
export class MakeUpdateToOneWithWhereWithoutTypesInput {

    @Field(() => MakeWhereInput, {nullable:true})
    @Type(() => MakeWhereInput)
    where?: MakeWhereInput;

    @Field(() => MakeUpdateWithoutTypesInput, {nullable:false})
    @Type(() => MakeUpdateWithoutTypesInput)
    data!: MakeUpdateWithoutTypesInput;
}
