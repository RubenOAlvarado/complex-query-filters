import { IsInt, IsObject, IsOptional, ValidateNested } from 'class-validator';
import { FiltersDto } from './filters.dto';
import { SearchFieldsDto } from './search.fiels.dto';
import { Type } from 'class-transformer';
import { SortFieldsDto } from './sort.dto';

export class QueryDto extends FiltersDto {
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => SearchFieldsDto)
  search?: SearchFieldsDto;

  @IsOptional()
  @IsInt()
  page?: number;

  @IsOptional()
  @IsInt()
  limit?: number;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => SortFieldsDto)
  sort?: SortFieldsDto;
}
