import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { username: 'Tarun', email: 'tarun@gmail.com' };
  }

  @Get('posts')
  getUserPosts() {
    return {
      username: 'Tarun',
      email: 'tarun@gmail.com',
      posts: [
        {
          id: 1,
          title: 'Post 1',
        },
        {
          id: 2,
          title: 'Post 2',
        },
      ],
    };
  }

  @Post()
  createUser(){
    
  }
}
