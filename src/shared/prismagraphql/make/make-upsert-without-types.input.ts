import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakeUpdateWithoutTypesInput } from './make-update-without-types.input';
import { Type } from 'class-transformer';
import { MakeCreateWithoutTypesInput } from './make-create-without-types.input';
import { MakeWhereInput } from './make-where.input';

@InputType()
export class MakeUpsertWithoutTypesInput {

    @Field(() => MakeUpdateWithoutTypesInput, {nullable:false})
    @Type(() => MakeUpdateWithoutTypesInput)
    update!: MakeUpdateWithoutTypesInput;

    @Field(() => MakeCreateWithoutTypesInput, {nullable:false})
    @Type(() => MakeCreateWithoutTypesInput)
    create!: MakeCreateWithoutTypesInput;

    @Field(() => MakeWhereInput, {nullable:true})
    @Type(() => MakeWhereInput)
    where?: MakeWhereInput;
}
