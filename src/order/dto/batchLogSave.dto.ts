import { IsNotEmpty, IsNumberString, Max, MaxLength } from 'class-validator';

export class BatchLogSaveDto {
  @IsNumberString()
  @IsNotEmpty()
  @MaxLength(128)
  batchType: string;

  @IsNumberString()
  @IsNotEmpty()
  @MaxLength(128)
  status: string;
}
