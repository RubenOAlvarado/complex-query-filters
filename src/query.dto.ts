import { IsOptional, ValidateNested } from 'class-validator';
import { FiltersDto } from './filters.dto';
import { Type } from 'class-transformer';

export class QueryDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => FiltersDto)
  filter?: FiltersDto;

  @IsOptional()
  q?: string;
}
