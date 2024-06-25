import App from './App';
import { render, act } from '@testing-library/react';

describe('App rendering', () => {
  test('expected number of students are shown', async () => {
    // Arrange
    const dataProvider = {
      getData: async () => Promise.resolve([
        {
          id: 1,
          nameData: 'Ada',
          emailData: 'ada@dev.org',
          isPresentData: false,
        },
        {
          id: 2,
          nameData: 'Soo-ah',
          emailData: 'sooah@dev.org',
          isPresentData: false,
        },
        {
          id: 3,
          nameData: 'Chrissy',
          emailData: 'chrissy@dev.org',
          isPresentData: true,
        },
      ])
    };

    // Act
    // render an app with the data provider and wait for the data to be fetched
    let app;
    await act(async () => {
      app = render(<App dataProvider={dataProvider} />);
    });

    // Assert
    // find the student list and check that it contains the expected number of students
    const studentList = app.container.querySelectorAll('div.Student');
    expect(studentList).toHaveLength(3);
  });
});