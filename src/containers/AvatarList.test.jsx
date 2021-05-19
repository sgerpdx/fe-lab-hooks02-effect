import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AvatarList from './AvatarList';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const avatarServer = setupServer(
  rest.get('URL', (req, res, ctx) => {
    return res(ctx.json([]));
  })
);

describe('Functional Container Component', () => {
  beforeAll(() => avatarServer.listen());
  afterAll(() => avatarServer.close());

  it('displays a list of Avatar characters via AvatarList', async () => {
    render(<AvatarList />);

    screen.getByText('Loading...');

    screen.findByRole('list');
  });
});
