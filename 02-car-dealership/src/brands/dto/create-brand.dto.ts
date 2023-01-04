import { IsString, IsUUID, MinLength } from "class-validator";

export class CreateBrandDto {
    // @IsUUID()
    // @IsString()
    // id: string;
    
    @IsString()
    @MinLength(1)
    name: string;
}
