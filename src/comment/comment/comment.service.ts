import { Injectable } from '@nestjs/common';
import { Comment } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//import { CreateCommentDto } from './dto/create-comment.dto';
//import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}
  async create(createComment: Comment) {
    const comment = this.commentRepository.create(createComment);
    return await this.commentRepository.save(comment);
  }

  async findAll() {
    return await this.commentRepository.find({ relations: ['user', 'event'] });
  }

  async findOne(id: number) {
    return await this.commentRepository.findOne({ where: { id: id }, relations: ['user', 'event']});
  }

  async update(id: number, updateComment: Comment) {
    const comment = await this.findOne(id);
    Object.assign(comment, updateComment);
    return await this.commentRepository.save(comment);
  }

  async remove(id: number) {
    const comment = await this.findOne(id);
    return await this.commentRepository.remove(comment);
  }

  async findEvent(id: number) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.commentRepository.findOne({ where: { event: {id: id} }, relations: ['user', 'event']});
  }
}
