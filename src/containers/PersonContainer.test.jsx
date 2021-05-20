import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PersonContainer from './PersonContainer';
import { MemoryRouter, Route } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const personServer = setupServer(
  rest.get(
    'https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68d1',
    (req, res, ctx) => {
      return res(
        ctx.json({
          allies: ['Riley'],
          enemies: [],
          _id: '5cf5679a915ecad153ab68d1',
          photoUrl:
            'https://vignette.wikia.nocookie.net/avatar/images/c/c3/Analay.png/revision/latest?cb=20140430182201',
          name: 'Analay',
          gender: 'Female',
          eye: 'Purple',
          hair: 'Black with red highlights',
          weapon: 'Shadows',
          affiliation: 'Unnamed team',
          first: '"',
        })
      );
    }
  )
);

describe('Detail page Container Component', () => {
  beforeAll(() => personServer.listen());
  afterAll(() => personServer.close());

  it('displays a single character image and text details', async () => {
    render(
      <MemoryRouter>
        <Route path="/">
          <PersonContainer
            match={{ params: { id: '5cf5679a915ecad153ab68d1' } }}
          />
        </Route>
      </MemoryRouter>
    );

    // Testing for page loading and basic elements:
    const loading = await screen.getByText('Loading...');
    expect(loading).toMatchSnapshot();
    const figure = await screen.findByRole('figure');
    expect(figure).toMatchSnapshot();
    const heading = await screen.findByRole('heading');
    expect(heading).toMatchSnapshot();

    // Testing for rendered character detail and image:
    return waitFor(() => {
      screen.getByText('of the Unnamed team');
      screen.getByAltText('Analay');
    });
  });
});
