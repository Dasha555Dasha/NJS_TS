import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from '../../db/entities/teacher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
  ) {}

  getTeacher(): Promise<Teacher[]> {
    return this.teacherRepository.find();
  }

  async addTeacher(data) {
    const teacher = this.teacherRepository.create(data);
    return await this.teacherRepository.save(teacher);
  }
}
