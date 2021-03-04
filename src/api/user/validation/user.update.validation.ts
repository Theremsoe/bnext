import { IsDefined, IsPhoneNumber } from "class-validator";

export class UserUpdateValidation {
  @IsDefined()
  public name: string;

  @IsDefined()
  public lastName: string;

  @IsDefined()
  @IsPhoneNumber()
  public phone: string;
}
