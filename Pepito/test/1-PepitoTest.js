const Pepito = artifacts.require('Pepito');
const PepitoDisguise = artifacts.require('PepitoDisguise');

contract('Pepito', async (accounts) => {

    // preparations for the global scope
    let pepitoInstance;                             // define pepitoInstance globally
    before(async() =>{
        pepitoInstance = await Pepito.deployed();   // set pepitoInstance before all tests
    })

    describe('Tests of correct contract deployment', async() => {
        it('Pepito deployed address should be different from 0', async () => {
            // test 1, retrieve an address - OK passed
            // simplest test: read a public variable
            const ownerPepito = await pepitoInstance.owner();
            assert.notEqual(ownerPepito, 0, "Pepito address cannot be 0x0");
        });

        it('Initial balance should be 10', async() => {
            // test 2, retrieve a scalar - OK passed. BTW, balance not yet useful but is a placeholder for later

            let balance = await pepitoInstance.initialBalance();
            assert.equal(balance, 10, 'Pepito`s initial balance of tokens is not 10')
        })
    })

    describe('Tests of contract logic', async() => {
        it('First createPepitoDisguise() should have disguiseCount == 1', async() => {
            // test 3, again a scaler but why do we need toNumber() to make it pass? - OK passed

            await pepitoInstance.createPepitoDisguise( {from: accounts[0] })   // after we create a disguise...
            let result = (await pepitoInstance.disguiseCount()).toNumber()    // count should be '1'
            // How can I get 'result' in a format that suits assert when comparing with '1'?
            assert.equal(result, 1, "Pepito disguiseCount is not incremented")
        })

        it('Each createPepitoDisguise() should increment disguiseCount and give a different receipt', async() => {
            // test 4, retrieve an address - OK passed
            const disguiseReceipt1 = await pepitoInstance.createPepitoDisguise( {from: accounts[0] })
            let firstCount = (await pepitoInstance.disguiseCount()).toNumber(); // should be '2' since we already created a disguise

            const disguiseReceipt2 = await pepitoInstance.createPepitoDisguise( {from: accounts[0] } ) // create another PepitoDisguise
            let secondCount = (await pepitoInstance.disguiseCount()).toNumber();     // should be '3'
            assert.equal(firstCount, 2, 'The first value of disguiseCount should be 2')
            assert.equal(firstCount+1, secondCount, 'The second value of disguiseCount is not first + 1')
            assert.notEqual(disguiseReceipt1, disguiseReceipt2, 'Receipts of 2 disguises must be different')
        })

        it('Calling toggleContractActive() should toggle the circuit breaker flag', async() => {
            // test 5, retrieve a boolean - OK passed.
            var stopped = false;
            const oldValue = stopped;

            await pepitoInstance.toggleContractActive({from: accounts[0]});     // call function 'toggle'
            stopped = await pepitoInstance.stopped();                     // should be 'true'
            assert.equal(!oldValue, stopped, "The value of stopped is not the negation of oldValue");
        })

        it('Calling readDisguise should return the same disguise as created', async() => {
            // test 6, retrieve array is OK but not retrieve from a child contract - No-OK

            // ask Pepito to create a disguise
            disguiseReceipt1 = await pepitoInstance.createPepitoDisguise( {from: accounts[0]});
            // retrieve event from the args from transaction receipt & retrieve last disguise address
            const lastEvent= await disguiseReceipt1.logs[0].args
            const disguiseCount = lastEvent.disguiseCount;
            const disguiseAddresses = lastEvent.disguiseAddresses;
            const disguiseAddress = disguiseAddresses[disguiseCount - 1];

        //--> question: how can I make sure I have the correct disguise?
            // I want the instance of the last deployed disguise, in order to call its 'readDisguise'
            let pepitoDisguiseInstance = await PepitoDisguise.deployed(PepitoDisguise.abi, disguiseAddress);

            // the test below fails because I can't yet manage to find the right syntax
            // --here 'actual" = disguiseAddress = first address in the array, but what is the 'expected' address?
            assert.equal(disguiseAddress, pepitoDisguiseInstance.address, "The address deployed is not the address created")
        })
    })
})