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
  create(@Body() createEvent: Event) {
    return this.eventService.create(createEvent);
  }

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @Get('category/:id')
  findCategory(@Param('id') id: string) {
    return this.eventService.findCategory(+id);
  }

  @Get('user/:id')
  findUser(@Param('id') id: string) {
    return this.eventService.findUser(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvent: Event) {
    return this.eventService.update(+id, updateEvent);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    const event = await this.eventService.remove(+id);
    if (event) return 'Delete successfully';
    return 'Delete failed';
  }
}
