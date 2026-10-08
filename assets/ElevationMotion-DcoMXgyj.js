import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{c as t,p as n}from"./blocks-QI9uCeUh.js";import{t as r}from"./jsx-runtime-CadfrxEJ.js";import{i,r as a}from"./react-k3YPvb47.js";import{D as o,a as s,b as c,d as l,f as u,h as d,x as f,y as p}from"./iframe-BamRuqOx.js";import{a as m,r as h,t as g}from"./showcase-DC46wa29.js";function _(e){let n={a:`a`,code:`code`,h2:`h2`,p:`p`,...i(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(t,{title:`Foundations/Elevation & Motion`}),`
`,(0,y.jsx)(d,{eyebrow:`Foundations`,title:`Elevation & Motion`,children:`A flat, paper-like interface. Hairline borders separate surfaces; shadow is kept for things that genuinely sit above the page, and movement is short and small.`}),`
`,(0,y.jsx)(n.h2,{id:`shadows`,children:`Shadows`}),`
`,(0,y.jsx)(n.p,{children:`All five are ink at low opacity, so they warm into the cream rather than greying it.`}),`
`,(0,y.jsx)(f,{}),`
`,(0,y.jsx)(n.h2,{id:`focus`,children:`Focus`}),`
`,(0,y.jsx)(n.p,{children:`Keyboard focus is a 3px mint halo plus an ink border — visible on cream without shouting.\r
Click into the field to see it.`}),`
`,(0,y.jsx)(s,{children:(0,y.jsxs)(h,{children:[(0,y.jsx)(g,{label:`--focus-ring`,children:(0,y.jsx)(`input`,{className:`auth-input`,placeholder:`you@company.com`,style:{width:280}})}),(0,y.jsx)(g,{label:`--color-error-focus-ring`,children:(0,y.jsx)(`input`,{className:`auth-input auth-input--error`,defaultValue:`not-an-email`,style:{width:280,boxShadow:`var(--color-error-focus-ring)`}})})]})}),`
`,(0,y.jsx)(n.h2,{id:`motion`,children:`Motion`}),`
`,(0,y.jsx)(n.p,{children:`Hover a row to run it.`}),`
`,(0,y.jsx)(u,{}),`
`,(0,y.jsxs)(n.p,{children:[`Buttons are the one exception: they spring to `,(0,y.jsx)(n.code,{children:`scale(1.06)`}),` on hover and dip to `,(0,y.jsx)(n.code,{children:`0.94`}),` when\r
pressed, on a `,(0,y.jsx)(n.code,{children:`cubic-bezier(0.34, 1.56, 0.64, 1)`}),` overshoot. See\r
`,(0,y.jsx)(n.a,{href:`?path=/docs/foundations-buttons--docs`,children:`Buttons`}),`.`]}),`
`,(0,y.jsx)(n.h2,{id:`layers`,children:`Layers`}),`
`,(0,y.jsx)(l,{}),`
`,(0,y.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,y.jsxs)(c,{children:[(0,y.jsxs)(p,{kind:`do`,children:[`Separate resting cards with `,(0,y.jsx)(n.code,{children:`--border-light`}),`; add `,(0,y.jsx)(n.code,{children:`--shadow-card-hover`}),` only on hover or lift.`]}),(0,y.jsx)(p,{kind:`dont`,children:`Stack shadows to show hierarchy inside a card — use a hairline or a sand well.`}),(0,y.jsxs)(p,{kind:`do`,children:[`Take z-index from the `,(0,y.jsx)(n.code,{children:`--z-*`}),` scale so overlays and toasts land in the right order.`]}),(0,y.jsxs)(p,{kind:`dont`,children:[`Animate layout, or run anything longer than `,(0,y.jsx)(n.code,{children:`--transition-slow`}),` on a data surface.`]})]})]})}function v(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=r(),a(),n(),m(),o()})))()}b();export{v as default};