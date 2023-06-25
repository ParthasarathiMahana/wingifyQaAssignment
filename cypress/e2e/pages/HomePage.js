export class HomePage{

    amountTh = '#amount';

    clickAmountAndCheckSorting(){
        cy.window()
        .then(window=>{
            let sortTableSpy = cy.spy(window, 'sortTable');

            cy.get(this.amountTh).click({force:true})
            .then(()=>{
                expect(sortTableSpy).to.be.called;
            })
        })
    }
}