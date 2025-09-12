import {
  IsDate,
  IsEnum,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class FiltersDto {
  @IsOptional()
  @IsEnum(['active', 'inactive', 'pending'], {
    message: 'Status must be one of: active, inactive, pending',
  })
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  @IsEnum(['electronics', 'furniture', 'clothing'], {
    message: 'Category must be one of: electronics, furniture, clothing',
  })
  category?: string;

  @IsOptional()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @IsDate({ each: true })
  dateRange?: {
    start: Date;
    end: Date;
  };
}
