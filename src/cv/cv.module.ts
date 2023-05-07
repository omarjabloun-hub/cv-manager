import { Module } from '@nestjs/common';
import { CvService } from './cv.service';
import { CvController } from './cv.controller';
import { Cv } from './entities/cv.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CvResolver } from "./cv.resolver";

@Module({
  controllers: [CvController],
  providers: [CvService, CvResolver],
  imports: [TypeOrmModule.forFeature([Cv])],
})
export class CvModule {}
