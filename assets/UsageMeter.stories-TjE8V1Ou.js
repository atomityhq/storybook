import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{n as t,t as n}from"./UsageMeter-jxNocVne.js";var r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Module-Specific Components/Settings/UsageMeter`,component:n,tags:[`autodocs`],parameters:{layout:`padded`},args:{quota:{tenantMonthlyTokenLimit:1e6,tenantTokensUsed:42e3},loading:!1,error:null,onRefresh:r()}},a={},o={args:{quota:{tenantMonthlyTokenLimit:1e6,tenantTokensUsed:812400}}},s={args:{quota:{tenantMonthlyTokenLimit:1e6,tenantTokensUsed:1e6}}},c={args:{quota:null,loading:!0}},l={args:{quota:null,error:{title:`Couldn't reach Atomity AI`,detail:`Check your connection and try again.`,tone:`error`,retryable:!0}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    quota: {
      tenantMonthlyTokenLimit: 1_000_000,
      tenantTokensUsed: 812_400
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`Amber past 75%.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    quota: {
      tenantMonthlyTokenLimit: 1_000_000,
      tenantTokensUsed: 1_000_000
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"What explains a `quota_exceeded` in the chat.",...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    quota: null,
    loading: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    quota: null,
    error: {
      title: "Couldn't reach Atomity AI",
      detail: "Check your connection and try again.",
      tone: "error",
      retryable: true
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`NearingLimit`,`LimitReached`,`Loading`,`Failed`]})))()}d();export{a as Default,l as Failed,s as LimitReached,c as Loading,o as NearingLimit,u as __namedExportsOrder,i as default};