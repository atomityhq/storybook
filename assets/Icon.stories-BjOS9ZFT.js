import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,r,t as i}from"./Icon-DrDeo3Uw.js";import{a,i as o,n as s,r as c,t as l}from"./showcase-DC46wa29.js";var u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{u=t(),r(),a(),d=Object.keys(i),f={title:`Primitives/Icon`,component:n,tags:[`autodocs`],parameters:{layout:`centered`},args:{name:`check`,size:16,color:`currentColor`,style:{}},argTypes:{name:{control:`select`,options:d,description:`Key into the curated lucide set — see the Gallery story for all of them.`},size:{control:`text`,description:"px number or any CSS length, so an icon can be sized in `em` beside text.",table:{defaultValue:{summary:`16`}}},color:{control:{type:`color`,presetColors:[{color:`#030303`,title:`Black`},{color:`#97DDB1`,title:`Green`},{color:`#7ecfa0`,title:`Green dark`},{color:`#ff6b00`,title:`Warning`},{color:`#d93025`,title:`Error`}]},description:"Any CSS colour. Left at `currentColor` an icon inherits the text colour beside it, which is what keeps it in step with its label.",table:{defaultValue:{summary:`currentColor`}}},style:{control:`object`,description:`Merged over the component's own inline styles.`,table:{category:`Styling`}}}},p={},m={args:{name:`sparkles`},argTypes:{size:{table:{disable:!0}},color:{table:{disable:!0}},style:{table:{disable:!0}}},render:({name:e})=>(0,u.jsx)(c,{children:[12,16,24,32].map(t=>(0,u.jsx)(l,{label:`${t}px`,align:`center`,children:(0,u.jsx)(n,{name:e,size:t})},t))})},h={args:{name:`shield-check`},argTypes:{size:{table:{disable:!0}},color:{table:{disable:!0}},style:{table:{disable:!0}}},render:({name:e})=>(0,u.jsx)(c,{children:[{label:`currentColor`,color:`currentColor`},{label:`green`,color:`var(--atomity-green-dark)`},{label:`warning`,color:`var(--color-warning)`},{label:`error`,color:`var(--color-error)`}].map(({label:t,color:r})=>(0,u.jsx)(l,{label:t,align:`center`,children:(0,u.jsx)(n,{name:e,size:24,color:r})},t))})},g={args:{name:`award`,size:32,style:{transform:`rotate(15deg)`,opacity:.6}}},_={parameters:{layout:`padded`,controls:{disable:!0}},render:()=>(0,u.jsx)(o,{width:840,children:(0,u.jsx)(s,{min:104,children:d.map(e=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8,padding:`12px 8px`,border:`1px solid var(--border-light)`,borderRadius:`var(--radius-md)`},children:[(0,u.jsx)(n,{name:e,size:20}),(0,u.jsx)(`span`,{style:{fontFamily:`var(--font-code)`,fontSize:10,lineHeight:1.35,color:`var(--text-muted)`,textAlign:`center`,wordBreak:`break-word`},children:e})]},e))})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: "sparkles"
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    },
    color: {
      table: {
        disable: true
      }
    },
    style: {
      table: {
        disable: true
      }
    }
  },
  render: ({
    name
  }) => <SpecimenRow>\r
      {[12, 16, 24, 32].map(size => <Specimen key={size} label={\`\${size}px\`} align="center">\r
          <Icon name={name} size={size} />\r
        </Specimen>)}\r
    </SpecimenRow>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    name: "shield-check"
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    },
    color: {
      table: {
        disable: true
      }
    },
    style: {
      table: {
        disable: true
      }
    }
  },
  render: ({
    name
  }) => <SpecimenRow>\r
      {[{
      label: "currentColor",
      color: "currentColor"
    }, {
      label: "green",
      color: "var(--atomity-green-dark)"
    }, {
      label: "warning",
      color: "var(--color-warning)"
    }, {
      label: "error",
      color: "var(--color-error)"
    }].map(({
      label,
      color
    }) => <Specimen key={label} label={label} align="center">\r
          <Icon name={name} size={24} color={color} />\r
        </Specimen>)}\r
    </SpecimenRow>
}`,...h.parameters?.docs?.source},description:{story:"`currentColor` first — the default, and the one that keeps icons in step with their label.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    name: "award",
    size: 32,
    style: {
      transform: "rotate(15deg)",
      opacity: 0.6
    }
  }
}`,...g.parameters?.docs?.source},description:{story:"`style` merges over the component's own, so transforms and opacity are available.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded",
    controls: {
      disable: true
    }
  },
  render: () => <Stage width={840}>\r
      <SpecimenGrid min={104}>\r
        {iconNames.map(name => <div key={name} style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        padding: "12px 8px",
        border: "1px solid var(--border-light)",
        borderRadius: "var(--radius-md)"
      }}>\r
            <Icon name={name} size={20} />\r
            <span style={{
          fontFamily: "var(--font-code)",
          fontSize: 10,
          lineHeight: 1.35,
          color: "var(--text-muted)",
          textAlign: "center",
          wordBreak: "break-word"
        }}>\r
              {name}\r
            </span>\r
          </div>)}\r
      </SpecimenGrid>\r
    </Stage>
}`,..._.parameters?.docs?.source},description:{story:"Every icon in the set, captioned with the name you pass to `name`.",..._.parameters?.docs?.description}}},v=[`Default`,`Sizes`,`Colors`,`CustomStyle`,`Gallery`]})))()}y();export{h as Colors,g as CustomStyle,p as Default,_ as Gallery,m as Sizes,v as __namedExportsOrder,f as default};