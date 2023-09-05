import { ApiProperty } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

export class LineItemsDTO {
  @ApiProperty({
    example: 'price_1NmhyCBDL5bj381OVLOtBRjd',
    description: 'Preço do produto na plataforma stripe',
    type: String,
  })
  @IsNotEmpty({ message: 'Preço do produto é requerido' })
  @IsString({ message: 'Preço do produto deve ser uma string' })
  price: string;

  @ApiProperty({
    example: 5,
    description: 'Quantidade de produtos',
    type: Number,
  })
  @IsNotEmpty({ message: 'Quantidade de produtos é requerida' })
  @IsNumber({}, { message: 'Quantidade de produtos deve ser um número' })
  quantity: number;
}

export class CheckoutDTO {
  @ApiProperty({
    description: 'Lista de items a serem comprados',
    type: Array<LineItemsDTO>,
    example: [
      {
        price: 'price_1NmhyCBDL5bj381OVLOtBRjd',
        quantity: 2,
      },
    ],
  })
  @ValidateNested({ each: true })
  @Type(() => LineItemsDTO)
  @ArrayMinSize(1, { message: 'É preciso ter pelo menos um produto' })
  lineItems: LineItemsDTO[];
}
