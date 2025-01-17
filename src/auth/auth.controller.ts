import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin() {
  }

  @Post('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleLoginCallback(@Request() req) {
    return this.authService.login(req.user);
  }
}
