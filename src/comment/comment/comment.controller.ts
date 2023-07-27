import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './entities/comment.entity';
//import { CreateCommentDto } from './dto/create-comment.dto';
//import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async create(@Body() createComment: Comment) {
    return await this.commentService.create(createComment);
  }

  @Get()
  async findAll() {
    return await this.commentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.commentService.findOne(+id);
  }

  @Get('event/:id')
  async findCategory(@Param('id') id: string) {
    return await this.commentService.findEvent(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateComment: Comment) {
    return await this.commentService.update(+id, updateComment);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const favourite = await this.commentService.remove(+id);
    if (favourite) return 'Delete successfully';
    return 'Delete failed';
  }
}
