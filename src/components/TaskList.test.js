// React Testing Library and @storybook/testing-react
import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as TaskListStories from "./TaskList.stories";

const { WithPinnedTasks } = composeStories(TaskListStories);

it('renders pinned tasks at the start of the list', () => {
  const { container } = render(<WithPinnedTasks />)

  expect(
    container.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]')
  ).not.toBe(null)
})


// jest

// import React from "react";
// import ReactDOM from "react-dom";
// import '@testing-library/jest-dom/extend-expect';
// import { WithPinnedTasks } from "./TaskList.stories";

// it('renders pinned tasks at the start of the list', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<WithPinnedTasks {...WithPinnedTasks.args} />, div);

//   const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]')
//   expect(lastTaskInput).not.toBe(null)

//   ReactDOM.unmountComponentAtNode(div)
// })