import {
  IsAlphanumeric,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SearchFieldsDto {
  @IsOptional()
  @IsString()
  @IsAlphanumeric()
  @MinLength(2)
  @MaxLength(30)
  category?: string;

  @IsOptional()
  @IsString()
  @IsAlphanumeric()
  @MinLength(2)
  @MaxLength(20)
  status?: string;
}
