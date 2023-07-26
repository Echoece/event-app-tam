import { Injectable } from '@nestjs/common';
import { Favourite } from './entities/favourite.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//import { CreateFavouriteDto } from './dto/create-favourite.dto';
//import { UpdateFavouriteDto } from './dto/update-favourite.dto';

@Injectable()
export class FavouriteService {
  constructor(
    @InjectRepository(Favourite)
    private readonly favouriteRepository: Repository<Favourite>,
  ) {}
  async create(createFavourite: Favourite) {
    const favourite = this.favouriteRepository.create(createFavourite);
    return await this.favouriteRepository.save(favourite);
  }

  async findAll() {
    return await this.favouriteRepository.find({ relations: ['user', 'event'] });
  }

  async findOne(id: number) {
    return await this.favouriteRepository.findOne({ where: { id: id }, relations: ['user', 'event']});
  }
  async remove(id: number) {
    const favourite = await this.findOne(id);
    return await this.favouriteRepository.remove(favourite);
  }
}
