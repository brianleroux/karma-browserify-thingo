var echo = require('./../')

describe('testing your sanity', function() {
  
  it('better be true', function() {
    expect(true).toBe(true)
  })


  it('exists!', function() {
    expect(echo).not.toBeNull()
  })
})

