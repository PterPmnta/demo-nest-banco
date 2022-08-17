import { Injectable } from '@nestjs/common';
import { CreateRepoDto } from './dto/create-repo.dto';
import { UpdateRepoDto } from './dto/update-repo.dto';

@Injectable()
export class RepoService {
  create(createRepoDto: CreateRepoDto) {
    return 'This action adds a new repo';
  }

  findAll() {
    return `This action returns all repo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} repo`;
  }

  update(id: number, updateRepoDto: UpdateRepoDto) {
    return `This action updates a #${id} repo`;
  }

  remove(id: number) {
    return `This action removes a #${id} repo`;
  }
}
