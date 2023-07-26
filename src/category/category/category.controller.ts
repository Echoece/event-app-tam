import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
//import { CreateCategoryDto } from './dto/create-category.dto';
//import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategory: Category) {
    return this.categoryService.create(createCategory);
  }
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    const category = await this.categoryService.remove(+id);
    if (category) return 'Delete successfully';
    return 'Delete failed';
  }
}
