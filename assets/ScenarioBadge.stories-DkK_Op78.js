import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{a as n,r,t as i}from"./showcase-DC46wa29.js";function a({letter:e,tone:t,size:n=20}){let r=t===`a`;return(0,o.jsx)(`div`,{style:{width:n,height:n,borderRadius:`9999px`,flexShrink:0,background:r?`var(--atomity-green)`:`var(--atomity-gray-700)`,color:r?`var(--atomity-black)`:`var(--atomity-white)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`var(--font-code)`,fontSize:n*.5,fontWeight:700},children:e})}var o;function s(){return(s=e((()=>{o=t(),a.__docgenInfo={description:`The A/B pill that identifies a scenario card across Plan, Simulate and Compare.`,methods:[],displayName:`ScenarioBadge`,props:{letter:{required:!0,tsType:{name:`string`},description:``},tone:{required:!0,tsType:{name:`union`,raw:`"a" | "b"`,elements:[{name:`literal`,value:`"a"`},{name:`literal`,value:`"b"`}]},description:``},size:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`20`,computed:!1}}}}})))()}var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{c=t(),s(),n(),l={title:`Primitives/ScenarioBadge`,component:a,tags:[`autodocs`],parameters:{layout:`centered`},args:{letter:`A`,tone:`a`,size:20},argTypes:{letter:{control:`text`,description:`Badge glyph. A string rather than a char — the type scales to fit.`},tone:{control:`inline-radio`,options:[`a`,`b`],description:"`a` is the mint scenario, `b` the dark one. There are only ever two."},size:{control:{type:`range`,min:12,max:48,step:2},description:`Diameter in px. Font size is derived as half of it.`,table:{defaultValue:{summary:`20`}}}}},u={},d={parameters:{controls:{disable:!0}},render:()=>(0,c.jsxs)(r,{children:[(0,c.jsx)(i,{label:`tone a`,align:`center`,children:(0,c.jsx)(a,{letter:`A`,tone:`a`})}),(0,c.jsx)(i,{label:`tone b`,align:`center`,children:(0,c.jsx)(a,{letter:`B`,tone:`b`})})]})},f={args:{letter:`B`,tone:`b`}},p={argTypes:{size:{table:{disable:!0}}},render:({letter:e,tone:t})=>(0,c.jsx)(r,{children:[16,20,28,36].map(n=>(0,c.jsx)(i,{label:`${n}px`,align:`center`,children:(0,c.jsx)(a,{letter:e,tone:t,size:n})},n))})},m={args:{letter:`A1`,size:28}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <SpecimenRow>\r
      <Specimen label="tone a" align="center">\r
        <ScenarioBadge letter="A" tone="a" />\r
      </Specimen>\r
      <Specimen label="tone b" align="center">\r
        <ScenarioBadge letter="B" tone="b" />\r
      </Specimen>\r
    </SpecimenRow>
}`,...d.parameters?.docs?.source},description:{story:`Both tones together — how Plan, Simulate and Compare label a scenario pair.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    letter: "B",
    tone: "b"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  },
  render: ({
    letter,
    tone
  }) => <SpecimenRow>\r
      {[16, 20, 28, 36].map(size => <Specimen key={size} label={\`\${size}px\`} align="center">\r
          <ScenarioBadge letter={letter} tone={tone} size={size} />\r
        </Specimen>)}\r
    </SpecimenRow>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    letter: "A1",
    size: 28
  }
}`,...m.parameters?.docs?.source},description:{story:`A multi-character label still centres, though it crowds the pill below ~28px.`,...m.parameters?.docs?.description}}},h=[`Default`,`Tones`,`ScenarioB`,`Sizes`,`CustomLetter`]})))()}g();export{m as CustomLetter,u as Default,f as ScenarioB,p as Sizes,d as Tones,h as __namedExportsOrder,l as default};