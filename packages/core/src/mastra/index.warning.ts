import type { Agent } from '../agent';
import type { Logger } from '../logger';
import type { SyncAction } from '../sync';
import type { MastraTTS } from '../tts';
import type { MastraVector } from '../vector';
import type { Workflow } from '../workflows';

import type { MastraConfig } from './index';
import { Mastra as BaseMastra } from './index';

export class Mastra<
  TSyncs extends Record<string, SyncAction<any, any, any, any>> = Record<string, SyncAction<any, any, any, any>>,
  TAgents extends Record<string, Agent<any>> = Record<string, Agent<any>>,
  TWorkflows extends Record<string, Workflow> = Record<string, Workflow>,
  TVectors extends Record<string, MastraVector> = Record<string, MastraVector>,
  TTTS extends Record<string, MastraTTS> = Record<string, MastraTTS>,
  TLogger extends Logger = Logger,
> extends BaseMastra<TSyncs, TAgents, TWorkflows, TVectors, TTTS, TLogger> {
  constructor(config?: MastraConfig<TSyncs, TAgents, TWorkflows, TVectors, TTTS, TLogger>) {
    super(config);

    this.logger.warn('Please import from "@mastra/core/mastra" instead of "@mastra/core"');
  }
}
