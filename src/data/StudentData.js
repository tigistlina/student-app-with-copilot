class StudentData {
  async getData() {
    return Promise.resolve([
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
    ]);
  }
}

export default StudentData;