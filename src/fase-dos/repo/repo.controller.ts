import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RepoService } from './repo.service';
import { CreateRepoDto } from './dto/create-repo.dto';
import { UpdateRepoDto } from './dto/update-repo.dto';

@Controller('repo')
export class RepoController {
  constructor(private readonly repoService: RepoService) {}

  @Post()
  create(@Body() createRepoDto: CreateRepoDto) {
    return this.repoService.create(createRepoDto);
  }

  @Get()
  findAll() {
    return this.repoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRepoDto: UpdateRepoDto) {
    return this.repoService.update(+id, updateRepoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repoService.remove(+id);
  }
}
