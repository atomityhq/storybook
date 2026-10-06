import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{c as t,p as n}from"./blocks-QI9uCeUh.js";import{t as r}from"./jsx-runtime-CadfrxEJ.js";import{i,r as a}from"./react-k3YPvb47.js";import{D as o,b as s,h as c,i as l,n as u,r as d,y as f}from"./iframe-Bcs7j9Iz.js";function p(e){let n={code:`code`,h2:`h2`,p:`p`,...i(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t,{title:`Foundations/Brand Assets`}),`
`,(0,h.jsxs)(c,{eyebrow:`Foundations`,title:`Brand Assets`,children:[`The wordmark, the app icon and the dashed grid texture — everything in `,(0,h.jsx)(n.code,{children:`public/`}),` that carries the brand, shown on the surface each one is made for.`]}),`
`,(0,h.jsx)(n.h2,{id:`wordmark`,children:`Wordmark`}),`
`,(0,h.jsx)(n.p,{children:`The A-mark and ATOMITY set as one lockup. Use the ink version on light surfaces and the white one\r
on dark, never a recoloured copy.`}),`
`,(0,h.jsxs)(u,{children:[(0,h.jsx)(d,{src:`/atomity_logo.svg`,alt:`Atomity`,width:319,height:46,displayHeight:32,surface:`light`,label:`Wordmark · ink`,children:`Cream and paper surfaces — the dashboard sidebar, the settings bar, error pages, and this Storybook's own sidebar.`}),(0,h.jsx)(d,{src:`/atomity-logo-white.svg`,alt:`Atomity`,width:319,height:46,displayHeight:32,surface:`dark`,label:`Wordmark · white`,children:`The dark brand panel beside sign-in and sign-up.`}),(0,h.jsx)(d,{src:`/atomity_logo.svg`,alt:`Atomity`,width:319,height:46,displayHeight:32,surface:`mint`,label:`Wordmark · on mint`,children:`Ink on mint measures 13:1, so the ink wordmark holds on a mint surface as well.`})]}),`
`,(0,h.jsx)(n.p,{children:`Size it by height and let the width follow, so the lockup never distorts:`}),`
`,(0,h.jsxs)(n.p,{children:[`| Where               | Height | Asset                    |\r
| ------------------- | ------ | ------------------------ |\r
| Settings top bar    | 15px   | `,(0,h.jsx)(n.code,{children:`atomity_logo.svg`}),`       |\r
| Dashboard sidebar   | 16px   | `,(0,h.jsx)(n.code,{children:`atomity_logo.svg`}),`       |\r
| Collapsed sidebar   | 20px   | `,(0,h.jsx)(n.code,{children:`atomity_logo_black.png`}),` |\r
| Sign-in brand panel | 36px   | `,(0,h.jsx)(n.code,{children:`atomity-logo-white.svg`}),` |`]}),`
`,(0,h.jsx)(n.h2,{id:`app-icon`,children:`App icon`}),`
`,(0,h.jsxs)(n.p,{children:[`The A-mark alone, for favicons and home-screen icons. The app serves the black mark to light\r
system themes and the white one to dark, switched by `,(0,h.jsx)(n.code,{children:`prefers-color-scheme`}),` in\r
`,(0,h.jsx)(n.code,{children:`src/app/layout.tsx`}),`.`]}),`
`,(0,h.jsxs)(u,{min:200,children:[(0,h.jsx)(d,{src:`/icon-black.png`,alt:`Atomity icon`,width:706,height:658,displayHeight:64,surface:`light`,label:`Icon · black`,children:`Favicon and Apple touch icon for light themes.`}),(0,h.jsx)(d,{src:`/icon-white.png`,alt:`Atomity icon`,width:1080,height:1080,displayHeight:64,surface:`dark`,label:`Icon · white`,children:`Favicon and Apple touch icon for dark themes.`}),(0,h.jsx)(d,{src:`/atomity_logo_black.png`,alt:`Atomity icon`,width:469,height:469,displayHeight:64,surface:`paper`,label:`Icon · black, square`,children:`The collapsed sidebar's mark, where the full wordmark has no room.`})]}),`
`,(0,h.jsx)(n.h2,{id:`backdrop-grid`,children:`Backdrop grid`}),`
`,(0,h.jsxs)(n.p,{children:[`A dashed square grid, 150px at desktop and scaling down with the viewport. It sits behind dark\r
brand panels and framing surfaces as texture — never behind body copy, where a dashed line reads\r
as a strikethrough. Rendered by `,(0,h.jsx)(n.code,{children:`src/components/ui/BackdropGrid.tsx`}),`.`]}),`
`,(0,h.jsx)(l,{}),`
`,(0,h.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsxs)(s,{children:[(0,h.jsxs)(f,{kind:`do`,children:[`Reference assets by their `,(0,h.jsx)(n.code,{children:`public/`}),` path so every surface shares one file.`]}),(0,h.jsx)(f,{kind:`dont`,children:`Recolour, stretch or outline the wordmark, or set ATOMITY in a font to fake it.`}),(0,h.jsxs)(f,{kind:`do`,children:[`Set a height and `,(0,h.jsx)(n.code,{children:`width: auto`}),` on the wordmark, as every placement above does.`]}),(0,h.jsx)(f,{kind:`dont`,children:`Run the backdrop grid under running text; mask it out of the middle as the billing screen does.`})]})]})}function m(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),a(),n(),o()})))()}g();export{m as default};