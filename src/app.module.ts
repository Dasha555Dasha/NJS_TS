import { Module } from '@nestjs/common';
import { TeacherModules } from './modules/teacher/teacher.modules';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      useFactory: () => ({
        type: 'mysql',
        host: '84.201.184.150',
        port: 3306,
        username: '090303-pib-21_dt',
        password: 'wT7taCD7Ho',
        database: '090303-pib-21_dt',
        entities: ['./dist/db/entities/*.{ts,js}'],
        synchronize: true,
      }),
    }),
    TeacherModules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
