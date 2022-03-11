import {Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly userService: UserService) {
    }

    @Post('login')
    login(@Body() loginUserDto: LoginUserDto) {
        return this.userService.findByLogin(loginUserDto.email, loginUserDto.password);
    }
}
