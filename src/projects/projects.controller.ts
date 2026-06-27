import { Controller, Post, Body, Param, Get, Patch, Delete } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('projects')
export class ProjectsController {

    constructor(private readonly projectsService: ProjectsService) { }

    @Post()
    create(@Body() createProjectDto: CreateProjectDto) {
        return this.projectsService.create(createProjectDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.projectsService.findOne(id);
    }

    @Get()
    findAll() {
        return this.projectsService.findAll();
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
        return this.projectsService.update(id, updateProjectDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.projectsService.remove(id);
    }

@Get(':id/tasks')
findTasks(@Param('id') id: string) {
  return this.projectsService.findTasks(id);
}





}
