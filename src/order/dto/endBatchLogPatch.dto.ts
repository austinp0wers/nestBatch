import { IsDate, IsString, MaxLength } from 'class-validator';

export class EndBatchLogPatchDto {
  constructor(id: string, status: string, completedAt: Date) {
    this.id = id;
    this.status = status;
    this.completedAt = completedAt;
  }

  @IsString()
  id: string;

  @MaxLength(50)
  status: string;

  @IsDate()
  completedAt: Date;
}
