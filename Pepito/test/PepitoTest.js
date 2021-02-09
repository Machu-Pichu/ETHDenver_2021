contract('Pepito', async (accounts) => {
  it('Calling toggle() should toggle value of "stopped"', async() => {
      let stopped = false;
      let newValue = stopped;
      let instance = await Pepito.deployed()

      instance.toggle(, {from: accounts[0]})        // assume that accouns[0] is used to deploy Pepito
      let result = await instance.stopped.call() // should be 'true'

      assert.equal(!newValue, stopped, "The value of stopped should be negation of newValue.")
  })

  it('Calling createPepitoDisguise(x) should do something', async() => {
      //
  })

  it('Calling getPepitoDisguises(x) should do something', async() => {
      //
  })
})