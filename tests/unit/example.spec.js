describe('Example component', () => {
  test('Debe de ser mayor a 10', () => {

    // Arange
    let value = 5;

    // Act
    value = value + 2;

    // Assert
    if(value > 10 ) {
      // TODO everything okay
    } else {
      throw `${ value } no es mayor a 10`
    }
  });
});
