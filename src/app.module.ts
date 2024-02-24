import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesModule } from './notes/notes.module';
import { NotesService } from './notes/notes.service';
import { UserModule } from './users/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/crudwithmongo'),NotesModule,UserModule],
  controllers: [AppController],
  providers: [AppService, ],
  exports:[AppService,]
})
export class AppModule {}
