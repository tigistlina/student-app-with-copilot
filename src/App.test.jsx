import App from './App';
import { fireEvent, render, act } from '@testing-library/react';

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

  test('adding a new student updates the student list', async () => {
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
      ])
    };

    const newStudent = {
      nameData: 'John',
      emailData: 'john@dev.org',
    };

    // Act
    let app;
    await act(async () => {
      app = render(<App dataProvider={dataProvider} />);
    });

    const nameInput = app.container.querySelector('input[name="fullName"]');
    const emailInput = app.container.querySelector('input[name="email"]');
    const addButton = app.container.querySelector('input[type="submit"]');

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: newStudent.nameData } });
      fireEvent.change(emailInput, { target: { value: newStudent.emailData } });
      addButton.click();
    });

    // Assert
    const studentList = app.container.querySelectorAll('div.Student');
    expect(studentList).toHaveLength(3); // Existing students + newly added student
  });

  test('toggling student presence updates the student list', async () => {
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
      ])
    };

    const studentId = 1;

    // Act
    let app;
    await act(async () => {
      app = render(<App dataProvider={dataProvider} />);
    });

    const toggleButton = app.container.querySelector(`div.Student[data-student-id="${studentId}"] button`);

    await act(async () => {
      toggleButton.click();
    });

    // Assert
    const updatedStudent = app.container.querySelector(`div.Student[data-student-id="${studentId}"]`);
    expect(updatedStudent.classList.contains('present')).toBeTruthy();
  });
});