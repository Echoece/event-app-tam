import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventService } from './event.service';
//import { CreateEventDto } from './dto/create-event.dto';
//import { UpdateEventDto } from './dto/update-event.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async create(@Body() createEvent: Event) {
    return await this.eventService.create(createEvent);
  }

  @Get()
  async findAll() {
    return await this.eventService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.eventService.findOne(+id);
  }

  @Get('category/:id')
  async findCategory(@Param('id') id: string) {
    return await this.eventService.findCategory(+id);
  }

  @Get('user/:id')
  async findUser(@Param('id') id: string) {
    return this.eventService.findUser(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEvent: Event) {
    return await this.eventService.update(+id, updateEvent);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    const event = await this.eventService.remove(+id);
    if (event) return 'Delete successfully';
    return 'Delete failed';
  }
}
