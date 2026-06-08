import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { fn } from "storybook/test";

import { Tbody } from "@chakra-ui/icons";
import React from "react";
import { TodoItem } from "./TodoItem";
import { Table } from "@chakra-ui/react";

const meta = {
  title: "Components/TodoItem",
  component: TodoItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    id: "23432",
    task: "ageag",
    person: "maoff",
    deadline: "2023-09-31",
    deleteTodo: fn(),
  },
} satisfies Meta<typeof TodoItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <Table>
        <Tbody>
          <Story />
        </Tbody>
      </Table>
    ),
  ],
};
