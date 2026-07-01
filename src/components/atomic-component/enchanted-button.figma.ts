/* ======================================================================== *
 * Copyright 2026 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */

/**
 * Figma Code Connect — enchanted-button (Lit Web Component)
 *
 * Figma component set:
 *   https://www.figma.com/design/hSgxFly4e92zns5LJXAsNB/HCLED-Components-V3--POC?node-id=1338-465763
 *
 * ─── Figma property → Web Component attribute mapping ───────────────────────
 *
 *  Figma property   Expected values          → WC attribute     WC type
 *  ──────────────   ───────────────────────────────────────────────────────
 *  "Variant"        Contained|Outlined|Text  → variant          string
 *  "size"           Medium|Small             → size             string
 *  "disabled"       true|false               → disabled         boolean attr
 *  "Show endIcon"   true|false               → endicon          boolean attr
 *  "inversecolors"  true|false               → inversecolor     boolean attr
 *  "label"          <any string>             → buttontext       string
 *
 *  ── Properties intentionally omitted from Code Connect ───────────────────
 *  "withpadding"  — NOT modelled in Figma; layout concern for code consumers
 *                   only. Defaults to false. Add manually when needed.
 *  "imgurl"       — NOT modelled in Figma; resolved at implementation time.
 *  "icon"         — TemplateResult, not expressible in HTML parser snippets.
 *
 *  ⚠️  Code Connect HTML parser rules:
 *  - example() MUST be an implicit arrow: (props) => html`...`
 *  - NO block body { return ... }
 *  - NO PropertyAccessExpressions (ENUM.VALUE) inside the template
 *  - Only prop references and string literals allowed as placeholders
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ✅ Public export — never use internal dist paths
import figma, { html } from '@figma/code-connect/dist/html/index_html';

/** Shared consumer import statements shown in every Figma snippet */
const COMPONENT_IMPORTS = [
  "import '@hcl-software/enchanted-web-components/dist/components/atomic-component/enchanted-button';",
  "import '@hcl-software/enchanted-web-components/dist/enchanted.css';",
];

/** Reusable size enum — shared across all three variant connections */
const sizeProps = {
  size: figma.enum('size', {
    Medium: 'medium',
    Small: 'small',
  }),
};

// ─── Contained ────────────────────────────────────────────────────────────────
figma.connect(
  'https://www.figma.com/design/hSgxFly4e92zns5LJXAsNB/HCLED-Components-V3--POC?node-id=1338-465763',
  {
    variant: { variant: 'contained' },
    props: {
      ...sizeProps,
      disabled: figma.boolean('disabled'),
      inversecolor: figma.boolean('inversecolors'),
      // withpadding intentionally omitted — not in Figma (defaults to false)
      endicon: figma.boolean('Show endIcon'),
      buttontext: figma.string('label'),
    },
    // ✅ Implicit arrow — NO { return ... } block body
    example: ({ size, disabled, inversecolor, endicon, buttontext }) => {return html`
      <enchanted-button
        variant="contained"
        size="${size}"
        buttontext="${buttontext}"
        ?disabled="${disabled}"
        ?inversecolor="${inversecolor}"
        ?endicon="${endicon}"
      ></enchanted-button>
    `;},
    imports: COMPONENT_IMPORTS,
  },
);

// ─── Outlined ─────────────────────────────────────────────────────────────────
figma.connect(
  'https://www.figma.com/design/hSgxFly4e92zns5LJXAsNB/HCLED-Components-V3--POC?node-id=1338-465763',
  {
    variant: { variant: 'outlined' },
    props: {
      ...sizeProps,
      disabled: figma.boolean('disabled'),
      // withpadding intentionally omitted — not in Figma (defaults to false)
      endicon: figma.boolean('Show endIcon'),
      buttontext: figma.string('label'),
    },
    // ✅ Implicit arrow — NO { return ... } block body
    example: ({ size, disabled, endicon, buttontext }) => {return html`
      <enchanted-button
        variant="outlined"
        size="${size}"
        buttontext="${buttontext}"
        ?disabled="${disabled}"
        ?endicon="${endicon}"
      ></enchanted-button>
    `;},
    imports: COMPONENT_IMPORTS,
  },
);

// ─── Text ─────────────────────────────────────────────────────────────────────
figma.connect(
  'https://www.figma.com/design/hSgxFly4e92zns5LJXAsNB/HCLED-Components-V3--POC?node-id=1338-465763',
  {
    variant: { variant: 'text' },
    props: {
      ...sizeProps,
      disabled: figma.boolean('disabled'),
      inversecolor: figma.boolean('inversecolors'),
      // withpadding intentionally omitted — not in Figma (defaults to false)
      endicon: figma.boolean('Show endIcon'),
      buttontext: figma.string('label'),
    },
    // ✅ Implicit arrow — NO { return ... } block body
    example: ({ size, disabled, inversecolor, endicon, buttontext }) => {return html`
      <enchanted-button
        variant="text"
        size="${size}"
        buttontext="${buttontext}"
        ?disabled="${disabled}"
        ?inversecolor="${inversecolor}"
        ?endicon="${endicon}"
      ></enchanted-button>
    `;},
    imports: COMPONENT_IMPORTS,
  },
);