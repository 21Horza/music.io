import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Track, TrackSchema } from './schemas/track.schema';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { FilesService } from 'src/files/files.service';
import { Album, AlbumSchema } from 'src/albums/album.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Track.name, schema: TrackSchema },
      { name: Comment.name, schema: CommentSchema },
      { name: Album.name, schema: AlbumSchema },
    ]),
  ],
  controllers: [TrackController],
  providers: [TrackService, FilesService],
})
export class TrackModule {}
