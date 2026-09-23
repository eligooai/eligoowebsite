import type { PageContent } from '../types';
import indexPage from './index-page';
import aiSalesWorkflow from './ai-sales-workflow';
import aiColdCallingWorkflow from './ai-cold-calling-workflow';
import leadGenerationWorkflow from './lead-generation-workflow';
import aiMarketingWorkflow from './ai-marketing-workflow';
import appointmentSettingWorkflow from './appointment-setting-workflow';
import aiFollowUpWorkflow from './ai-follow-up-workflow';
import aiCrmWorkflow from './ai-crm-workflow';

const pages: PageContent[] = [
  indexPage,
  aiSalesWorkflow,
  aiColdCallingWorkflow,
  leadGenerationWorkflow,
  aiMarketingWorkflow,
  appointmentSettingWorkflow,
  aiFollowUpWorkflow,
  aiCrmWorkflow,
];

export default pages;
