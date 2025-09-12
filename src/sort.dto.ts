import { IsIn, IsOptional, IsString } from 'class-validator';

export class SortFieldsDto {
  @IsOptional()
  @IsString()
  @IsIn(['asc', 'desc'])
  category?: 'asc' | 'desc';
}
