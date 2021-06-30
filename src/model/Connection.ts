import { attribute, hashKey } from '@aws/dynamodb-data-mapper-annotations';
import { APIGatewayWebSocketRequestContext } from '../types';

/**
 * Connection established with `connection_init`
 */
export class Connection {
  /* ConnectionID */
  @hashKey({ type: 'String' })
  id: string;

  @attribute({ defaultProvider: () => new Date() })
  createdAt: Date;

  @attribute()
  requestContext: APIGatewayWebSocketRequestContext;

  @attribute()
  payload: Record<string, string>;

  @attribute({ type: 'Number' })
  expiresAt: number;
}
