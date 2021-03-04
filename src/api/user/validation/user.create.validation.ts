import { IsNotEmpty, IsPhoneNumber } from "class-validator";

export class UserCreateValidation {
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public lastName: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  public phone: string;
}
