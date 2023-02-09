import { SalaryAfterCuts } from "./afterCut.js";


export class SalaryBeforeCuts {
    firstName;
    lastName;
    salaryAmount;
    pensionPrecentage;
    advFund;
    constructor() {
        document.getElementById('createBtn').addEventListener('click', () => {
            this.createSalaryObject();
        });
    }

    createSalaryObject() {
        this.firstName = document.getElementById('fName').value;
        this.lastName = document.getElementById('lName').value;
        this.salaryAmount = document.getElementById('salary').value;
        this.pensionPrecentage = document.getElementById('pension').value;
        this.advFund = document.getElementById('fund').value;
        let a = new SalaryAfterCuts(this.firstName,this.lastName,this.salaryAmount,this.pensionPrecentage,this.advFund)
    }
}