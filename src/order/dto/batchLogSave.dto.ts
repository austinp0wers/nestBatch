import { IsNotEmpty, IsNumberString, MaxLength } from 'class-validator';
export class BatchLogSaveDto {
  constructor(jobType) {
    this.jobType = jobType;
  }
  @IsNumberString()
  @IsNotEmpty()
  @MaxLength(128)
  jobType: string;
}
