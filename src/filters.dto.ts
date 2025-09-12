import {
  IsDateString,
  IsEnum,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class DateRangeDto {
  @IsOptional()
  @IsDateString()
  gte?: Date;

  @IsOptional()
  @IsDateString()
  lte?: Date;
}

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
  dateRange?: DateRangeDto;
}
