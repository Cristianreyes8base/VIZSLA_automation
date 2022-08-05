export class Utils{

   login(user, password, url){
     
      cy.visit(url), {timeout: 10000};
      cy.wait(15000);
      cy.get(":nth-child(1) > .MuiFormControl-root > .MuiOutlinedInput-root").type(user);//.should("be.visible");
      cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root').type(password);
      cy.get('.jss2 > :nth-child(2) > .MuiGrid-root').click(), {timeout:10000};
      cy.wait(15000)
     }



}