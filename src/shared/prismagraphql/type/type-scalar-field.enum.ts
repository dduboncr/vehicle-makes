import { registerEnumType } from '@nestjs/graphql';

export enum TypeScalarFieldEnum {
    id = "id",
    typeId = "typeId",
    name = "name",
    makeId = "makeId"
}


registerEnumType(TypeScalarFieldEnum, { name: 'TypeScalarFieldEnum', description: undefined })
