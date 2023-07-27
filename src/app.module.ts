import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user/user.module';
import * as path from 'path';
import * as process from 'process';
import { CategoryModule } from './category/category/category.module';
import { EventModule } from './event/event/event.module';
import { FavouriteModule } from './favourite/favourite/favourite.module';
import { CommentModule } from './comment/comment/comment.module';
import { EventRegistrationModule } from './event-registration/event-registration/event-registration.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [path.join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),

    UserModule,
    CategoryModule,
    EventModule,
    FavouriteModule,
    CommentModule,
    EventRegistrationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
