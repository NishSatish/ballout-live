import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { RolePoliciesService } from '@ballout/libs/role-policies/src/lib/role-policies.service';
import { RolePoliciesModule } from '@ballout/role-policies';
import { AuthGuard } from './utils/guards/auth.guard';
import { PermissionGuard } from './utils/guards/permission.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    RolePoliciesModule,
    AuthenticationModule,
    OrganizationsModule ],
  controllers: [AppController],
  providers: [
    AppService,
    JwtService,
    RolePoliciesService,
    AuthGuard,
    PermissionGuard,
  ],
})
export class AppModule {}
