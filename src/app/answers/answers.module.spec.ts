import { AnswersModule } from './answers.module';

describe('AnswersModule', () => {
  let answersModule: AnswersModule;

  beforeEach(() => {
    answersModule = new AnswersModule();
  });

  it('should create an instance', () => {
    expect(answersModule).toBeTruthy();
  });
});
