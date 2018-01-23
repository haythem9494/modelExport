import { ExpensesModule } from './expenses.module';

describe('BlankPageModule', () => {
    let expensesModule: ExpensesModule;

    beforeEach(() => {
        expensesModule = new ExpensesModule();
    });

    it('should create an instance', () => {
        expect(expensesModule).toBeTruthy();
    });
});
