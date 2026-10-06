import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-Drno7eUL.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,r as i}from"./tokens-BOpYdSIW.js";import{n as a,r as o}from"./Icon-DrDeo3Uw.js";var s;function c(){return(c=e((()=>{s=[{icon:`sparkles`,title:`Why was this recommended?`,shortTitle:`Why was this recommended?`,description:`The evidence and thresholds behind this recommendation`,message:`Why was this recommendation made? Walk me through the evidence.`},{icon:`trending-down`,title:`How much will this save?`,shortTitle:`How much will this save?`,description:`The estimated savings and how they were worked out`,message:`How much will applying this recommendation save, and how was that estimated?`},{icon:`file-check`,title:`What are the risks of applying it?`,shortTitle:`What are the risks?`,description:`What could go wrong, and how to roll it back`,message:`What are the risks of applying this recommendation, and how would I roll it back?`}]})))()}function l({suggestion:e,variant:t,onPick:n}){let[r,i]=(0,f.useState)(!1),o=t===`page`;return(0,d.jsxs)(`button`,{type:`button`,onClick:n,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),className:o?`transition-all duration-200 hover:-translate-y-0.5`:void 0,style:{display:`flex`,alignItems:`center`,gap:o?16:12,width:`100%`,textAlign:`left`,padding:o?`16px 20px`:`10px 12px`,borderRadius:o?`var(--radius-lg)`:`var(--radius-md)`,border:`1px solid ${o&&r?`var(--atomity-green)`:`var(--border-light)`}`,background:o?`var(--atomity-white-light)`:`var(--surface-page)`,boxShadow:o?r?`0 4px 12px rgba(0,0,0,0.08)`:`0 1px 2px rgba(0,0,0,0.04)`:void 0,cursor:`pointer`},children:[(0,d.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,width:o?44:28,height:o?44:28,borderRadius:`9999px`,background:`var(--atomity-green)`},children:(0,d.jsx)(a,{name:e.icon,size:o?18:13,color:`var(--atomity-black)`})}),o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`span`,{style:{flex:1,minWidth:0},children:[(0,d.jsx)(`span`,{style:{display:`block`,fontSize:14,fontWeight:600},children:e.title}),(0,d.jsx)(`span`,{style:{display:`block`,fontSize:12,color:`var(--text-muted)`,marginTop:2},children:e.description})]}),(0,d.jsx)(a,{name:`arrow-right`,size:16})]}):(0,d.jsx)(`span`,{style:{fontFamily:`var(--font-display)`,fontSize:12,fontWeight:600,color:`var(--atomity-gray-700)`},children:e.shortTitle})]})}function u({variant:e,onPick:t,suggestions:n=s}){let i=e===`page`,a=(0,d.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:i?12:8},children:n.map(n=>(0,d.jsx)(l,{suggestion:n,variant:e,onPick:()=>t(n.message)},n.message))});return i?(0,d.jsx)(`div`,{className:`w-full h-full flex items-center justify-center`,children:(0,d.jsxs)(`div`,{className:`w-[700px] flex flex-col gap-6`,children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{className:`text-3xl font-semibold`,children:`Welcome, User!`}),(0,d.jsx)(`p`,{className:`text-sm mt-1`,style:{color:`var(--text-muted)`},children:`What's the agenda today?`})]}),a]})}):(0,d.jsxs)(`div`,{className:`flex-1 min-h-0 flex flex-col justify-center gap-4 px-3`,children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{className:`text-xl font-medium`,children:`Welcome!`}),(0,d.jsx)(`p`,{style:{fontFamily:`var(--font-display)`,fontSize:r.fsSm,color:`var(--text-muted)`,marginTop:2},children:`What's the agenda today?`})]}),a]})}var d,f;function p(){return(p=e((()=>{d=n(),f=t(),o(),i(),c(),u.__docgenInfo={description:``,methods:[],displayName:`ExplainWelcome`,props:{variant:{required:!0,tsType:{name:`union`,raw:`"page" | "rail"`,elements:[{name:`literal`,value:`"page"`},{name:`literal`,value:`"rail"`}]},description:``},onPick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(message: string) => void`,signature:{arguments:[{type:{name:`string`},name:`message`}],return:{name:`void`}}},description:`Called with the picked suggestion's message.`},suggestions:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{\r
	icon: IconName;\r
	/** The full-page card's title. */\r
	title: string;\r
	/** The rail's shorter title — its cards are one line in a ~320px column. */\r
	shortTitle: string;\r
	/** Only shown on the full-page card. */\r
	description: string;\r
	/** What is actually sent when the card is picked. */\r
	message: string;\r
}`,signature:{properties:[{key:`icon`,value:{name:`IconName`,required:!0}},{key:`title`,value:{name:`string`,required:!0},description:`The full-page card's title.`},{key:`shortTitle`,value:{name:`string`,required:!0},description:`The rail's shorter title — its cards are one line in a ~320px column.`},{key:`description`,value:{name:`string`,required:!0},description:`Only shown on the full-page card.`},{key:`message`,value:{name:`string`,required:!0},description:`What is actually sent when the card is picked.`}]}}],raw:`Suggestion[]`},description:``,defaultValue:{value:`[\r
	{\r
		icon: "sparkles",\r
		title: "Why was this recommended?",\r
		shortTitle: "Why was this recommended?",\r
		description: "The evidence and thresholds behind this recommendation",\r
		message: "Why was this recommendation made? Walk me through the evidence.",\r
	},\r
	{\r
		icon: "trending-down",\r
		title: "How much will this save?",\r
		shortTitle: "How much will this save?",\r
		description: "The estimated savings and how they were worked out",\r
		message: "How much will applying this recommendation save, and how was that estimated?",\r
	},\r
	{\r
		icon: "file-check",\r
		title: "What are the risks of applying it?",\r
		shortTitle: "What are the risks?",\r
		description: "What could go wrong, and how to roll it back",\r
		message: "What are the risks of applying this recommendation, and how would I roll it back?",\r
	},\r
]`,computed:!1}}}}})))()}var m,h,g,_,v,y;function b(){return(b=e((()=>{m=n(),p(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Module-Specific Components/Explain/Welcome`,component:u,tags:[`autodocs`],parameters:{layout:`fullscreen`},args:{variant:`page`,onPick:h()},argTypes:{variant:{control:`inline-radio`,options:[`page`,`rail`]},suggestions:{control:!1}}},_={decorators:[e=>(0,m.jsx)(`div`,{style:{height:520},children:(0,m.jsx)(e,{})})]},v={args:{variant:`rail`},decorators:[e=>(0,m.jsx)(`div`,{style:{width:320,height:420,display:`flex`,flexDirection:`column`,background:`var(--atomity-white)`},children:(0,m.jsx)(e,{})})]},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: 520
  }}>\r
        <Story />\r
      </div>]
}`,..._.parameters?.docs?.source},description:{story:`The /explain canvas's empty state.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "rail"
  },
  decorators: [Story => <div style={{
    width: 320,
    height: 420,
    display: "flex",
    flexDirection: "column",
    background: "var(--atomity-white)"
  }}>\r
        <Story />\r
      </div>]
}`,...v.parameters?.docs?.source},description:{story:`The sidebar rail's empty state, at the rail's width.`,...v.parameters?.docs?.description}}},y=[`Page`,`Rail`]})))()}b();export{_ as Page,v as Rail,y as __namedExportsOrder,g as default};