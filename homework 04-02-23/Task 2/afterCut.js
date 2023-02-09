export class SalaryAfterCuts {
    firstName;
    lastName;
    salaryAmount;
    pensionPrecentage;
    advFund;
    incomeTax;
    salaryBeforeCut;

    constructor(firstNameInput, lastNameInput, salaryAmountInput, pensionPrecentageInput, advFundInput) {
        this.firstName = firstNameInput;
        this.lastName = lastNameInput;
        this.salaryAmount = salaryAmountInput;
        this.pensionPrecentage = pensionPrecentageInput;
        this.advFund = advFundInput;
        this.salaryBeforeCut = salaryAmountInput;
        this.pensionCut();
        this.advanceFundCut();
        this.#incomeTaxCut();
        this.calculateSalary();
        this.display();
        this.saveToStorage();
    }

    pensionCut() {
        this.pensionPrecentage = this.salaryAmount * this.pensionPrecentage / 100;
    }

    advanceFundCut() {
        this.advFund = this.salaryAmount * this.advFund / 100;
    }

    #incomeTaxCut() {
        if (this.salaryAmount < 6970) {
            this.incomeTax = this.salaryAmount * 10 / 100;

        } else if (this.salaryAmount >= 6791 && this.salaryAmount < 9730) {
            this.incomeTax = this.salaryAmount * 14 / 100;

        } else if (this.salaryAmount >= 9731 && this.salaryAmount < 15620) {
            this.incomeTax = this.salaryAmount * 20 / 100;

        } else if (this.salaryAmount >= 15621 && this.salaryAmount < 21710) {
            this.incomeTax = this.salaryAmount * 31 / 100;

        } else if (this.salaryAmount >= 21711 && this.salaryAmount < 45180) {
            this.incomeTax = this.salaryAmount * 35 / 100;

        } else if (this.salaryAmount >= 45181 && this.salaryAmount < 58190) {
            this.incomeTax = this.salaryAmount * 47 / 100;

        } else if (this.salaryAmount > 58191) {
            this.incomeTax = this.salaryAmount * 50 / 100;
        }
    }

    calculateSalary() {
        this.salaryAmount = this.salaryAmount - this.pensionPrecentage - this.advFund - this.incomeTax;
    }

    display() {
        
        document.getElementById('fullName').innerText = " ";
        let nameText = document.createTextNode(`Hello ${this.firstName} ${this.lastName}  this is your salary breakdown.`);
        let nameDisplay = document.getElementById('fullName');
        nameDisplay.appendChild(nameText);

        document.getElementById('beforeTaxes').innerText = " ";
        let salaryBeforeTaxes = document.getElementById('beforeTaxes');
        let salaryText = document.createTextNode(`Salary before taxes: ${this.salaryBeforeCut}ILS`);
        salaryBeforeTaxes.appendChild(salaryText);

        document.getElementById('pensionCut').innerText = " ";
        let pensionCut = document.getElementById('pensionCut');
        let pensionText = document.createTextNode(`Pension amount is: ${this.pensionPrecentage}ILS`);
        pensionCut.appendChild(pensionText);

        document.getElementById('advFundCut').innerText = " ";
        let advFundCut = document.getElementById('advFundCut');
        let advFundText = document.createTextNode(`Education fund is: ${this.advFund}ILS`);
        advFundCut.appendChild(advFundText);
        
        document.getElementById('incomeTaxesDisplay').innerText = " ";
        let incomeTaxDisplay = document.getElementById('incomeTaxesDisplay');
        let incomeTaxDisplayText = document.createTextNode(`Income taxes are: ${this.incomeTax}ILS`);
        incomeTaxDisplay.appendChild(incomeTaxDisplayText);

        document.getElementById('totalSalary').innerText = " ";
        let totalSalaryDisplay = document.getElementById('totalSalary');
        let totalSalaryText = document.createTextNode(`Salary after taxes is: ${this.salaryAmount}ILS`)
        totalSalaryDisplay.appendChild(totalSalaryText);

    }

    saveToStorage(){
        localStorage.setItem(this.firstName+" "+this.lastName,JSON.stringify(this));
    }
}