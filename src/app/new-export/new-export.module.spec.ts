import { NewExportModule } from './new-export.module';

describe('BlankPageModule', () => {
    let expensesModule: NewExportModule;

    beforeEach(() => {
        expensesModule = new NewExportModule();
    });

    it('should create an instance', () => {
        expect(expensesModule).toBeTruthy();
    });
});
