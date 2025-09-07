import { Injectable } from '@nestjs/common';
import { QueryDto } from './query.dto';

@Injectable()
export class AppService {
  getHello(query: QueryDto): string {
    return `Hello World! Query: ${JSON.stringify(query)}`;
  }
}
