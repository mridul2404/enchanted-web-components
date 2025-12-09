import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-input-textfield';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/close';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/search';

/**
 * @interface DxInputTextfieldProps
 * Props for the dx-input-textfield web component.
 *
 * @property value - The value of the textfield.
 * @property type - The input type (e.g., 'text', 'password').
 * @property label - The label for the textfield.
 * @property placeholder - The placeholder text for the textfield.
 * @property disabled - If true, disables the textfield.
 * @property clearIcon - The TemplateResult for the clear icon.
 * @property actionIcon - The TemplateResult for the action icon.
 */
export interface DxInputTextfieldProps {
  value?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  clearIcon?: unknown;
  actionIcon?: unknown;
}

const meta: Meta<DxInputTextfieldProps> = {
  title: 'Input/dx-input-textfield',
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', description: 'The value of the textfield.', table: { defaultValue: { summary: '' } } },
    type: { control: 'text', description: 'The input type (e.g., "text", "password").', table: { defaultValue: { summary: 'text' } } },
    label: { control: 'text', description: 'The label for the textfield.', table: { defaultValue: { summary: '' } } },
    placeholder: { control: 'text', description: 'The placeholder text for the textfield.', table: { defaultValue: { summary: '' } } },
    disabled: { control: 'boolean', description: 'If true, disables the textfield.', table: { defaultValue: { summary: 'false' } } },
    clearIcon: { control: false, description: 'The TemplateResult for the clear icon.', table: { defaultValue: { summary: 'TemplateResult' } } },
    actionIcon: { control: false, description: 'The TemplateResult for the action icon.', table: { defaultValue: { summary: 'TemplateResult' } } },
  },
  args: {
    value: '',
    type: 'text',
    label: 'Text Field',
    placeholder: 'Enter text',
    disabled: false,
    clearIcon: undefined,
    actionIcon: undefined,
  },
  render: (args) => {return html`
    <dx-input-textfield
      .value=${args.value}
      type="${args.type}"
      label="${args.label}"
      placeholder="${args.placeholder}"
      ?disabled=${args.disabled}
      .clearIcon=${html`<icon-close size="16" color="currentColor"></icon-close>`}
      .actionIcon=${html`<icon-search size="16" color="currentColor"></icon-search>`}
    ></dx-input-textfield>
  `;},
};

export default meta;
type Story = StoryObj<DxInputTextfieldProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {return html`
    <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
      <div>
        <div>Default</div>
        <dx-input-textfield
          label="Text Field"
          placeholder="Enter text"
        ></dx-input-textfield>
      </div>
      <div>
        <div>Disabled</div>
        <dx-input-textfield
          label="Text Field"
          value="Disabled"
          ?disabled=${true}
        ></dx-input-textfield>
      </div>
      <div>
        <div>With Placeholder</div>
        <dx-input-textfield
          label="Text Field"
          placeholder="Type here..."
        ></dx-input-textfield>
      </div>
      <div>
        <div>With Clear Icon</div>
        <dx-input-textfield
          label="Text Field"
          .clearIcon=${html`<icon-close size="16" color="currentColor"></icon-close>`}
        ></dx-input-textfield>
      </div>
      <div>
        <div>With Action Icon</div>
        <dx-input-textfield
          label="Text Field"
          .actionIcon=${html`<icon-search size="16" color="currentColor"></icon-search>`}
        ></dx-input-textfield>
      </div>
    </div>
  `;},
};
