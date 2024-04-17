import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from '@/components/Button';

const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        color: 'primary',
        label: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        color: 'secondary',
        label: 'Button',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        label: 'Button',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        label: 'Button',
    },
};
