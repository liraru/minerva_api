import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

// TODO: sustituir por un UsersService real conectado a la tabla `users`
@Injectable()
export class AuthService {
  constructor(private readonly _jwt: JwtService) {}

  async login(email: string, password: string) {
    // Ejemplo: aquí deberías buscar el usuario en BD y comparar el hash
    const user = await this._findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user.id, email: user.email, role: user.role };
    return { accessToken: this._jwt.sign(payload) };
  }

  private async _findUserByEmail(email: string) {
    // placeholder — implementa con tu UsersService/Repository real
    return null as any;
  }
}
