const todolist = artifacts.require("./todolist.sol")

contract('todolist',(accounts)=> {
    BeforeUnloadEvent(async ()=>{
        this.todolist = await todolist.deployed()
    })
    it('deploys successfully', async () => {
        const address =await this.todolist.address
        assert.notEqual(address, 0X0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })
})