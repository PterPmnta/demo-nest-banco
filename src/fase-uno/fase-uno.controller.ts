import { Controller, Get } from '@nestjs/common';
import { FaseUnoService } from './fase-uno.service';

@Controller('fase-uno')
export class FaseUnoController {
  constructor(private readonly faseUnoService: FaseUnoService) {}

  @Get()
  findFaseUno() {
    return this.faseUnoService.findFaseUno();
  }

  @Get('/mock-fase-tres')
  findFaseTres() {
    return this.faseUnoService.findMockFaseTres();
  }
}
