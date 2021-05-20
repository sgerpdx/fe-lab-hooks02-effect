import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PersonContainer from './PersonContainer';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// const personServer = setupServer(
//   rest.get('URL', (req, res, ctx) => {
//     return res(ctx.json([]));
//   })
// );

describe('Detail page Container Component', () => {
  //   beforeAll(() => personServer.listen());
  //   afterAll(() => personServer.close());

  it('displays a single character image and text details', async () => {
    render(<PersonContainer />);

    screen.getByText('Loading...');

    screen.findByRole('figure');
    screen.findByRole('heading');
    screen.findByRole('image');
  });
});
