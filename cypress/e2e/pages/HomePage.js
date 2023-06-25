export class HomePage{

    amountTh = '#amount';
    functionName = 'sortTable'

    clickAmountAndCheckSorting(){
        cy.window()
        .then(window=>{
            let sortTableSpy = cy.spy(window, functionName);

            cy.get(this.amountTh).click({force:true})
            .then(()=>{
                expect(sortTableSpy).to.be.called;
            })
        })
    }
}