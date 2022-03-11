import { Prop,Schema, SchemaFactory } from '@nestjs/mongoose';

export type ScooterCharacteristicDocument = ScooterCharacteristic & Document;

@Schema()
export class ScooterCharacteristic {

    @Prop()
    max_speed: string;

    @Prop()
    cylinder: string;

    @Prop()
    license: string;

    @Prop()
    reverse_gear: boolean;

    @Prop()
    control_screen: string;

    @Prop()
    anti_theft_security: string;

    @Prop()
    crutch: string;

    @Prop()
    created_at: Date;
}

export const ScooterCharacteristicSchema = SchemaFactory.createForClass(ScooterCharacteristic);