// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Token {
    string public name = "coinA";
    string public symbol = "cA";
    uint public decimal = 18;
    uint public totalSupply = 10000 * 10 ** 18;

    mapping(address => uint) public balances;
    mapping(address => mapping(address => uint)) public allowance;

    event Transfer(address indexed from, address indexed to, uint value);
    event Approve(address indexed from, address indexed to, uint value);

    constructor(){
        // Total supply is the owner's balance
        balances[msg.sender] = totalSupply;
    }

    function balanceOf(address _address)public view returns(uint){
        return balances[_address];
    }

    function transfer(address to, uint value) public returns(bool){
        require(balanceOf(msg.sender) >= value, "Infficien funds");
        balances[to] += value;
        balances[msg.sender] -=value;
        emit Transfer(msg.sender, to ,value);
        return true;
    }

    function transferFrom(address from , address to, uint value) public returns(bool){
        require(balanceOf(from) >= value, "Infficien funds");
        // Check to see how many tokens the spender is still allowed to withdraw from the owner
        require(allowance[from][msg.sender] >= value,"Infficien funds");
        balances[to] += value;
        balances[from] -=value;
        emit Transfer(from, to ,value);
        return true;
    }

    function approve (address spender, uint value) public returns(bool) {
        allowance[msg.sender][spender] = value;
        emit Approve(msg.sender,spender,value);
        return true;
    }
}