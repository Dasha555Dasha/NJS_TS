import { Body, Controller, Get, Post } from '@nestjs/common';
import { TeacherService } from './teacher.service';

@Controller()
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  async getTeacher() {
    return this.teacherService.getTeacher();
  }

  @Post()
  async addTeacher(@Body() body) {
    return this.teacherService.addTeacher(body);
  }
}
