import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventRegistrationService } from './event-registration.service';
import { EventRegistration } from './entities/event-registration.entity';
//import { CreateEventRegistrationDto } from './dto/create-event-registration.dto';
//import { UpdateEventRegistrationDto } from './dto/update-event-registration.dto';

@Controller('event-registration')
export class EventRegistrationController {
  constructor(
    private readonly eventRegistrationService: EventRegistrationService,
  ) {}

  @Post()
  async create(@Body() createEventRegistration: EventRegistration) {
    return await this.eventRegistrationService.create(createEventRegistration);
  }
  @Get()
  async findAll() {
    return await this.eventRegistrationService.findAll();
  }

  @Get('event/:id')
  async findCategory(@Param('id') id: string) {
    return await this.eventRegistrationService.findEvent(+id);
  }

  @Get('user/:id')
  async findUser(@Param('id') id: string) {
    return await this.eventRegistrationService.findUser(+id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.eventRegistrationService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEventRegistration: EventRegistration) {
    return await this.eventRegistrationService.update(+id, updateEventRegistration);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    const event = await this.eventRegistrationService.remove(+id);
    if (event) return 'Delete successfully';
    return 'Delete failed';
  }
}
