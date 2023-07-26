import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FavouriteService } from './favourite.service';
import { Favourite } from './entities/favourite.entity';
//import { CreateFavouriteDto } from './dto/create-favourite.dto';
//import { UpdateFavouriteDto } from './dto/update-favourite.dto';

@Controller('favourites')
export class FavouriteController {
  constructor(private readonly favouriteService: FavouriteService) {}

  @Post()
  create(@Body() createFavourite: Favourite) {
    return this.favouriteService.create(createFavourite);
  }

  @Get()
  findAll() {
    return this.favouriteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favouriteService.findOne(+id);
  }
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    const favourite = await this.favouriteService.remove(+id);
    if (favourite) return 'Delete successfully';
    return 'Delete failed';
  }
}
