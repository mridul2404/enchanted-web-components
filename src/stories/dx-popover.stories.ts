import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-popover';
import { DxPopoverArrowPosition } from '../types/dx-popover';

const meta: Meta = {
  title: 'Display/dx-popover',
  component: 'dx-popover',
  tags: ['autodocs'],

  argTypes: {
    open: { control: 'boolean', description: 'Controls the popover visibility' },

    label: { control: 'text', description: 'Popover label text' },
    text: { control: 'text', description: 'Popover description text' },

    showLabel: { control: 'boolean', description: 'Show the label section' },
    showText: { control: 'boolean', description: 'Show the text section' },
    showCloseIcon: { control: 'boolean', description: 'Show close button inside popover' },

    theme: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
      description: 'Theme variant for the popover',
    },

    arrow: {
      control: { type: 'radio' },
      options: [
        DxPopoverArrowPosition.TOP,
        DxPopoverArrowPosition.BOTTOM,
        DxPopoverArrowPosition.LEFT,
        DxPopoverArrowPosition.RIGHT,
      ],
      description: 'Position of the arrow',
    },

    withpadding: {
      control: 'boolean',
      description: 'Applies internal padding to the popover content',
    },

    autoShowOnLoad: {
      control: 'boolean',
      description: 'Automatically shows the popover on component load',
    },

    disableHover: {
      control: 'boolean',
      description: 'Disables hover-based show/hide behavior',
    },
  },

  args: {
    open: false,
    label: 'Popover Title',
    text: 'This is a sample popover description.',
    showLabel: false,
    showText: false,
    showCloseIcon: false,
    theme: 'light',
    arrow: undefined,
    withpadding: false,
    autoShowOnLoad: false,
    disableHover: false,
  },

  parameters: {
    docs: {
      description: {
        component:
          'A flexible popover component with arrow positioning, show-on-load, hover control, padding, dark/light theme, and full RTL support.'
      },
    },
  },
};

export default meta;

type Story = StoryObj<{
  open: boolean;
  label: string;
  text: string;
  showLabel: boolean;
  showText: boolean;
  showCloseIcon: boolean;
  theme: 'light' | 'dark';
  arrow: DxPopoverArrowPosition | undefined;
  withpadding: boolean;
  autoShowOnLoad: boolean;
  disableHover: boolean;
}>;

export const DxPopoverStory: Story = {
  name: 'Default',

  render: (args) => html`
    <dx-popover
      ?open=${args.open}
      .label=${args.label}
      .text=${args.text}
      ?showLabel=${args.showLabel}
      ?showText=${args.showText}
      ?showCloseIcon=${args.showCloseIcon}
      .theme=${args.theme}
      .arrow=${args.arrow}
      ?withpadding=${args.withpadding}
      ?autoShowOnLoad=${args.autoShowOnLoad}
      ?disableHover=${args.disableHover}
      style="position: absolute; margin-left: 10%;"
    >
      <button slot="target" style="position: relative;">
        Hover or Click Me
      </button>
    </dx-popover>
  `,
};
