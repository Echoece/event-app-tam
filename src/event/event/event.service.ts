import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//import { CreateEventDto } from './dto/create-event.dto';
//import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}
  async create(createEvent: Event) {
    const event = this.eventRepository.create(createEvent);
    return await this.eventRepository.save(event);
  }

  async findAll() {
    return await this.eventRepository.find({ relations: ['user', 'category'] });
  }
  async findOne(id: number) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.eventRepository.findOne({ where: { id: id }, relations: ['user', 'category']});
  }
  async update(id: number, updateEvent: Event) {
    const event = await this.findOne(id);
    Object.assign(event, updateEvent);
    return await this.eventRepository.save(event);
  }
  async remove(id: number) {
    const event = await this.findOne(id);
    return await this.eventRepository.remove(event);
  }

  async findCategory(id: number) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.eventRepository.findOne({ where: { category: {id: id} }, relations: ['user', 'category']});
  }

  async findUser(id: number) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.eventRepository.findOne({ where: { user: {id: id} }, relations: ['user', 'category']});
  }
}
