import { registerEnumType } from '@nestjs/graphql';

export enum VehicleTypeScalarFieldEnum {
    id = "id",
    typeId = "typeId",
    name = "name"
}


registerEnumType(VehicleTypeScalarFieldEnum, { name: 'VehicleTypeScalarFieldEnum', description: undefined })
