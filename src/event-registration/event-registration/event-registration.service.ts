import { Injectable } from '@nestjs/common';
//import { CreateEventRegistrationDto } from './dto/create-event-registration.dto';
//import { UpdateEventRegistrationDto } from './dto/update-event-registration.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventRegistration } from './entities/event-registration.entity';

@Injectable()
export class EventRegistrationService {
  constructor(
    @InjectRepository(EventRegistration)
    private readonly eventRegistrationRepository: Repository<EventRegistration>,
  ) {}
  async create(createEventRegistration: EventRegistration) {
    const eventRegistration = this.eventRegistrationRepository.create(
      createEventRegistration,
    );
    return await this.eventRegistrationRepository.save(eventRegistration);
  }

  async findAll() {
    return await this.eventRegistrationRepository.find({ relations: ['user', 'event'] });
  }

  async findOne(id: number) {
    return await this.eventRegistrationRepository.findOne({ where: { id: id }, relations: ['user', 'event']});
  }

  async update(id: number, updateEventRegistration: EventRegistration) {
    const eventRegistration = await this.findOne(id);
    Object.assign(eventRegistration, updateEventRegistration);
    return await this.eventRegistrationRepository.save(eventRegistration);
  }

  async remove(id: number) {
    const eventRegistration = await this.findOne(id);
    return await this.eventRegistrationRepository.remove(eventRegistration);
  }
  async findEvent(id: number) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.eventRegistrationRepository.findOne({ where: { event: {id: id} }, relations: ['user', 'event']});
  }

  async findUser(id: number) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.eventRegistrationRepository.findOne({ where: { user: {id: id} }, relations: ['user', 'event']});
  }
}
