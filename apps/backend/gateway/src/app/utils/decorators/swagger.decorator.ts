import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export const SwaggerDoc = (
  args: {
    summary: string,
    responses: { status: number, description: string }[]
  }
) => {
  const responseDecorators = args.responses.map(res => ApiResponse({
    status: res.status, description: res.description
  }))
  return applyDecorators(
    ApiOperation({summary: args.summary}),
    ...responseDecorators
  )
}
