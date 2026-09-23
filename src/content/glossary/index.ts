import type { PageContent } from '../types';
import indexPage from './index-page';
import aiAgent from './ai-agent';
import aiEmployee from './ai-employee';
import aiWorkforce from './ai-workforce';
import aiSdr from './ai-sdr';
import aiVoiceAgent from './ai-voice-agent';
import aiColdCalling from './ai-cold-calling';
import aiOutboundSales from './ai-outbound-sales';
import agenticAi from './agentic-ai';
import multiAgentSystem from './multi-agent-system';
import aiAutomation from './ai-automation';
import aiOrchestration from './ai-orchestration';
import aiRevenueOperations from './ai-revenue-operations';

const pages: PageContent[] = [
  indexPage,
  aiAgent,
  aiEmployee,
  aiWorkforce,
  aiSdr,
  aiVoiceAgent,
  aiColdCalling,
  aiOutboundSales,
  agenticAi,
  multiAgentSystem,
  aiAutomation,
  aiOrchestration,
  aiRevenueOperations,
];

export default pages;
