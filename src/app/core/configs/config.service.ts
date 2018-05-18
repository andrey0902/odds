import { environment } from '../../../environments/environment';

export class ConfigService {
  public static basePath: string = environment.basePath;
  public static basePathApi: string = environment.basePathApi;
  public static socketPath: string = environment.WS;

  public static registrationPath = `${ConfigService.basePathApi}v1/users/sign_up`;
  public static confirmEmailPath = `${ConfigService.basePathApi}v1/users/confirmation`;
  public static resendConfirmationEmailPath = `${ConfigService.basePathApi}v1/users/confirmation`;
  public static signInPath = `${ConfigService.basePathApi}v1/users/sign_in`;
  public static resetPasswordPath = `${ConfigService.basePathApi}v1/users/password`;
  public static checkedAccessPath = `${ConfigService.basePathApi}v1/users/password/check_reset_token`;
  public static googlePath = `${ConfigService.basePathApi}v1/users/auth/google_oauth2/callback`;
  public static facebookPath = `${ConfigService.basePathApi}v1/users/auth/facebook/callback`;
}
