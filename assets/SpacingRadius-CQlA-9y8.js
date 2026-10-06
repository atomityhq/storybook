import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{c as t,p as n}from"./blocks-QI9uCeUh.js";import{t as r}from"./jsx-runtime-CadfrxEJ.js";import{i,r as a}from"./react-k3YPvb47.js";import{D as o,S as s,b as c,h as l,v as u,y as d}from"./iframe-Bcs7j9Iz.js";function f(e){let n={code:`code`,h2:`h2`,p:`p`,...i(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t,{title:`Foundations/Spacing & Radius`}),`
`,(0,m.jsxs)(l,{eyebrow:`Foundations`,title:`Spacing & Radius`,children:[`The UI kit was pixel-tuned to a fixed 1920×1080 frame. Its spacing now lives in fluid `,(0,m.jsx)(n.code,{children:`--dash-*`}),` tokens: the upper bound of each `,(0,m.jsx)(n.code,{children:`clamp()`}),` is the original design value at 1920, the lower bound the smallest that stays legible at the 1400px floor.`]}),`
`,(0,m.jsx)(n.h2,{id:`spacing`,children:`Spacing`}),`
`,(0,m.jsx)(n.p,{children:`Resize the window to watch the bars flex between their bounds.`}),`
`,(0,m.jsx)(s,{}),`
`,(0,m.jsxs)(n.p,{children:[`The dashboard itself never narrows past `,(0,m.jsx)(n.code,{children:`--dash-min-w`}),` (1400px) — below that it scrolls\r
horizontally, because the densest screens cannot render their content any narrower.`]}),`
`,(0,m.jsx)(n.h2,{id:`radius`,children:`Radius`}),`
`,(0,m.jsx)(n.p,{children:`Two families: soft rectangles for containers, and the full pill for anything you press or read\r
as a status.`}),`
`,(0,m.jsx)(u,{}),`
`,(0,m.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,m.jsxs)(c,{children:[(0,m.jsxs)(d,{kind:`do`,children:[`Pad cards with `,(0,m.jsx)(n.code,{children:`--dash-card-pad`}),` and space widgets with `,(0,m.jsx)(n.code,{children:`--dash-gap`}),`, so density holds across screen sizes.`]}),(0,m.jsx)(d,{kind:`dont`,children:`Hard-code the 1920 values. They were right for one frame and are too loose everywhere else.`}),(0,m.jsxs)(d,{kind:`do`,children:[`Use `,(0,m.jsx)(n.code,{children:`--radius-pill`}),` for buttons and chips, `,(0,m.jsx)(n.code,{children:`--radius-lg`}),` for cards and panels.`]}),(0,m.jsx)(d,{kind:`dont`,children:`Invent in-between radii — a 10px card beside a 12px one reads as a mistake.`})]})]})}function p(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=r(),a(),n(),o()})))()}h();export{p as default};