describe('Example component', () => {
  test('Debe de ser mayor a 10', () => {

    // Arange
    let value = 10;

    // Act
    value = value + 2;

    // Assert
    expect( value ).toBeGreaterThan( 10 )
  });
});
