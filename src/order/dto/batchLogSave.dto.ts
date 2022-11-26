import { IsDate, IsNotEmpty, IsNumberString, MaxLength } from 'class-validator';
export class BatchLogSaveDto {
  constructor(jobType, completedAt) {
    this.jobType = jobType;
    this.completedAt = completedAt;
  }
  @IsNumberString()
  @IsNotEmpty()
  @MaxLength(128)
  jobType: string;

  @IsDate()
  completedAt: Date;
}
