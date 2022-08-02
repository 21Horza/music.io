import { Module } from '@nestjs/common';
import { TrackModule } from './tracks/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin12345@cluster0.lkib3.mongodb.net/music-service?retryWrites=true&w=majority',
    ),
    TrackModule,
    FilesModule,
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
  ],
})
export class AppModule {}
