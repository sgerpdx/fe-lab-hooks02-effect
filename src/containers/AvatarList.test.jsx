import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AvatarList from './AvatarList';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import characterData from '../services/characterData.json';

const avatarServer = setupServer(
  rest.get(
    'https://last-airbender-api.herokuapp.com/api/v1/characters',
    (req, res, ctx) => {
      return res(ctx.json(characterData));
    }
  )
);

describe('Functional Container Component', () => {
  beforeAll(() => avatarServer.listen());
  afterAll(() => avatarServer.close());

  it('displays a list of Avatar characters via AvatarList', async () => {
    render(<AvatarList />);

    // Testing for page loading and basic elements:
    const loading = screen.getByText('Loading...');
    expect(loading).toMatchSnapshot();
    const list = screen.findByRole('list');
    expect(list).toMatchSnapshot();
  });

  // Testing for correct data and shape:
  return waitFor(() => {
    expect(characterData[0]).toEqual({
      _id: '5cf5679a915ecad153ab68d1',
      allies: ['Riley'],
      enemies: [],
      photoUrl:
        'https://vignette.wikia.nocookie.net/avatar/images/c/c3/Analay.png/revision/latest?cb=20140430182201',
      name: 'Analay',
      affiliation: 'Unnamed team',
    });
    screen.getByText('⚡ click on a picture for detail ⚡');
  });
});
