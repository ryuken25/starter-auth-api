import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class UsersController {
  @UseGuards(AuthGuard('jwt'))   // hanya token valid yang bisa akses
  @Get('me')
  getMe(@Req() req: any) {
    return req.user;  // hasil dari JwtStrategy.validate()
  }
}
