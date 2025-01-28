import { MetricResult } from '@mastra/core/eval';

export interface MetricResultWithReason extends MetricResult {
  info: {
    reason: string;
  };
}
